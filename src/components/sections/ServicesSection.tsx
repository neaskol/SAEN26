import Image from "next/image"
import { useTranslations } from "next-intl"
import AnimatedSection from "@/components/ui/AnimatedSection"

const services: {
  key: "bilan" | "strategy" | "training" | "reporting"
  image: string
  accentClass: string
  accentText: string
  accentBg: string
  tag: string
}[] = [
  {
    key: "bilan",
    image: "/photos/usine-pollution-co2-bilan-carbone.webp",
    accentClass: "bg-primary",
    accentText: "text-primary",
    accentBg: "bg-primary/10",
    tag: "Scope 1 · 2 · 3",
  },
  {
    key: "strategy",
    image: "/photos/foret-transition-ecologique-bas-carbone.webp",
    accentClass: "bg-teal",
    accentText: "text-teal",
    accentBg: "bg-teal/10",
    tag: "SBTi · Net Zero",
  },
  {
    key: "training",
    image: "/photos/formation-equipe-strategie-bas-carbone.webp",
    accentClass: "bg-orange",
    accentText: "text-orange",
    accentBg: "bg-orange/10",
    tag: "Ateliers · E-learning",
  },
  {
    key: "reporting",
    image: "/photos/centrale-industrielle-reporting-esg.webp",
    accentClass: "bg-yellow",
    accentText: "text-dark",
    accentBg: "bg-yellow/15",
    tag: "CSRD · ESRS",
  },
]

export default function ServicesSection() {
  const t = useTranslations("services")

  return (
    <section className="py-24 md:py-32 bg-gray-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection direction="up">
        <div className="max-w-2xl mb-14">
          <p className="font-sans text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            {t("sectionLabel")}
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-4" style={{ letterSpacing: "-0.02em" }}>
            {t("title")}
          </h2>
          <p className="font-sans text-muted text-lg leading-relaxed">
            {t("intro")}
          </p>
        </div>
        </AnimatedSection>

        {/* Grid 2×2 — cards avec image + contenu + hover lift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map(({ key, image, accentClass, accentText, accentBg, tag }, i) => (
            <AnimatedSection key={key} direction="up" delay={i * 100}>
            <div
              key={key}
              className="group relative flex flex-col rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image avec zoom au hover */}
              <div className="relative overflow-hidden aspect-[16/9]">
                <Image
                  src={image}
                  alt={t(`items.${key}.title`)}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Overlay gradient bas */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />

                {/* Tag flottant */}
                <div className={`absolute top-4 left-4 ${accentBg} backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full`}>
                  <span className={`font-sans font-semibold text-xs ${accentText}`}>{tag}</span>
                </div>
              </div>

              {/* Bande accent */}
              <div className={`h-1 w-full ${accentClass}`} />

              {/* Contenu */}
              <div className="flex flex-col gap-3 p-6">
                <h3 className="font-display font-bold text-dark text-xl" style={{ letterSpacing: "-0.01em" }}>
                  {t(`items.${key}.title`)}
                </h3>
                <p className="font-sans text-muted text-sm leading-relaxed">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
