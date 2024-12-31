import DhikrList from "@/components/DhikrList";
import { DhikrSkeleton } from "@/components/skeleton/DhikrSkeleton";
import TimingHeaderSkeleton from "@/components/skeleton/TimingHeaderSkeleton";
import TimingHeader from "@/components/TimingHeader";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "AZKAR - Before Sleep",
	description:
		"Sleep Azkar (أذكار النوم) are Islamic supplications recited before going to bed. These peaceful words provide protection through the night, help in having blessed dreams, and ensure a restful sleep under Allah's care.",
};

const Sleepings = async () => {
	return (
		<section className="w-full lg:w-1/2 flex flex-col items-center justify-center flex-grow mt-20 lg:mb-10 mb-20">
			<Suspense fallback={<TimingHeaderSkeleton />}>
			<TimingHeader type="sleep" />
			</Suspense>
			<Suspense
				fallback={
					<section className="w-full px-5 flex flex-col gap-5">
						{[...Array(5)].map((_, index) => (
							<DhikrSkeleton key={index} />
						))}
					</section>
				}>
				<DhikrList type="sleep" />
			</Suspense>
		</section>
	);
};

export default Sleepings;
