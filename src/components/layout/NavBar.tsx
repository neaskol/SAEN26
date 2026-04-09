"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import LocaleSwitcher from "./LocaleSwitcher"

export default function NavBar() {
  const t = useTranslations("nav")
  const locale = useLocale()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    if (!menuOpen) return
    const close = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest("header")) setMenuOpen(false)
    }
    document.addEventListener("click", close)
    return () => document.removeEventListener("click", close)
  }, [menuOpen])

  const links = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/a-propos`, label: t("about") },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        menuOpen
          ? "bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href={`/${locale}`} className="flex-shrink-0" aria-label="SAEN26 — Accueil">
          <Image
            src="/logo/logo-dark.svg"
            alt="SAEN26"
            width={130}
            height={38}
            className="object-contain"
            priority
          />
        </Link>

        {/* Liens desktop — centré */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans font-medium text-sm px-4 py-2 rounded-full text-dark/70 hover:text-dark hover:bg-gray-light transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Switcher + CTA desktop */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <LocaleSwitcher />

          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center bg-primary text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-primary-dark transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            {t("contact")}
          </Link>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9 items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 bg-dark transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-dark transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-dark transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Menu mobile — slide down */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}>
        <div className="bg-white border-t border-gray-100 px-4 pb-5 pt-3 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans font-medium text-dark hover:text-primary transition-colors px-2 py-2.5 rounded-lg hover:bg-gray-light"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`/${locale}/contact`}
            className="font-sans font-medium text-dark hover:text-primary transition-colors px-2 py-2.5 rounded-lg hover:bg-gray-light"
            onClick={() => setMenuOpen(false)}
          >
            {t("contact")}
          </Link>
          <div className="pt-2 border-t border-gray-100 mt-1">
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
