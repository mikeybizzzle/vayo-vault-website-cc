/**
 * CTASection Component
 * 
 * Reusable call-to-action section with customizable content,
 * multiple button options, and trust signals
 */

'use client'

import React from 'react'
import { Button, HeroButton } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { CompactTrustRow } from '@/components/ui/TrustBadges'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users,
  Shield,
  Clock,
  Sparkles
} from 'lucide-react'

interface CTAButton {
  text: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'default' | 'lg' | 'hero'
  onClick?: () => void
  icon?: React.ReactNode
}

interface CTASectionProps {
  title: string
  subtitle?: string
  description?: string
  primaryButton: CTAButton
  secondaryButton?: CTAButton
  badge?: {
    text: string
    variant?: string
    icon?: React.ReactNode
  }
  trustSignals?: string[]
  showTrustBadges?: boolean
  background?: 'light' | 'gradient' | 'dark' | 'primary'
  size?: 'compact' | 'default' | 'large'
  animated?: boolean
  className?: string
}

const defaultTrustSignals = [
  'Cancel anytime',
  '30-day guarantee', 
  'Instant access'
]

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  badge,
  trustSignals = defaultTrustSignals,
  showTrustBadges = false,
  background = 'light',
  size = 'default',
  animated = true,
  className = ''
}) => {
  const getBackgroundClass = () => {
    switch (background) {
      case 'gradient':
        return 'bg-gradient-to-br from-primary-50 via-white to-secondary-50'
      case 'dark':
        return 'bg-gradient-to-br from-primary-900 to-primary-800 text-white'
      case 'primary':
        return 'bg-gradient-to-br from-primary-500 to-primary-700 text-white'
      default:
        return 'bg-white'
    }
  }

  const getPadding = () => {
    switch (size) {
      case 'compact':
        return 'py-8 sm:py-12'
      case 'large':
        return 'py-20 sm:py-32'
      default:
        return 'py-16 sm:py-24'
    }
  }

  const MotionWrapper = animated ? motion.div : 'div'
  const isLight = background === 'light' || background === 'gradient'
  const textColor = isLight ? 'text-primary-900' : 'text-white'
  const subtextColor = isLight ? 'text-gray-600' : 'text-white/80'

  return (
    <section className={`${getBackgroundClass()} ${getPadding()} ${className} relative overflow-hidden`}>
      {/* Background Elements */}
      {background === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5" />
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionWrapper
          {...(animated && {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 }
          })}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          {badge && (
            <motion.div
              {...(animated && {
                initial: { opacity: 0, scale: 0.9 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { delay: 0.2, duration: 0.6 }
              })}
              className="mb-6 flex justify-center"
            >
              <Badge 
                variant={badge.variant as any || 'outline'} 
                size="lg"
                className="flex items-center gap-2"
              >
                {badge.icon}
                {badge.text}
              </Badge>
            </motion.div>
          )}

          {/* Title */}
          <motion.h2
            {...(animated && {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.4, duration: 0.8 }
            })}
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${textColor} mb-6 font-cal-sans`}
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          {subtitle && (
            <motion.h3
              {...(animated && {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: 0.5, duration: 0.8 }
              })}
              className={`text-xl sm:text-2xl ${subtextColor} mb-4 font-medium`}
            >
              {subtitle}
            </motion.h3>
          )}

          {/* Description */}
          {description && (
            <motion.p
              {...(animated && {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: 0.6, duration: 0.8 }
              })}
              className={`text-lg ${subtextColor} mb-8 max-w-3xl mx-auto leading-relaxed`}
            >
              {description}
            </motion.p>
          )}

          {/* Buttons */}
          <motion.div
            {...(animated && {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.8, duration: 0.8 }
            })}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            {primaryButton.size === 'hero' ? (
              <HeroButton
                onClick={primaryButton.onClick}
                className="group"
                rightIcon={primaryButton.icon || <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              >
                {primaryButton.text}
              </HeroButton>
            ) : (
              <Button
                variant={primaryButton.variant || 'primary'}
                size={primaryButton.size || 'lg'}
                onClick={primaryButton.onClick}
                className="group"
                rightIcon={primaryButton.icon || <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              >
                {primaryButton.text}
              </Button>
            )}

            {secondaryButton && (
              <Button
                variant={secondaryButton.variant || 'outline'}
                size={secondaryButton.size || 'lg'}
                onClick={secondaryButton.onClick}
                leftIcon={secondaryButton.icon}
                className={isLight ? '' : 'border-white/20 text-white hover:bg-white/10'}
              >
                {secondaryButton.text}
              </Button>
            )}
          </motion.div>

          {/* Trust Signals */}
          {trustSignals.length > 0 && (
            <motion.div
              {...(animated && {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: 1.0, duration: 0.8 }
              })}
              className="flex flex-wrap items-center justify-center gap-6 text-sm mb-8"
            >
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className={`w-4 h-4 ${isLight ? 'text-success-500' : 'text-white/80'}`} />
                  <span className={subtextColor}>{signal}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* Trust Badges */}
          {showTrustBadges && (
            <motion.div
              {...(animated && {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: 1.2, duration: 0.8 }
              })}
            >
              <CompactTrustRow animated={false} />
            </motion.div>
          )}
        </MotionWrapper>
      </div>
    </section>
  )
}

// Pre-configured CTA variants
export const HeroCTA: React.FC<Omit<CTASectionProps, 'size' | 'background'>> = (props) => (
  <CTASection {...props} size="large" background="gradient" />
)

export const CompactCTA: React.FC<Omit<CTASectionProps, 'size'>> = (props) => (
  <CTASection {...props} size="compact" />
)

export const DarkCTA: React.FC<Omit<CTASectionProps, 'background'>> = (props) => (
  <CTASection {...props} background="dark" />
)

export default CTASection