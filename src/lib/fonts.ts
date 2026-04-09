import { Space_Grotesk } from "next/font/google"
import localFont from "next/font/local"

export const fontSans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

// Kinetika — auto-hébergée (Light = corps display, Ultra = grands titres)
export const fontDisplay = localFont({
  src: [
    { path: "../../public/fonts/Kinetika-Light.woff2", weight: "300" },
    { path: "../../public/fonts/Kinetika-Ultra.woff2", weight: "900" },
  ],
  variable: "--font-display-var",
  display: "swap",
})
