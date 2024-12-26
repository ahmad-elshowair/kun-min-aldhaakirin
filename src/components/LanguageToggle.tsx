"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/contexts/LanguageContext";
import { languageOptions } from "@/definitions";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LanguageToggle() {
	const { language, setLanguage } = useLanguage();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <Skeleton className="h-8 w-8 rounded-md border border-border" />;
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="sm"
					className="relative w-8 h-9 border-0 p-0 overflow-hidden flex items-center justify-center">
					{languageOptions.map((option) => (
						<div
							key={option.value}
							className={`absolute inset-0 transition-all flex items-center justify-center ${
								language === option.value
									? "rotate-0 scale-100"
									: "rotate-90 scale-0"
							}`}>
							<Image
								src={option.flag}
								alt={option.label}
								fill
								sizes="36px"
								className="object-cover"
							/>
						</div>
					))}
					<span className="sr-only">Toggle language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="rounded-sm">
				{languageOptions.map((option) => (
					<DropdownMenuItem
						key={option.value}
						onClick={() => setLanguage(option.value)}>
						<span className="mr-2">
							<Image
								src={option.flag}
								alt={option.label}
								height={20}
								width={20}
							/>
						</span>
						<span>{option.label}</span>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
