"use client";

import { Button } from "@/components/ui/button";
import { IDhikrCounterProps } from "@/definitions";
import { FC, useEffect, useState } from "react";
import { BiReset } from "react-icons/bi";

const DhikrCounter: FC<IDhikrCounterProps> = ({ maxCount }) => {
	const [count, setCount] = useState(0);
	const [isVibrating, setIsVibrating] = useState(false);

	// Handle vibration effect
	useEffect(() => {
		if (isVibrating && window.navigator.vibrate) {
			window.navigator.vibrate(50);
			const timer = setTimeout(() => setIsVibrating(false), 100);
			return () => clearTimeout(timer);
		}
	}, [isVibrating]);

	const handleIncrement = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (count < maxCount) {
			setCount((prev) => prev + 1);
			setIsVibrating(true);
		}
	};
	const waveFill = (count / maxCount) * 100;

	return (
		<div
			onClick={handleIncrement}
			className="relative mt-5 border border-border  w-full h-32 cursor-pointer overflow-hidden z-[2] rounded-[33px]">
			{/* Wave container at the bottom */}
			<div className="absolute bottom-0 left-0 right-0 w-full h-full z-0">
				<div
					className="absolute bottom-0 left-0 right-0 w-full transition-all duration-300"
					style={{ height: `${waveFill}%` }}>
					<div className="absolute inset-0 bg-green-500/15 dark:bg-green-400/15" />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
						className="absolute bottom-0  left-0 right-0 w-full z-10"
						preserveAspectRatio="none"
						style={{ transform: `translateY(${100 - waveFill}%)` }}>
						<path
							className="fill-[#22c55e]/15 dark:fill-[#4ade80]/15"
							d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,149.3C672,149,768,171,864,160C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
					</svg>
				</div>
			</div>

			{/* The max count in top-left corner */}
			<span className="absolute top-1 left-5 text-md font-bold text-muted-foreground">
				{maxCount}
			</span>

			{/* RESET BUTTON */}
			<Button
				size={"sm"}
				variant={"outline"}
				onClick={(e) => {
					e.stopPropagation();
					setCount(0);
				}}
				className="h-8 w-8 border-0 absolute top-1 right-2 text-md font-bold text-muted-foreground cursor-pointer z-10 rounded-full">
				<BiReset />
			</Button>

			{/* Centered current count */}
			<div className="absolute inset-0 flex items-center justify-center">
				<span
					className={`text-6xl font-bold transition-all duration-300 ${
						count === maxCount
							? "text-green-500 dark:text-green-400 scale-110"
							: ""
					}`}>
					{count}
				</span>
			</div>
		</div>
	);
};

export default DhikrCounter;
