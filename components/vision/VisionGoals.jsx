"use client";

import { useTranslation } from "@/components/LanguageProvider";
import FadeText from "@/components/shared/FadeText/FadeText";

function padIndex(i) {
  return String(i + 1).padStart(2, "0");
}

export default function VisionGoals() {
  const { t } = useTranslation();
  const items = t("vision.goals.items", { returnObjects: true });
  const list = Array.isArray(items) ? items : [];

  return (
    <section
      id="goals"
      aria-label={t("vision.goals.aria")}
      className="relative overflow-hidden bg-paper py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[7rem_minmax(0,1fr)] lg:gap-14 xl:gap-20">
          <FadeText
            as="p"
            className="font-mono text-sm font-medium tracking-[0.2em] text-main"
            text={<span dir="ltr">{t("vision.goals.index")}</span>}
          />

          <div className="min-w-0">
            <FadeText
              as="p"
              delay={0.06}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-ink-soft sm:text-xs rtl:text-[13px] rtl:tracking-normal"
              text={t("vision.goals.eyebrow")}
            />
            <FadeText
              as="h2"
              delay={0.12}
              className="mt-4 max-w-xl text-[clamp(1.85rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-ink [font-stretch:90%] rtl:font-bold rtl:leading-[1.3] rtl:tracking-normal"
              text={t("vision.goals.title")}
            />

            <ol className="mt-12 border-t border-ink sm:mt-14">
              {list.map((goal, i) => (
                <li key={i} className="border-b border-line">
                  <FadeText
                    as="div"
                    delay={0.1 + i * 0.08}
                    className="grid gap-4 py-8 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-8 sm:py-12 lg:gap-12"
                    text={
                      <>
                        <span
                          dir="ltr"
                          className="font-mono text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-none tabular-nums tracking-tight text-main/25 sm:text-end"
                        >
                          {padIndex(i)}
                        </span>
                        <p className="max-w-3xl text-[clamp(1.05rem,1.7vw,1.35rem)] leading-relaxed text-ink rtl:leading-loose">
                          {goal}
                        </p>
                      </>
                    }
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
