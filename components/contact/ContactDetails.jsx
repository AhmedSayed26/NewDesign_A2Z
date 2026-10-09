"use client";

import { useTranslation } from "@/components/LanguageProvider";
import Button from "@/components/shared/Button/Button";
import FadeText from "@/components/shared/FadeText/FadeText";
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_URL } from "@/lib/links";

const LABEL =
  "font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-ink-soft sm:text-xs rtl:text-[13px] rtl:tracking-normal";
const VALUE =
  "text-[clamp(1.15rem,2vw,1.5rem)] font-semibold leading-snug tracking-[-0.02em] text-ink rtl:font-medium rtl:tracking-normal";
const LINK = `${VALUE} break-all transition-colors duration-300 hover:text-main focus-visible:text-main focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-main`;

export default function ContactDetails() {
  const { t } = useTranslation();

  const rows = [
    { key: "office", label: t("common.office"), value: <p className={VALUE}>{t("common.address")}</p> },
    {
      key: "email",
      label: t("common.email"),
      value: (
        <a href={`mailto:${CONTACT_EMAIL}`} dir="ltr" className={`${LINK} inline-block`}>
          {CONTACT_EMAIL}
        </a>
      ),
    },
    {
      key: "phone",
      label: t("common.phone"),
      value: (
        <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`} dir="ltr" className={`${LINK} inline-block`}>
          {CONTACT_PHONE}
        </a>
      ),
    },
    {
      key: "whatsapp",
      label: t("common.whatsapp"),
      value: (
        <Button href={WHATSAPP_URL} variant="solid">
          {t("common.letsTalk")}
        </Button>
      ),
    },
  ];

  return (
    <dl aria-label={t("contactPage.detailsAria")} className="border-t border-ink">
      {rows.map((row, i) => (
        <FadeText
          key={row.key}
          as="div"
          delay={0.06 * i}
          className="grid gap-3 border-b border-line py-6 sm:grid-cols-[8rem_minmax(0,1fr)] sm:items-baseline sm:gap-6 sm:py-7"
          text={
            <>
              <dt className={LABEL}>{row.label}</dt>
              <dd>{row.value}</dd>
            </>
          }
        />
      ))}
    </dl>
  );
}
