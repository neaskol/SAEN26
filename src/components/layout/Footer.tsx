import Image from "next/image"
import Link from "next/link"
import { getTranslations, getLocale } from "next-intl/server"
import LocaleSwitcher from "./LocaleSwitcher"

export default async function Footer() {
  const t = await getTranslations("footer")
  const tNav = await getTranslations("nav")
  const locale = await getLocale()

  const links = [
    { href: `/${locale}`, label: tNav("home") },
    { href: `/${locale}/a-propos`, label: tNav("about") },
    { href: `/${locale}/contact`, label: tNav("contact") },
  ]

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo/logo-dark.png"
              alt="SAEN26"
              width={140}
              height={99}
              className="object-contain"
            />
            <p className="font-sans text-white/60 text-sm leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <p className="font-sans font-semibold text-white text-sm uppercase tracking-wider">
              {t("navigation")}
            </p>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-white/60 hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact + langue */}
          <div className="flex flex-col gap-3">
            <p className="font-sans font-semibold text-white text-sm uppercase tracking-wider">
              {tNav("contact")}
            </p>
            <a
              href="mailto:contact@saen26.fr"
              className="font-sans text-white/60 hover:text-primary transition-colors text-sm"
            >
              contact@saen26.fr
            </a>
            <div className="mt-2">
              <LocaleSwitcher />
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/40 text-xs">{t("rights")}</p>
          <Link
            href={`/${locale}/mentions-legales`}
            className="font-sans text-white/40 hover:text-white/70 text-xs transition-colors"
          >
            {t("legal")}
          </Link>
        </div>
      </div>
    </footer>
  )
}
