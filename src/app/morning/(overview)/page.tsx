import DhikrList from "@/components/DhikrList";
import { DhikrSkeleton } from "@/components/skeleton/DhikrSkeleton";
import TimingHeaderSkeleton from "@/components/skeleton/TimingHeaderSkeleton";
import TimingHeader from "@/components/TimingHeader";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "AZKAR - Morning",
	description:
		"Morning Azkar (أذكار الصباح) are Islamic supplications and remembrances recited from Fajr prayer until sunrise. Start your day with these blessed words for divine protection, guidance, and blessings.",
};

const Mornings = async () => {
	return (
		<section className="w-full lg:w-1/2 flex flex-col items-center justify-center flex-grow mt-20 lg:mb-10 mb-20">
			<Suspense fallback={<TimingHeaderSkeleton />}>
				<TimingHeader type="morning" />
			</Suspense>
			<Suspense
				fallback={
					<section className="w-full px-5 flex flex-col gap-5">
						{[...Array(5)].map((_, index) => (
							<DhikrSkeleton key={index} />
						))}
					</section>
				}>
				<DhikrList type="morning" />
			</Suspense>
		</section>
	);
};

export default Mornings;
