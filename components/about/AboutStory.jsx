"use client";

import { useTranslation } from "@/components/LanguageProvider";
import FadeText from "@/components/shared/FadeText/FadeText";

export default function AboutStory() {
  const { t } = useTranslation();
  const paragraphs = ["p1", "p2", "p3", "p4"].map((key) => t(`about.story.${key}`));

  return (
    <section
      id="story"
      aria-label={t("about.story.aria")}
      className="relative overflow-hidden bg-paper py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[7rem_minmax(0,1fr)] lg:gap-14 xl:gap-20">
          <FadeText
            as="p"
            className="font-mono text-sm font-medium tracking-[0.2em] text-main"
            text={
              <span dir="ltr">{t("about.story.index")}</span>
            }
          />

          <div className="min-w-0">
            <FadeText
              as="p"
              delay={0.06}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-ink-soft sm:text-xs rtl:text-[13px] rtl:tracking-normal"
              text={t("about.story.eyebrow")}
            />
            <FadeText
              as="h2"
              delay={0.12}
              className="mt-4 max-w-3xl text-[clamp(1.85rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-ink [font-stretch:90%] rtl:font-bold rtl:leading-[1.35] rtl:tracking-normal"
              text={t("about.story.title")}
            />

            <div className="mt-10 max-w-3xl space-y-6 sm:mt-12">
              {paragraphs.map((text, i) => (
                <FadeText
                  key={i}
                  as="p"
                  delay={0.16 + i * 0.06}
                  className="text-base leading-relaxed text-ink-soft sm:text-lg rtl:leading-loose"
                  text={text}
                />
              ))}
            </div>
          </div>
        </div>

        <FadeText
          as="aside"
          delay={0.42}
          className="mt-16 border-t border-ink pt-12 sm:mt-20 sm:pt-14 lg:mt-24"
          text={
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-main sm:text-xs rtl:tracking-normal">
                {t("about.story.whyLabel")}
              </p>
              <div className="max-w-2xl">
                <blockquote className="text-[clamp(1.35rem,3vw,2.1rem)] font-semibold leading-[1.25] tracking-[-0.025em] text-ink [font-stretch:94%] rtl:font-medium rtl:leading-[1.5] rtl:tracking-normal">
                  {t("about.story.quote")}
                </blockquote>
                <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg rtl:leading-loose">
                  {t("about.story.quoteNote")}
                </p>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
