import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TLanguage } from "@/definitions";

// ── LANGUAGE STORE INTERFACE ───────────────────────────────────
interface LanguageState {
  language: TLanguage;
  setLanguage: (language: TLanguage) => void;
  toggleLanguage: () => void;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

// ── LANGUAGE STORE ─────────────────────────────────────────────
export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "ar",
      _hasHydrated: false,
      setLanguage: (language: TLanguage) => set({ language }),
      toggleLanguage: () =>
        set((state) => ({
          language: state.language === "ar" ? "en" : "ar",
        })),
      setHasHydrated: (state) => set({ _hasHydrated: state }),
    }),
    {
      name: "kun-min-aldhaakirin-language",
      onRehydrateStorage: (state) => {
        return () => state.setHasHydrated(true);
      },
    },
  ),
);
