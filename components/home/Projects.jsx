"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "@/components/LanguageProvider";
import Button from "@/components/shared/Button/Button";
import FadeText from "@/components/shared/FadeText/FadeText";
import "swiper/css";

function padIndex(i) {
  return String(i + 1).padStart(2, "0");
}

export default function Projects() {
  const { t, lang } = useTranslation();
  const items = t("projects.items", { returnObjects: true });
  const list = Array.isArray(items) ? items : [];
  const [active, setActive] = useState(0);
  const [swiper, setSwiper] = useState(null);

  return (
    <section
      id="projects"
      aria-label={t("projects.aria")}
      className="relative scroll-mt-16 overflow-hidden bg-paper py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <FadeText
              as="p"
              className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-ink-soft sm:text-xs rtl:text-[13px] rtl:tracking-normal"
              text={t("projects.eyebrow")}
            />
            <FadeText
              as="h2"
              delay={0.08}
              className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink [font-stretch:88%] rtl:font-bold rtl:leading-[1.25] rtl:tracking-normal"
              text={t("projects.title")}
            />
            <FadeText
              as="p"
              delay={0.16}
              className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg rtl:leading-loose"
              text={t("projects.text")}
            />
          </div>

          <FadeText
            as="div"
            delay={0.2}
            className="flex flex-wrap items-center gap-4 sm:gap-5"
            text={
              <>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-ink-soft rtl:tracking-normal">
                  <span dir="ltr">{padIndex(active)}</span>
                  <span className="mx-2 text-line">/</span>
                  <span dir="ltr">{String(list.length).padStart(2, "0")}</span>
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous project"
                    onClick={() => swiper?.slidePrev()}
                    className="inline-flex h-11 w-11 cursor-pointer items-center justify-center border border-ink text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main rtl:rotate-180"
                  >
                    <span aria-hidden="true">←</span>
                  </button>
                  <button
                    type="button"
                    aria-label="Next project"
                    onClick={() => swiper?.slideNext()}
                    className="inline-flex h-11 w-11 cursor-pointer items-center justify-center border border-ink text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main rtl:rotate-180"
                  >
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
                <Link href="/#portfolio">
                  <Button size="lg">
                    {t("projects.viewAll")}
                  </Button>
                </Link>
              </>
            }
          />
        </div>
      </div>

      <div className="relative mt-12 sm:mt-14 lg:mt-16">
        <Swiper
          key={lang}
          modules={[FreeMode]}
          className="a2z-projects"
          dir={lang === "ar" ? "rtl" : "ltr"}
          slidesPerView="auto"
          spaceBetween={20}
          freeMode={{ enabled: true, sticky: true }}
          grabCursor
          onSwiper={setSwiper}
          onSlideChange={(instance) => setActive(instance.activeIndex)}
          breakpoints={{
            640: { spaceBetween: 24 },
            1024: { spaceBetween: 28 },
          }}
          style={{
            paddingInlineStart: "max(1.25rem, calc((100vw - 80rem) / 2 + 2rem))",
            paddingInlineEnd: "1.25rem",
          }}
        >
          {list.map((project, i) => (
            <SwiperSlide
              key={`${project.name}-${i}`}
              className="!w-[min(85vw,28rem)] sm:!w-[min(70vw,34rem)] lg:!w-[min(58vw,40rem)]"
            >
              <Link
                href="/portfolio"
                className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-main"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-surface">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 40rem"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10"
                  />
                </div>

                <div className="mt-5 flex items-start gap-4 sm:mt-6 sm:gap-5">
                  <span
                    dir="ltr"
                    className="pt-1 font-mono text-xs font-medium tracking-[0.2em] text-main"
                  >
                    {padIndex(i)}
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-soft sm:text-[11px] rtl:text-xs rtl:tracking-normal">
                      {project.tag}
                    </p>
                    <h3 className="mt-1.5 text-[clamp(1.2rem,2.4vw,1.65rem)] font-semibold leading-snug tracking-[-0.025em] text-ink transition-colors duration-300 group-hover:text-main rtl:font-medium rtl:leading-relaxed rtl:tracking-normal">
                      {project.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <FadeText
          as="p"
          delay={0.35}
          className="mx-auto mt-10 max-w-7xl px-5 font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-ink-soft sm:mt-12 sm:px-8 sm:text-[11px] rtl:tracking-normal"
          text={t("projects.swipe")}
        />
      </div>
    </section>
  );
}
