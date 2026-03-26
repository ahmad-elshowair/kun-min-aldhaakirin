import configs from "@/configs";

export type TLanguage = "en" | "ar";

export interface ILanguageOption {
  flag: string;
  label: string;
  value: TLanguage;
}

export interface IDhikrCounterProps {
  maxCount?: number;
}

const storageBase = `${configs.supabaseUrl}/storage/v1/object/public/kun-min-aldhaakirin`;

export const languageOptions: ILanguageOption[] = [
  {
    flag: `${storageBase}/images/united-states.png`,
    label: "English",
    value: "en",
  },
  {
    flag: `${storageBase}/images/egypt.png`,
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
  audio?: string;
};

export type TDhikrProps = TDhikr;

export interface IDhikrListProps {
  type?: TTimingType;
}

export interface BlessModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  bless?: string;
}
