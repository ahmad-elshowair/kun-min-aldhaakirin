"use client";
import { ILanguageContextType, TLanguage } from "@/definitions";
import { createContext, ReactNode, useContext, useState } from "react";

const LanguageContext = createContext<ILanguageContextType | undefined>(
	undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [language, setLanguage] = useState<TLanguage>("ar");

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
