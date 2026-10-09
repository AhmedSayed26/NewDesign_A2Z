"use client";

import { useTranslation } from "@/components/LanguageProvider";
import FadeText from "@/components/shared/FadeText/FadeText";

export default function Different() {
  const { t } = useTranslation();

  return (
    <section
      id="why-a2z"
      aria-label={t("different.aria")}
      className="relative overflow-hidden bg-ink py-24 text-paper sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_10%_0%,color-mix(in_srgb,var(--main-color)_40%,transparent),transparent_58%),radial-gradient(ellipse_50%_40%_at_95%_90%,color-mix(in_srgb,var(--accent-color)_16%,transparent),transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <FadeText
          as="p"
          className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-paper/50 sm:text-xs rtl:text-[13px] rtl:tracking-normal"
          text={t("different.eyebrow")}
        />

        <FadeText
          as="h2"
          delay={0.1}
          className="mt-5 max-w-3xl text-[clamp(2rem,4.8vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-paper [font-stretch:88%] rtl:font-bold rtl:leading-[1.3] rtl:tracking-normal"
          text={t("different.title")}
        />

        <FadeText
          as="p"
          delay={0.22}
          className="mt-10 max-w-4xl text-[clamp(1.35rem,3.2vw,2.35rem)] font-medium leading-[1.25] tracking-[-0.025em] text-paper/80 [font-stretch:94%] rtl:font-normal rtl:leading-[1.55] rtl:tracking-normal"
          text={
            <>
              {t("different.a")}{" "}
              <span className="text-accent">{t("different.b")}</span>
              {t("different.c")}
            </>
          }
        />
      </div>
    </section>
  );
}
