"use client";

import { useTranslation } from "@/components/LanguageProvider";
import FadeText from "@/components/shared/FadeText/FadeText";

export default function VisionStatement() {
  const { t } = useTranslation();

  return (
    <section
      id="statement"
      aria-label={t("vision.statement.aria")}
      className="relative overflow-hidden bg-paper py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[7rem_minmax(0,1fr)] lg:gap-14 xl:gap-20">
          <FadeText
            as="p"
            className="font-mono text-sm font-medium tracking-[0.2em] text-main"
            text={<span dir="ltr">{t("vision.statement.index")}</span>}
          />

          <div className="min-w-0">
            <FadeText
              as="p"
              delay={0.06}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-ink-soft sm:text-xs rtl:text-[13px] rtl:tracking-normal"
              text={t("vision.statement.eyebrow")}
            />

            <FadeText
              as="h2"
              delay={0.12}
              className="mt-6 max-w-4xl text-[clamp(1.75rem,3.8vw,3.1rem)] font-bold leading-[1.18] tracking-[-0.03em] text-ink [font-stretch:92%] rtl:font-bold rtl:leading-[1.5] rtl:tracking-normal"
              text={
                <>
                  {t("vision.statement.a")} <span className="text-main">{t("vision.statement.b")}</span>
                </>
              }
            />

            <FadeText
              as="p"
              delay={0.2}
              className="mt-10 max-w-2xl border-s-2 border-accent ps-5 text-base leading-relaxed text-ink-soft sm:mt-12 sm:text-lg rtl:leading-loose"
              text={t("vision.statement.text")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
