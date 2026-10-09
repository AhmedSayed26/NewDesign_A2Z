"use client";

import { useEffect, useState } from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "@/components/LanguageProvider";
import "swiper/css";

function TickerLabel({ text }) {
  const match = String(text).match(/^\[(\d+)\](.*)$/);
  if (!match) return text;

  return (
    <>
      <span dir="ltr" className="tabular-nums">
        {match[1]}
      </span>
      <span className="text-accent">+</span>
      {match[2]}
    </>
  );
}

export default function Ticker() {
  const { t, lang } = useTranslation();
  const items = t("ticker.items", { returnObjects: true });
  const list = Array.isArray(items) ? items : [];
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (!list.length) return null;

  // Duplicate so the loop never looks sparse on wide screens.
  const slides = [...list, ...list];

  return (
    <section
      aria-label={t("ticker.aria")}
      className="relative overflow-hidden border-y border-ink bg-ink text-paper"
    >
      <div className="py-4 sm:py-5">
        <Swiper
          key={lang}
          modules={[Autoplay, FreeMode]}
          className="a2z-ticker"
          dir={lang === "ar" ? "rtl" : "ltr"}
          slidesPerView="auto"
          spaceBetween={0}
          loop
          speed={reduceMotion ? 800 : 7000}
          allowTouchMove={!reduceMotion}
          freeMode={{ enabled: true, momentum: false }}
          autoplay={
            reduceMotion
              ? false
              : {
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
          }
        >
          {slides.map((item, i) => (
            <SwiperSlide key={`${item}-${i}`} className="!w-auto">
              <span className="inline-flex items-center gap-6 px-6 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-paper/85 sm:gap-8 sm:px-8 sm:text-xs rtl:tracking-[0.06em]">
                <TickerLabel text={item} />
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
