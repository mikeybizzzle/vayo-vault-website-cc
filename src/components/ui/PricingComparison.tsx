/**
 * PricingComparison Component
 * 
 * Reusable pricing comparison card for value proposition display
 * Features visual comparison between Vayo Vault and alternatives
 */

'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { motion } from 'framer-motion'
import { CheckCircle, X, ArrowRight } from 'lucide-react'

interface PricingItem {
  label: string
  price: string
  period?: string
  features?: string[]
  highlight?: string
  negative?: boolean
}

interface PricingComparisonProps {
  vayoVault: PricingItem
  competitor: PricingItem
  className?: string
  animated?: boolean
}

const PricingComparison: React.FC<PricingComparisonProps> = ({
  vayoVault,
  competitor,
  className = '',
  animated = true
}) => {
  const MotionWrapper = animated ? motion.div : 'div'

  return (
    <MotionWrapper
      {...(animated && {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
      })}
      className={className}
    >
      <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            
            {/* Vayo Vault Column */}
            <div className="p-6 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500" />
              
              <div className="text-center">
                <div className="mb-3">
                  <Badge variant="trusted" size="sm" className="mb-2">
                    {vayoVault.highlight || 'Recommended'}
                  </Badge>
                  <h3 className="font-semibold text-primary-900">
                    {vayoVault.label}
                  </h3>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-bold text-primary-600">
                      {vayoVault.price}
                    </span>
                    {vayoVault.period && (
                      <span className="text-gray-600">/{vayoVault.period}</span>
                    )}
                  </div>
                </div>
                
                {vayoVault.features && (
                  <div className="space-y-2">
                    {vayoVault.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Competitor Column */}
            <div className="p-6 bg-gray-50/50 relative">
              <div className="text-center">
                <div className="mb-3">
                  <Badge variant="outline" size="sm" className="mb-2 opacity-60">
                    {competitor.highlight || 'Alternative'}
                  </Badge>
                  <h3 className="font-semibold text-gray-900">
                    {competitor.label}
                  </h3>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className={`text-3xl font-bold ${
                      competitor.negative ? 'text-error-600' : 'text-gray-900'
                    }`}>
                      {competitor.price}
                    </span>
                    {competitor.period && (
                      <span className="text-gray-600">/{competitor.period}</span>
                    )}
                  </div>
                </div>
                
                {competitor.features && (
                  <div className="space-y-2">
                    {competitor.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <X className="w-4 h-4 text-error-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Bottom Summary */}
          <div className="px-6 py-4 bg-gradient-to-r from-success-50 to-primary-50 border-t border-gray-200">
            <div className="flex items-center justify-center gap-3 text-sm">
              <span className="font-semibold text-success-700">
                You Save: 85% with Vayo Vault
              </span>
              <ArrowRight className="w-4 h-4 text-success-600" />
              <span className="text-gray-600">
                Plus cancel anytime
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </MotionWrapper>
  )
}

export default PricingComparison