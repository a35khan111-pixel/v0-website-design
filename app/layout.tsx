import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import Script from 'next/script'
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
    'Specialized 1-on-1 dyslexia tutoring that transforms struggling readers into confident learners. 25+ years of proven results helping children with learning differences.',
  openGraph: {
    title: 'Reading Resolved | Specialized Dyslexia Tutoring',
    description:
      'Specialized 1-on-1 dyslexia tutoring that transforms struggling readers into confident learners. 25+ years of proven results.',
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
        {/* Google Ads Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-442653461"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-442653461');
          `}
        </Script>
        {/* Google Analytics 4 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HTPGLSBFWD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HTPGLSBFWD');
          `}
        </Script>
      </head>
      {/* Google Ads Tag */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-442653461"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-442653461');
        `}
      </Script>
      {/* Google Analytics 4 */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HTPGLSBFWD"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HTPGLSBFWD');
        `}
      </Script>
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
