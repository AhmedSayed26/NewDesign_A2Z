"use client";

import { useTranslation } from "@/components/LanguageProvider";
import FadeText from "@/components/shared/FadeText/FadeText";

function padIndex(i) {
  return String(i + 1).padStart(2, "0");
}

export default function VisionValues() {
  const { t } = useTranslation();
  const items = t("vision.values.items", { returnObjects: true });
  const list = Array.isArray(items) ? items : [];

  return (
    <section
      id="values"
      aria-label={t("vision.values.aria")}
      className="relative overflow-hidden bg-ink py-20 text-paper sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_100%_0%,color-mix(in_srgb,var(--main-color)_32%,transparent),transparent_55%),radial-gradient(ellipse_50%_40%_at_0%_100%,color-mix(in_srgb,var(--accent-color)_14%,transparent),transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[7rem_minmax(0,1fr)] lg:gap-14 xl:gap-20">
          <FadeText
            as="p"
            className="font-mono text-sm font-medium tracking-[0.2em] text-accent"
            text={<span dir="ltr">{t("vision.values.index")}</span>}
          />

          <div className="min-w-0">
            <FadeText
              as="p"
              delay={0.06}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-paper/45 sm:text-xs rtl:text-[13px] rtl:tracking-normal"
              text={t("vision.values.eyebrow")}
            />
            <FadeText
              as="h2"
              delay={0.12}
              className="mt-4 max-w-xl text-[clamp(1.85rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-paper [font-stretch:90%] rtl:font-bold rtl:leading-[1.3] rtl:tracking-normal"
              text={t("vision.values.title")}
            />

            <ol className="mt-12 grid gap-x-8 gap-y-0 sm:mt-14 sm:grid-cols-2 xl:grid-cols-4">
              {list.map((item, i) => (
                <li key={item.title} className="border-t border-paper/15">
                  <FadeText
                    as="div"
                    delay={0.16 + i * 0.08}
                    className="group flex h-full flex-col gap-10 py-8 sm:py-10"
                    text={
                      <>
                        <span
                          dir="ltr"
                          className="font-mono text-sm font-medium tabular-nums tracking-wider text-accent sm:text-base"
                        >
                          {padIndex(i)}
                        </span>
                        <div>
                          <h3 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-tight tracking-[-0.03em] text-paper transition-colors duration-300 group-hover:text-accent rtl:font-bold rtl:leading-snug rtl:tracking-normal">
                            {item.title}
                          </h3>
                          <p className="mt-4 text-base leading-relaxed text-paper/55 rtl:leading-loose">{item.body}</p>
                        </div>
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
