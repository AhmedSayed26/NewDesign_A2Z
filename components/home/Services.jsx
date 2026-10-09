"use client";

import { useTranslation } from "@/components/LanguageProvider";
import FadeText from "@/components/shared/FadeText/FadeText";

function padIndex(i) {
  return String(i + 1).padStart(2, "0");
}

export default function Services() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true });
  const list = Array.isArray(items) ? items : [];

  return (
    <section
      id="services"
      aria-label={t("services.aria")}
      className="relative overflow-hidden bg-surface py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <FadeText
            as="p"
            className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-ink-soft sm:text-xs rtl:text-[13px] rtl:tracking-normal"
            text={t("services.eyebrow")}
          />
          <FadeText
            as="h2"
            delay={0.08}
            className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink [font-stretch:88%] rtl:font-bold rtl:leading-[1.25] rtl:tracking-normal"
            text={t("services.title")}
          />
          <FadeText
            as="p"
            delay={0.16}
            className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg rtl:leading-loose"
            text={t("services.text")}
          />
        </div>

        <ol className="mt-12 border-t border-ink/15 sm:mt-16">
          {list.map((name, i) => (
            <li key={name} className="border-b border-ink/15">
              <FadeText
                as="div"
                delay={0.04 * Math.min(i, 6)}
                className="group flex items-baseline gap-5 py-5 transition-colors duration-300 sm:gap-8 sm:py-6 lg:gap-12"
                text={
                  <>
                    <span
                      dir="ltr"
                      className="w-10 shrink-0 font-mono text-sm font-medium tabular-nums tracking-wider text-ink-soft transition-colors duration-300 group-hover:text-main sm:w-12 sm:text-base"
                    >
                      {padIndex(i)}
                    </span>
                    <span className="flex-1 text-[clamp(1.05rem,2.2vw,1.5rem)] font-semibold leading-snug tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-main rtl:font-medium rtl:leading-relaxed rtl:tracking-normal">
                      {name}
                    </span>
                    <span
                      aria-hidden="true"
                      className="hidden shrink-0 font-mono text-xs tracking-[0.2em] text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:inline rtl:-scale-x-100"
                    >
                      →
                    </span>
                  </>
                }
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
