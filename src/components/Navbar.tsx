"use client";
import LanguageToggle from "@/components/LanguageToggle";
import NavLinks from "@/components/NavLinks";
import { ThemeToggle } from "@/components/ThemeToggle";
import configs from "@/configs";
import { useLanguage } from "@/contexts/LanguageContext";
import { reemKufi } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { language } = useLanguage();
  const pathname = usePathname();
  return (
    <>
      {/* nav on small screens  */}

      <section
        className={`w-full flex flex-row items-center justify-between lg:hidden px-2 py-1 bg-navbar backdrop-blur-sm fixed top-0 z-50`}
      >
        <Link
          href="/"
          className="flex self-center hover:scale-125 transition-all ease-in-out duration-300"
        >
          <Image
            src={
              language === "en"
                ? `${configs.supabaseUrl}/storage/v1/object/public/kun-min-aldhaakirin/images/English.png`
                : `${configs.supabaseUrl}/storage/v1/object/public/kun-min-aldhaakirin/images/Arabic.png`
            }
            alt="logo"
            width={50}
            height={50}
            className="w-full h-full"
          />
        </Link>
        <section className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </section>
      </section>

      {/* nav on large screens  */}
      <nav
        className={`flex gap-2 sm:gap-4 justify-between py-1 px-4 sm:px-8 items-center fixed bottom-0 lg:top-0 lg:bottom-auto left-0 right-0 bg-navbar backdrop-blur-sm shadow rounded-tl-full rounded-tr-full lg:rounded-none lg:shadow-none lg:left-0 lg:right-0 border-t border-border lg:border-0 z-40 ${
          pathname === "/"
            ? "lg:bg-none lg:shadow-none lg:backdrop-blur-none "
            : ""
        }`}
      >
        {/* THE LOGO */}
        <section className="hidden lg:flex">
          <Link
            href={"/"}
            className="flex items-center hover:scale-125 transition-all ease-in-out duration-300"
          >
            <Image
              src={
                language === "en"
                  ? `${configs.supabaseUrl}/storage/v1/object/public/kun-min-aldhaakirin/images/English.png`
                  : `${configs.supabaseUrl}/storage/v1/object/public/kun-min-aldhaakirin/images/Arabic.png`
              }
              alt="logo"
              width={75}
              height={70}
              className="w-[75px] h-[70px]"
            />
          </Link>
        </section>

        {/* THE NAV LINKS HERE */}
        <section
          className={`${reemKufi.className} flex-1 flex lg:justify-end items-center`}
        >
          <ul className="flex gap-5 lg:gap-10 w-full justify-around lg:w-auto">
            <NavLinks />
          </ul>
        </section>

        {/* THE THEME TOGGLER */}
        <section className="hidden lg:flex items-center justify-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </section>
      </nav>
    </>
  );
};
export default Navbar;
