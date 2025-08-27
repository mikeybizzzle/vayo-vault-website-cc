import { MetadataRoute } from 'next'
import { baseSEO } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = baseSEO.domain

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/how-it-works',
          '/membership',
          '/contact',
          '/terms',
          '/privacy'
        ],
        disallow: [
          '/login',
          '/admin',
          '/api',
          '/member',
          '/dashboard',
          '/_next',
          '/static'
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/about',
          '/how-it-works',
          '/membership',
          '/contact',
          '/terms',
          '/privacy'
        ],
        disallow: [
          '/login',
          '/admin',
          '/api',
          '/member',
          '/dashboard'
        ]
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  }
}