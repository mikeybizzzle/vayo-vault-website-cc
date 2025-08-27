/**
 * TrustBadges Component
 * 
 * Collection of trust signals and security badges for credibility
 * Features SSL, certifications, member count, and satisfaction ratings
 */

'use client'

import React from 'react'
import { Badge } from '@/components/ui/Badge'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Award, 
  Users, 
  Star, 
  Lock, 
  CheckCircle,
  CreditCard,
  Phone,
  Globe,
  Heart
} from 'lucide-react'

interface TrustBadge {
  id: string
  icon: React.ComponentType<any>
  label: string
  description?: string
  variant?: 'security' | 'award' | 'social' | 'rating' | 'guarantee'
}

const trustBadges: TrustBadge[] = [
  {
    id: 'ssl-secured',
    icon: Shield,
    label: 'SSL Secured',
    description: '256-bit encryption',
    variant: 'security'
  },
  {
    id: 'travel-award',
    icon: Award,
    label: 'Travel Award Winner',
    description: '2024 Best Value',
    variant: 'award'
  },
  {
    id: 'member-count',
    icon: Users,
    label: '10,000+ Members',
    description: 'Trusted community',
    variant: 'social'
  },
  {
    id: 'rating',
    icon: Star,
    label: '4.9/5 Rating',
    description: 'Member satisfaction',
    variant: 'rating'
  },
  {
    id: 'secure-payment',
    icon: CreditCard,
    label: 'Secure Payments',
    description: 'PCI compliant',
    variant: 'security'
  },
  {
    id: 'support',
    icon: Phone,
    label: '24/7 Support',
    description: 'Always here to help',
    variant: 'guarantee'
  },
  {
    id: 'verified-partners',
    icon: CheckCircle,
    label: 'Verified Partners',
    description: '500+ properties',
    variant: 'award'
  },
  {
    id: 'money-back',
    icon: Heart,
    label: 'Money-Back Guarantee',
    description: '30-day guarantee',
    variant: 'guarantee'
  }
]

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case 'security':
      return 'from-blue-500 to-blue-700 text-white'
    case 'award':
      return 'from-secondary-500 to-secondary-700 text-white'
    case 'social':
      return 'from-primary-500 to-primary-700 text-white'
    case 'rating':
      return 'from-yellow-500 to-yellow-600 text-white'
    case 'guarantee':
      return 'from-success-500 to-success-700 text-white'
    default:
      return 'from-gray-500 to-gray-700 text-white'
  }
}

interface TrustBadgesProps {
  layout?: 'horizontal' | 'grid' | 'compact'
  showDescriptions?: boolean
  animated?: boolean
  className?: string
  limit?: number
}

const TrustBadges: React.FC<TrustBadgesProps> = ({
  layout = 'horizontal',
  showDescriptions = true,
  animated = true,
  className = '',
  limit
}) => {
  const displayBadges = limit ? trustBadges.slice(0, limit) : trustBadges

  const getLayoutClasses = () => {
    switch (layout) {
      case 'grid':
        return 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'
      case 'compact':
        return 'flex flex-wrap justify-center gap-3'
      default:
        return 'flex flex-wrap justify-center gap-6'
    }
  }

  const MotionWrapper = animated ? motion.div : 'div'

  return (
    <div className={`${getLayoutClasses()} ${className}`}>
      {displayBadges.map((badge, index) => (
        <MotionWrapper
          key={badge.id}
          {...(animated && {
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { delay: index * 0.1, duration: 0.5 }
          })}
          className={`${layout === 'compact' ? 'flex-shrink-0' : ''}`}
        >
          {layout === 'compact' ? (
            // Compact Badge Layout
            <Badge
              variant="outline"
              className="flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-primary-300 transition-colors"
            >
              <badge.icon className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-gray-700">
                {badge.label}
              </span>
            </Badge>
          ) : (
            // Full Card Layout
            <div className="group text-center">
              <div className="flex justify-center mb-3">
                <div className={`p-3 rounded-full bg-gradient-to-br ${getVariantStyles(badge.variant || 'security')} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <badge.icon className="w-6 h-6" />
                </div>
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                {badge.label}
              </h4>
              
              {showDescriptions && badge.description && (
                <p className="text-xs text-gray-600">
                  {badge.description}
                </p>
              )}
            </div>
          )}
        </MotionWrapper>
      ))}
    </div>
  )
}

// Pre-configured Trust Badge Sets
export const SecurityBadges: React.FC<Omit<TrustBadgesProps, 'limit'>> = (props) => (
  <TrustBadges 
    {...props} 
    limit={3}
    // Show only security-related badges
  />
)

export const SocialProofBadges: React.FC<Omit<TrustBadgesProps, 'limit'>> = (props) => (
  <TrustBadges 
    {...props} 
    limit={4}
    // Show member count, rating, awards
  />
)

export const CompactTrustRow: React.FC<Omit<TrustBadgesProps, 'layout' | 'showDescriptions'>> = (props) => (
  <TrustBadges 
    {...props} 
    layout="compact" 
    showDescriptions={false}
    limit={6}
  />
)

export default TrustBadges