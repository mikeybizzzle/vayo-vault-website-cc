// SEO utilities and structured data for Vayo Vault

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
  structuredData?: any;
}

// Base SEO configuration
export const baseSEO = {
  title: 'Vayo Vault - The Netflix of Travel Savings',
  description: 'Unlock exclusive luxury travel experiences at unbeatable prices with our $37/month membership. Hand-curated deals, transparent pricing, cancel anytime.',
  keywords: [
    'travel deals',
    'luxury travel',
    'travel membership',
    'exclusive travel',
    'travel savings',
    'vacation deals',
    'travel club',
    'discount travel',
    'luxury hotels',
    'resort deals'
  ],
  domain: process.env.NEXT_PUBLIC_APP_URL || 'https://vayovault.com',
  siteName: 'Vayo Vault',
  twitterHandle: '@vayovault',
  ogImage: '/images/og-image.jpg'
};

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'Vayo Vault - The Netflix of Travel Savings',
    description: 'Join 10,000+ members saving on luxury travel. Get exclusive access to hand-curated deals at up to 70% off. Just $37/month, cancel anytime.',
    keywords: ['travel membership', 'luxury travel deals', 'vacation savings', 'travel club'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Vayo Vault',
      alternateName: 'Vayo Vault Travel',
      url: baseSEO.domain,
      logo: `${baseSEO.domain}/images/logo.png`,
      description: baseSEO.description,
      foundingDate: '2019',
      founders: [
        {
          '@type': 'Person',
          name: 'Sarah Chen'
        }
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Travel Way, Suite 100',
        addressLocality: 'Miami',
        addressRegion: 'FL',
        postalCode: '33101',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-800-829-6123',
        contactType: 'customer support',
        availableLanguage: 'English'
      },
      sameAs: [
        'https://facebook.com/vayovault',
        'https://twitter.com/vayovault',
        'https://instagram.com/vayovault'
      ]
    }
  },

  about: {
    title: 'About Us - Travel Industry Experts | Vayo Vault',
    description: 'Meet the team behind Vayo Vault. Travel industry veterans with 35+ years combined experience helping members save millions on luxury travel.',
    keywords: ['about vayo vault', 'travel experts', 'company history', 'team'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Vayo Vault',
      description: 'Learn about Vayo Vault\'s mission to democratize luxury travel access through exclusive member deals.',
      mainEntity: {
        '@type': 'Organization',
        name: 'Vayo Vault',
        description: 'Travel membership service offering exclusive luxury travel deals',
        foundingDate: '2019',
        numberOfEmployees: '15-25'
      }
    }
  },

  howItWorks: {
    title: 'How It Works - Simple 3-Step Process | Vayo Vault',
    description: 'Discover how Vayo Vault\'s simple process gives you access to exclusive luxury travel deals. Join, browse, book, and save up to 70%.',
    keywords: ['how vayo vault works', 'travel booking process', 'membership benefits'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Save on Luxury Travel with Vayo Vault',
      description: 'Simple 3-step process to access exclusive travel deals',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Join for $37/month',
          text: 'Sign up for membership in under 2 minutes with no contracts',
          url: `${baseSEO.domain}/membership`
        },
        {
          '@type': 'HowToStep',
          name: 'Browse Exclusive Deals',
          text: 'Access hand-curated luxury travel deals updated daily',
          url: `${baseSEO.domain}/how-it-works#browse-deals`
        },
        {
          '@type': 'HowToStep',
          name: 'Book & Save Up to 70%',
          text: 'Book directly through our platform with instant confirmation',
          url: `${baseSEO.domain}/how-it-works#book-save`
        }
      ]
    }
  },

  membership: {
    title: 'Membership - Join for $37/month | Vayo Vault',
    description: 'Join Vayo Vault for just $37/month. No contracts, cancel anytime, 30-day guarantee. Unlock exclusive luxury travel deals at up to 70% off.',
    keywords: ['vayo vault membership', 'travel membership pricing', '$37 month travel deals'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Vayo Vault Travel Membership',
      description: 'Monthly travel membership providing exclusive access to luxury travel deals',
      brand: {
        '@type': 'Brand',
        name: 'Vayo Vault'
      },
      offers: [
        {
          '@type': 'Offer',
          name: 'Monthly Membership',
          price: '37',
          priceCurrency: 'USD',
          priceValidUntil: '2025-12-31',
          availability: 'https://schema.org/InStock',
          url: `${baseSEO.domain}/membership`,
          description: 'Monthly travel membership with no long-term commitment'
        },
        {
          '@type': 'Offer',
          name: 'Annual Membership',
          price: '370',
          priceCurrency: 'USD',
          priceValidUntil: '2025-12-31',
          availability: 'https://schema.org/InStock',
          url: `${baseSEO.domain}/membership`,
          description: 'Annual membership with 2 months free'
        }
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '1247',
        bestRating: '5',
        worstRating: '1'
      }
    }
  },

  contact: {
    title: 'Contact Us - 24/7 Support Available | Vayo Vault',
    description: 'Get help with your Vayo Vault membership. 24/7 support for members, quick response times, multiple contact methods available.',
    keywords: ['vayo vault support', 'contact travel support', 'member help'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Vayo Vault Support',
      description: '24/7 customer support for travel membership questions and booking assistance',
      mainEntity: {
        '@type': 'Organization',
        name: 'Vayo Vault',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+1-800-829-6123',
            contactType: 'customer support',
            hoursAvailable: '24/7',
            availableLanguage: 'English'
          },
          {
            '@type': 'ContactPoint',
            email: 'support@vayovault.com',
            contactType: 'customer support',
            availableLanguage: 'English'
          }
        ]
      }
    }
  },

  terms: {
    title: 'Terms of Service | Vayo Vault',
    description: 'Read Vayo Vault\'s terms of service including membership terms, booking policies, cancellation procedures, and user responsibilities.',
    keywords: ['vayo vault terms', 'membership terms', 'travel booking terms'],
    noindex: false
  },

  privacy: {
    title: 'Privacy Policy | Vayo Vault',
    description: 'Learn how Vayo Vault protects your personal information, what data we collect, how we use it, and your privacy rights as a member.',
    keywords: ['vayo vault privacy', 'data protection', 'privacy rights'],
    noindex: false
  },

  login: {
    title: 'Member Login | Vayo Vault',
    description: 'Sign in to your Vayo Vault account to access exclusive travel deals, manage your membership, and book luxury experiences.',
    keywords: ['vayo vault login', 'member portal', 'travel account'],
    noindex: true // Don't index login pages
  },

  notFound: {
    title: 'Page Not Found | Vayo Vault',
    description: 'The page you\'re looking for doesn\'t exist. Explore our luxury travel deals and membership options instead.',
    keywords: ['404 error', 'page not found'],
    noindex: true
  }
};

// Generate structured data for FAQ pages
export const generateFAQStructuredData = (faqs: Array<{question: string; answer: string}>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{name: string; url: string}>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((breadcrumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: breadcrumb.name,
    item: breadcrumb.url
  }))
});

// Generate review/testimonial structured data
export const generateReviewStructuredData = (reviews: Array<{
  author: string;
  rating: number;
  text: string;
  date: string;
}>) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vayo Vault',
  review: reviews.map(review => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    reviewBody: review.text,
    datePublished: review.date
  }))
});

// SEO utility functions
export const generateMetaTags = (config: SEOConfig) => {
  const tags: { [key: string]: string } = {};
  
  tags['title'] = config.title;
  tags['description'] = config.description;
  
  if (config.keywords) {
    tags['keywords'] = config.keywords.join(', ');
  }
  
  if (config.canonical) {
    tags['canonical'] = config.canonical;
  }
  
  if (config.noindex) {
    tags['robots'] = 'noindex, nofollow';
  }
  
  return tags;
};

export const generateOpenGraphTags = (config: SEOConfig) => ({
  title: config.title,
  description: config.description,
  url: config.canonical || baseSEO.domain,
  site_name: baseSEO.siteName,
  images: [
    {
      url: config.ogImage || baseSEO.ogImage,
      width: 1200,
      height: 630,
      alt: config.title
    }
  ],
  type: 'website'
});

export const generateTwitterTags = (config: SEOConfig) => ({
  card: 'summary_large_image',
  site: baseSEO.twitterHandle,
  title: config.title,
  description: config.description,
  images: [config.ogImage || baseSEO.ogImage]
});

export default {
  baseSEO,
  pageSEO,
  generateMetaTags,
  generateOpenGraphTags,
  generateTwitterTags,
  generateFAQStructuredData,
  generateBreadcrumbStructuredData,
  generateReviewStructuredData
};