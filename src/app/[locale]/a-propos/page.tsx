import type { Metadata } from "next"
import Image from "next/image"
import { getTranslations, getLocale } from "next-intl/server"
import Button from "@/components/ui/Button"
import FeatureCard from "@/components/ui/FeatureCard"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about.hero")
  return { title: t("title") }
}

export default async function AboutPage() {
  const t = await getTranslations("about")
  const locale = await getLocale()

  const values = [
    { icon: "/icons/strategie.webp", title: t("values.items.0.title"), description: t("values.items.0.description") },
    { icon: "/icons/rapport.webp",   title: t("values.items.1.title"), description: t("values.items.1.description") },
    { icon: "/icons/missions.webp",  title: t("values.items.2.title"), description: t("values.items.2.description") },
  ]

  return (
    <>
      {/* Hero interne */}
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

      {/* Histoire */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-dark">
                {t("story.title")}
              </h2>
              <p className="font-sans text-dark/70 text-lg leading-relaxed">
                {t("story.body")}
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/photos/strategie-transition-energetique.webp"
                alt="L'équipe SAEN26"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-dark text-center mb-14">
            {t("values.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val) => (
              <FeatureCard key={val.icon} {...val} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA bas de page */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-white/90 text-lg mb-6">
            {t("cta.description")}
          </p>
          <Button href={`/${locale}/contact`} variant="dark" size="lg">
            {t("cta.label")}
          </Button>
        </div>
      </section>
    </>
  )
}
