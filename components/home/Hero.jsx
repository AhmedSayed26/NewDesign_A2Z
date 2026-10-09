"use client";

import { useTranslation } from "@/components/LanguageProvider";
import Button from "@/components/shared/Button/Button";
import FadeText from "@/components/shared/FadeText/FadeText";

const LINE_DELAY = 0.14;

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      aria-label={t("hero.aria")}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink text-paper"
    >
      {/* Full-bleed atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_15%_-10%,color-mix(in_srgb,var(--main-color)_55%,transparent),transparent_58%),radial-gradient(ellipse_70%_55%_at_95%_80%,color-mix(in_srgb,var(--accent-color)_22%,transparent),transparent_52%),linear-gradient(180deg,#141413_0%,#1a2422_48%,#141413_100%)]" />
        <div className="animate-a2z-hero-sheen absolute -top-1/4 start-1/2 h-[80vmax] w-[80vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--main-color)_28%,transparent),transparent_68%)] blur-3xl rtl:translate-x-1/2" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* Giant brand watermark — visual weight without a photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[18%] flex justify-center overflow-hidden sm:top-[12%] lg:top-[6%]"
      >
        <FadeText
          as="span"
          startOnVisible={false}
          delay={0}
          duration={1.4}
          y={28}
          className="select-none text-[clamp(7.5rem,32vw,22rem)] font-extrabold leading-none tracking-[-0.08em] text-paper/[0.06] [font-stretch:72%]"
          text="A2Z"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-10 pt-36 sm:px-8 sm:pb-12 sm:pt-40 lg:pb-14">
        <div className="max-w-3xl">
          <FadeText
            as="p"
            startOnVisible={false}
            delay={LINE_DELAY}
            className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-paper/55 sm:text-xs rtl:text-[13px] rtl:tracking-[0.06em]"
            text={t("hero.place")}
          />

          <h1 className="mt-6 sm:mt-8">
            <span className="sr-only">A2Z — </span>
            <FadeText
              as="span"
              startOnVisible={false}
              delay={LINE_DELAY * 2}
              className="block text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-paper [font-stretch:92%] rtl:font-medium rtl:leading-[1.4] rtl:tracking-normal"
              text={
                <>
                  {t("hero.l1")} {t("hero.l2")}
                  <br className="hidden sm:block" />{" "}
                  {t("hero.l3a")}{" "}
                  <span className="text-accent">{t("hero.l3b")}</span> {t("hero.l4")}
                </>
              }
            />
          </h1>

          <FadeText
            as="p"
            startOnVisible={false}
            delay={LINE_DELAY * 3.4}
            className="mt-6 max-w-xl text-base leading-relaxed text-paper/65 sm:mt-7 sm:text-lg rtl:leading-loose"
            text={t("hero.text")}
          />

          <FadeText
            as="div"
            startOnVisible={false}
            delay={LINE_DELAY * 4.6}
            className="mt-9 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
            text={
              <>
                <Button href="/portfolio" variant="inverse" size="lg">
                  {t("hero.seeWork")}
                </Button>
                <Button href="/contact" variant="ghost" size="lg">
                  {t("common.letsTalk")}
                </Button>
              </>
            }
          />
        </div>

        <div className="mt-16 flex items-end justify-between gap-6 border-t border-paper/15 pt-6 sm:mt-20 lg:mt-24">
          <FadeText
            as="p"
            startOnVisible={false}
            delay={LINE_DELAY * 5.4}
            className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-paper/45 sm:text-[11px] rtl:text-xs rtl:tracking-normal"
            text={t("hero.bar")}
          />
          <FadeText
            as="div"
            startOnVisible={false}
            delay={LINE_DELAY * 5.8}
            className="flex items-center gap-3"
            text={
              <>
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-paper/55 sm:text-[11px] rtl:tracking-normal">
                  {t("hero.scroll")}
                </span>
                <span aria-hidden="true" className="relative h-7 w-px overflow-hidden bg-paper/20">
                  <span className="animate-a2z-scroll-cue absolute inset-x-0 top-0 h-1/2 bg-accent" />
                </span>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
