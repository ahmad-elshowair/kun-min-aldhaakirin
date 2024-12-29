import TimingHeader from "@/components/TimingHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "AZKAR - After Prayer",
	description:
		"Prayer Azkar (أذكار الصلاة) are essential Islamic supplications recited after each of the five daily prayers. These blessed remembrances enhance the spiritual benefits of prayer and maintain the connection with Allah throughout the day.",
};

const Prayers = () => {
	return (
		<section className="w-full lg:w-1/2 flex flex-col items-center justify-center flex-grow mt-20 lg:mb-10 mb-20">
			<TimingHeader type="prayer" />
		</section>
	);
};
export default Prayers;
