import { MetadataRoute } from 'next'
import { baseSEO } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = baseSEO.domain
  const currentDate = new Date().toISOString()

  // Static pages with their priorities and change frequencies
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/membership`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3
    }
  ]

  return staticPages
}