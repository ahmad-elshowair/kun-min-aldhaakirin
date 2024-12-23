"use client";
import { ThemeToggle } from "@/components/ThemeToggle";
import { reemKufi } from "@/lib/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import { FaPersonPraying } from "react-icons/fa6";
import { GiNightSleep } from "react-icons/gi";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<>
			<div className="fixed top-2 right-8 z-50 block lg:hidden">
				<ThemeToggle />
			</div>
			<nav className="flex gap-4 justify-between py-2 px-8 items-center fixed bottom-0 left-0 right-0 bg-background shadow-lg rounded-tl-xl rounded-tr-xl lg:relative lg:rounded-none lg:shadow-none lg:bottom-0 lg:left-0 lg:right-0">
				<section className="hidden lg:block">
					<Link href={"/"}>
						<span
							className={`${reemKufi.className} text-2xl font-bold text-green-500`}>
							Kun Min Aldhaakirin
						</span>
					</Link>
				</section>

				<section className={`${reemKufi.className} flex-1 flex justify-end`}>
					<ul className="flex gap-10 w-full md:justify-around lg:w-auto">
						<li className="relative group">
							<Link
								href="/morning"
								className={`flex flex-col items-center justify-center h-16 w-16 transition-all group ${
									pathname === "/morning" ? "text-green-500" : "text-yellow-500"
								}`}>
								<BsFillSunriseFill
									className={`text-xl w-full h-full transition-transform duration-500 relative rounded-full p-1 ${
										pathname === "/morning"
											? "-translate-y-[35px] bg-background lg:translate-y-2 lg:bg-transparent lg:p-0 lg:opacity-100"
											: "lg:-translate-y-10 lg:opacity-0 group-hover:-translate-y-[35px] group-hover:bg-background group-hover:lg:translate-y-2 group-hover:lg:bg-transparent group-hover:lg:p-0 group-hover:lg:opacity-100"
									}`}
								/>
								<span
									className={`text-md font-semibold mt-1 lg:mt-0 absolute lg:static bottom-1 transition-all duration-300 ${
										pathname === "/morning"
											? "opacity-100 translate-y-0 lg:-translate-y-2 lg:scale-110"
											: "opacity-0 translate-y-1 lg:opacity-100 lg:-translate-y-5 group-hover:translate-y-2 group-hover:lg:-translate-y-2 group-hover:lg:scale-110 group-hover:opacity-100"
									}`}>
									Morning
								</span>
							</Link>
						</li>
						<li className="relative group">
							<Link
								href="/evening"
								className={`flex flex-col items-center justify-center h-16 w-16 transition-all group ${
									pathname === "/evening" ? "text-green-500" : "text-yellow-500"
								}`}>
								<BsFillSunsetFill
									className={`text-xl w-full h-full transition-transform duration-500 relative rounded-full p-1 ${
										pathname === "/evening"
											? "-translate-y-[35px] bg-background lg:translate-y-2 lg:bg-transparent lg:p-0 lg:opacity-100"
											: "lg:-translate-y-10 lg:opacity-0 group-hover:-translate-y-[35px] group-hover:bg-background group-hover:lg:translate-y-2 group-hover:lg:bg-transparent group-hover:lg:p-0 group-hover:lg:opacity-100"
									}`}
								/>
								<span
									className={`text-md font-semibold mt-1 lg:mt-0 absolute lg:static bottom-1 transition-all duration-300 ${
										pathname === "/evening"
											? "opacity-100 translate-y-0 lg:-translate-y-2 lg:scale-110"
											: "opacity-0 translate-y-1 lg:opacity-100 lg:-translate-y-5 group-hover:translate-y-2 group-hover:lg:-translate-y-2 group-hover:lg:scale-110 group-hover:opacity-100"
									}`}>
									Evening
								</span>
							</Link>
						</li>
						<li className="relative group">
							<Link
								href="/prayer"
								className={`flex flex-col gap-3 items-center justify-center h-16 w-16 transition-all group  ${
									pathname === "/prayer" ? "text-green-500" : "text-yellow-500"
								}`}>
								<FaPersonPraying
									className={`text-xl w-full h-full transition-transform duration-500 relative rounded-full p-1 ${
										pathname === "/prayer"
											? "-translate-y-[35px] bg-background lg:translate-y-2 lg:bg-transparent lg:p-0 lg:opacity-100"
											: "lg:-translate-y-10 lg:opacity-0 group-hover:-translate-y-[35px] group-hover:bg-background group-hover:lg:translate-y-2 group-hover:lg:bg-transparent group-hover:lg:p-0 group-hover:lg:opacity-100"
									}`}
								/>
								<span
									className={`text-md font-semibold mt-1 lg:mt-0 absolute lg:static bottom-1 transition-all duration-300 ${
										pathname === "/prayer"
											? "opacity-100 translate-y-0 lg:-translate-y-2 lg:scale-110"
											: "opacity-0 translate-y-1 lg:opacity-100 lg:-translate-y-5 group-hover:translate-y-2 group-hover:lg:-translate-y-2 group-hover:lg:scale-110 group-hover:lg:opacity-100"
									}`}>
									Prayer
								</span>
							</Link>
						</li>
						<li className="relative group">
							<Link
								href="/sleeping"
								className={`flex flex-col gap-3 items-center justify-center h-16 w-16 transition-all group ${
									pathname === "/sleeping"
										? "text-green-500"
										: "text-yellow-500"
								}`}>
								<GiNightSleep
									className={`text-xl w-full h-full transition-transform duration-500 relative rounded-full p-1 ${
										pathname === "/sleeping"
											? "-translate-y-[35px] bg-background lg:translate-y-2 lg:bg-transparent lg:p-0 lg:opacity-100"
											: "lg:-translate-y-10 lg:opacity-0	group-hover:-translate-y-[35px] group-hover:bg-background group-hover:lg:translate-y-2 group-hover:lg:bg-transparent group-hover:lg:p-0 group-hover:lg:opacity-100"
									}`}
								/>
								<span
									className={`text-md font-semibold mt-1 lg:mt-0 absolute lg:static bottom-1 transition-all duration-300 ${
										pathname === "/sleeping"
											? "opacity-100 translate-y-0 lg:-translate-y-2 lg:scale-110"
											: "opacity-0 translate-y-1 lg:opacity-100 lg:-translate-y-5 group-hover:translate-y-2 group-hover:lg:-translate-y-2 group-hover:lg:scale-110 group-hover:opacity-100"
									}`}>
									Sleeping
								</span>
							</Link>
						</li>
					</ul>
				</section>
				<section className="hidden lg:block">
					<ThemeToggle />
				</section>
			</nav>
		</>
	);
};
export default Navbar;
