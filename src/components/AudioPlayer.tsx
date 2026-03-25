"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

// ── AUDIO PLAYER PROPS ─────────────────────────────────────────────
interface AudioPlayerProps {
  url: string;
  title?: string;
}

// ── AUDIO PLAYER ─────────────────────────────────────────────
export default function AudioPlayer({ url, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

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
    if (progressBarRef.current && audioRef.current && audioRef.current.duration) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const progressPercent = clickX / rect.width;
      audioRef.current.currentTime = progressPercent * audioRef.current.duration;
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
    <div className="w-full max-w-2xl mx-auto neumorphic rounded-[33px] p-5 flex flex-col md:flex-row items-center gap-5 transition-all">
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

      {/* ── THE AUDIO PLAYER CONTROLS ─── */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        {/* ── PLAY/PAUSE BUTTON ─── */}
        <button
          onClick={togglePlay}
          className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 shadow-lg",
            "bg-orange-400 hover:bg-orange-500 text-white",
            isLoading && "opacity-80",
          )}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isLoading ? (
            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
          ) : isPlaying ? (
            <Pause fill="currentColor" size={28} />
          ) : (
            <Play fill="currentColor" size={28} className="ml-1" />
          )}
        </button>

        {/* ── AUDIO PLAYER TITLE ─── */}
        <div className="flex flex-col flex-grow md:min-w-[150px]">
          <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 uppercase tracking-wide">
            {title || "Listen All"}
          </h3>
        </div>
      </div>

      {/* ── THE AUDIO PLAYER PROGRESS ─── */}
      <div className="flex flex-col flex-grow w-full gap-2">
        <div
          ref={progressBarRef}
          onClick={handleSeek}
          className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden shadow-inner cursor-pointer"
        >
          <div
            className="h-full bg-orange-400 transition-all duration-300 shadow-[0_0_10px_rgba(251,146,60,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 border-t md:border-t-0 md:border-l border-zinc-100 dark:border-zinc-800 pt-3 md:pt-0 md:pl-5 w-full md:w-auto justify-center">
        {/* ── RESTART BUTTON ─── */}
        <button
          onClick={reset}
          className="p-3 text-zinc-400 hover:text-orange-400 transition-all hover:bg-orange-50 dark:hover:bg-zinc-800 rounded-xl"
          title="Restart"
        >
          <RotateCcw size={20} />
        </button>

        {/* ── MUTE BUTTON ─── */}
        <button
          onClick={toggleMute}
          className="p-3 text-zinc-400 hover:text-orange-400 transition-all hover:bg-orange-50 dark:hover:bg-zinc-800 rounded-xl"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
        </button>
      </div>
    </div>
  );
}
