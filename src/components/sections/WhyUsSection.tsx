import Image from "next/image"
import { useTranslations } from "next-intl"
import AnimatedSection from "@/components/ui/AnimatedSection"

const accentColors = [
  { border: "border-primary", num: "text-primary", bg: "bg-primary/10" },
  { border: "border-teal",    num: "text-teal",    bg: "bg-teal/10" },
  { border: "border-orange",  num: "text-orange",  bg: "bg-orange/10" },
]

const icons = ["/icons/strategie.webp", "/icons/accompagnement.webp", "/icons/vision.webp"]

export default function WhyUsSection() {
  const t = useTranslations("whyUs")

  const features = [
    { key: "expertise", icon: icons[0], accent: accentColors[0], num: "01" },
    { key: "pragmatic", icon: icons[1], accent: accentColors[1], num: "02" },
    { key: "longterm",  icon: icons[2], accent: accentColors[2], num: "03" },
  ] as const

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Swiss Modernism : asymétrique, ligne décorative */}
        <AnimatedSection direction="up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-8 border-b border-gray-mid line-reveal">
            <div className="max-w-xl">
              <p className="font-sans text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                {t("sectionLabel")}
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-dark" style={{ letterSpacing: "-0.02em" }}>
                {t("title")}
              </h2>
            </div>
            <p className="font-sans text-muted text-base leading-relaxed max-w-sm md:text-right">
              {t("intro")}
            </p>
          </div>
        </AnimatedSection>

        {/* Grid de cards — hover avec lift + border accent */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ key, icon, accent, num }, i) => (
            <AnimatedSection key={key} direction="up" delay={i * 120}>
            <div
              className={`group relative flex flex-col gap-5 p-7 rounded-2xl border-2 ${accent.border} bg-white hover:${accent.bg} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full`}
            >
              {/* Numéro décoratif — Swiss Modernism */}
              <span className={`absolute top-4 right-5 font-display font-bold text-4xl ${accent.num} select-none`} style={{ opacity: 0.25 }} aria-hidden="true">
                {num}
              </span>

              {/* Icône */}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gray-light group-hover:bg-white transition-colors duration-300">
                <Image
                  src={icon}
                  alt=""
                  width={36}
                  height={36}
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>

              {/* Contenu */}
              <div className="flex flex-col gap-2">
                <h3 className="font-display font-bold text-dark text-xl" style={{ letterSpacing: "-0.01em" }}>
                  {t(`features.${key}.title`)}
                </h3>
                <p className="font-sans text-muted text-sm leading-relaxed">
                  {t(`features.${key}.description`)}
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
