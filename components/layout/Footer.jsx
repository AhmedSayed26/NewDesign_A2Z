"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/components/LanguageProvider";
import FadeText from "@/components/shared/FadeText/FadeText";
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_URL } from "@/lib/links";

const QUICK_LINKS = [
  { key: "about", href: "/about" },
  { key: "portfolio", href: "/#projects" },
  { key: "contactUs", href: "/contact" },
];

const HEADING =
  "font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-paper/45 sm:text-xs rtl:text-[13px] rtl:tracking-normal";
const LINK =
  "inline-block text-base text-paper/75 transition-colors duration-300 hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

function ArrowUp({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 4 5.5 10.5l1.41 1.41L11 7.83V20h2V7.83l4.09 4.08 1.41-1.41z" />
    </svg>
  );
}

export default function Footer() {
  const { t, lang } = useTranslation();

  return (
    <footer
      aria-label={t("footer.aria")}
      className="relative isolate overflow-hidden bg-ink text-paper"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_0%_0%,color-mix(in_srgb,var(--main-color)_30%,transparent),transparent_55%),radial-gradient(ellipse_50%_45%_at_100%_100%,color-mix(in_srgb,var(--accent-color)_14%,transparent),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-20 sm:px-8 sm:pt-24 lg:pt-28">
        {/* Statement + back to top */}
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end lg:gap-16">
          <FadeText
            as="p"
            className="max-w-3xl text-[clamp(1.4rem,2.8vw,2.25rem)] font-semibold leading-[1.25] tracking-[-0.025em] text-paper [font-stretch:94%] rtl:font-medium rtl:leading-[1.55] rtl:tracking-normal"
            text={t("common.tagline")}
          />
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex shrink-0 cursor-pointer items-center gap-3 border border-paper/30 px-5 py-3 text-sm font-medium text-paper transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {t("footer.backToTop")}
            <ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Columns */}
        <div className="mt-16 grid gap-12 border-t border-paper/15 pt-12 sm:mt-20 sm:grid-cols-2 sm:pt-14 lg:grid-cols-[1.2fr_1fr_1.3fr_1.2fr] lg:gap-10">
          <FadeText
            as="div"
            className="flex flex-col items-start gap-6"
            text={
              <>
                <Link
                  href="/"
                  aria-label={t("header.homeLabel")}
                  className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <Image src="/logo/logo.png" alt="A2Z" width={1014} height={492} className="h-14 w-auto brightness-0 invert" />
                </Link>
                <p className={HEADING}>{t("footer.location")}</p>
              </>
            }
          />

          <nav aria-label={t("footer.quickLinksLabel")}>
            <FadeText
              as="div"
              delay={0.06}
              text={
                <>
                  <p className={HEADING}>{t("footer.quickLinks")}</p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {QUICK_LINKS.map((item) => (
                      <li key={item.key}>
                        <Link href={item.href} className={LINK}>
                          {t(`footer.${item.key}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              }
            />
          </nav>

          <FadeText
            as="div"
            delay={0.12}
            text={
              <>
                <p className={HEADING}>{t("footer.contact")}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  <li>
                    <a href={`mailto:${CONTACT_EMAIL}`} dir="ltr" className={`${LINK} break-all`}>
                      {CONTACT_EMAIL}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`} dir="ltr" className={LINK}>
                      {CONTACT_PHONE}
                    </a>
                  </li>
                  <li>
                    <address className="text-base not-italic leading-relaxed text-paper/75">{t("common.address")}</address>
                  </li>
                </ul>
              </>
            }
          />

          <FadeText
            as="div"
            delay={0.18}
            text={
              <>
                <p className={HEADING}>{t("footer.follow")}</p>
                <p className="mt-6 max-w-xs text-base leading-relaxed text-paper/65 rtl:leading-loose">
                  {t("footer.followText")}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${LINK} mt-5 border-b border-paper/30 pb-1 hover:border-accent`}
                >
                  {t("common.whatsapp")}
                </a>
              </>
            }
          />
        </div>

        {/* Wordmark, cropped by the bottom edge for weight */}
        <div aria-hidden="true" className="pointer-events-none mt-14 -mb-[0.2em] select-none overflow-hidden text-[clamp(7rem,27vw,24rem)] sm:mt-16">
          <p
            dir="ltr"
            className="text-center font-extrabold leading-[0.78] tracking-[-0.07em] text-paper/[0.07] [font-stretch:72%]"
          >
            A2Z
          </p>
        </div>
      </div>

      <div className="relative border-t border-paper/15 bg-ink/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-paper/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>{t("footer.copyright")}</p>
          <p lang={lang === "en" ? "ar" : "en"} className="text-paper/70">
            {t("common.arabicTagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
