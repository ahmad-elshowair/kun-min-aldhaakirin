"use client";
import BlessModal from "@/components/BlessModal";
import DhikrCounter from "@/components/DhikrCounter";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from "@/store/useLanguageStore";
import { TDhikrProps } from "@/definitions";
import { cairo } from "@/lib/fonts";
import { FC, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";

const Dhikr: FC<TDhikrProps> = ({
  dhikr,
  translation,
  transliteration,
  repeat,
  bless,
  audio,
}) => {
  const { language } = useLanguageStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleAudioToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const truncateBless = (text: string) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= 5) return text;
    if (language === "ar") return `... ${words.slice(0, 5).join(" ")}`;
    else return `${words.slice(0, 5).join(" ")} ...`;
  };

  return (
    <article className="p-4 neumorphic rounded-[33px] flex flex-col gap-5 flex-grow">
      <p
        className={`${cairo.className} font-bold text-orange-400 ${
          language === "ar" && "text-right"
        }`}
      >
        {language === "ar" ? dhikr : transliteration}
      </p>
      {language === "en" && (
        <p
          className={`${cairo.className} text-sm text-green-500 font-semibold`}
        >
          {translation}
        </p>
      )}
      <div className="flex items-center justify-between">
        {audio && (
          <>
            <Button
              variant="ghost"
              size="icon"
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
              className="w-10 h-10 rounded-lg hover:bg-orange-100"
              onClick={handleAudioToggle}
            >
              {isPlaying ? (
                <FaPause
                  style={{ width: "32px", height: "32px" }}
                  className="text-orange-400"
                />
              ) : (
                <FaPlay
                  style={{ width: "32px", height: "32px" }}
                  className="text-orange-400"
                />
              )}
            </Button>
            <audio ref={audioRef} src={audio} />
          </>
        )}
        {bless && language === "ar" && (
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            aria-label="View full blessing"
            className={`${cairo.className} text-xs text-right text-muted-foreground cursor-pointer hover:text-orange-400`}
          >
            {truncateBless(bless)}
          </button>
        )}
      </div>
      <DhikrCounter maxCount={repeat} />

      <BlessModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        bless={bless || ""}
      />
    </article>
  );
};

export default Dhikr;
