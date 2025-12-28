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

const SYNC_THRESHOLD = 0.1;
const VOLUME_BAR_COLOR = "#22c55e";

const formatTime = (seconds: number): string => {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const clampVolume = (value: number): number => {
  return Math.max(0, Math.min(1, value));
};

const calculateVolumeFromPosition = (clientX: number, rect: DOMRect): number => {
  const x = clientX - rect.left;
  return clampVolume(x / rect.width);
};

const shouldTrackPlay = (
  index: number,
  state: StemState,
  soloedStems: Set<number>,
  allStates: StemState[]
): boolean => {
  const isSoloed = soloedStems.has(index) && !state.isMuted;
  const hasAnyActiveSoloed = Array.from(soloedStems).some(
    (i) => !allStates[i]?.isMuted
  );
  return hasAnyActiveSoloed ? isSoloed : !state.isMuted;
};

const updateAudioElement = (
  audio: HTMLAudioElement,
  state: StemState,
  shouldPlay: boolean
): void => {
  if (shouldPlay) {
    audio.muted = false;
    audio.volume = state.volume;
  } else {
    audio.muted = true;
    audio.volume = 0;
  }
};

interface MasterControlsProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  allStemsMuted: boolean;
  onTogglePlay: () => void;
  onSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMuteAll: () => void;
}

const MasterControls = ({
  isPlaying,
  currentTime,
  duration,
  allStemsMuted,
  onTogglePlay,
  onSeek,
  onMuteAll,
}: MasterControlsProps) => {
  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4 pb-4 border-b-2 border-black">
      <button
        onClick={onTogglePlay}
        className={cn(
          "w-12 h-12 shrink-0 flex items-center justify-center",
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
            onChange={onSeek}
            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
            style={{
              background: `linear-gradient(to right, black 0%, black ${progressPercent}%, #e5e7eb ${progressPercent}%, #e5e7eb 100%)`,
            }}
          />
          <div className="text-sm text-gray-600 min-w-[80px] text-right shrink-0">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>

      <button
        onClick={onMuteAll}
        className={cn(
          "px-4 py-2 shrink-0",
          "border-2 border-black rounded-base",
          allStemsMuted
            ? "bg-green-600 hover:bg-green-700"
            : "bg-red-600 hover:bg-red-700",
          "text-white font-bold text-sm transition-all cursor-pointer",
          "self-start sm:self-auto"
        )}
        aria-label={allStemsMuted ? "Unmute All" : "Mute All"}
      >
        {allStemsMuted ? "Unmute All" : "Mute All"}
      </button>
    </div>
  );
};

interface StemControlProps {
  stem: Stem;
  state: StemState;
  isSoloed: boolean;
  isDragging: boolean;
  audioRef: (el: HTMLAudioElement | null) => void;
  volumeControlRef: (el: HTMLDivElement | null) => void;
  onToggleMute: () => void;
  onToggleSolo: () => void;
  onVolumeMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const StemControl = ({
  stem,
  state,
  isSoloed,
  isDragging,
  audioRef,
  volumeControlRef,
  onToggleMute,
  onToggleSolo,
  onVolumeMouseDown,
}: StemControlProps) => {
  return (
    <div className="border-2 border-black rounded-base bg-gray-50 p-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="font-semibold text-base flex-1">{stem.title}</div>

        <button
          onClick={onToggleMute}
          className={cn(
            "w-8 h-8 shrink-0 flex items-center justify-center",
            "border-2 border-black rounded-base",
            "font-bold text-lg transition-all cursor-pointer",
            state.isMuted
              ? "bg-yellow-500 hover:bg-yellow-600 text-black"
              : "bg-white hover:bg-black hover:text-white"
          )}
          aria-label={state.isMuted ? "Unmute" : "Mute"}
        >
          M
        </button>

        <button
          onClick={onToggleSolo}
          className={cn(
            "w-8 h-8 shrink-0 flex items-center justify-center",
            "border-2 border-black rounded-base",
            "font-bold text-sm transition-all cursor-pointer",
            isSoloed
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-white hover:bg-black hover:text-white"
          )}
          aria-label={isSoloed ? "Unsolo" : "Solo"}
        >
          S
        </button>
      </div>

      <div className="flex items-center gap-2">
        <div
          ref={volumeControlRef}
          onMouseDown={onVolumeMouseDown}
          className={cn(
            "flex-1 relative h-12 border-2 border-black rounded-base",
            "bg-gray-100 overflow-hidden cursor-pointer",
            isDragging && "cursor-grabbing"
          )}
        >
          <audio ref={audioRef} src={stem.src} preload="auto" />
          <div
            className="absolute left-0 bottom-0 h-full z-0"
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
};

function MultiStemAudioPlayer({ stems, className }: MultiStemAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [soloedStems, setSoloedStems] = React.useState<Set<number>>(new Set());
  const [draggingIndex, setDraggingIndex] = React.useState<number | null>(null);

  const audioRefs = React.useRef<(HTMLAudioElement | null)[]>([]);
  const volumeControlRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const originalMuteStatesRef = React.useRef<boolean[]>([]);
  const stemStatesRef = React.useRef<StemState[]>([]);

  const [stemStates, setStemStates] = React.useState<StemState[]>(
    stems.map(() => ({
      volume: 1,
      isMuted: false,
    }))
  );

  React.useEffect(() => {
    audioRefs.current = audioRefs.current.slice(0, stems.length);
    volumeControlRefs.current = volumeControlRefs.current.slice(0, stems.length);
  }, [stems.length]);

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

  const updateAudioVolumes = React.useCallback(() => {
    audioRefs.current.forEach((audio, index) => {
      if (!audio) return;

      const state = stemStates[index];
      const shouldPlay = shouldTrackPlay(index, state, soloedStems, stemStates);
      updateAudioElement(audio, state, shouldPlay);
    });
  }, [stemStates, soloedStems]);

  React.useEffect(() => {
    stemStatesRef.current = stemStates;
  }, [stemStates]);

  React.useEffect(() => {
    updateAudioVolumes();
  }, [updateAudioVolumes]);

  React.useEffect(() => {
    if (draggingIndex === null) return;

    const handleMouseMove = (e: MouseEvent) => {
      const controlElement = volumeControlRefs.current[draggingIndex];
      if (!controlElement) return;

      const rect = controlElement.getBoundingClientRect();
      const volume = calculateVolumeFromPosition(e.clientX, rect);
      const newMuted = volume === 0;

      setStemStates((prev) => {
        const newStates = [...prev];
        newStates[draggingIndex] = {
          ...newStates[draggingIndex],
          volume,
          isMuted: newMuted,
        };

        const audio = audioRefs.current[draggingIndex];
        if (audio) {
          const state = newStates[draggingIndex];
          const shouldPlay = shouldTrackPlay(
            draggingIndex,
            state,
            soloedStems,
            newStates
          );
          updateAudioElement(audio, state, shouldPlay);
        }

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
  }, [draggingIndex, soloedStems]);

  const togglePlay = async () => {
    const audioElements = audioRefs.current.filter(
      (audio): audio is HTMLAudioElement => audio !== null && audio.src !== ""
    );

    if (audioElements.length === 0) return;

    if (isPlaying) {
      audioElements.forEach((audio) => audio.pause());
      setIsPlaying(false);
    } else {
      audioElements.forEach((audio) => {
        if (!isNaN(audio.duration)) {
          audio.currentTime = Math.min(currentTime, audio.duration);
        }
      });

      try {
        const playPromises = audioElements.map((audio) =>
          audio.play().catch(() => {})
        );
        await Promise.allSettled(playPromises);
        setIsPlaying(true);
      } catch {
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
        volume: newMuted ? 0 : newStates[index].volume || 1,
      };

      if (newMuted && soloedStems.has(index)) {
        setSoloedStems((prevSoloed) => {
          const newSoloedStems = new Set(prevSoloed);
          newSoloedStems.delete(index);

          if (newSoloedStems.size === 0 && prevSoloed.size > 0) {
            setStemStates((prevStates) => {
              return prevStates.map((state, i) => ({
                ...state,
                isMuted: originalMuteStatesRef.current[i] ?? state.isMuted,
              }));
            });
          }

          return newSoloedStems;
        });
      }

      if (soloedStems.size > 0) {
        originalMuteStatesRef.current[index] = newMuted;
      }

      const audio = audioRefs.current[index];
      if (audio) {
        const state = newStates[index];
        const shouldPlay = shouldTrackPlay(index, state, soloedStems, newStates);
        updateAudioElement(audio, state, shouldPlay);
      }

      return newStates;
    });
  };

  const toggleSolo = (index: number) => {
    setSoloedStems((prev) => {
      const wasSoloing = prev.size > 0;
      const newSoloedStems = new Set(prev);

      if (newSoloedStems.has(index)) {
        newSoloedStems.delete(index);
      } else {
        if (!wasSoloing) {
          originalMuteStatesRef.current = stemStates.map(
            (state) => state.isMuted
          );
        }
        newSoloedStems.add(index);
      }

      const isNowSoloing = newSoloedStems.size > 0;

      if (isNowSoloing) {
        setStemStates((prevStates) => {
          const updatedStates = prevStates.map((state, i) => {
            const isSoloed = newSoloedStems.has(i);
            return {
              ...state,
              isMuted: !isSoloed,
              volume: isSoloed ? state.volume || 1 : state.volume,
            };
          });

          stemStatesRef.current = updatedStates;

          audioRefs.current.forEach((audio, i) => {
            if (!audio) return;
            const updatedState = updatedStates[i];
            const isSoloed = newSoloedStems.has(i);

            if (isSoloed) {
              audio.muted = false;
              audio.volume = updatedState.volume;
            } else {
              audio.muted = true;
              audio.volume = 0;
            }
          });

          return updatedStates;
        });
      } else if (wasSoloing && !isNowSoloing) {
        setStemStates((prevStates) => {
          const restoredStates = prevStates.map((state, i) => ({
            ...state,
            isMuted: originalMuteStatesRef.current[i] ?? state.isMuted,
          }));

          audioRefs.current.forEach((audio, i) => {
            if (!audio) return;
            const restoredState = restoredStates[i];
            updateAudioElement(audio, restoredState, !restoredState.isMuted);
          });

          return restoredStates;
        });
      }

      return newSoloedStems;
    });
  };

  const muteAll = () => {
    setStemStates((prev) => {
      const allMuted = prev.every((state) => state.isMuted);

      if (allMuted) {
        const newStates = prev.map((state) => ({
          ...state,
          isMuted: false,
          volume: state.volume > 0 ? state.volume : 1,
        }));

        audioRefs.current.forEach((audio, index) => {
          if (audio) {
            audio.muted = false;
            audio.volume = newStates[index].volume;
          }
        });

        return newStates;
      } else {
        audioRefs.current.forEach((audio) => {
          if (audio) {
            audio.muted = true;
            audio.volume = 0;
          }
        });

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
      const newMuted = volume === 0;
      newStates[index] = {
        ...newStates[index],
        volume,
        isMuted: newMuted,
      };

      const audio = audioRefs.current[index];
      if (audio) {
        const state = newStates[index];
        const shouldPlay = shouldTrackPlay(index, state, soloedStems, newStates);
        updateAudioElement(audio, state, shouldPlay);
      }

      return newStates;
    });
  };

  const allStemsMuted = stemStates.every((state) => state.isMuted);

  return (
    <div className={cn("border-2 border-black rounded-base bg-white p-4", className)}>
      <MasterControls
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        allStemsMuted={allStemsMuted}
        onTogglePlay={togglePlay}
        onSeek={handleSeek}
        onMuteAll={muteAll}
      />

      <div className="space-y-3">
        {stems.map((stem, index) => (
          <StemControl
            key={`${stem.title}-${index}`}
            stem={stem}
            state={stemStates[index]}
            isSoloed={soloedStems.has(index)}
            isDragging={draggingIndex === index}
            audioRef={(el) => {
              audioRefs.current[index] = el;
            }}
            volumeControlRef={(el) => {
              volumeControlRefs.current[index] = el;
            }}
            onToggleMute={() => toggleMute(index)}
            onToggleSolo={() => toggleSolo(index)}
            onVolumeMouseDown={(e) => handleVolumeMouseDown(index, e)}
          />
        ))}
      </div>
    </div>
  );
}

export { MultiStemAudioPlayer };
