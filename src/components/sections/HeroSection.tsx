import Image from "next/image"
import { getTranslations, getLocale } from "next-intl/server"
import Button from "@/components/ui/Button"
import CountUp from "@/components/ui/CountUp"

export default async function HeroSection() {
  const t = await getTranslations("hero")
  const locale = await getLocale()

  const stats = [
    { target: 200, suffix: "+", label: locale === "fr" ? "Entreprises accompagnées" : "Companies supported" },
    { target: 98,  suffix: "%", label: locale === "fr" ? "Clients satisfaits" : "Satisfied clients" },
    { target: 40,  suffix: "%", label: locale === "fr" ? "Réduction CO₂ moyenne" : "Average CO₂ reduction" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/photos/foret-transition-ecologique-bas-carbone.webp"
          alt="Forêt et CO2 — transition bas-carbone"
          fill
          sizes="100vw"
          className="object-cover hero-image-anim"
          priority
        />
        {/* Overlay multicouche pour contraste renforcé */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark/85 via-dark/60 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
      </div>

      {/* Grille décorative Swiss Modernism */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#a3b530 1px, transparent 1px), linear-gradient(90deg, #a3b530 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      {/* Contenu centré */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col items-center text-center gap-8">

          {/* Badge animé — slide down depuis le haut + float */}
          <div
            className="inline-flex items-center gap-2.5 bg-primary/15 border border-primary/30 text-primary font-sans text-sm font-semibold px-5 py-2 rounded-full backdrop-blur-sm hero-anim-badge float-anim"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            {t("badge")}
          </div>

          {/* Titre H1 — Swiss Modernism : grande typographie, letter-spacing serré */}
          <h1
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white max-w-4xl text-balance hero-anim-title"
            style={{ letterSpacing: "-0.03em", lineHeight: "1.05" }}
          >
            {t("headline")}
          </h1>

          {/* Sous-titre */}
          <p className="font-sans text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed hero-anim-sub">
            {t("subheadline")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center hero-anim-cta">
            <Button href={`/${locale}/contact`} variant="primary" size="lg">
              {t("cta")}
            </Button>
            <Button href={`/${locale}/a-propos`} variant="outline" size="lg">
              {t("scrollDown")}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </div>

          {/* Stats — preuve sociale avec count-up */}
          <div className="mt-8 grid grid-cols-3 gap-8 border-t border-white/15 pt-8 w-full max-w-lg hero-anim-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <CountUp
                  target={stat.target}
                  suffix={stat.suffix}
                  duration={1800}
                  className="font-display font-bold text-2xl sm:text-3xl text-primary"
                />
                <span className="font-sans text-xs text-white/55 text-center leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flèche scroll — animation bounce */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce" aria-hidden="true">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
