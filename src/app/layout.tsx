import type { Metadata } from 'next';
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import Navbar from '@/components/Navbar';
import Providers from './providers';
import '@/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

// Characterful optical-size display serif — the personality face.
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  axes: ['opsz', 'SOFT', 'WONK'],
})

// Data / labels / section indices — the "writes code, documents systems" voice.
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Patrick Shannon - Lead Developer & Technical Consultant',
    template: '%s | Patrick Shannon',
  },
  description:
    'Product-minded lead developer and technical consultant specializing in production-safe web platform modernization, technical ownership, and hands-on delivery.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body className="overflow-x-hidden bg-graphite font-sans text-cream antialiased">
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
