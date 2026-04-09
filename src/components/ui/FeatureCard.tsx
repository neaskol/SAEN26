import Image from "next/image"

// Note : icônes en PNG/WebP — affichées via next/image (pas de SVG source disponible)

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group flex flex-col gap-5 p-7 rounded-2xl bg-white border border-gray-mid hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-default">
      {/* Icône dans un cercle */}
      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gray-light group-hover:bg-primary/10 transition-colors duration-200">
        <Image
          src={icon}
          alt=""
          width={32}
          height={32}
          className="object-contain"
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-display font-bold text-dark text-lg" style={{ letterSpacing: "-0.01em" }}>
          {title}
        </h3>
        <p className="font-sans text-muted text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
