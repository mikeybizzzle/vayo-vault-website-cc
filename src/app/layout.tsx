import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})


export const metadata: Metadata = {
  title: {
    default: 'Vayo Vault - The Netflix of Travel Savings',
    template: '%s | Vayo Vault'
  },
  description: 'Unlock exclusive luxury travel experiences at unbeatable prices with our $37/month membership. Hand-curated deals, transparent pricing, cancel anytime.',
  keywords: [
    'travel deals',
    'luxury travel',
    'travel membership',
    'exclusive travel',
    'travel savings',
    'vacation deals',
    'travel club',
    'discount travel'
  ],
  authors: [{ name: 'Vayo Vault' }],
  creator: 'Vayo Vault',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://vayovault.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Vayo Vault - The Netflix of Travel Savings',
    description: 'Unlock exclusive luxury travel experiences at unbeatable prices with our $37/month membership.',
    siteName: 'Vayo Vault',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vayo Vault - Exclusive Travel Deals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vayo Vault - The Netflix of Travel Savings',
    description: 'Unlock exclusive luxury travel experiences at unbeatable prices.',
    images: ['/images/twitter-image.jpg'],
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
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Vayo Vault',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <head>
        {/* PWA Configuration */}
        <meta name="application-name" content="Vayo Vault" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Vayo Vault" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#f19833" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/apple-touch-icon-167x167.png" />
        
        {/* Standard Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/hero-bg.webp" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//api.stripe.com" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          {children}
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}