import DhikrList from "@/components/DhikrList";
import { DhikrSkeleton } from "@/components/skeleton/DhikrSkeleton";
import TimingHeaderSkeleton from "@/components/skeleton/TimingHeaderSkeleton";
import TimingHeader from "@/components/TimingHeader";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "AZKAR - After Prayer",
	description:
		"Prayer Azkar (أذكار الصلاة) are essential Islamic supplications recited after each of the five daily prayers. These blessed remembrances enhance the spiritual benefits of prayer and maintain the connection with Allah throughout the day.",
};

const Prayers = async () => {
	return (
		<section className="w-full lg:w-1/2 flex flex-col items-center justify-center flex-grow mt-20 lg:mb-10 mb-20">
			<Suspense fallback={<TimingHeaderSkeleton />}>
				<TimingHeader type="prayer" />
			</Suspense>
			<Suspense
				fallback={
					<section className="w-full px-5 flex flex-col gap-5">
						{[...Array(5)].map((_, index) => (
							<DhikrSkeleton key={index} />
						))}
					</section>
				}>
				<DhikrList type="prayer" />
			</Suspense>
		</section>
	);
};
export default Prayers;
