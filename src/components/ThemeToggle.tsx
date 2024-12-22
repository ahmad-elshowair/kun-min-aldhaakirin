"use client";

import { LaptopMinimalCheckIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
	const { setTheme, theme } = useTheme();
	return (
		<div className="flex items-center gap-2 rounded-full border border-muted">
			<button
				onClick={() => setTheme("system")}
				className={`p-2 rounded-full transition-colors ${
					theme === "system"
						? "bg-secondary text-yellow-500"
						: "text-muted-foreground"
				}`}>
				<LaptopMinimalCheckIcon className="h-4 w-4" />
			</button>
			<button
				onClick={() => setTheme("light")}
				className={`p-2 rounded-full transition-colors ${
					theme === "light"
						? "bg-secondary text-yellow-500"
						: "text-muted-foreground"
				}`}>
				<Sun className="h-4 w-4" />
			</button>
			<button
				onClick={() => setTheme("dark")}
				className={`p-2 rounded-full transition-colors ${
					theme === "dark"
						? "bg-secondary text-yellow-500"
						: "text-muted-foreground"
				}`}>
				<Moon className="h-4 w-4" />
			</button>
		</div>
	);
}
