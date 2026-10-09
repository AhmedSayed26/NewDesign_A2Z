"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/components/LanguageProvider";
import Button from "@/components/shared/Button/Button";
import StaggeredMenu from "@/components/shared/Menu/StaggeredMenu";
import { WHATSAPP_URL } from "@/lib/links";

const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "vision", href: "/vision" },
  { key: "portfolio", href: "/#projects" },
  { key: "contact", href: "/contact" },
];

// The menu animates these through GSAP, so they are hex copies of the globals.css palette
// (--accent-color, --main-color, --white-color, --black-color).
const MENU_LAYERS = ["#b8953e", "#0a5c56"];

const DARK_HERO_PATHS = ["/", "/about", "/vision", "/contact"];

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const { t, lang, changeLanguage } = useTranslation();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleLanguage = useCallback(() => {
    changeLanguage(lang === "ar" ? "en" : "ar");
  }, [lang, changeLanguage]);

  const menuItems = NAV_LINKS.map((item) => ({
    label: t(`nav.${item.key}`),
    ariaLabel: t(`nav.${item.key}`),
    link: item.href,
  }));

  const solid = scrolled && !menuOpen;
  // Dark heroes on home, about and vision; keep the bar light until the page scrolls.
  const onDarkHero = DARK_HERO_PATHS.includes(pathname) && !solid && !menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        solid
          ? "bg-paper/80 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 transition-[height] duration-300 sm:px-8 ${
          solid ? "h-16" : "h-[72px] lg:h-20"
        }`}
      >
        <Link
          href="/"
          aria-label={t("header.homeLabel")}
          className={`relative z-10 shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 ${
            onDarkHero ? "focus-visible:outline-paper" : "focus-visible:outline-main"
          }`}
        >
          <Image
            src="/logo/logo.png"
            alt="A2Z"
            width={1014}
            height={492}
            preload
            className={`h-10 w-auto transition-[filter] duration-300 lg:h-11 ${
              onDarkHero ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        <nav aria-label={t("header.mainNav")} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative inline-flex items-center px-4 py-2 text-[15px] font-medium transition-colors focus-visible:outline-2 ${
                      onDarkHero
                        ? `focus-visible:outline-paper ${active ? "text-paper" : "text-paper/65 hover:text-paper"}`
                        : `focus-visible:outline-main ${active ? "text-ink" : "text-ink-soft hover:text-ink"}`
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 -bottom-0.5 h-[2px] origin-center transition-transform duration-300 ${
                        onDarkHero ? "bg-accent" : "bg-main"
                      } ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="relative z-10 flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t("header.switchLanguage")}
            lang={lang === "ar" ? "en" : "ar"}
            className={`inline-flex h-9 cursor-pointer items-center border px-3.5 text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
              onDarkHero
                ? "border-paper/70 text-paper hover:bg-paper hover:text-ink focus-visible:outline-paper"
                : "border-ink text-ink hover:bg-ink hover:text-paper focus-visible:outline-main"
            }`}
          >
            {t("header.languageButton")}
          </button>

          <div className="hidden lg:block">
            <Button href={WHATSAPP_URL} variant={onDarkHero ? "ghost" : "outline"}>
              {t("header.letsTalk")}
            </Button>
          </div>

          <div className="lg:hidden">
            <StaggeredMenu
              embedded
              position={lang === "ar" ? "left" : "right"}
              items={menuItems}
              displaySocials={false}
              displayItemNumbering
              colors={MENU_LAYERS}
              accentColor="#0a5c56"
              panelColor="#f7f7f5"
              panelTextColor="#141413"
              menuButtonColor={onDarkHero ? "#f7f7f5" : "#141413"}
              openMenuButtonColor="#141413"
              menuLabel={t("header.menu")}
              closeLabel={t("header.close")}
              openMenuAriaLabel={t("header.openMenu")}
              closeMenuAriaLabel={t("header.closeMenu")}
              onMenuOpen={() => setMenuOpen(true)}
              onMenuClose={() => setMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
