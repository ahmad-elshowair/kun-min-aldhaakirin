import { reemKufi } from "@/lib/fonts";
import DhikrCounter from "./DhikrCounter";

const Dhikr = () => {
	return (
		<article className="p-4 neumorphic rounded-[33px] flex flex-col gap-5 flex-grow">
			<p className={`${reemKufi.className} font-bold`}>
				Bismillahir Rahmanir Raheem. Qul Huwa Allahu Ahad. Allahus-Samad. Lam
				yalid wa lam yoolad. Wa lam yakun lahu kufuwan ahad.
			</p>
			<p
				className={`${reemKufi.className} text-xs text-right text-muted-foreground `}>
				من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين).
			</p>
			<p className={`${reemKufi.className} text-sm`}>
				In the name of Allah, the Most Gracious, the Most Merciful. Say, He is
				Allah, [who is] One, Allah, the Eternal Refuge. He neither begets nor is
				born, Nor is there to Him any equivalent. (Quran 112)
			</p>
			<DhikrCounter maxCount={1} />
		</article>
	);
};

export default Dhikr;
