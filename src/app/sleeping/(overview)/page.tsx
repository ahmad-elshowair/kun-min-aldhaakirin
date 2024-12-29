import TimingHeader from "@/components/TimingHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "AZKAR - Before Sleep",
	description:
		"Sleep Azkar (أذكار النوم) are Islamic supplications recited before going to bed. These peaceful words provide protection through the night, help in having blessed dreams, and ensure a restful sleep under Allah's care.",
};

const Sleepings = () => {
	return (
		<section className="w-full lg:w-1/2 flex flex-col items-center justify-center flex-grow mt-20 lg:mb-10 mb-20">
			<TimingHeader type="sleep" />
		</section>
	);
};

export default Sleepings;
