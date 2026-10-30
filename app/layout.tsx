import type { Metadata, Viewport } from 'next'
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
        <!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '4515833332069470');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=4515833332069470&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
        <link rel="preload" href="/images/logo.png" as="image" />
        {/*
          Google tag (gtag.js) - Google Ads: AW-442653461
          Rendered as raw <script> tags so they land in the server-rendered
          <head> on every page and load independently of React hydration.
          Do not convert these to next/script: `afterInteractive` injects into
          the body, which is what stopped Tag Assistant from detecting the tag.
        */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-442653461"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-442653461');
            `,
          }}
        />
        {/* End Google tag (gtag.js) */}
        {/* Google Tag Manager - same raw-script treatment as the gtag above */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MFK3C7XM');
            `,
          }}
        />
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
