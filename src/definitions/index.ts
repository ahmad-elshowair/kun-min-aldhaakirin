export type TLanguage = "en" | "ar";

export interface IDhikrCounterProps {
	maxCount: number;
}
export interface ILanguageContextType {
	language: TLanguage;
	setLanguage: (language: TLanguage) => void;
}

export interface LanguageOption {
	flag: string;
	label: string;
	value: TLanguage;
  }
  
  export const languageOptions: LanguageOption[] = [
	{
	  flag: "🇺🇸",
	  label: "English",
	  value: "en",
	},
	{
	  flag: "🇪🇬",
	  label: "العربية",
	  value: "ar",
	},
  ];