import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TLanguage } from "@/definitions";

// ── LANGUAGE STORE INTERFACE ───────────────────────────────────
interface LanguageState {
  language: TLanguage;
  setLanguage: (language: TLanguage) => void;
  toggleLanguage: () => void;
}

// ── LANGUAGE STORE ─────────────────────────────────────────────
export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "ar",
      setLanguage: (language: TLanguage) => set({ language }),
      toggleLanguage: () =>
        set((state) => ({
          language: state.language === "ar" ? "en" : "ar",
        })),
    }),
    {
      name: "kun-min-aldhaakirin-language",
    },
  ),
);
