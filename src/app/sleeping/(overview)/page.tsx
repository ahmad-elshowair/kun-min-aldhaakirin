import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "AZKAR - Before Sleep",
	description:
		"Sleep Azkar (أذكار النوم) are Islamic supplications recited before going to bed. These peaceful words provide protection through the night, help in having blessed dreams, and ensure a restful sleep under Allah's care.",
};

const Sleepings = () => {
	return (
		<section>
			<h1 className="text-4xl text-right font-bold text-green-500">
				اذكار النوم
			</h1>
		</section>
	);
};

export default Sleepings;
