"use client";

import { useState } from "react";
import { useTranslation } from "@/components/LanguageProvider";
import Button from "@/components/shared/Button/Button";
import { CONTACT_EMAIL } from "@/lib/links";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY = { name: "", email: "", company: "", phone: "", message: "" };

// `dir` keeps Latin-only values (email, phone) readable inside an RTL page.
const FIELDS = [
  { id: "name", label: "form.name", type: "text", autoComplete: "name", required: true },
  { id: "email", label: "form.email", type: "email", autoComplete: "email", required: true, dir: "ltr" },
  { id: "company", label: "form.company", type: "text", autoComplete: "organization" },
  { id: "phone", label: "form.phone", type: "tel", autoComplete: "tel", dir: "ltr" },
];

const CONTROL =
  "w-full rounded-none border-0 border-b bg-transparent px-0 py-3 text-base text-ink outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-ink-soft/50 focus:border-main focus:shadow-[0_1px_0_0_var(--main-color)]";

export default function ContactForm() {
  const { t } = useTranslation();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const setValue = (id) => (e) => {
    setValues((v) => ({ ...v, [id]: e.target.value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const validate = () => {
    const next = {};
    for (const id of ["name", "email", "message"]) {
      if (!values[id].trim()) next[id] = "form.errorRequired";
    }
    if (!next.email && !EMAIL_PATTERN.test(values.email.trim())) next.email = "form.errorEmail";
    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    setSubmitted(false);

    const firstInvalid = Object.keys(next)[0];
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    // No backend yet: hand the message to the visitor's own mail app, nothing leaves the browser.
    const details = [
      `${t("form.name").replace(/\s*\*$/, "")}: ${values.name.trim()}`,
      `${t("form.email").replace(/\s*\*$/, "")}: ${values.email.trim()}`,
      values.company.trim() && `${t("form.company")}: ${values.company.trim()}`,
      values.phone.trim() && `${t("form.phone")}: ${values.phone.trim()}`,
    ].filter(Boolean);
    const body = [...details, "", values.message.trim()].join("\n");

    const subject = `A2Z — ${values.name.trim()}`;
    setSubmitted(true);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const hasErrors = Object.values(errors).some(Boolean);

  const renderError = (id) =>
    errors[id] ? (
      <p id={`contact-${id}-error`} className="mt-2 text-sm text-[#b3261e]">
        {t(errors[id])}
      </p>
    ) : null;

  const controlProps = (id, { className = "", ...extra } = {}) => ({
    id: `contact-${id}`,
    name: id,
    value: values[id],
    onChange: setValue(id),
    "aria-invalid": errors[id] ? true : undefined,
    "aria-describedby": errors[id] ? `contact-${id}-error` : undefined,
    className: `${CONTROL} ${errors[id] ? "border-[#b3261e]" : "border-ink/25"} ${className}`.trim(),
    ...extra,
  });

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      aria-label={t("contactPage.formAria")}
      className="border border-ink bg-paper"
    >
      <div className="flex items-center justify-between gap-4 border-b border-ink px-6 py-4 sm:px-10">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-ink sm:text-xs rtl:text-[13px] rtl:tracking-normal">
          {t("form.send")}
        </p>
        <p dir="ltr" className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-ink-soft sm:text-xs">
          {t("form.brand")}
        </p>
      </div>

      <div className="grid gap-x-10 gap-y-8 px-6 py-8 sm:grid-cols-2 sm:px-10 sm:py-10">
        {FIELDS.map((f) => (
          <div key={f.id}>
            <label
              htmlFor={`contact-${f.id}`}
              className="block font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft sm:text-xs rtl:text-[13px] rtl:tracking-normal"
            >
              {t(f.label)}
            </label>
            <input
              {...controlProps(f.id, { type: f.type, autoComplete: f.autoComplete, dir: f.dir })}
              {...(f.required ? { required: true } : {})}
            />
            {renderError(f.id)}
          </div>
        ))}

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-message"
            className="block font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft sm:text-xs rtl:text-[13px] rtl:tracking-normal"
          >
            {t("form.message")}
          </label>
          <textarea {...controlProps("message", { rows: 5, dir: "auto", required: true, className: "resize-y" })} />
          {renderError("message")}
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 sm:col-span-2">
          <Button type="submit" variant="solid" size="lg">
            {t("form.submit")}
          </Button>
          <p role="status" className="text-sm text-ink-soft">
            {hasErrors ? <span className="text-[#b3261e]">{t("form.fixErrors")}</span> : submitted ? t("form.status") : null}
          </p>
        </div>
      </div>
    </form>
  );
}
