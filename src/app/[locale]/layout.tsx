import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { fontSans, fontDisplay } from "@/lib/fonts"
import NavBar from "@/components/layout/NavBar"
import Footer from "@/components/layout/Footer"
import "../globals.css"

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }]
}

export const metadata: Metadata = {
  title: {
    default: "SAEN26 — Conseil en transition bas-carbone",
    template: "%s | SAEN26",
  },
  description:
    "SAEN26 accompagne les entreprises dans leur stratégie de décarbonation : bilan carbone, plan d'action et reporting ESG.",
  openGraph: {
    siteName: "SAEN26",
    type: "website",
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${fontSans.variable} ${fontDisplay.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
