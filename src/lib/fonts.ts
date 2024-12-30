import { Cairo, Geist, Geist_Mono, Reem_Kufi } from "next/font/google";
export const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const reemKufi = Reem_Kufi({
	variable: "--font-reem-kufi",
	subsets: ["latin", "arabic"],
});

export const cairo = Cairo({
	variable: "--font-cairo",
	subsets: ["latin", "arabic"],
});
