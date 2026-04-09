import type { Metadata } from "next"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import ContactForm from "@/components/ui/ContactForm"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact.hero")
  return { title: t("title") }
}

export default function ContactPage() {
  const t = useTranslations("contact")

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-light py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-dark mb-4">
            {t("hero.title")}
          </h1>
          <p className="font-sans text-dark/60 text-xl leading-relaxed max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Formulaire + infos */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Formulaire (3/5) */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Infos contact (2/5) */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="flex flex-col gap-6 p-6 rounded-2xl bg-gray-light">
                <InfoItem
                  label={t("info.emailLabel")}
                  value={t("info.email")}
                  href={`mailto:${t("info.email")}`}
                />
                <InfoItem
                  label={t("info.locationLabel")}
                  value={t("info.location")}
                />
                <InfoItem
                  label={t("info.responseLabel")}
                  value={t("info.response")}
                />
              </div>

              {/* Accent visuel */}
              <div className="rounded-2xl overflow-hidden h-48 bg-dark flex items-center justify-center">
                <span className="font-display font-bold text-5xl text-primary">SAEN26</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function InfoItem({
  label,
  value,
  href,
}: {
  label: string
  value: string
  href?: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-sans text-dark/50 text-xs font-medium uppercase tracking-wider">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className="font-sans text-dark font-medium text-sm hover:text-primary transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="font-sans text-dark font-medium text-sm">{value}</span>
      )}
    </div>
  )
}
