"use client";
import { useLanguageStore } from "@/store/useLanguageStore";
import { ITimingProps } from "@/definitions";
import { FC } from "react";
import AudioPlayer from "./AudioPlayer";
import configs from "@/configs";

// ── AUDIO FILE NAME ─────────────────────────────────────────────
const typeToAudioFile: Record<string, string> = {
  evening: "Evening Adhkar.mp3",
  morning: "Morning Adhkar.mp3",
};

// ── TITLE ─────────────────────────────────────────────
const typeToTitle: Record<string, { ar: string; en: string }> = {
  evening: { ar: "أذكار المساء", en: "Evening Adhkar" },
  morning: { ar: "أذكار الصباح", en: "Morning Adhkar" },
  prayer: { ar: "أذكار الصلاة", en: "Prayer Adhkar" },
  sleep: { ar: "أذكار النوم", en: "Sleeping Adhkar" },
};

// ── TIMING HEADER ─────────────────────────────────────────────
const TimingHeader: FC<ITimingProps> = ({ type }) => {
  const { language } = useLanguageStore();

  const title = typeToTitle[type];
  const audioFile = typeToAudioFile[type];
  const audioUrl = audioFile
    ? configs.getAudioUrl(`${type}s`, audioFile)
    : null;

  return (
    <article className="w-full flex flex-col gap-5 items-center justify-center my-5 px-5">
      <h2 className="text-2xl md:text-3xl font-bold dark:text-green-500 text-green-800 tracking-tight">
        {title ? title[language] : ""}
      </h2>

      {audioUrl && (
        <AudioPlayer
          url={audioUrl}
          title={language === "ar" ? "استمع للكل" : "Listen All"}
        />
      )}
    </article>
  );
};

export default TimingHeader;
