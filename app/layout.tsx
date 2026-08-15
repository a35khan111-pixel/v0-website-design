import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnalyticsTracker } from '@/components/analytics-tracker'

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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MFK3C7XM');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MFK3C7XM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <AnalyticsTracker />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
