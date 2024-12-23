"use client";

import { Skeleton } from "@/components/ui/skeleton";

import { Button } from "@/components/ui/button";
import { LaptopMinimalCheckIcon, Moon, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
	const { setTheme, theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <Skeleton className="h-9 w-9 rounded-full border border-border" />;
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={"outline"} size="sm" className="rounded-full w-9 h-9">
					<SunDim
						className={`h-[1.2rem] w-[1.2rem] transition-all ${
							theme === "light" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
						}`}
					/>
					<Moon
						className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
							theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
						}`}
					/>
					<LaptopMinimalCheckIcon
						className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
							theme === "system" ? "rotate-0 scale-100" : "rotate-90 scale-0"
						}`}
					/>
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					<SunDim className="mr-2 h-4 w-4" />
					<span>Light</span>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					<Moon className="mr-2 h-4 w-4" />
					<span>Dark</span>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					<LaptopMinimalCheckIcon className="mr-2 h-4 w-4" />
					<span>System</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
