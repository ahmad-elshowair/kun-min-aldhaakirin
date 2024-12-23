import { reemKufi } from "@/lib/fonts";

export default function Home() {
	return (
		<section className="w-full">
			<header className="flex justify-center items-center h-[calc(100vh-85px)]">
				<h1
					className={`${reemKufi.className} text-8xl text-right font-bold text-green-500`}>
					كن من الذاكرين
				</h1>
			</header>
		</section>
	);
}
