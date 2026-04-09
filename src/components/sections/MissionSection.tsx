import Image from "next/image"
import { useTranslations } from "next-intl"

export default function MissionSection() {
  const t = useTranslations("mission")

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden relative">
      {/* Fond décoratif — grand cercle primary très transparent */}
      <div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(163,181,48,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Texte & CTA ── */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px bg-primary w-10" aria-hidden="true" />
              <p className="font-sans text-primary font-semibold text-sm uppercase tracking-widest">
                {t("sectionLabel")}
              </p>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl text-dark" style={{ letterSpacing: "-0.02em", lineHeight: "1.1" }}>
              {t("title")}
            </h2>

            <p className="font-sans text-muted text-lg leading-relaxed max-w-lg">
              {t("description")}
            </p>

            {/* Valeurs clés inline */}
            <div className="flex flex-wrap gap-3 pt-2">
              {(["rigueur", "transparence", "impact"] as const).map((v) => (
                <span
                  key={v}
                  className="font-sans font-medium text-sm text-dark border border-gray-mid px-4 py-2 rounded-full hover:border-primary hover:text-primary transition-colors duration-200 cursor-default"
                >
                  {t(`values.${v}`)}
                </span>
              ))}
            </div>
          </div>

          {/* ── Visuel logo sur fond dark ── */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl bg-dark flex items-center justify-center overflow-hidden">
              {/* Grille décorative */}
              <div className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: "linear-gradient(#a3b530 1px, transparent 1px), linear-gradient(90deg, #a3b530 1px, transparent 1px)",
                  backgroundSize: "40px 40px"
                }}
                aria-hidden="true"
              />
              {/* Cercle glow */}
              <div className="absolute w-48 h-48 rounded-full" style={{ background: "radial-gradient(circle, rgba(163,181,48,0.15) 0%, transparent 70%)" }} aria-hidden="true" />

              <Image
                src="/logo/logo-light.svg"
                alt="SAEN26"
                width={220}
                height={64}
                className="relative z-10 object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
