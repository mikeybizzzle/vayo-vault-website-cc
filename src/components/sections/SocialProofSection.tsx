/**
 * SocialProofSection - High-impact social proof for conversion
 * 
 * Features:
 * - Member testimonials with real savings amounts
 * - Trust badges and security certifications
 * - Statistics: "10,000+ members saving $2M+ annually"
 * - Before/after pricing comparisons
 * - Review ratings and member count
 */

'use client'

import React from 'react'
import Image from 'next/image'
import { Badge, VerifiedBadge, RatingBadge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import { 
  Star, 
  Users, 
  Shield, 
  Award, 
  CheckCircle, 
  DollarSign,
  MapPin,
  Quote
} from 'lucide-react'

interface Testimonial {
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
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'San Francisco, CA',
    avatar: '/images/testimonials/sarah.webp',
    rating: 5,
    savings: '$2,800',
    originalPrice: '$4,200',
    finalPrice: '$1,400',
    destination: 'Tuscany Villa',
    quote: "Found our dream Tuscany villa at 67% off. The savings paid for our entire year's membership!",
    verified: true
  },
  {
    id: '2',
    name: 'Mike Chen',
    location: 'Austin, TX',
    avatar: '/images/testimonials/mike.webp',
    rating: 5,
    savings: '$3,400',
    originalPrice: '$5,100',
    finalPrice: '$1,700',
    destination: 'Maldives Overwater Villa',
    quote: "Honeymoon in the Maldives for less than a weekend in Napa. Vayo Vault made luxury accessible.",
    verified: true
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    location: 'Denver, CO',
    avatar: '/images/testimonials/emily.webp',
    rating: 5,
    savings: '$1,900',
    originalPrice: '$2,800',
    finalPrice: '$900',
    destination: 'Swiss Alps Chalet',
    quote: "Family ski trip to Switzerland at 68% off. The kids still talk about it months later!",
    verified: true
  }
]

const trustBadges = [
  { icon: Shield, label: 'SSL Secured', description: '256-bit encryption' },
  { icon: Award, label: 'Travel Award Winner', description: '2024 Best Value' },
  { icon: CheckCircle, label: 'Verified Partners', description: '500+ luxury properties' },
  { icon: Users, label: 'Member Approved', description: '4.9/5 satisfaction' }
]

const stats = [
  { value: '10,000+', label: 'Happy Members', icon: Users },
  { value: '$2.1M+', label: 'Total Savings', icon: DollarSign },
  { value: '4.9/5', label: 'Average Rating', icon: Star },
  { value: '68%', label: 'Average Savings', icon: Award }
]

const SocialProofSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="trusted" size="lg" className="mb-6">
            Trusted by 10,000+ Travelers
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-cal-sans">
            Real Members, Real Savings
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of smart travelers who've discovered the secret to luxury travel at unbeatable prices
          </p>
        </motion.div>

        {/* Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <Card key={index} variant="interactive" className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-primary-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </motion.div>

        {/* Member Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card variant="interactive" className="h-full">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary-200" />
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-6 text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Savings Display */}
                  <div className="bg-success-50 border border-success-200 rounded-lg p-4 mb-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">{testimonial.destination}</div>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-lg text-gray-500 line-through">
                          {testimonial.originalPrice}
                        </span>
                        <span className="text-2xl font-bold text-success-600">
                          {testimonial.finalPrice}
                        </span>
                      </div>
                      <Badge variant="success" size="sm">
                        Saved {testimonial.savings}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      {testimonial.verified && (
                        <div className="absolute -top-1 -right-1">
                          <CheckCircle className="w-5 h-5 text-success-500 bg-white rounded-full" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 flex items-center gap-2">
                        {testimonial.name}
                        {testimonial.verified && (
                          <VerifiedBadge size="sm">Verified</VerifiedBadge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-secondary-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white border border-gray-200 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary-900 mb-2">
              Your Trust & Security Matter
            </h3>
            <p className="text-gray-600">
              We're committed to transparency, security, and delivering on our promises
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-4 bg-primary-50 group-hover:bg-primary-100 rounded-full transition-colors">
                    <badge.icon className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{badge.label}</h4>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-2">
            Ready to join 10,000+ smart travelers?
          </p>
          <p className="text-sm text-gray-500">
            Start saving on luxury travel experiences today
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProofSection