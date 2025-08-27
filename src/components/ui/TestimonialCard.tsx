/**
 * TestimonialCard Component
 * 
 * Reusable testimonial card with member photo, quote, savings display,
 * verification badges, and rating system
 */

'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge, VerifiedBadge, SavingsBadge } from '@/components/ui/Badge'
import { motion } from 'framer-motion'
import { 
  Star, 
  Quote, 
  MapPin, 
  CheckCircle,
  Calendar,
  Users
} from 'lucide-react'

interface TestimonialData {
  id: string
  name: string
  location: string
  avatar: string
  rating: number
  savings: string
  originalPrice: string
  finalPrice: string
  destination: string
  quote: string
  verified: boolean
  tripDate?: string
  travelStyle?: string
  memberSince?: string
}

interface TestimonialCardProps {
  testimonial: TestimonialData
  variant?: 'default' | 'compact' | 'featured'
  showSavings?: boolean
  showVerification?: boolean
  animated?: boolean
  className?: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  variant = 'default',
  showSavings = true,
  showVerification = true,
  animated = true,
  className = ''
}) => {
  const MotionWrapper = animated ? motion.div : 'div'
  
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${
          i < rating 
            ? 'text-secondary-500 fill-current' 
            : 'text-gray-300'
        }`} 
      />
    ))
  }

  const getCardVariant = () => {
    switch (variant) {
      case 'featured':
        return 'featured'
      case 'compact':
        return 'interactive'
      default:
        return 'interactive'
    }
  }

  if (variant === 'compact') {
    return (
      <MotionWrapper
        {...(animated && {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 }
        })}
        className={className}
      >
        <Card variant={getCardVariant()} className="h-full">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                {testimonial.verified && showVerification && (
                  <div className="absolute -top-1 -right-1">
                    <CheckCircle className="w-4 h-4 text-success-500 bg-white rounded-full" />
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-gray-900 text-sm truncate">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                  "{testimonial.quote}"
                </p>
                
                {showSavings && (
                  <SavingsBadge size="sm">
                    Saved {testimonial.savings}
                  </SavingsBadge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </MotionWrapper>
    )
  }

  return (
    <MotionWrapper
      {...(animated && {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
      })}
      className={className}
    >
      <Card variant={getCardVariant()} className="h-full">
        <CardContent className="p-6">
          {/* Quote Icon */}
          <div className="mb-4">
            <Quote className="w-8 h-8 text-primary-200" />
          </div>
          
          {/* Quote */}
          <blockquote className="text-gray-700 mb-6 leading-relaxed">
            "{testimonial.quote}"
          </blockquote>
          
          {/* Savings Display */}
          {showSavings && (
            <div className="bg-gradient-to-r from-success-50 to-primary-50 border border-success-200 rounded-lg p-4 mb-6">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">
                  {testimonial.destination}
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg text-gray-500 line-through">
                    {testimonial.originalPrice}
                  </span>
                  <span className="text-2xl font-bold text-success-600">
                    {testimonial.finalPrice}
                  </span>
                </div>
                <SavingsBadge>
                  Saved {testimonial.savings}
                </SavingsBadge>
              </div>
            </div>
          )}
          
          {/* Member Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                {testimonial.verified && showVerification && (
                  <div className="absolute -top-1 -right-1">
                    <CheckCircle className="w-5 h-5 text-success-500 bg-white rounded-full" />
                  </div>
                )}
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  {testimonial.verified && showVerification && (
                    <VerifiedBadge size="sm">Verified</VerifiedBadge>
                  )}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                  
                  {testimonial.memberSince && (
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      Member since {testimonial.memberSince}
                    </div>
                  )}
                </div>
                
                {testimonial.tripDate && (
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                    <Calendar className="w-3 h-3" />
                    Trip: {testimonial.tripDate}
                  </div>
                )}
              </div>
            </div>
            
            {/* Rating */}
            <div className="text-right">
              <div className="flex items-center gap-1 mb-1">
                {renderStars(testimonial.rating)}
              </div>
              <div className="text-xs text-gray-500">
                {testimonial.rating}/5
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </MotionWrapper>
  )
}

// Pre-configured testimonial variants
export const FeaturedTestimonial: React.FC<Omit<TestimonialCardProps, 'variant'>> = (props) => (
  <TestimonialCard {...props} variant="featured" />
)

export const CompactTestimonial: React.FC<Omit<TestimonialCardProps, 'variant'>> = (props) => (
  <TestimonialCard {...props} variant="compact" />
)

export default TestimonialCard