import {
	fetchEveningAzkar,
	fetchMorningAzkar,
	fetchPrayerAzkar,
	fetchSleepingAzkar,
} from "@/actions";
import Dhikr from "@/components/Dhikr";
import { IDhikrListProps } from "@/definitions";
import { FC } from "react";

const DhikrList: FC<IDhikrListProps> = async ({ type = "morning" }) => {
	const fetchFunctions = {
		morning: fetchMorningAzkar,
		evening: fetchEveningAzkar,
		sleep: fetchSleepingAzkar,
		prayer: fetchPrayerAzkar,
	};

	const response = await fetchFunctions[type]();

	return (
		<section className="w-full px-5 flex flex-col gap-5">
			{response.map((dhikr) => (
				<Dhikr key={dhikr.dhikr_id} {...dhikr} />
			))}
		</section>
	);
};

export default DhikrList;
