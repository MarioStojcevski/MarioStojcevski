import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { tracks, parkingStems } from "@/constants/music";
import type { Track } from "@/constants/music";
import { cn } from "@/lib/utils";

export default function Music() {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showStemView, setShowStemView] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (selectedTrack && audioRef.current && selectedTrack.src) {
      audioRef.current.src = selectedTrack.src;
    }
  }, [selectedTrack]);

  const handlePlayPause = () => {
    if (!audioRef.current || !selectedTrack) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTrackSelect = (track: Track) => {
    setSelectedTrack(track);
    setIsPlaying(false);
    setShowStemView(track.hasStems);
  };

  return (
    <Layout>
      <audio ref={audioRef} />

      <ScrollReveal>
        <motion.h1
          className="text-5xl lg:text-7xl font-heading mb-4"
          style={{ rotate: 1 }}
          whileHover={{ rotate: 0 }}
        >
          Music
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-12">
          Audio engineering and music production. Boom bap hip hop and experimental electronic.
        </p>
      </ScrollReveal>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Track List */}
        <div className="lg:col-span-1">
          <ScrollReveal>
            <Card className="bg-chart-1">
              <CardContent className="pt-6 pb-6">
                <h2 className="text-2xl font-heading mb-4">Library</h2>
                <div className="space-y-2">
                  {tracks.map((track) => (
                    <motion.button
                      key={track.id}
                      onClick={() => handleTrackSelect(track)}
                      className={cn(
                        "w-full flex items-center justify-between p-3 border-4 border-black text-left transition-all duration-150 cursor-pointer",
                        selectedTrack?.id === track.id
                          ? "bg-black text-white"
                          : "bg-white text-black hover:bg-black hover:text-white"
                      )}
                      whileHover={{ x: [0, 4, -2, 3, 0], rotate: [0, 1, -1, 0.5, 0] }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-sm w-6">{track.id}</span>
                        <div>
                          <div className="font-bold text-sm">{track.title}</div>
                          <div className="text-xs opacity-70">{track.artist}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {track.hasStems && (
                          <span className="text-xs border-2 border-current px-1 py-0.5 font-bold">STEMS</span>
                        )}
                        <span className="text-xs opacity-70">{track.duration}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Player / Stem View */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {selectedTrack ? (
              <motion.div
                key={selectedTrack.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {showStemView && selectedTrack.hasStems ? (
                  <StemPlayer
                    track={selectedTrack}
                    stems={parkingStems}
                    isPlaying={isPlaying}
                    onPlayPause={handlePlayPause}
                    onClose={() => setShowStemView(false)}
                  />
                ) : (
                  <TrackPlayer
                    track={selectedTrack}
                    isPlaying={isPlaying}
                    onPlayPause={handlePlayPause}
                    onViewStems={selectedTrack.hasStems ? () => setShowStemView(true) : undefined}
                  />
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Card className="bg-chart-5">
                  <CardContent className="pt-12 pb-12 flex flex-col items-center justify-center text-center">
                    <div className="text-6xl mb-4">♫</div>
                    <h2 className="text-3xl font-heading mb-2">Select a Track</h2>
                    <p className="text-lg opacity-80">Choose a song from the library to start listening</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
}

function TrackPlayer({
  track,
  isPlaying,
  onPlayPause,
  onViewStems,
}: {
  track: Track;
  isPlaying: boolean;
  onPlayPause: () => void;
  onViewStems?: () => void;
}) {
  return (
    <Card className="bg-chart-5">
      <CardContent className="pt-8 pb-8">
        <div className="aspect-square max-w-sm mx-auto mb-8 border-4 border-black bg-chart-5 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] flex items-center justify-center">
          <motion.div
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={isPlaying ? { duration: 3, repeat: Infinity, ease: "linear" } : { duration: 0 }}
            className="text-8xl"
          >
            ♫
          </motion.div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-heading mb-1">{track.title}</h2>
          <p className="text-lg opacity-70">{track.artist}</p>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="h-3 border-4 border-black bg-white">
            <motion.div
              className="h-full bg-chart-3"
              initial={{ width: "0%" }}
              animate={{ width: isPlaying ? "100%" : "0%" }}
              transition={isPlaying ? { duration: 30, ease: "linear" } : { duration: 0 }}
            />
          </div>
          <div className="flex justify-between mt-1 text-xs font-bold">
            <span>0:00</span>
            <span>{track.duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={onPlayPause}
            className="w-16 h-16 text-2xl"
          >
            {isPlaying ? "||" : "▶"}
          </Button>
        </div>

        {onViewStems && (
          <div className="mt-6 text-center">
            <Button variant="outline" onClick={onViewStems}>
              View Multi-Stem Breakdown
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function StemPlayer({
  track,
  stems,
  isPlaying,
  onPlayPause,
  onClose,
}: {
  track: Track;
  stems: { title: string; src: string }[];
  isPlaying: boolean;
  onPlayPause: () => void;
  onClose: () => void;
}) {
  const [stemVolumes, setStemVolumes] = useState<Record<string, number>>(
    Object.fromEntries(stems.map((s) => [s.title, 80]))
  );
  const [mutedStems, setMutedStems] = useState<Record<string, boolean>>(
    Object.fromEntries(stems.map((s) => [s.title, false]))
  );

  const stemColors: Record<string, string> = {
    Drums: "bg-chart-3",
    Bass: "bg-chart-2",
    Vocals: "bg-chart-5",
    Other: "bg-chart-4",
    Chorus: "bg-chart-1",
  };

  const toggleMute = (stemTitle: string) => {
    setMutedStems((prev) => ({ ...prev, [stemTitle]: !prev[stemTitle] }));
  };

  return (
    <Card className="bg-chart-3">
      <CardContent className="pt-8 pb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-heading">{track.title}</h2>
            <p className="text-lg opacity-80">Multi-Stem Breakdown</p>
          </div>
          <Button variant="outline" onClick={onClose} className="bg-white">
            Close Stems
          </Button>
        </div>

        {/* Visualizer */}
        <div className="flex items-end justify-center gap-1 h-24 mb-8 border-4 border-black bg-white p-2">
          {stems.map((stem) => (
            <motion.div
              key={stem.title}
              className={cn("w-8", stemColors[stem.title] || "bg-gray-400")}
              animate={
                isPlaying && !mutedStems[stem.title]
                  ? {
                      height: [
                        `${20 + Math.random() * 40}%`,
                        `${40 + Math.random() * 50}%`,
                        `${15 + Math.random() * 35}%`,
                        `${30 + Math.random() * 45}%`,
                      ],
                    }
                  : { height: "10%" }
              }
              transition={
                isPlaying
                  ? { duration: 0.4, repeat: Infinity, repeatType: "reverse" }
                  : { duration: 0.3 }
              }
            />
          ))}
        </div>

        {/* Stem Controls */}
        <div className="space-y-4">
          {stems.map((stem) => (
            <div key={stem.title} className="flex items-center gap-4">
              <button
                onClick={() => toggleMute(stem.title)}
                className={cn(
                  "w-12 h-12 border-4 border-black font-bold text-sm transition-all cursor-pointer",
                  mutedStems[stem.title]
                    ? "bg-gray-300 text-gray-500"
                    : cn(stemColors[stem.title] || "bg-gray-400", "text-black")
                )}
              >
                {mutedStems[stem.title] ? "M" : "S"}
              </button>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm">{stem.title}</span>
                  <span className="text-xs">{stemVolumes[stem.title]}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={stemVolumes[stem.title]}
                  onChange={(e) =>
                    setStemVolumes((prev) => ({ ...prev, [stem.title]: Number(e.target.value) }))
                  }
                  className="w-full h-3 border-4 border-black bg-white appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Play Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button onClick={onPlayPause} className="w-16 h-16 text-2xl">
            {isPlaying ? "||" : "▶"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
