import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

import { geistMono, geistSans } from "@/lib/fonts";
import "./globals.css";
import configs from "@/configs";
import LanguageInitializer from "@/components/LanguageInitializer";

// ── METADATA ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kun Min Aldhaakirin",
  description:
    "Kun Min Aldhaakirin (كن من الذاكرين) is your companion for daily Islamic remembrance, featuring morning and evening azkar, prayers after salah, and other essential supplications. Join the ranks of those who remember Allah throughout their day.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      {
        url: `${configs.supabaseUrl}/storage/v1/object/public/kun-min-aldhaakirin/images/fav%20icon.png`,
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: `${configs.supabaseUrl}/storage/v1/object/public/kun-min-aldhaakirin/images/fav%20icon.png`,
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: `${configs.supabaseUrl}/storage/v1/object/public/kun-min-aldhaakirin/images/fav%20icon.png`,
      sizes: "180x180",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageInitializer />
          <Navbar />
          <main className="flex flex-col items-center justify-center flex-grow">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
