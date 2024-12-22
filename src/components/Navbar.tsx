import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="flex justify-between py-2 px-8 items-center ">
			<section>
				<Link href={"/"}>
					<h1 className="text-2xl font-bold text-green-500">
						Kun Min Aldhaakirin
					</h1>
				</Link>
			</section>

			<section>
				<ul className="flex gap-4">
					<li>
						<Link href="/morning" className="text-yellow-500">
							Morning
						</Link>
					</li>
					<li>
						<Link href="/evening" className="text-yellow-500">
							Evening
						</Link>
					</li>
					<li>
						<Link href="/prayer" className="text-yellow-500">
							Prayer
						</Link>
					</li>
					<li>
						<Link href="/sleeping" className="text-yellow-500">
							Sleeping
						</Link>
					</li>
				</ul>
			</section>

			<section>
				<ThemeToggle />
			</section>
		</nav>
	);
};

export default Navbar;
