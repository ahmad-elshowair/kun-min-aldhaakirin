import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

import "./globals.css";
import { geistMono, geistSans } from "@/lib/fonts";



export const metadata: Metadata = {
	title: "Kun Min Aldhaakirin",
	description: "Kun Min Aldhaakirin (كن من الذاكرين) is your companion for daily Islamic remembrance, featuring morning and evening azkar, prayers after salah, and other essential supplications. Join the ranks of those who remember Allah throughout their day.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
