"use client";

import { useTranslation } from "@/components/LanguageProvider";
import FadeText from "@/components/shared/FadeText/FadeText";

const LINE_DELAY = 0.12;

export default function AboutHero() {
  const { t, lang } = useTranslation();

  return (
    <section
      aria-label={t("about.hero.aria")}
      className="relative isolate flex min-h-[88svh] flex-col justify-end overflow-hidden bg-ink text-paper sm:min-h-[92svh]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_10%_-5%,color-mix(in_srgb,var(--main-color)_48%,transparent),transparent_55%),radial-gradient(ellipse_60%_50%_at_100%_90%,color-mix(in_srgb,var(--accent-color)_18%,transparent),transparent_50%),#141413]" />
        <div className="animate-a2z-hero-sheen absolute -bottom-1/4 end-[-15%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--main-color)_26%,transparent),transparent_68%)] blur-3xl" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[20%] overflow-hidden sm:top-[14%]"
      >
        <p className="select-none text-center text-[clamp(6rem,26vw,18rem)] font-extrabold leading-none tracking-[-0.08em] text-paper/[0.045] [font-stretch:72%]">
          A2Z
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-40 lg:pb-24">
        <FadeText
          as="p"
          startOnVisible={false}
          className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-paper/50 sm:text-xs rtl:tracking-[0.06em]"
          text={
            <>
              <span>{t("about.hero.eyebrow")}</span>
              <span aria-hidden="true" className="text-accent">
                ·
              </span>
              <span lang={lang === "en" ? "ar" : "en"}>
                {t("about.hero.eyebrowAlt")}
              </span>
            </>
          }
        />

        <h1 className="mt-8 max-w-4xl sm:mt-10">
          <FadeText
            as="span"
            startOnVisible={false}
            delay={LINE_DELAY}
            className="block text-[clamp(2.6rem,7vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-paper [font-stretch:86%] rtl:font-bold rtl:leading-[1.25] rtl:tracking-normal"
            text={t("about.hero.l1")}
          />
          <FadeText
            as="span"
            startOnVisible={false}
            delay={LINE_DELAY * 2}
            className="block text-[clamp(2.6rem,7vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-paper [font-stretch:86%] rtl:font-bold rtl:leading-[1.25] rtl:tracking-normal"
            text={t("about.hero.l2")}
          />
          <FadeText
            as="span"
            startOnVisible={false}
            delay={LINE_DELAY * 3}
            className="block text-[clamp(2.6rem,7vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-paper [font-stretch:86%] rtl:font-bold rtl:leading-[1.25] rtl:tracking-normal"
            text={
              <>
                {t("about.hero.l3a")}{" "}
                <span className="text-accent">{t("about.hero.branding")}</span>
                {t("about.hero.l3b") ? ` ${t("about.hero.l3b")}` : null}
              </>
            }
          />
        </h1>
      </div>
    </section>
  );
}
