import Dhikr from "@/components/Dhikr";
import { reemKufi } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "AZKAR - Evening",
	description:
		"Evening Azkar (أذكار المساء) are Islamic supplications and remembrances recited in the evening after Asr prayer until Maghreb. These blessed words provide spiritual protection, peace, and connection with Allah throughout the night.",
};
const Evenings = () => {
	return (
		<section className="w-full lg:w-1/2 flex flex-col items-center justify-center flex-grow lg:mt-20 lg:mb-10 mb-20">
			<article className="w-full flex flex-col gap-2 items-center justify-center my-5">
				<h1 className="text-4xl text-right font-bold text-green-500">
					اذكار المساء
				</h1>
				<p
					className={`${reemKufi.className} text-sm text-muted-foreground px-10`}>
					the best time for the <em className="font-bold">evening Azkar</em> is
					between the Asr prayer and sunset
				</p>
			</article>

			<section className="w-full px-5 flex flex-col gap-5">
				<Dhikr />
				<Dhikr />
			</section>
		</section>
	);
};

export default Evenings;
