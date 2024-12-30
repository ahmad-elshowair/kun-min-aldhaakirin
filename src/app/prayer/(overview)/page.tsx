import { fetchPrayerAzkar } from "@/actions";
import Dhikr from "@/components/Dhikr";
import TimingHeader from "@/components/TimingHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "AZKAR - After Prayer",
	description:
		"Prayer Azkar (أذكار الصلاة) are essential Islamic supplications recited after each of the five daily prayers. These blessed remembrances enhance the spiritual benefits of prayer and maintain the connection with Allah throughout the day.",
};

const Prayers = async () => {
	const response = await fetchPrayerAzkar();
	return (
		<section className="w-full lg:w-1/2 flex flex-col items-center justify-center flex-grow mt-20 lg:mb-10 mb-20">
			<TimingHeader type="prayer" />
			<section className="w-full px-5 flex flex-col gap-5">
				{response.map((dhikr) => (
					<Dhikr key={dhikr.dhikr_id} {...dhikr} />
				))}
			</section>
		</section>
	);
};
export default Prayers;
