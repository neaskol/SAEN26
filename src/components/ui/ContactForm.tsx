"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import Button from "./Button"

interface FormState {
  name: string
  email: string
  company: string
  message: string
}

export default function ContactForm() {
  const t = useTranslations("contact.form")
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      // TODO: intégrer un service email (Resend, Formspree…)
      await new Promise((res) => setTimeout(res, 800))
      console.log("Contact form submitted:", form)
      setStatus("success")
      setForm({ name: "", email: "", company: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  const inputClass =
    "w-full font-sans text-dark text-sm border border-dark/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-dark/30"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-dark font-medium text-sm">{t("name")}</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t("namePlaceholder")}
            required
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-dark font-medium text-sm">{t("email")}</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t("emailPlaceholder")}
            required
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-dark font-medium text-sm">{t("company")}</label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder={t("companyPlaceholder")}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-dark font-medium text-sm">{t("message")}</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={t("messagePlaceholder")}
          required
          rows={6}
          className={`${inputClass} resize-none`}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={status === "loading"}
        className="self-start"
      >
        {status === "loading" ? "…" : t("submit")}
      </Button>

      {status === "success" && (
        <p className="font-sans text-sm text-primary bg-primary/10 rounded-xl px-4 py-3">
          {t("success")}
        </p>
      )}
      {status === "error" && (
        <p className="font-sans text-sm text-orange bg-orange/10 rounded-xl px-4 py-3">
          {t("error")}
        </p>
      )}
    </form>
  )
}
