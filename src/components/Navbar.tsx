"use client";
import LanguageToggle from "@/components/LanguageToggle";
import NavLinks from "@/components/NavLinks";
import { ThemeToggle } from "@/components/ThemeToggle";
import { reemKufi } from "@/lib/fonts";
import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<section className="fixed top-2 right-8 z-50 flex gap-2 lg:hidden">
				<ThemeToggle />
				<LanguageToggle />
			</section>

			<nav className="flex gap-2 sm:gap-4 justify-between py-1 px-4 sm:px-8 items-center fixed bottom-0 lg:top-0 lg:bottom-auto left-0 right-0 bg-navbar backdrop-blur-sm shadow rounded-tl-full rounded-tr-full lg:rounded-none lg:shadow-none lg:left-0 lg:right-0 border-t border-border lg:border-0 :after:content-[''] lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:right-0 lg:after:h-8 lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:to-background lg:after:pointer-events-none z-40">
				{/* THE LOGO */}
				<section className="hidden lg:block">
					<Link href={"/"}>
						<span
							className={`${reemKufi.className} text-2xl font-bold text-green-500`}>
							Kun Min Aldhaakirin
						</span>
					</Link>
				</section>

				{/* THE NAV LINKS HERE */}
				<section
					className={`${reemKufi.className} flex-1 flex lg:justify-end items-center`}>
					<ul className="flex gap-5 lg:gap-10 w-full justify-around lg:w-auto">
						<NavLinks />
					</ul>
				</section>

				{/* THE THEME TOGGLER */}
				<section className="hidden lg:flex gap-2">
					<ThemeToggle />
					<LanguageToggle />
				</section>
			</nav>
		</>
	);
};
export default Navbar;
