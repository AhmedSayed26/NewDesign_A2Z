"use client";

import { useTranslation } from "@/components/LanguageProvider";
import FadeText from "@/components/shared/FadeText/FadeText";

function padIndex(i) {
  return String(i + 1).padStart(2, "0");
}

export default function Skills() {
  const { t } = useTranslation();
  const items = t("skills.items", { returnObjects: true });
  const list = Array.isArray(items) ? items : [];

  return (
    <section
      id="skills"
      aria-label={t("skills.aria")}
      className="relative overflow-hidden bg-surface py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <FadeText
            as="p"
            className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-ink-soft sm:text-xs rtl:text-[13px] rtl:tracking-normal"
            text={t("skills.eyebrow")}
          />
          <FadeText
            as="h2"
            delay={0.08}
            className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink [font-stretch:88%] rtl:font-bold rtl:leading-[1.25] rtl:tracking-normal"
            text={t("skills.title")}
          />
          <FadeText
            as="p"
            delay={0.16}
            className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg rtl:leading-loose"
            text={t("skills.text")}
          />
        </div>

        <ol className="mt-12 grid border-t border-ink/15 sm:mt-16 lg:grid-cols-2">
          {list.map((item, i) => (
            <li
              key={item.title}
              className={`border-b border-ink/15 ${
                i % 2 === 0 ? "lg:border-e lg:pe-10 xl:pe-14" : "lg:ps-10 xl:ps-14"
              }`}
            >
              <FadeText
                as="div"
                delay={0.05 * Math.min(i, 5)}
                className="group flex gap-5 py-7 sm:gap-6 sm:py-8"
                text={
                  <>
                    <span
                      dir="ltr"
                      className="shrink-0 font-mono text-sm font-medium tabular-nums tracking-wider text-ink-soft transition-colors duration-300 group-hover:text-main sm:text-base"
                    >
                      {padIndex(i)}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[clamp(1.1rem,2vw,1.35rem)] font-semibold leading-snug tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-main rtl:font-medium rtl:leading-relaxed rtl:tracking-normal">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base rtl:leading-loose">
                        {item.desc}
                      </p>
                    </div>
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
