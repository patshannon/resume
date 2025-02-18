import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
