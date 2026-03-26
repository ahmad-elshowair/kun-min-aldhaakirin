"use client";

import { useLanguageStore } from "@/store/useLanguageStore";
import { useEffect } from "react";

export default function LanguageInitializer() {
  const { language, _hasHydrated } = useLanguageStore();

  useEffect(() => {
    if (_hasHydrated) {
      document.documentElement.lang = language;
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }
  }, [language, _hasHydrated]);

  return null;
}
