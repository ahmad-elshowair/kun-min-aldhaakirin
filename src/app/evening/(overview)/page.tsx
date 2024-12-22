import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "AZKAR - Evening",
	description:
		"Evening Azkar (أذكار المساء) are Islamic supplications and remembrances recited in the evening after Asr prayer until Maghreb. These blessed words provide spiritual protection, peace, and connection with Allah throughout the night.",
};
const Evenings = () => {
	return (
		<section>
			<h1 className="text-4xl text-right font-bold text-green-500">
				أذكار المساء
			</h1>
		</section>
	);
};

export default Evenings;
