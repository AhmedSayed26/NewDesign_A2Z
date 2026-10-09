"use client";

import { useState } from "react";
import { useTranslation } from "@/components/LanguageProvider";
import FadeText from "@/components/shared/FadeText/FadeText";

function padIndex(i) {
  return String(i + 1).padStart(2, "0");
}

export default function Build() {
  const { t } = useTranslation();
  const steps = t("build.steps", { returnObjects: true });
  const list = Array.isArray(steps) ? steps : [];
  const [active, setActive] = useState(0);
  const progress =
    list.length > 1 ? `${(active / (list.length - 1)) * 100}%` : "0%";

  return (
    <section
      id="methodology"
      aria-label={t("build.aria")}
      className="relative overflow-hidden bg-ink py-24 text-paper sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_0%,color-mix(in_srgb,var(--main-color)_35%,transparent),transparent_55%),radial-gradient(ellipse_55%_45%_at_0%_100%,color-mix(in_srgb,var(--accent-color)_14%,transparent),transparent_50%)]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <FadeText
            as="p"
            className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-paper/45 sm:text-xs rtl:text-[13px] rtl:tracking-normal"
            text={t("build.eyebrow")}
          />
          <FadeText
            as="h2"
            delay={0.1}
            className="mt-5 max-w-md text-[clamp(2.1rem,4.6vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-paper [font-stretch:88%] rtl:font-bold rtl:leading-[1.28] rtl:tracking-normal"
            text={t("build.title")}
          />
          <FadeText
            as="p"
            delay={0.2}
            className="mt-6 max-w-md text-base leading-relaxed text-paper/55 sm:text-lg rtl:leading-loose"
            text={t("build.text")}
          />

          <FadeText
            as="p"
            delay={0.3}
            className="mt-10 hidden items-center font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-accent lg:flex rtl:tracking-normal"
            text={
              <>
                <span dir="ltr">{padIndex(active)}</span>
                <span className="mx-3 text-paper/25">/</span>
                <span dir="ltr">{String(list.length).padStart(2, "0")}</span>
              </>
            }
          />
        </div>

        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute inset-y-4 start-[0.7rem] w-px bg-paper/10 sm:start-[0.85rem]"
          />
          <span
            aria-hidden="true"
            className="absolute start-[0.7rem] top-4 w-px origin-top bg-accent transition-[height] duration-500 ease-out sm:start-[0.85rem]"
            style={{ height: `min(${progress}, calc(100% - 2rem))` }}
          />

          {list.map((step, i) => {
            const isActive = active === i;

            return (
              <li key={step.title}>
                <FadeText
                  as="div"
                  delay={0.08 * i}
                  className="relative"
                  text={
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      aria-current={isActive ? "step" : undefined}
                      className="group relative flex w-full gap-5 py-6 text-start sm:gap-7 sm:py-8"
                    >
                      <span className="relative z-10 flex w-6 shrink-0 justify-center pt-2">
                        <span
                          className={`h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                            isActive
                              ? "scale-125 border-accent bg-accent shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent-color)_25%,transparent)]"
                              : "border-paper/40 bg-ink group-hover:border-accent/80"
                          }`}
                        />
                      </span>

                      <span className="min-w-0 flex-1 border-b border-paper/10 pb-6 sm:pb-8">
                        <span className="flex items-start justify-between gap-4">
                          <span
                            dir="ltr"
                            className={`pt-1 font-mono text-xs font-medium tracking-[0.22em] transition-colors duration-300 ${
                              isActive ? "text-accent" : "text-paper/35"
                            }`}
                          >
                            {padIndex(i)}
                          </span>
                          <span
                            aria-hidden="true"
                            className={`hidden select-none text-[clamp(3.25rem,7vw,5.25rem)] font-extrabold leading-none tracking-[-0.07em] transition-all duration-500 [font-stretch:72%] sm:block ${
                              isActive
                                ? "translate-y-0 text-paper/[0.07] opacity-100"
                                : "translate-y-1 text-paper/[0.03] opacity-60"
                            }`}
                          >
                            {padIndex(i)}
                          </span>
                        </span>

                        <span
                          className={`mt-2 block max-w-lg text-[clamp(1.25rem,2.5vw,1.7rem)] font-semibold leading-snug tracking-[-0.025em] transition-colors duration-300 rtl:font-medium rtl:leading-relaxed rtl:tracking-normal ${
                            isActive ? "text-paper" : "text-paper/65 group-hover:text-paper"
                          }`}
                        >
                          {step.title}
                        </span>
                        <span
                          className={`mt-3 block max-w-xl text-sm leading-relaxed transition-colors duration-300 sm:text-base rtl:leading-loose ${
                            isActive
                              ? "text-paper/65"
                              : "text-paper/38 group-hover:text-paper/55"
                          }`}
                        >
                          {step.body}
                        </span>
                      </span>
                    </button>
                  }
                />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
