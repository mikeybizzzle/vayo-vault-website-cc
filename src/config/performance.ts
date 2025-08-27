/**
 * Performance Configuration
 * 
 * Centralized configuration for performance optimizations:
 * - Image optimization settings
 * - Font loading strategies
 * - Critical CSS configuration
 * - Code splitting boundaries
 */

export const imageConfig = {
  // Image optimization settings
  formats: ['webp', 'avif'] as const,
  qualities: {
    hero: 90,
    content: 85,
    thumbnails: 80,
    backgrounds: 75
  },
  sizes: {
    hero: '100vw',
    content: '(max-width: 768px) 100vw, 50vw',
    thumbnail: '(max-width: 768px) 50vw, 25vw',
    card: '(max-width: 768px) 100vw, 33vw'
  },
  priorityImages: [
    '/images/hero-luxury-resort.webp',
    '/images/hero-bg.webp'
  ],
  blurDataUrls: {
    default: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bseSJHO/jO6O+N1ZFjBBFRiHm5p4lKDL1pCYKZcGKhYCO8e44nSosbzRpJ7n5rLdlkKx14GZpYEKUj5vZV5pqpjP8GHRDlI8b5H/2Q=='
  }
}

export const fontConfig = {
  // Font loading optimization
  preloadFonts: [
    '/fonts/inter-var.woff2',
    '/fonts/cal-sans.woff2'
  ],
  fontDisplay: 'swap' as const,
  fontSubsets: ['latin'] as const
}

export const criticalCSSConfig = {
  // Critical CSS extraction for above-the-fold content
  aboveFoldSelectors: [
    // Base styles
    'html', 'body', '*',
    // Layout
    '.container', '.grid', '.flex',
    // Hero section
    '[data-section="hero"]',
    '.hero-*',
    // Navigation
    '.navigation', '.nav-*',
    // Typography
    '.font-cal-sans', '.text-*', '.font-*',
    // Buttons (critical for CTA)
    '.btn', '.button', '[data-component="button"]',
    // Colors and backgrounds
    '.bg-*', '.text-*', '.border-*'
  ],
  inlineThreshold: 4096 // 4KB threshold for inlining critical CSS
}

export const codeSplittingConfig = {
  // Dynamic imports and lazy loading boundaries
  routes: {
    // Core pages - always loaded
    core: ['/'],
    // Secondary pages - lazy loaded
    secondary: ['/pricing', '/about', '/contact'],
    // User pages - lazy loaded
    user: ['/dashboard', '/profile', '/settings']
  },
  components: {
    // Critical components - always loaded
    critical: [
      'HeroSection',
      'Navigation', 
      'Button',
      'Card',
      'Badge'
    ],
    // Below-fold components - lazy loaded
    lazy: [
      'TestimonialCard',
      'PricingComparison',
      'MembershipBenefitsSection',
      'FinalCTASection'
    ],
    // Interactive components - lazy loaded on interaction
    interactive: [
      'Modal',
      'Dropdown',
      'DatePicker',
      'ImageGallery'
    ]
  }
}

export const cacheConfig = {
  // Browser caching strategies
  static: {
    images: 31536000, // 1 year
    fonts: 31536000,   // 1 year
    css: 86400,        // 1 day
    js: 86400          // 1 day
  },
  api: {
    static: 3600,      // 1 hour for static content
    dynamic: 300,      // 5 minutes for dynamic content
    user: 60          // 1 minute for user-specific content
  }
}

export const lazyLoadingConfig = {
  // Intersection Observer settings for lazy loading
  rootMargin: '50px',
  threshold: 0.1,
  // Components to lazy load
  components: [
    'SocialProofSection',
    'MembershipBenefitsSection',
    'AntiTimeshareSection',
    'FinalCTASection'
  ],
  // Images to lazy load (not in critical path)
  images: {
    excludePriority: imageConfig.priorityImages,
    placeholder: 'blur'
  }
}

export const performanceMetrics = {
  // Performance targets
  targets: {
    // Core Web Vitals
    lcp: 2.5,     // Largest Contentful Paint (seconds)
    fid: 100,     // First Input Delay (milliseconds)  
    cls: 0.1,     // Cumulative Layout Shift
    // Additional metrics
    fcp: 1.8,     // First Contentful Paint (seconds)
    ttfb: 0.8,    // Time to First Byte (seconds)
    tti: 3.8      // Time to Interactive (seconds)
  },
  // Monitoring
  reportingThreshold: {
    lcp: 4.0,     // Report if LCP > 4s
    fid: 300,     // Report if FID > 300ms
    cls: 0.25     // Report if CLS > 0.25
  }
}

export const bundleOptimization = {
  // Webpack/Next.js bundle optimization
  treeShaking: true,
  minification: true,
  compression: {
    gzip: true,
    brotli: true
  },
  moduleConcatenation: true,
  // Bundle splitting strategy
  chunks: {
    vendor: ['react', 'react-dom', 'framer-motion'],
    ui: ['@radix-ui/*', 'lucide-react'],
    utils: ['clsx', 'tailwind-merge', 'class-variance-authority']
  }
}

// Runtime performance monitoring
export const monitoringConfig = {
  // Performance Observer API
  observeMetrics: [
    'largest-contentful-paint',
    'first-input',
    'cumulative-layout-shift',
    'first-contentful-paint'
  ],
  // Custom metrics tracking
  customMetrics: {
    heroLoadTime: 'time-to-hero-visible',
    ctaVisibility: 'time-to-cta-visible',
    interactionReady: 'time-to-interactive'
  },
  // Reporting endpoint (production)
  reportingUrl: process.env.NODE_ENV === 'production' 
    ? '/api/performance-metrics' 
    : null
}