"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { TDhikrProps } from "@/definitions";
import { reemKufi } from "@/lib/fonts";
import { FC } from "react";
import DhikrCounter from "./DhikrCounter";

const Dhikr: FC<TDhikrProps> = ({
	dhikr,
	translation,
	transliteration,
	repeat,
	bless,
}) => {
	const { language } = useLanguage();
	return (
		<article className="p-4 neumorphic rounded-[33px] flex flex-col gap-5 flex-grow">
			<p
				className={`${reemKufi.className} font-bold text-orange-400 ${
					language === "ar" && "text-right"
				}`}>
				{language === "ar" ? dhikr : transliteration}
			</p>
			{bless && language === "ar" && (
				<p
					className={`${reemKufi.className} text-xs text-right text-muted-foreground `}>
					{bless}
				</p>
			)}
			{language === "en" && (
				<p
					className={`${reemKufi.className} text-sm text-green-500 font-semibold`}>
					{translation}
				</p>
			)}
			<DhikrCounter maxCount={repeat} />
		</article>
	);
};

export default Dhikr;
