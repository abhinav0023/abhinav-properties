<<<<<<< HEAD
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
=======
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
>>>>>>> b56d4fc3fdc50b300541215be91d39f2915e5f26
}

export default function RootLayout({
  children,
<<<<<<< HEAD
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
=======
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
>>>>>>> b56d4fc3fdc50b300541215be91d39f2915e5f26
    </html>
  )
}
