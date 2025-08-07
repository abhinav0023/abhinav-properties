import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abhinav Properties - Discover the Land Where Your Dreams Take Root | Premium Real Estate",
  description:
    "Abhinav Properties Realty specializes in premium lands and plots across India. Find your dream property with our expert guidance and legal compliance. Trusted by 1000+ clients.",
  keywords:
    "real estate India, land for sale, plots for sale, property investment, agricultural land, residential plots, commercial land",
  authors: [{ name: "Abhinav Properties" }],
  openGraph: {
    title: "Abhinav Properties - Discover the Land Where Your Dreams Take Root",
    description: "Curated properties backed by professional insights and transparent legal processes.",
    type: "website",
    locale: "en_IN",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
