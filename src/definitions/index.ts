export type TLanguage = "en" | "ar";

export interface ILanguageOption {
	flag: string;
	label: string;
	value: TLanguage;
}

export interface IDhikrCounterProps {
	maxCount?: number;
}
export interface ILanguageContextType {
	language: TLanguage;
	setLanguage: (language: TLanguage) => void;
}

export const languageOptions: ILanguageOption[] = [
	{
		flag: "https://ioytezgkjmzpfcwaxqcj.supabase.co/storage/v1/object/public/kun-min-aldhaakirin/images/united-states.png",
		label: "English",
		value: "en",
	},
	{
		flag: "https://ioytezgkjmzpfcwaxqcj.supabase.co/storage/v1/object/public/kun-min-aldhaakirin/images/egypt.png",
		label: "عربى",
		value: "ar",
	},
];

export type TTimingType = "morning" | "evening" | "prayer" | "sleep";

export interface ITimingProps {
	type: TTimingType;
}

export type TDhikr = {
	dhikr_id?: string;
	dhikr?: string;
	translation?: string;
	transliteration?: string;
	bless?: string;
	repeat?: number;
};

export type TDhikrProps = TDhikr;

export interface IDhikrListProps {
	type?: TTimingType;
}
