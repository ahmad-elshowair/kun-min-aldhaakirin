import { useLanguageStore } from "@/store/useLanguageStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import { FaPersonPraying } from "react-icons/fa6";
import { GiNightSleep } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
const NavLinks = () => {
  const pathname = usePathname();
  const { language } = useLanguageStore();

  const links = [
    {
      href: "/",
      label: { en: "Home", ar: "الرئيسية" },
      icon: IoMdHome,
    },
    {
      href: "/morning",
      label: { en: "Morning", ar: "الصباح" },
      icon: BsFillSunriseFill,
    },
    {
      href: "/evening",
      label: { en: "Evening", ar: "المساء" },
      icon: BsFillSunsetFill,
    },
    {
      href: "/prayer",
      label: { en: "Prayer", ar: "الصلاة" },
      icon: FaPersonPraying,
    },
    {
      href: "/sleeping",
      label: { en: "Sleeping", ar: "النوم" },
      icon: GiNightSleep,
    },
  ];
  return (
    <>
      {links.map((link) => (
        <li className="relative group" key={link.href}>
          <Link
            href={link.href}
            className={`flex flex-col gap-1 items-center justify-center h-12 w-12 sm:h-14 sm:w-14 transition-all group ${
              pathname === link.href ? "text-green-500" : "text-yellow-500"
            } ${language === "ar" ? "text-right sm:gap-4" : "text-left sm:gap-3"}
					`}
          >
            <link.icon
              className={`text-base sm:text-lg w-full h-full transition-transform duration-500 relative rounded-full p-1 ${
                pathname === link.href
                  ? "-translate-y-[35px] bg-background border-4 border-background lg:border-0 lg:translate-y-2 lg:bg-transparent lg:p-0 lg:opacity-100"
                  : "lg:-translate-y-10 lg:opacity-0 group-hover:-translate-y-[35px] group-hover:bg-background group-hover:lg:translate-y-2 group-hover:lg:bg-transparent group-hover:lg:p-0 group-hover:lg:opacity-100"
              }`}
            />
            <span
              className={`text-xs sm:text-sm font-semibold mt-1 lg:mt-0 absolute lg:static bottom-1 transition-all duration-300  ${
                pathname === link.href
                  ? "opacity-100 translate-y-0 lg:-translate-y-2 lg:scale-110"
                  : "opacity-0 translate-y-1 lg:opacity-100 lg:-translate-y-5 group-hover:translate-y-2 group-hover:lg:-translate-y-2 group-hover:lg:scale-110 group-hover:opacity-100"
              }`}
            >
              {language === "ar" ? link.label.ar : link.label.en}
            </span>
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
