import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import Navbar from '@/components/Navbar';
import '@/globals.css'
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: 'Patrick Shannon',
  description: 'Web Developer, Webflow Expert, Halifax, N.S. Canada',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-zinc-900 text-zinc-50">
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
