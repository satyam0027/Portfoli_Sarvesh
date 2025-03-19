import "./globals.css";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ThemeProvider } from '../components/ThemeContext'
import Script from 'next/script'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#EAB308',
};

export const metadata = {
  metadataBase: new URL('https://thesarveshmishra.com'),
  title: {
    default: 'Sarvesh Mishra | PR & Media Consultant',
    template: '%s | Sarvesh Mishra'
  },
  description: 'Sarvesh Mishra is a PR & Media Consultant specializing in strategic communications, media relations, and brand development. Expert in digital marketing and content strategy.',
  keywords: ['PR Consultant', 'Media Consultant', 'Digital Marketing', 'Brand Development', 'Content Strategy', 'Media Relations', 'Public Relations', 'India PR', 'Strategic Communications', 'Sarvesh Mishra', 'The Sarvesh Mishra Show'],
  authors: [{ name: 'Sarvesh Mishra' }],
  creator: 'Sarvesh Mishra',
  publisher: 'Sarvesh Mishra',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://thesarveshmishra.com',
    siteName: 'Sarvesh Mishra',
    title: 'Sarvesh Mishra | PR & Media Consultant',
    description: 'Expert PR & Media Consultant specializing in strategic communications and brand development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sarvesh Mishra - PR & Media Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarvesh Mishra | PR & Media Consultant',
    description: 'Expert PR & Media Consultant specializing in strategic communications and brand development.',
    images: ['/og-image.jpg'],
    creator: '@sarvesh03',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://thesarveshmishra.com',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Sarvesh Mishra | PR & Media Consultant',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/icon-192x192.png', type: 'image/png', sizes: '192x192' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo.png',
        color: '#EAB308'
      }
    ]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="sf-pro-regular">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="author" content={metadata.authors[0].name} />
        <meta name="creator" content={metadata.creator} />
        <meta name="publisher" content={metadata.publisher} />
        <meta name="format-detection" content="email=no, address=no, telephone=no" />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="robots" content={metadata.robots.index ? 'index, follow' : 'noindex, nofollow'} />
        <meta name="googlebot" content={metadata.robots.googleBot.index ? 'index, follow' : 'noindex, nofollow'} />
        <meta name="google-site-verification" content={metadata.verification.google} />
        <link rel="canonical" href={metadata.alternates.canonical} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sarvesh Mishra" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#EAB308" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Sarvesh Mishra" />
        <meta name="msapplication-TileColor" content="#EAB308" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="16x16" />
        <link rel="mask-icon" href="/logo.png" color="#EAB308" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="msapplication-TileImage" content="/logo.png" />
      </head>
      <body className="bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sarvesh Mishra",
              "url": "https://thesarveshmishra.com",
              "image": "https://thesarveshmishra.com/author.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/digitalsarveshmishra",
                "https://twitter.com/sarvesh03",
                "https://www.instagram.com/sarveshmishrashow",
                "https://www.youtube.com/@Sarveshmishrashow",
                "https://www.youtube.com/@sarveshmishrauncut"
              ],
              "jobTitle": "PR & Media Consultant",
              "worksFor": {
                "@type": "Organization",
                "name": "Sarvesh Mishra Consulting"
              },
              "description": "Sarvesh Mishra is a PR & Media Consultant specializing in strategic communications, media relations, and brand development.",
              "knowsAbout": ["Public Relations", "Media Relations", "Digital Marketing", "Brand Development", "Content Strategy", "Astrology", "Journalism"],
              "award": [
                "Best PR Consultant 2023",
                "Media Excellence Award 2022"
              ]
            })
          }}
        />
        <Script
          id="organization-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sarvesh Mishra Consulting",
              "url": "https://thesarveshmishra.com",
              "logo": "https://thesarveshmishra.com/logo.png",
              "description": "Expert PR & Media Consulting services specializing in strategic communications and brand development.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@thesarveshmishra.com"
              }
            })
          }}
        />
        <ThemeProvider>
          <div className="flex flex-col min-h-screen font-sans">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}