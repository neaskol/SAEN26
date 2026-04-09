import Image from "next/image"

interface ServiceCardProps {
  image: string
  title: string
  description: string
  accentColor?: "primary" | "yellow" | "orange" | "teal"
}

const accentClasses: Record<NonNullable<ServiceCardProps["accentColor"]>, string> = {
  primary: "bg-primary",
  yellow: "bg-yellow",
  orange: "bg-orange",
  teal: "bg-teal",
}

export default function ServiceCard({
  image,
  title,
  description,
  accentColor = "primary",
}: ServiceCardProps) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className={`h-1 w-full ${accentClasses[accentColor]}`} />
      <div className="flex flex-col gap-2 p-5">
        <h3 className="font-display font-bold text-dark text-lg">{title}</h3>
        <p className="font-sans text-dark/70 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
