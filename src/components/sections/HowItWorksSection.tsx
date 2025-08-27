/**
 * HowItWorksSection - Clear 3-step process visualization
 * 
 * Features:
 * - Simple 3-step process: Join → Browse → Book & Save
 * - Visual progression with icons and animations
 * - Clear value proposition for each step
 * - Mobile-optimized vertical layout
 * - Micro-interactions for engagement
 */

'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import { 
  UserPlus, 
  Search, 
  Plane, 
  ArrowRight, 
  CheckCircle,
  Smartphone,
  CreditCard,
  Star,
  Clock
} from 'lucide-react'

interface Step {
  number: number
  title: string
  description: string
  details: string[]
  icon: React.ComponentType<any>
  image: string
  highlight: string
  time: string
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Join for $37/month',
    description: 'Simple signup, instant access to exclusive deals. Cancel anytime with no penalties.',
    details: [
      'No initiation fees or hidden costs',
      'Immediate access to member deals',
      'Cancel anytime policy',
      'Money-back guarantee'
    ],
    icon: UserPlus,
    image: '/images/how-it-works/signup.webp',
    highlight: 'Get started in 2 minutes',
    time: '2 min'
  },
  {
    number: 2,
    title: 'Browse exclusive deals',
    description: 'Discover hand-curated luxury experiences at up to 70% off. New deals added daily.',
    details: [
      'Curated luxury properties',
      'Up to 70% off regular rates',
      'New deals added daily',
      'Mobile app notifications'
    ],
    icon: Search,
    image: '/images/how-it-works/browse.webp',
    highlight: 'New deals every day',
    time: '5 min'
  },
  {
    number: 3,
    title: 'Book and save up to 70%',
    description: 'One-click booking with instant confirmation. No hidden fees, just transparent savings.',
    details: [
      'One-click secure booking',
      'Instant confirmation',
      'Transparent pricing',
      '24/7 member support'
    ],
    icon: Plane,
    image: '/images/how-it-works/book.webp',
    highlight: 'Instant confirmation',
    time: '1 min'
  }
]

const HowItWorksSection: React.FC = () => {
  const handleGetStarted = () => {
    // TODO: Integrate with signup flow
    window.location.href = '/signup'
  }

  return (
    <section className="py-16 sm:py-24 bg-white" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" size="lg" className="mb-6">
            Simple Process
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-cal-sans">
            How It Works
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to unlock luxury travel at unbeatable prices. 
            No complicated processes, no hidden fees.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
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
                {/* Step Number & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center">
                        <step.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary-900 font-cal-sans">
                      {step.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{step.time}</span>
                      <Badge variant="ghost" size="sm" className="ml-2">
                        {step.highlight}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {step.description}
                </p>

                {/* Details List */}
                <div className="space-y-3 mb-8">
                  {step.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (detailIndex * 0.1), duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0" />
                      <span className="text-gray-600">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA for first step */}
                {step.number === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                  >
                    <Button 
                      size="lg" 
                      onClick={handleGetStarted}
                      className="group"
                      rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    >
                      Start Your Membership
                    </Button>
                  </motion.div>
                )}
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2, duration: 0.8 }}
                  className="relative"
                >
                  {/* Main Image */}
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src={step.image}
                      alt={`Step ${step.number}: ${step.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                    />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Floating UI Elements */}
                  {step.number === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.6, duration: 0.6 }}
                      className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                    >
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-primary-600" />
                        <span className="text-sm font-semibold">Mobile Optimized</span>
                      </div>
                    </motion.div>
                  )}

                  {step.number === 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.6, duration: 0.6 }}
                      className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Star className="w-4 h-4 text-secondary-500 fill-current" />
                        <span className="text-sm font-semibold">Premium Only</span>
                      </div>
                      <p className="text-xs text-gray-600">Curated luxury properties</p>
                    </motion.div>
                  )}

                  {step.number === 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.6, duration: 0.6 }}
                      className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                    >
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-success-500" />
                        <span className="text-sm font-semibold">Secure Payment</span>
                      </div>
                      <p className="text-xs text-gray-600">SSL encrypted</p>
                    </motion.div>
                  )}
                </motion.div>

                {/* Connection Line to Next Step */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
                    className="hidden lg:block absolute -bottom-12 left-1/2 transform -translate-x-1/2"
                  >
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary-600 rotate-90" />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <Card variant="featured" className="p-8 max-w-4xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Why 10,000+ Members Choose Vayo Vault
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600 mb-2">2 min</div>
                  <div className="text-sm text-gray-600">Average signup time</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600 mb-2">70%</div>
                  <div className="text-sm text-gray-600">Average savings</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Member support</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection