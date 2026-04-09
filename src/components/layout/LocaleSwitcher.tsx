"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { useTransition } from "react"

interface LocaleSwitcherProps {
  inverted?: boolean  // true = sur fond sombre (texte blanc)
}

export default function LocaleSwitcher({ inverted = false }: LocaleSwitcherProps) {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  function switchLocale(nextLocale: string) {
    const segments = pathname.split("/")
    segments[1] = nextLocale
    const nextPath = segments.join("/") || "/"
    startTransition(() => router.push(nextPath))
  }

  const baseText = inverted ? "text-white/60 hover:text-white" : "text-dark/50 hover:text-dark"
  const activeText = inverted ? "text-primary font-semibold" : "text-primary font-semibold"
  const divider = inverted ? "text-white/20" : "text-dark/20"

  return (
    <div className="flex items-center gap-0.5 text-sm font-sans font-medium">
      {(["fr", "en"] as const).map((loc, i) => (
        <span key={loc} className="flex items-center gap-0.5">
          {i > 0 && <span className={divider} aria-hidden="true">/</span>}
          <button
            onClick={() => switchLocale(loc)}
            disabled={isPending || locale === loc}
            className={`px-2 py-1 rounded transition-colors duration-150 ${
              locale === loc ? activeText : baseText
            }`}
            aria-label={loc === "fr" ? "Français" : "English"}
            aria-current={locale === loc ? "true" : undefined}
          >
            {loc.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  )
}
