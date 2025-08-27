/**
 * MembershipBenefitsSection - Exclusive member benefits showcase
 * 
 * Features:
 * - Exclusive inventory access
 * - Mobile app notifications
 * - 24/7 support
 * - Member-only pricing
 * - Visual benefit cards with icons
 * - Interactive hover effects
 */

'use client'

import React from 'react'
import Image from 'next/image'
import { Badge, ExclusiveBadge } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { 
  Smartphone, 
  HeadphonesIcon, 
  Crown, 
  Bell, 
  Shield, 
  Star, 
  Users, 
  Zap,
  MapPin,
  Calendar,
  Percent,
  Heart,
  Award,
  ChevronRight
} from 'lucide-react'

interface Benefit {
  id: string
  title: string
  description: string
  icon: React.ComponentType<any>
  image: string
  features: string[]
  highlight: string
  category: 'access' | 'convenience' | 'support' | 'exclusive'
}

const benefits: Benefit[] = [
  {
    id: 'exclusive-inventory',
    title: 'Exclusive Inventory Access',
    description: 'Access to hand-curated luxury properties and experiences not available to the general public.',
    icon: Crown,
    image: '/images/benefits/exclusive-inventory.webp',
    features: [
      'Members-only properties',
      'First access to new listings',
      'Private villa collections',
      'Boutique hotel partnerships'
    ],
    highlight: '500+ exclusive properties',
    category: 'exclusive'
  },
  {
    id: 'mobile-app',
    title: 'Mobile App & Notifications',
    description: 'Stay ahead of the best deals with instant notifications and seamless mobile booking.',
    icon: Smartphone,
    image: '/images/benefits/mobile-app.webp',
    features: [
      'Real-time deal alerts',
      'One-tap booking',
      'Offline browsing',
      'Wishlist sync across devices'
    ],
    highlight: 'Download coming soon',
    category: 'convenience'
  },
  {
    id: 'concierge-support',
    title: '24/7 Concierge Support',
    description: 'Dedicated member support team available around the clock for booking assistance and travel advice.',
    icon: HeadphonesIcon,
    image: '/images/benefits/concierge-support.webp',
    features: [
      '24/7 live chat support',
      'Personal travel advisors',
      'Emergency assistance',
      'Booking modifications'
    ],
    highlight: '< 2 minute response time',
    category: 'support'
  },
  {
    id: 'member-pricing',
    title: 'Member-Only Pricing',
    description: 'Special rates negotiated exclusively for Vayo Vault members, often 20-40% below our advertised prices.',
    icon: Percent,
    image: '/images/benefits/member-pricing.webp',
    features: [
      'Additional member discounts',
      'Last-minute deal bonuses',
      'Extended stay savings',
      'Group booking rates'
    ],
    highlight: 'Extra 20-40% off',
    category: 'access'
  }
]

const additionalPerks = [
  {
    icon: Bell,
    title: 'Flash Deal Alerts',
    description: 'First access to limited-time offers'
  },
  {
    icon: MapPin,
    title: 'Destination Guides',
    description: 'Insider tips from local experts'
  },
  {
    icon: Calendar,
    title: 'Flexible Booking',
    description: 'Easy date changes and cancellations'
  },
  {
    icon: Users,
    title: 'Member Community',
    description: 'Connect with fellow travelers'
  },
  {
    icon: Shield,
    title: 'Travel Protection',
    description: 'Coverage for unexpected changes'
  },
  {
    icon: Award,
    title: 'Status Benefits',
    description: 'Upgrades and special amenities'
  }
]

const MembershipBenefitsSection: React.FC = () => {
  const handleJoinNow = () => {
    // TODO: Integrate with signup flow
    window.location.href = '/signup'
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'exclusive': return 'from-secondary-500 to-secondary-700'
      case 'convenience': return 'from-primary-500 to-primary-700'
      case 'support': return 'from-success-500 to-success-700'
      case 'access': return 'from-purple-500 to-purple-700'
      default: return 'from-gray-500 to-gray-700'
    }
  }

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
          <ExclusiveBadge size="lg" className="mb-6">
            Member Exclusive Benefits
          </ExclusiveBadge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-cal-sans">
            Membership Has Its Privileges
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond incredible savings, enjoy exclusive access, premium support, 
            and conveniences that make luxury travel effortless.
          </p>
        </motion.div>

        {/* Main Benefits */}
        <div className="space-y-16 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${getCategoryColor(benefit.category)} rounded-xl text-white shadow-lg`}>
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="outline" size="sm">
                    {benefit.highlight}
                  </Badge>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 font-cal-sans">
                  {benefit.title}
                </h3>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (featureIndex * 0.1), duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-br ${getCategoryColor(benefit.category)} rounded-full`} />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2, duration: 0.8 }}
                  className="relative group"
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Floating badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.6, duration: 0.6 }}
                      className="absolute top-4 right-4"
                    >
                      <Badge 
                        variant="exclusive" 
                        size="sm" 
                        className="bg-white/90 text-primary-700 border-white/20 backdrop-blur-sm"
                      >
                        Members Only
                      </Badge>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Perks Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4">
              Plus These Additional Perks
            </h3>
            <p className="text-gray-600">
              Every membership includes these valuable benefits at no extra cost
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalPerks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <Card variant="interactive" className="h-full group">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary-100 group-hover:bg-primary-200 rounded-full transition-colors duration-300">
                        <perk.icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-gray-900 mb-2">
                      {perk.title}
                    </h4>
                    
                    <p className="text-sm text-gray-600">
                      {perk.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Membership Tiers Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <Card variant="featured" className="p-8">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    Start with Essential, Upgrade Anytime
                  </h3>
                  
                  <p className="text-gray-700 mb-6">
                    Begin with our $37/month Essential membership and unlock all core benefits. 
                    Upgrade to Premium for even more exclusive access and concierge services.
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-secondary-500" />
                      <span>Instant activation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-error-500" />
                      <span>No commitment</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-900 mb-2">$37</div>
                  <div className="text-gray-600 mb-6">per month</div>
                  
                  <Button 
                    size="lg" 
                    onClick={handleJoinNow}
                    className="group"
                    rightIcon={<ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  >
                    Start Your Membership
                  </Button>
                  
                  <p className="text-xs text-gray-500 mt-3">
                    Cancel anytime • 30-day guarantee
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">10,000+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">4.9★</div>
              <div className="text-gray-600">Member Satisfaction</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">500+</div>
              <div className="text-gray-600">Exclusive Properties</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MembershipBenefitsSection