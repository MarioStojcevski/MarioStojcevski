import * as React from "react";
import { cn } from "@/lib/utils";

interface Stem {
  title: string;
  src: string;
}

interface MultiStemAudioPlayerProps {
  stems: Stem[];
  className?: string;
}

interface StemState {
  volume: number;
  isMuted: boolean;
}

const SYNC_THRESHOLD = 0.1; // seconds
const VOLUME_BAR_COLOR = "#4ade80";

/**
 * Formats seconds into MM:SS format
 */
const formatTime = (seconds: number): string => {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

/**
 * Clamps a value between 0 and 1
 */
const clampVolume = (value: number): number => {
  return Math.max(0, Math.min(1, value));
};

/**
 * Calculates volume percentage from mouse position within a container
 */
const calculateVolumeFromPosition = (
  clientX: number,
  rect: DOMRect
): number => {
  const x = clientX - rect.left;
  return clampVolume(x / rect.width);
};

function MultiStemAudioPlayer({ stems, className }: MultiStemAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [soloedStem, setSoloedStem] = React.useState<number | null>(null);
  const [draggingIndex, setDraggingIndex] = React.useState<number | null>(null);
  
  const audioRefs = React.useRef<(HTMLAudioElement | null)[]>([]);
  const volumeControlRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  
  const [stemStates, setStemStates] = React.useState<StemState[]>(
    stems.map(() => ({
      volume: 1,
      isMuted: false,
    }))
  );

  // Initialize refs arrays when stems change
  React.useEffect(() => {
    audioRefs.current = audioRefs.current.slice(0, stems.length);
    volumeControlRefs.current = volumeControlRefs.current.slice(0, stems.length);
  }, [stems.length]);

  // Sync all audio elements and handle playback state
  React.useEffect(() => {
    const audioElements = audioRefs.current.filter(
      (audio): audio is HTMLAudioElement => audio !== null
    );
    
    if (audioElements.length === 0) return;

    const updateTime = () => {
      const firstAudio = audioElements[0];
      if (!firstAudio) return;
      
      const time = firstAudio.currentTime;
      setCurrentTime(time);
      
      // Sync other audio elements if they drift too far
      audioElements.forEach((audio, index) => {
        if (index > 0 && Math.abs(audio.currentTime - time) > SYNC_THRESHOLD) {
          audio.currentTime = time;
        }
      });
    };

    const updateDuration = () => {
      const firstAudio = audioElements[0];
      if (firstAudio?.duration) {
        setDuration(firstAudio.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audioElements.forEach((audio) => {
      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", updateDuration);
      audio.addEventListener("ended", handleEnded);
    });

    return () => {
      audioElements.forEach((audio) => {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("loadedmetadata", updateDuration);
        audio.removeEventListener("ended", handleEnded);
      });
    };
  }, [stems.length]);

  // Update audio volumes based on mute/solo states
  React.useEffect(() => {
    audioRefs.current.forEach((audio, index) => {
      if (!audio) return;
      
      const state = stemStates[index];
      const isSoloed = soloedStem !== null && soloedStem !== index;
      const shouldPlay = !state.isMuted && !isSoloed && 
        (soloedStem === null || soloedStem === index);
      
      audio.volume = shouldPlay ? state.volume : 0;
    });
  }, [stemStates, soloedStem]);

  // Handle mouse drag for volume control
  React.useEffect(() => {
    if (draggingIndex === null) return;

    const handleMouseMove = (e: MouseEvent) => {
      const controlElement = volumeControlRefs.current[draggingIndex];
      if (!controlElement) return;
      
      const rect = controlElement.getBoundingClientRect();
      const volume = calculateVolumeFromPosition(e.clientX, rect);
      
      setStemStates((prev) => {
        const newStates = [...prev];
        newStates[draggingIndex] = {
          ...newStates[draggingIndex],
          volume,
          isMuted: volume === 0,
        };
        return newStates;
      });
    };

    const handleMouseUp = () => {
      setDraggingIndex(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingIndex]);

  const togglePlay = async () => {
    const audioElements = audioRefs.current.filter(
      (audio): audio is HTMLAudioElement => audio !== null && audio.src
    );
    
    if (audioElements.length === 0) {
      return;
    }
    
    if (isPlaying) {
      audioElements.forEach((audio) => audio.pause());
      setIsPlaying(false);
    } else {
      // Set current time for all elements
      audioElements.forEach((audio) => {
        if (!isNaN(audio.duration)) {
          audio.currentTime = Math.min(currentTime, audio.duration);
        }
      });
      
      // Play all audio elements
      try {
        const playPromises = audioElements.map((audio) => {
          return audio.play().catch(() => {
            // Individual audio play failed, but continue with others
          });
        });
        
        await Promise.allSettled(playPromises);
        setIsPlaying(true);
      } catch (error) {
        // If all fail, still set playing state
        setIsPlaying(true);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    const audioElements = audioRefs.current.filter(
      (audio): audio is HTMLAudioElement => audio !== null
    );
    
    audioElements.forEach((audio) => {
      audio.currentTime = newTime;
    });
    setCurrentTime(newTime);
  };

  const toggleMute = (index: number) => {
    setStemStates((prev) => {
      const newStates = [...prev];
      const newMuted = !newStates[index].isMuted;
      newStates[index] = {
        ...newStates[index],
        isMuted: newMuted,
        volume: newMuted ? 0 : (newStates[index].volume || 1),
      };
      return newStates;
    });
  };

  const toggleSolo = (index: number) => {
    setSoloedStem((prev) => (prev === index ? null : index));
  };

  const muteAll = () => {
    setStemStates((prev) => {
      const allMuted = prev.every((state) => state.isMuted);
      
      if (allMuted) {
        // Unmute all - restore previous volumes or set to 1
        return prev.map((state) => ({
          ...state,
          isMuted: false,
          volume: state.volume > 0 ? state.volume : 1,
        }));
      } else {
        // Mute all
        return prev.map((state) => ({
          ...state,
          isMuted: true,
          volume: 0,
        }));
      }
    });
  };

  const handleVolumeMouseDown = (
    index: number,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    setDraggingIndex(index);
    
    const controlElement = volumeControlRefs.current[index];
    if (!controlElement) return;
    
    const rect = controlElement.getBoundingClientRect();
    const volume = calculateVolumeFromPosition(e.clientX, rect);
    
    setStemStates((prev) => {
      const newStates = [...prev];
      newStates[index] = {
        ...newStates[index],
        volume,
        isMuted: volume === 0,
      };
      return newStates;
    });
  };

  const allStemsMuted = stemStates.every((state) => state.isMuted);

  return (
    <div className={cn("border-2 border-black rounded-base bg-white p-4", className)}>
      {/* Master Controls */}
      <div className="flex items-center gap-4 mb-4 pb-4 border-b-2 border-black">
        <button
          onClick={togglePlay}
          className={cn(
            "w-12 h-12 flex-shrink-0 flex items-center justify-center",
            "border-2 border-black rounded-base",
            "bg-main hover:bg-black hover:text-white",
            "font-bold text-xl transition-all cursor-pointer"
          )}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>

        <div className="flex-1 min-w-0">
          <div className="font-semibold text-lg mb-2">Master Playback</div>
          
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
              style={{
                background: `linear-gradient(to right, black 0%, black ${
                  duration ? (currentTime / duration) * 100 : 0
                }%, #e5e7eb ${
                  duration ? (currentTime / duration) * 100 : 0
                }%, #e5e7eb 100%)`,
              }}
            />
            <div className="text-sm text-gray-600 min-w-[80px] text-right">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>

        <button
          onClick={muteAll}
          className={cn(
            "px-4 py-2 flex-shrink-0",
            "border-2 border-black rounded-base",
            allStemsMuted
              ? "bg-green-500 hover:bg-green-600"
              : "bg-red-500 hover:bg-red-600",
            "text-white font-bold text-sm transition-all cursor-pointer"
          )}
          aria-label={allStemsMuted ? "Unmute All" : "Mute All"}
        >
          {allStemsMuted ? "Unmute All" : "Mute All"}
        </button>
      </div>

      {/* Stems */}
      <div className="space-y-3">
        {stems.map((stem, index) => {
          const state = stemStates[index];
          const isSoloed = soloedStem === index;
          const isMuted = state.isMuted || (soloedStem !== null && soloedStem !== index);
          
          return (
            <div
              key={`${stem.title}-${index}`}
              className="border-2 border-black rounded-base bg-gray-50 p-3"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="font-semibold text-base flex-1">{stem.title}</div>
                
                <button
                  onClick={() => toggleMute(index)}
                  className={cn(
                    "w-8 h-8 flex-shrink-0 flex items-center justify-center",
                    "border-2 border-black rounded-base",
                    "bg-white hover:bg-black hover:text-white",
                    "font-bold text-sm transition-all cursor-pointer",
                    isMuted && "bg-black text-white"
                  )}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? "🔇" : "🔊"}
                </button>
                
                <button
                  onClick={() => toggleSolo(index)}
                  className={cn(
                    "w-8 h-8 flex-shrink-0 flex items-center justify-center",
                    "border-2 border-black rounded-base",
                    "bg-white hover:bg-black hover:text-white",
                    "font-bold text-sm transition-all cursor-pointer",
                    isSoloed && "bg-yellow-400 text-black"
                  )}
                  aria-label={isSoloed ? "Unsolo" : "Solo"}
                >
                  S
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div
                  ref={(el) => {
                    volumeControlRefs.current[index] = el;
                  }}
                  onMouseDown={(e) => handleVolumeMouseDown(index, e)}
                  className={cn(
                    "flex-1 relative h-12 border-2 border-black rounded-base",
                    "bg-gray-100 overflow-hidden cursor-pointer",
                    draggingIndex === index && "cursor-grabbing"
                  )}
                >
                  <audio
                    ref={(el) => {
                      audioRefs.current[index] = el;
                    }}
                    src={stem.src}
                    preload="auto"
                  />
                  
                  {/* Volume Bar */}
                  <div
                    className="absolute left-0 bottom-0 h-full z-0 transition-all duration-150"
                    style={{
                      width: `${state.volume * 100}%`,
                      background: VOLUME_BAR_COLOR,
                    }}
                  />
                </div>
                
                <div className="text-sm text-gray-600 min-w-[60px] text-right">
                  {Math.round(state.volume * 100)}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { MultiStemAudioPlayer };
