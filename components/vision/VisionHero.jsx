"use client";

import { useEffect, useId, useRef } from "react";
import { useTranslation } from "@/components/LanguageProvider";
import FadeText from "@/components/shared/FadeText/FadeText";

const LINE_DELAY = 0.12;
const RING_RADIUS = 44;
// Colour is applied per line: two text-* utilities on one element resolve by stylesheet order, not class order.
const HEADLINE =
  "block text-[clamp(2.4rem,6.4vw,5rem)] font-extrabold leading-[1] tracking-[-0.045em] [font-stretch:86%] rtl:font-bold rtl:leading-[1.25] rtl:tracking-normal";
// Ring strings of different length (EN ~88 chars, AR ~58) are repeated to a similar length,
// so the fitted font size lands in the same range in both languages.
const RING_TARGET_CHARS = 88;

/**
 * Text running around a circle, with a Z in the middle. The font size is fitted so the
 * string always closes the loop exactly, whatever the language or font; letter-spacing
 * would break Arabic joining, so size is the only thing adjusted.
 */
function Ring({ text, className = "" }) {
  const pathId = useId();
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const fit = () => {
      el.setAttribute("font-size", "6");
      const length = el.getComputedTextLength();
      if (length > 0) {
        const circumference = 2 * Math.PI * RING_RADIUS;
        el.setAttribute("font-size", String(Math.min(9, (6 * (circumference - 1)) / length)));
      }
    };

    fit();
    document.fonts?.ready.then(fit);
  }, [text]);

  return (
    <div aria-hidden="true" className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="animate-a2z-spin absolute inset-0 size-full overflow-visible"
      >
        <defs>
          <path
            id={pathId}
            d={`M50,50 m-${RING_RADIUS},0 a${RING_RADIUS},${RING_RADIUS} 0 1,1 ${RING_RADIUS * 2},0 a${RING_RADIUS},${RING_RADIUS} 0 1,1 -${RING_RADIUS * 2},0`}
          />
        </defs>
        {/* Chrome drops RTL runs on a textPath; the ring loops, so LTR run order reads fine. */}
        <text
          ref={textRef}
          direction="ltr"
          className="fill-paper/60 font-mono"
          fontWeight="500"
        >
          <textPath href={`#${pathId}`}>
            {text.repeat(
              Math.max(1, Math.round(RING_TARGET_CHARS / text.length)),
            )}
          </textPath>
        </text>
      </svg>
      {/* <span className="absolute inset-0 grid  select-none place-items-center text-[clamp(5rem,13vw,9rem)] font-extrabold leading-none tracking-[-0.06em] text-accent [font-stretch:72%]">
        A<span className="text-md !inline">2</span>Z
      </span> */}

      <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap select-none text-[clamp(5rem,13vw,9rem)] font-extrabold leading-none tracking-[-0.06em] text-accent [font-stretch:72%]">
        A
        <span className="relative top-[0.08em] inline-block text-[0.8em]">
          2
        </span>
        Z
      </span>
    </div>
  );
}

export default function VisionHero() {
  const { t, lang } = useTranslation();

  return (
    <section
      aria-label={t("vision.hero.aria")}
      className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden bg-ink text-paper"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_90%_-5%,color-mix(in_srgb,var(--main-color)_48%,transparent),transparent_55%),radial-gradient(ellipse_60%_50%_at_0%_100%,color-mix(in_srgb,var(--accent-color)_18%,transparent),transparent_52%),#141413]" />
        <div className="animate-a2z-hero-sheen absolute -bottom-1/3 -start-[15%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--main-color)_26%,transparent),transparent_68%)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-end gap-14 px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-40 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:pb-24">
        <div>
          <FadeText
            as="p"
            startOnVisible={false}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-paper/50 sm:text-xs rtl:tracking-[0.06em]"
            text={
              <>
                <span>{t("vision.hero.eyebrow")}</span>
                <span aria-hidden="true" className="text-accent">
                  ·
                </span>
                <span lang={lang === "en" ? "ar" : "en"}>{t("vision.hero.eyebrowAlt")}</span>
              </>
            }
          />

          <h1 className="mt-8 sm:mt-10">
            <FadeText as="span" startOnVisible={false} delay={LINE_DELAY} className={`${HEADLINE} text-paper`} text={t("vision.hero.l1")} />
            <FadeText as="span" startOnVisible={false} delay={LINE_DELAY * 2} className={`${HEADLINE} text-paper`} text={t("vision.hero.l2")} />
            <FadeText as="span" startOnVisible={false} delay={LINE_DELAY * 3} className={`${HEADLINE} text-paper`} text={t("vision.hero.l3")} />
            <FadeText
              as="span"
              startOnVisible={false}
              delay={LINE_DELAY * 4}
              className={`${HEADLINE} text-accent`}
              text={t("vision.hero.l4")}
            />
          </h1>
        </div>

        <FadeText
          as="div"
          startOnVisible={false}
          delay={LINE_DELAY * 5}
          duration={1.2}
          className="justify-self-start lg:justify-self-end"
          text={<Ring text={t("vision.hero.ring")} className="size-56 sm:size-64 lg:size-80 xl:size-96" />}
        />
      </div>
    </section>
  );
}
