"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

// ── AUDIO PLAYER PROPS ─────────────────────────────────────────────
interface AudioPlayerProps {
  url: string;
  title?: string;
}

// ── WAVEFORM DATA (SIMULATED) ──────────────────────────────────────
const WAVEFORM_SAMPLES = 100;
// Fixed pattern for visual consistency
const WAVE_PATTERN = [
  30, 45, 60, 40, 25, 35, 55, 75, 50, 30, 40, 65, 85, 60, 40, 50, 70, 45, 35,
  55, 80, 65, 40, 30, 50, 75, 60, 45, 35, 55, 70, 50, 35, 45, 65, 50, 40, 30,
  25, 20, 45, 35, 55, 70, 50, 35, 45, 65, 50, 40, 30, 25, 20, 45, 35, 55, 70,
];

// ── AUDIO PLAYER ─────────────────────────────────────────────
export default function AudioPlayer({ url, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ── MOUNT EFFECT ─────────────────────────────────────────────
  useEffect(() => {
    setMounted(true);
  }, []);

  // ── SYNC STATE ON MOUNT OR URL CHANGE ───────────────────────────────────────────
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && audio.readyState >= 2) {
      setIsLoading(false);
    }
  }, [url, mounted]);

  // ── AUDIO PLAYER FUNCTIONS ─────────────────────────────────────────────
  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (audioRef.current.paused) {
          await audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      } catch (error) {
        console.error("Audio Playback Error:", error);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const reset = async () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error("Audio Reset Error:", error);
      }
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      progressBarRef.current &&
      audioRef.current &&
      audioRef.current.duration
    ) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const progressPercent = clickX / rect.width;
      audioRef.current.currentTime =
        progressPercent * audioRef.current.duration;
    }
  };

  // ── AUDIO EVENT HANDLERS ─────────────────────────────────────────────
  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.duration) {
      setProgress(
        (audioRef.current.currentTime / audioRef.current.duration) * 100,
      );
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleWaiting = () => setIsLoading(true);
  const handlePlaying = () => setIsLoading(false);
  const handleCanPlay = () => setIsLoading(false);
  const handleLoadedData = () => setIsLoading(false);
  const handleError = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    console.error("Audio Element Error:", e);
    setIsLoading(false);
  };

  if (!mounted) return null;

  return (
    <div className="w-full max-w-2xl mx-auto relative overflow-hidden neumorphic rounded-[33px] p-6 transition-all group shadow-2xl">
      {/* ── BACKGROUND GLASS EFFECT ─── */}
      <div className="absolute inset-0 bg-white/5 dark:bg-black/20 backdrop-blur-md -z-10 group-hover:backdrop-blur-lg transition-all" />

      {/* ── THE AUDIO ELEMENT ─── */}
      <audio
        ref={audioRef}
        src={url}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onPlay={handlePlay}
        onPause={handlePause}
        onWaiting={handleWaiting}
        onPlaying={handlePlaying}
        onCanPlay={handleCanPlay}
        onLoadedData={handleLoadedData}
        onError={handleError}
      />

      <div className="flex flex-col items-center gap-6 relative z-10 sm:flex-row sm:justify-center sm:gap-4">
        {/* ── CONTROLS ─── */}
        <div className="flex items-center gap-4">
          <button
            onClick={reset}
            className="p-3 text-zinc-400 hover:text-orange-500 transition-all hover:bg-orange-500/10 rounded-full"
            aria-label="Restart"
          >
            <RotateCcw size={22} strokeWidth={2.5} />
          </button>

          <button
            onClick={togglePlay}
            className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 shadow-xl",
              "bg-orange-500 text-white ring-4 ring-orange-500/20",
              isLoading && "animate-pulse",
            )}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isLoading ? (
              <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
            ) : isPlaying ? (
              <Pause fill="currentColor" size={32} />
            ) : (
              <Play fill="currentColor" size={32} className="ml-1" />
            )}
          </button>

          <button
            onClick={toggleMute}
            className="p-3 text-zinc-400 hover:text-orange-500 transition-all hover:bg-orange-500/10 rounded-full"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX size={24} strokeWidth={2.5} />
            ) : (
              <Volume2 size={24} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* ── WAVEFORM SEEKER ─── */}
      <div
        className="relative h-16 w-full flex items-end gap-[3px] sm:gap-1 px-1 cursor-pointer"
        ref={progressBarRef}
        onClick={handleSeek}
      >
        {WAVE_PATTERN.map((height, i) => {
          const isActive = (i / WAVEFORM_SAMPLES) * 100 <= progress;
          return (
            <div
              key={i}
              className={cn(
                "flex-1 rounded-full bg-zinc-700 transition-all duration-300",
                isActive ? "bg-orange-500" : "dark:opacity-40 opacity-20",
              )}
              style={{ height: `${height}%` }}
            />
          );
        })}
      </div>
    </div>
  );
}
