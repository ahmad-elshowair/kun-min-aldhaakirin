import Dhikr from "@/components/Dhikr";
import { reemKufi } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "AZKAR - Morning",
	description:
		"Morning Azkar (أذكار الصباح) are Islamic supplications and remembrances recited from Fajr prayer until sunrise. Start your day with these blessed words for divine protection, guidance, and blessings.",
};

const Mornings = () => {
	return (
		<section className="w-full lg:w-1/2 flex flex-col items-center justify-center flex-grow lg:mt-20 lg:mb-10 mb-20">
			<article className="w-full flex flex-col gap-2 items-center justify-center my-5">
				<h1 className="text-4xl text-right font-bold text-green-500">
					اذكار الصباح
				</h1>
				<p
					className={`${reemKufi.className} text-sm text-muted-foreground px-10`}>
					the best time to recite the{" "}
					<em className="font-bold">morning Azkar</em>
					is between the Fajr prayer and sunrise
				</p>
			</article>

			<section className="w-full px-5 flex flex-col gap-5">
				<Dhikr />
				<Dhikr />
			</section>
		</section>
	);
};

export default Mornings;
