"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { ITimingProps } from "@/definitions";
import { reemKufi } from "@/lib/fonts";
import { FC } from "react";

const messages = {
	en: {
		morning: {
			pre: "the best time to recite the",
			emphasis: "morning Azkar",
			post: "is between the Fajr prayer and sunrise",
		},
		evening: {
			pre: "the best time for the",
			emphasis: "evening Adhkar",
			post: "is between the Asr prayer and sunset",
		},
		prayer: {
			pre: "remember to recite these",
			emphasis: "prayer Adhkar",
			post: "after completing your prayers",
		},
		sleep: {
			pre: "recite these",
			emphasis: "sleep Adhkar",
			post: "before going to bed",
		},
	},
	ar: {
		morning: {
			pre: "أفضل وقت لقراءة",
			emphasis: "أذكار الصباح",
			post: "ما بين صلاة الفجر وشروق الشمس",
		},
		evening: {
			pre: "أفضل وقت لقراءة",
			emphasis: "أذكار المساء",
			post: "ما بين صلاة العصر وغروب الشمس",
		},
		prayer: {
			pre: "تذكر قراءة",
			emphasis: "أذكار الصلاة",
			post: "بعد الانتهاء من صلاتك",
		},
		sleep: {
			pre: "اقرأ",
			emphasis: "أذكار النوم",
			post: "قبل النوم",
		},
	},
};

const TimingHeader: FC<ITimingProps> = ({ type }) => {
	const { language } = useLanguage();
	const message = messages[language][type];

	return (
		<article className="w-full flex flex-col gap-2 items-center justify-center my-5">
			<p
				className={`${reemKufi.className} text-base md:text-md px-5 lg:px-10 dark:text-green-500 text-green-800`}>
				<span>{message.pre} </span>
				<span className="font-bold"> {message.emphasis} </span>
				<span> {message.post}</span>
			</p>
		</article>
	);
};

export default TimingHeader;
