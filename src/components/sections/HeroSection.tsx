/**
 * HeroSection - High-converting hero optimized for travel membership
 * 
 * Key conversion elements:
 * - Clear value proposition headline
 * - Strong savings comparison ($37 vs $5000+)
 * - Trust signals and guarantees
 * - Primary CTA with urgency
 * - Mobile-first responsive design
 */

'use client'

import React from 'react'
import Image from 'next/image'
import { Button, HeroButton } from '@/components/ui/Button'
import { Badge, VerifiedBadge, TrustButton } from '@/components/ui/Badge'
import { motion } from 'framer-motion'
import { CheckCircle, Star, Users, Shield, ArrowRight, Play } from 'lucide-react'

const HeroSection: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleStartMembership = () => {
    // TODO: Integrate with membership signup flow
    window.location.href = '/signup'
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5" />
      
      {/* Hero Background Image - Optimized */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/hero-luxury-travel.webp"
          alt="Luxury travel destinations"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bseSJHO/jO6O+N1ZFjBBFRiHm5p4lKDL1pCYKZcGKhYCO8e44nSosbzRpJ7n5rLdlkKx14GZpYEKUj5vZV5pqpjP8GHRDlI8b5H/2Q=="
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-6 flex justify-center lg:justify-start"
              >
                <VerifiedBadge size="lg" className="mr-3">
                  10,000+ Trusted Members
                </VerifiedBadge>
                <Badge variant="new" size="lg" animation="glow">
                  Limited Launch Pricing
                </Badge>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6 font-cal-sans"
              >
                Hidden Travel Deals{' '}
                <span className="text-gradient-gold">Unlocked</span>{' '}
                for Members
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Access luxury travel experiences at{' '}
                <span className="font-semibold text-success-600">up to 70% off</span>{' '}
                with our exclusive membership. The Netflix of travel savings.
              </motion.p>

              {/* Pricing Comparison */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-200 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-sm text-gray-600 mb-1">Vayo Vault Membership</p>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-primary-600">$37</span>
                      <span className="text-gray-600">/month</span>
                      <Badge variant="success" size="sm">Cancel Anytime</Badge>
                    </div>
                  </div>
                  
                  <div className="text-2xl text-gray-400 hidden sm:block">vs</div>
                  
                  <div className="text-center sm:text-right">
                    <p className="text-sm text-gray-600 mb-1">Traditional Luxury Clubs</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-error-600 line-through">$5,000+</span>
                      <span className="text-gray-600">/initiation</span>
                    </div>
                    <p className="text-xs text-error-600">Plus $200+/month</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-success-500" />
                      <span>No Contracts</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-success-500" />
                      <span>Instant Access</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-success-500" />
                      <span>Money-Back Guarantee</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <HeroButton
                  onClick={handleStartMembership}
                  className="group relative overflow-hidden"
                  rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                >
                  Start Your Membership Today
                </HeroButton>
                
                <Button
                  variant="outline"
                  size="hero"
                  onClick={scrollToPricing}
                  className="group"
                  leftIcon={<Play className="w-5 h-5" />}
                >
                  Watch How It Works
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-secondary-500 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                  <span>Member Rating</span>
                </div>
                
                <div className="w-px h-4 bg-gray-300" />
                
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-500" />
                  <span>10,000+ Members</span>
                </div>
                
                <div className="w-px h-4 bg-gray-300" />
                
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-success-500" />
                  <span>SSL Secured</span>
                </div>
              </motion.div>

              {/* Social Proof */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="text-sm text-gray-500 mt-4"
              >
                Join Sarah, Mike, and 10,000+ members saving{' '}
                <span className="font-semibold text-success-600">$2M+ annually</span> on luxury travel
              </p>
            </motion.div>

            {/* Right Column - Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative"
            >
              {/* Main Hero Image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-luxury-resort.webp"
                  alt="Luxury resort villa with infinity pool"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bseSJHO/jO6O+N1ZFjBBFRiHm5p4lKDL1pCYKZcGKhYCO8e44nSosbzRpJ7n5rLdlkKx14GZpYEKUj5vZV5pqpjP8GHRDlI8b5H/2Q=="
                />
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Badge variant="success" size="sm">70% Off</Badge>
                    <span className="text-sm font-semibold">Maldives Villa</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">$399 <span className="line-through">$1,299</span></p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Badge variant="exclusive" size="sm">Members Only</Badge>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Swiss Alps Chalet</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-secondary-500 fill-current" />
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Secondary Images */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -top-8 -right-8 w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white"
              >
                <Image
                  src="/images/hero-city-view.webp"
                  alt="City skyline view"
                  fill
                  className="object-cover"
                  quality={80}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 w-28 h-28 rounded-xl overflow-hidden shadow-lg border-4 border-white"
              >
                <Image
                  src="/images/hero-beach-sunset.webp"
                  alt="Beach sunset"
                  fill
                  className="object-cover"
                  quality={80}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection