import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "AZKAR - Morning",
	description:
		"Morning Azkar (أذكار الصباح) are Islamic supplications and remembrances recited from Fajr prayer until sunrise. Start your day with these blessed words for divine protection, guidance, and blessings.",
};

const Mornings = () => {
	return (
		<section>
			<h1 className="text-4xl text-right font-bold text-green-500">
				اذكار الصباح
			</h1>
		</section>
	);
};

export default Mornings;
