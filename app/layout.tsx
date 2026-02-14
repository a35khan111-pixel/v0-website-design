import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
})

export const viewport: Viewport = {
  themeColor: '#469e94',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Reading Resolved | Specialized Dyslexia Tutoring',
  description:
    'Specialized 1-on-1 dyslexia tutoring that finally makes reading click. 25+ years of proven results helping children with learning differences.',
  openGraph: {
    title: 'Reading Resolved | Specialized Dyslexia Tutoring',
    description:
      'Specialized 1-on-1 dyslexia tutoring that finally makes reading click. 25+ years of proven results.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/images/logo.png" as="image" />
      </head>
      <body
        className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
