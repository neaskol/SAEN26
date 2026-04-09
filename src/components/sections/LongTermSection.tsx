import Image from "next/image"
import { getTranslations, getLocale } from "next-intl/server"
import Button from "@/components/ui/Button"
import AnimatedSection from "@/components/ui/AnimatedSection"

export default async function LongTermSection() {
  const t = await getTranslations("longTerm")
  const locale = await getLocale()

  const bullets = [t("bullets.0"), t("bullets.1"), t("bullets.2"), t("bullets.3")]

  return (
    <section className="bg-dark py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Texte ── */}
          <AnimatedSection direction="left" className="flex flex-col gap-8 order-2 lg:order-1">
            {/* Label section */}
            <p className="font-sans text-primary font-semibold text-sm uppercase tracking-widest">
              {t("sectionLabel")}
            </p>

            <h2 className="font-display font-bold text-4xl md:text-5xl text-white" style={{ letterSpacing: "-0.02em", lineHeight: "1.1" }}>
              {t("title")}
            </h2>

            <p className="font-sans text-white/65 text-lg leading-relaxed">
              {t("description")}
            </p>

            {/* Bullets avec trait vertical coloré */}
            <ul className="flex flex-col gap-0 border-l-2 border-primary/30 pl-5">
              {bullets.map((bullet, i) => (
                <li key={i} className="relative py-3 flex items-start gap-3 group">
                  <span className="absolute -left-[21px] top-4 w-2.5 h-2.5 rounded-full bg-primary border-2 border-dark group-hover:bg-primary transition-colors" />
                  <span className="font-sans text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 items-center pt-2">
              <Button href={`/${locale}/contact`} variant="primary" size="md">
                {t("cta")}
              </Button>
              <Button href={`/${locale}/a-propos`} variant="outline" size="md">
                {t("learnMore")}
              </Button>
            </div>
          </AnimatedSection>

          {/* ── Photo ── */}
          <AnimatedSection direction="right" delay={150} className="relative order-1 lg:order-2">
            {/* Cadre décoratif offset */}
            <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/20" aria-hidden="true" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/photos/accompagnement-long-terme-decarbonation.webp"
                alt="Accompagnement long terme SAEN26"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Badge flottant — animation float */}
              <div className="absolute bottom-5 left-5 bg-dark/80 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 float-anim">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-white text-sm">{t("badgeTitle")}</span>
                  <span className="font-sans text-white/55 text-xs">{t("badgeSub")}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
