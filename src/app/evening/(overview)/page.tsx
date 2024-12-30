import { fetchEveningAzkar } from "@/actions";
import Dhikr from "@/components/Dhikr";
import TimingHeader from "@/components/TimingHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "AZKAR - Evening",
	description:
		"Evening Azkar (أذكار المساء) are Islamic supplications and remembrances recited in the evening after Asr prayer until Maghreb. These blessed words provide spiritual protection, peace, and connection with Allah throughout the night.",
};
const Evenings = async() => {
	const response = await fetchEveningAzkar();
	return (
		<section className="w-full lg:w-1/2 flex flex-col items-center justify-center flex-grow mt-20 lg:mb-10 mb-20">
			<TimingHeader type="evening" />

			<section className="w-full px-5 flex flex-col gap-5">
				{response.map((dhikr) => (
					<Dhikr key={dhikr.dhikr_id} {...dhikr} />
				))}
			</section>
		</section>
	);
};

export default Evenings;
