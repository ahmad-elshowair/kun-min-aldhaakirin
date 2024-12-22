import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "AZKAR - After Prayer",
	description:
		"Prayer Azkar (أذكار الصلاة) are essential Islamic supplications recited after each of the five daily prayers. These blessed remembrances enhance the spiritual benefits of prayer and maintain the connection with Allah throughout the day.",
};

const Prayers = () => {
	return (
		<section>
			<h1 className="text-4xl text-right font-bold text-green-500">
				اذكار الصلاة{" "}
			</h1>
		</section>
	);
};
export default Prayers;
