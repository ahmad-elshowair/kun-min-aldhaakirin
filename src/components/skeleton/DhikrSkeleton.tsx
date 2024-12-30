"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function DhikrSkeleton() {
	return (
		<article className="p-4 neumorphic rounded-[33px] flex flex-col gap-5 flex-grow">
			{/* Dhikr text skeleton */}
			<Skeleton className={`h-6 w-full`} />

			{/* Optional blessing skeleton */}
			<Skeleton className={`h-4 w-3/4`} />

			{/* Translation skeleton */}
			<Skeleton className={`h-5 w-5/6`} />

			{/* Counter skeleton */}
			<div className="flex justify-center items-center">
				<Skeleton className="h-12 w-24" />
			</div>
		</article>
	);
}
