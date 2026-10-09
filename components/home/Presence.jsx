"use client";

import { useTranslation } from "@/components/LanguageProvider";
import Button from "@/components/shared/Button/Button";
import FadeText from "@/components/shared/FadeText/FadeText";

function padIndex(i) {
  return String(i + 1).padStart(2, "0");
}

export default function Presence() {
  const { t } = useTranslation();
  const items = t("presence.items", { returnObjects: true });
  const list = Array.isArray(items) ? items : [];

  return (
    <section
      id="presence"
      aria-label={t("presence.aria")}
      className="relative overflow-hidden bg-paper py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <FadeText
            as="p"
            className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-ink-soft sm:text-xs rtl:text-[13px] rtl:tracking-normal"
            text={t("presence.eyebrow")}
          />
          <FadeText
            as="h2"
            delay={0.08}
            className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink [font-stretch:88%] rtl:font-bold rtl:leading-[1.25] rtl:tracking-normal"
            text={t("presence.title")}
          />
          <FadeText
            as="p"
            delay={0.16}
            className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg rtl:leading-loose"
            text={t("presence.text")}
          />
        </div>

        <ol className="mt-12 border-t border-line sm:mt-16">
          {list.map((item, i) => (
            <li key={item.title} className="border-b border-line">
              <FadeText
                as="div"
                delay={0.05 * Math.min(i, 5)}
                className="grid gap-3 py-7 sm:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.1fr)] sm:items-baseline sm:gap-8 sm:py-8 lg:gap-12"
                text={
                  <>
                    <span
                      dir="ltr"
                      className="font-mono text-sm font-medium tabular-nums tracking-wider text-main sm:text-base"
                    >
                      {padIndex(i)}
                    </span>
                    <h3 className="text-[clamp(1.15rem,2.2vw,1.45rem)] font-semibold leading-snug tracking-[-0.02em] text-ink rtl:font-medium rtl:leading-relaxed rtl:tracking-normal">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-ink-soft rtl:leading-loose">
                      {item.body}
                    </p>
                  </>
                }
              />
            </li>
          ))}
        </ol>

        <FadeText
          as="div"
          delay={0.35}
          className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-ink pt-10 sm:mt-16 sm:flex-row sm:items-center sm:pt-12"
          text={
            <>
              <p className="text-[clamp(2.5rem,8vw,4.5rem)] font-extrabold leading-none tracking-[-0.05em] text-ink [font-stretch:80%]">
                {t("presence.ctaMark")}
              </p>
              <Button href="/contact" variant="solid" size="lg">
                {t("presence.cta")}
              </Button>
            </>
          }
        />
      </div>
    </section>
  );
}
