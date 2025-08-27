/**
 * Performance Monitoring Hook
 * 
 * Custom hook for monitoring and optimizing performance:
 * - Web Vitals tracking
 * - Lazy loading management
 * - Resource loading optimization
 * - Performance metric reporting
 */

'use client'

import { useEffect, useCallback, useState } from 'react'
import { performanceMetrics, monitoringConfig } from '@/config/performance'

interface PerformanceMetrics {
  lcp?: number
  fid?: number
  cls?: number
  fcp?: number
  ttfb?: number
}

interface UsePerformanceOptions {
  enableReporting?: boolean
  trackCustomMetrics?: boolean
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
}

export const usePerformance = (options: UsePerformanceOptions = {}) => {
  const {
    enableReporting = false,
    trackCustomMetrics = true,
    onMetricsUpdate
  } = options

  const [metrics, setMetrics] = useState<PerformanceMetrics>({})
  const [isLoading, setIsLoading] = useState(true)

  // Report metrics to analytics/monitoring service
  const reportMetrics = useCallback(async (metricsToReport: PerformanceMetrics) => {
    if (!enableReporting || !monitoringConfig.reportingUrl) return

    try {
      await fetch(monitoringConfig.reportingUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metrics: metricsToReport,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href
        })
      })
    } catch (error) {
      console.warn('Failed to report performance metrics:', error)
    }
  }, [enableReporting])

  // Initialize Performance Observer
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      setIsLoading(false)
      return
    }

    const newMetrics: PerformanceMetrics = {}
    let metricsReceived = 0
    const expectedMetrics = monitoringConfig.observeMetrics.length

    // Create observer for Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            newMetrics.lcp = entry.startTime
            break
          case 'first-input':
            newMetrics.fid = (entry as any).processingStart - entry.startTime
            break
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              newMetrics.cls = (newMetrics.cls || 0) + (entry as any).value
            }
            break
          case 'navigation':
            const navEntry = entry as PerformanceNavigationTiming
            newMetrics.ttfb = navEntry.responseStart - navEntry.requestStart
            break
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              newMetrics.fcp = entry.startTime
            }
            break
        }

        metricsReceived++
        
        // Update state when we receive metrics
        setMetrics(prev => {
          const updated = { ...prev, ...newMetrics }
          onMetricsUpdate?.(updated)
          return updated
        })

        // Check performance against thresholds
        checkPerformanceThresholds(newMetrics)
      }

      // Mark as loaded when we've received expected metrics
      if (metricsReceived >= expectedMetrics) {
        setIsLoading(false)
      }
    })

    // Observe different entry types
    try {
      observer.observe({ entryTypes: monitoringConfig.observeMetrics })
    } catch (e) {
      // Fallback for older browsers
      observer.observe({ entryTypes: ['navigation', 'paint'] })
    }

    // Get existing navigation timing
    const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
    if (navigationEntries.length > 0) {
      const nav = navigationEntries[0]
      newMetrics.ttfb = nav.responseStart - nav.requestStart
    }

    // Custom metrics tracking
    if (trackCustomMetrics) {
      trackCustomPerformanceMetrics()
    }

    // Cleanup
    return () => observer.disconnect()
  }, [enableReporting, trackCustomMetrics, onMetricsUpdate, reportMetrics])

  // Check metrics against performance thresholds
  const checkPerformanceThresholds = useCallback((currentMetrics: PerformanceMetrics) => {
    const { targets, reportingThreshold } = performanceMetrics

    // Check LCP
    if (currentMetrics.lcp && currentMetrics.lcp > reportingThreshold.lcp * 1000) {
      console.warn(`LCP exceeded threshold: ${currentMetrics.lcp}ms > ${reportingThreshold.lcp * 1000}ms`)
      reportMetrics({ lcp: currentMetrics.lcp })
    }

    // Check FID
    if (currentMetrics.fid && currentMetrics.fid > reportingThreshold.fid) {
      console.warn(`FID exceeded threshold: ${currentMetrics.fid}ms > ${reportingThreshold.fid}ms`)
      reportMetrics({ fid: currentMetrics.fid })
    }

    // Check CLS
    if (currentMetrics.cls && currentMetrics.cls > reportingThreshold.cls) {
      console.warn(`CLS exceeded threshold: ${currentMetrics.cls} > ${reportingThreshold.cls}`)
      reportMetrics({ cls: currentMetrics.cls })
    }
  }, [reportMetrics])

  // Track custom performance metrics
  const trackCustomPerformanceMetrics = useCallback(() => {
    // Track hero section visibility
    const heroSection = document.querySelector('[data-section="hero"]')
    if (heroSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            performance.mark('hero-visible')
            observer.disconnect()
          }
        })
      })
      observer.observe(heroSection)
    }

    // Track CTA button visibility
    const ctaButton = document.querySelector('[data-component="cta-button"]')
    if (ctaButton) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            performance.mark('cta-visible')
            observer.disconnect()
          }
        })
      })
      observer.observe(ctaButton)
    }
  }, [])

  // Get performance score based on Core Web Vitals
  const getPerformanceScore = useCallback((): 'good' | 'needs-improvement' | 'poor' | 'unknown' => {
    const { lcp, fid, cls } = metrics
    const { targets } = performanceMetrics

    if (!lcp && !fid && !cls) return 'unknown'

    let score = 0
    let total = 0

    if (lcp !== undefined) {
      score += lcp <= targets.lcp * 1000 ? 1 : lcp <= targets.lcp * 2000 ? 0.5 : 0
      total += 1
    }

    if (fid !== undefined) {
      score += fid <= targets.fid ? 1 : fid <= targets.fid * 2 ? 0.5 : 0
      total += 1
    }

    if (cls !== undefined) {
      score += cls <= targets.cls ? 1 : cls <= targets.cls * 2 ? 0.5 : 0
      total += 1
    }

    const average = score / total
    
    if (average >= 0.8) return 'good'
    if (average >= 0.5) return 'needs-improvement'
    return 'poor'
  }, [metrics])

  // Optimize resource loading based on performance
  const optimizeResourceLoading = useCallback(() => {
    const score = getPerformanceScore()
    
    // Adjust lazy loading threshold based on performance
    if (score === 'poor') {
      // More aggressive lazy loading
      return { rootMargin: '20px', threshold: 0.05 }
    } else if (score === 'needs-improvement') {
      return { rootMargin: '40px', threshold: 0.1 }
    } else {
      // Standard lazy loading
      return { rootMargin: '50px', threshold: 0.1 }
    }
  }, [getPerformanceScore])

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    // Preload critical images
    const criticalImages = [
      '/images/hero-luxury-resort.webp',
      '/images/hero-bg.webp'
    ]

    criticalImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })

    // Preload critical fonts
    const criticalFonts = [
      '/fonts/inter-var.woff2',
      '/fonts/cal-sans.woff2'
    ]

    criticalFonts.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'font'
      link.type = 'font/woff2'
      link.crossOrigin = 'anonymous'
      link.href = src
      document.head.appendChild(link)
    })
  }, [])

  return {
    metrics,
    isLoading,
    performanceScore: getPerformanceScore(),
    optimizeResourceLoading,
    preloadCriticalResources,
    reportMetrics
  }
}

// Utility function to measure component render time
export const measureRenderTime = (componentName: string) => {
  performance.mark(`${componentName}-start`)
  
  return () => {
    performance.mark(`${componentName}-end`)
    performance.measure(
      `${componentName}-render`,
      `${componentName}-start`,
      `${componentName}-end`
    )
  }
}

// Utility function for optimized image loading
export const getOptimizedImageProps = (src: string, priority = false) => {
  const { imageConfig } = require('@/config/performance')
  
  return {
    src,
    quality: priority ? imageConfig.qualities.hero : imageConfig.qualities.content,
    priority,
    placeholder: 'blur' as const,
    blurDataURL: imageConfig.blurDataUrls.default,
    sizes: priority ? imageConfig.sizes.hero : imageConfig.sizes.content
  }
}