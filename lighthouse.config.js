module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/deals',
        'http://localhost:3000/pricing',
        'http://localhost:3000/auth/signup',
      ],
      startServerCommand: 'pnpm start',
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        // Core Web Vitals thresholds
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'first-input-delay': ['error', { maxNumericValue: 100 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1800 }],
        'interactive': ['error', { maxNumericValue: 3900 }],

        // Lighthouse score thresholds
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:pwa': ['warn', { minScore: 0.8 }],

        // Performance metrics
        'speed-index': ['error', { maxNumericValue: 3000 }],
        'total-blocking-time': ['error', { maxNumericValue: 200 }],

        // Image optimization
        'modern-image-formats': 'error',
        'uses-responsive-images': 'error',
        'uses-optimized-images': 'error',
        'offscreen-images': 'error',

        // JavaScript optimization
        'unused-javascript': ['warn', { maxLength: 1 }],
        'unminified-javascript': 'error',
        'render-blocking-resources': ['warn', { maxLength: 0 }],

        // CSS optimization
        'unused-css-rules': ['warn', { maxLength: 1 }],
        'unminified-css': 'error',

        // Resource optimization
        'uses-text-compression': 'error',
        'efficient-animated-content': 'error',
        'legacy-javascript': 'error',

        // Accessibility
        'color-contrast': 'error',
        'image-alt': 'error',
        'aria-allowed-attr': 'error',
        'aria-required-attr': 'error',
        'aria-roles': 'error',
        'aria-valid-attr': 'error',
        'aria-valid-attr-value': 'error',
        'button-name': 'error',
        'document-title': 'error',
        'duplicate-id-active': 'error',
        'duplicate-id-aria': 'error',
        'form-field-multiple-labels': 'error',
        'frame-title': 'error',
        'heading-order': 'error',
        'html-has-lang': 'error',
        'html-lang-valid': 'error',
        'image-alt': 'error',
        'input-image-alt': 'error',
        'label': 'error',
        'link-name': 'error',
        'list': 'error',
        'listitem': 'error',
        'meta-refresh': 'error',
        'meta-viewport': 'error',
        'object-alt': 'error',
        'tabindex': 'error',
        'td-headers-attr': 'error',
        'th-has-data-cells': 'error',
        'valid-lang': 'error',

        // SEO
        'document-title': 'error',
        'meta-description': 'error',
        'http-status-code': 'error',
        'link-text': 'error',
        'crawlable-anchors': 'error',
        'is-crawlable': 'error',
        'robots-txt': 'error',
        'image-alt': 'error',
        'hreflang': 'error',
        'canonical': 'error',

        // Best Practices
        'is-on-https': 'error',
        'uses-http2': 'error',
        'no-vulnerable-libraries': 'error',
        'external-anchors-use-rel-noopener': 'error',
        'geolocation-on-start': 'error',
        'notification-on-start': 'error',
        'password-inputs-can-be-pasted-into': 'error',

        // PWA
        'installable-manifest': 'error',
        'splash-screen': 'error',
        'themed-omnibox': 'error',
        'content-width': 'error',
        'viewport': 'error',
        'apple-touch-icon': 'error',
        'maskable-icon': 'warn',
        'offline-start-url': 'warn',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
    server: {
      port: 9001,
      storage: './lighthouse-results',
    },
  },
}