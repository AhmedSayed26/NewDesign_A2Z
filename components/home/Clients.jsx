"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "@/components/LanguageProvider";
import FadeText from "@/components/shared/FadeText/FadeText";
import { CLIENT_LOGOS } from "@/lib/content";
import "swiper/css";

const ROW_A = CLIENT_LOGOS.filter((_, i) => i % 2 === 0);
const ROW_B = CLIENT_LOGOS.filter((_, i) => i % 2 === 1);

function LogoRail({ logos, lang, reverse = false, reduceMotion = false }) {
  const slides = [...logos, ...logos];

  return (
    <Swiper
      key={`${lang}-${reverse ? "b" : "a"}`}
      modules={[Autoplay, FreeMode]}
      className="a2z-clients-rail"
      dir={lang === "ar" ? "rtl" : "ltr"}
      slidesPerView="auto"
      spaceBetween={16}
      loop
      speed={reduceMotion ? 800 : reverse ? 9000 : 7500}
      allowTouchMove={!reduceMotion}
      freeMode={{ enabled: true, momentum: false }}
      autoplay={
        reduceMotion
          ? false
          : {
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: reverse,
            }
      }
      breakpoints={{
        640: { spaceBetween: 20 },
        1024: { spaceBetween: 24 },
      }}
    >
      {slides.map((logo, i) => (
        <SwiperSlide key={`${logo.src}-${i}`} className="!w-auto">
          <div className="flex h-16 w-[8.5rem] items-center justify-center sm:h-20 sm:w-[10rem]">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={64}
              className="max-h-20 w-auto object-contain opacity-70 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0 sm:max-h-35"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function Clients() {
  const { t, lang } = useTranslation();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section aria-label={t("clients.aria")} className="relative overflow-hidden bg-paper py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeText
          as="p"
          className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-ink-soft sm:text-xs rtl:text-[13px] rtl:tracking-normal"
          text={t("clients.eyebrow")}
        />
        <FadeText
          as="h2"
          delay={0.08}
          className="mt-4 max-w-xl text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink [font-stretch:88%] rtl:font-bold rtl:tracking-normal"
          text={t("clients.title")}
        />
        <FadeText
          as="p"
          delay={0.16}
          className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg rtl:leading-loose"
          text={t("clients.text")}
        />
      </div>

      <div className="relative mt-12 space-y-4 sm:mt-14 sm:space-y-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 start-0 z-10 w-12 bg-gradient-to-r from-paper to-transparent sm:w-20 rtl:bg-gradient-to-l"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 end-0 z-10 w-12 bg-gradient-to-l from-paper to-transparent sm:w-20 rtl:bg-gradient-to-r"
        />

        <LogoRail logos={ROW_A} lang={lang} reduceMotion={reduceMotion} />
        <LogoRail logos={ROW_B} lang={lang} reverse reduceMotion={reduceMotion} />
      </div>
    </section>
  );
}
