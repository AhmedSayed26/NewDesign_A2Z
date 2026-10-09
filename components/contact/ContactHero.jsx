"use client";

import { useTranslation } from "@/components/LanguageProvider";
import FadeText from "@/components/shared/FadeText/FadeText";

const LINE_DELAY = 0.12;
const HEADLINE =
  "block text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold leading-[0.98] tracking-[-0.045em] [font-stretch:86%] rtl:font-bold rtl:leading-[1.25] rtl:tracking-normal";

export default function ContactHero() {
  const { t } = useTranslation();
  // Arabic has no l2b: the whole second line ("أثرك") is the highlighted word.
  const hasL2b = Boolean(t("contactPage.l2b"));

  return (
    <section
      aria-label={t("contactPage.aria")}
      className="relative isolate flex flex-col justify-end overflow-hidden bg-ink text-paper lg:min-h-[84svh]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_8%_-5%,color-mix(in_srgb,var(--main-color)_46%,transparent),transparent_55%),radial-gradient(ellipse_60%_50%_at_100%_100%,color-mix(in_srgb,var(--accent-color)_20%,transparent),transparent_52%),#141413]" />
        <div className="animate-a2z-hero-sheen absolute -end-[15%] -top-1/4 h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--main-color)_24%,transparent),transparent_68%)] blur-3xl" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[10%] hidden overflow-hidden lg:block">
        <p
          dir="ltr"
          className="select-none text-right me-40 text-[clamp(6rem,26vw,18rem)] font-extrabold leading-none tracking-[-0.08em] text-paper/[0.045] [font-stretch:72%]"
        >
          A2Z
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
        {/* Below lg the mark sits in the flow, tucked just above the eyebrow, instead of floating at the top. */}
        <div
          aria-hidden="true"
          className="pointer-events-none -mb-[0.2em] select-none text-[clamp(5.5rem,24vw,13rem)] leading-none lg:hidden"
        >
          <span
            dir="ltr"
            className="inline-block font-extrabold leading-none tracking-[-0.08em] text-paper/[0.07] [font-stretch:72%]"
          >
            A2Z
          </span>
        </div>
        <FadeText
          as="p"
          startOnVisible={false}
          className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-paper/50 sm:text-xs rtl:text-[13px] rtl:tracking-[0.06em]"
          text={
            <>
              <span aria-hidden="true" className="h-px w-10 bg-accent" />
              {t("contactPage.eyebrow")}
            </>
          }
        />

        <h1 className="mt-8 sm:mt-10">
          <FadeText
            as="span"
            startOnVisible={false}
            delay={LINE_DELAY}
            className={`${HEADLINE} text-paper`}
            text={t("contactPage.l1")}
          />
          <FadeText
            as="span"
            startOnVisible={false}
            delay={LINE_DELAY * 2}
            className={`${HEADLINE} text-paper`}
            text={
              hasL2b ? (
                <>
                  {t("contactPage.l2a")} <span className="text-accent">{t("contactPage.l2b")}</span>
                </>
              ) : (
                <span className="text-accent">{t("contactPage.l2a")}</span>
              )
            }
          />
        </h1>

        <FadeText
          as="p"
          startOnVisible={false}
          delay={LINE_DELAY * 3.5}
          className="mt-8 max-w-xl border-s-2 border-accent ps-5 text-base leading-relaxed text-paper/65 sm:text-lg rtl:leading-loose"
          text={t("common.helpYou")}
        />
      </div>
    </section>
  );
}
