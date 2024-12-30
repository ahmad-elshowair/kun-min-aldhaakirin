import { fetchMorningAzkar } from "@/actions";
import Dhikr from "@/components/Dhikr";
import TimingHeader from "@/components/TimingHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "AZKAR - Morning",
	description:
		"Morning Azkar (أذكار الصباح) are Islamic supplications and remembrances recited from Fajr prayer until sunrise. Start your day with these blessed words for divine protection, guidance, and blessings.",
};

const Mornings = async () => {
	const response = await fetchMorningAzkar();
	return (
		<section className="w-full lg:w-1/2 flex flex-col items-center justify-center flex-grow mt-20 lg:mb-10 mb-20">
			<TimingHeader type="morning" />

			<section className="w-full px-5 flex flex-col gap-5">
				{response.map((dhikr) => (
					<Dhikr key={dhikr.dhikr_id} {...dhikr} />
				))}
			</section>
		</section>
	);
};

export default Mornings;
