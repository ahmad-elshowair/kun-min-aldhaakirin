import { fetchSleepingAzkar } from "@/actions";
import Dhikr from "@/components/Dhikr";
import TimingHeader from "@/components/TimingHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "AZKAR - Before Sleep",
	description:
		"Sleep Azkar (أذكار النوم) are Islamic supplications recited before going to bed. These peaceful words provide protection through the night, help in having blessed dreams, and ensure a restful sleep under Allah's care.",
};

const Sleepings = async () => {
	const response = await fetchSleepingAzkar();
	return (
		<section className="w-full lg:w-1/2 flex flex-col items-center justify-center flex-grow mt-20 lg:mb-10 mb-20">
			<TimingHeader type="sleep" />
			<section className="w-full px-5 flex flex-col gap-5">
				{response.map((dhikr) => (
					<Dhikr key={dhikr.dhikr_id} {...dhikr} />
				))}
			</section>
		</section>
	);
};

export default Sleepings;
