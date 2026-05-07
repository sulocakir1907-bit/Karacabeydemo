import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Karaca Bey | Luxury Premium Textiles',
  description: 'Curated collections for exquisite living. Premium luxury textiles for discerning clients across Russia, CIS, and Europe. Experience contemporary heritage in every thread.',
  keywords: ['luxury textiles', 'premium fabrics', 'velvet', 'satin', 'silk', 'home decor', 'Russia', 'Turkey', 'Europe'],
  authors: [{ name: 'Karaca Bey' }],
  openGraph: {
    title: 'Karaca Bey | Luxury Premium Textiles',
    description: 'Curated collections for exquisite living. Premium luxury textiles for discerning clients.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['tr_TR', 'ru_RU'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karaca Bey | Luxury Premium Textiles',
    description: 'Curated collections for exquisite living.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FCFAF5' },
    { media: '(prefers-color-scheme: dark)', color: '#0A1128' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} bg-ivory`}>
      <body className="font-serif antialiased bg-ivory text-navy selection:bg-gold/30 selection:text-navy">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
