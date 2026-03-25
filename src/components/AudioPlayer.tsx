"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface AudioPlayerProps {
  url: string;
  title?: string;
}

export default function AudioPlayer({ url, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("canplay", handleCanPlay);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const reset = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 px-4 py-2 rounded-full shadow-sm border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-md max-w-fit mt-2">
      <audio ref={audioRef} src={url} preload="metadata" />
      
      <button
        onClick={togglePlay}
        disabled={isLoading}
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center transition-all",
          "bg-orange-500 hover:bg-orange-600 text-white shadow-sm disabled:opacity-50",
          isPlaying && "animate-pulse"
        )}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause fill="currentColor" size={20} /> : <Play fill="currentColor" size={20} className="ml-1" />}
      </button>

      <div className="flex flex-col min-w-[80px]">
        <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 select-none">
          {title || "Listen All"}
        </span>
        <div className="w-full h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full mt-1 overflow-hidden">
          <div 
            className="h-full bg-orange-500 transition-all duration-300" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center gap-1 ml-1 border-l border-zinc-100 dark:border-zinc-800 pl-2">
        <button
          onClick={reset}
          className="p-1.5 text-zinc-400 hover:text-orange-500 transition-colors"
          title="Reset"
        >
          <RotateCcw size={16} />
        </button>
        <button
          onClick={toggleMute}
          className="p-1.5 text-zinc-400 hover:text-orange-500 transition-colors"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
    </div>
  );
}
