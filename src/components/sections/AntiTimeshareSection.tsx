/**
 * AntiTimeshareSection - Clear positioning against timeshares
 * 
 * Features:
 * - "Not a timeshare" clear messaging
 * - No contracts or commitments
 * - Cancel anytime guarantee
 * - Comparison table vs traditional timeshares
 * - Trust-building transparency
 */

'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import { 
  X, 
  CheckCircle, 
  Shield, 
  Calendar, 
  DollarSign, 
  Users, 
  Clock,
  AlertTriangle,
  Ban,
  Heart
} from 'lucide-react'

interface Comparison {
  feature: string
  vayoVault: {
    value: string
    positive: boolean
    icon?: React.ComponentType<any>
  }
  timeshare: {
    value: string
    positive: boolean
    icon?: React.ComponentType<any>
  }
}

const comparisons: Comparison[] = [
  {
    feature: 'Initial Cost',
    vayoVault: { value: '$0 upfront', positive: true, icon: DollarSign },
    timeshare: { value: '$15,000-$50,000+', positive: false, icon: AlertTriangle }
  },
  {
    feature: 'Monthly Fee',
    vayoVault: { value: '$37/month', positive: true, icon: CheckCircle },
    timeshare: { value: '$200-$500/month', positive: false, icon: X }
  },
  {
    feature: 'Commitment',
    vayoVault: { value: 'Cancel anytime', positive: true, icon: Shield },
    timeshare: { value: '10-30+ year contracts', positive: false, icon: Ban }
  },
  {
    feature: 'Destinations',
    vayoVault: { value: '500+ worldwide', positive: true, icon: Heart },
    timeshare: { value: 'Limited to owned properties', positive: false, icon: X }
  },
  {
    feature: 'Booking Flexibility',
    vayoVault: { value: 'Book anytime, anywhere', positive: true, icon: Calendar },
    timeshare: { value: 'Fixed weeks/seasons only', positive: false, icon: Clock }
  },
  {
    feature: 'Sales Process',
    vayoVault: { value: 'Transparent, no pressure', positive: true, icon: Users },
    timeshare: { value: 'High-pressure presentations', positive: false, icon: AlertTriangle }
  }
]

const guarantees = [
  {
    icon: Shield,
    title: 'Money-Back Guarantee',
    description: '30-day full refund if not satisfied'
  },
  {
    icon: Calendar,
    title: 'Cancel Anytime',
    description: 'No cancellation fees or penalties'
  },
  {
    icon: CheckCircle,
    title: 'No Hidden Fees',
    description: 'Transparent pricing, no surprises'
  },
  {
    icon: Users,
    title: 'No Sales Calls',
    description: 'Join online in minutes, no presentations'
  }
]

const AntiTimeshareSection: React.FC = () => {
  const handleJoinNow = () => {
    // TODO: Integrate with signup flow
    window.location.href = '/signup'
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="warning" size="lg" className="mb-6">
            Important Distinction
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-cal-sans">
            We're <span className="text-error-600">NOT</span> a Timeshare
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Unlike traditional timeshares with expensive contracts and high-pressure tactics, 
            Vayo Vault offers complete freedom and transparency.
          </p>
          
          <div className="inline-flex items-center gap-3 bg-success-50 border border-success-200 rounded-full px-6 py-3">
            <CheckCircle className="w-5 h-5 text-success-600" />
            <span className="text-success-800 font-semibold">
              No contracts • No commitments • No pressure
            </span>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary-50 to-secondary-50 text-center pb-8">
              <CardTitle className="text-2xl font-bold text-primary-900">
                Vayo Vault vs Traditional Timeshares
              </CardTitle>
              <p className="text-gray-600 mt-2">
                See why smart travelers choose Vayo Vault
              </p>
            </CardHeader>
            
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-6 font-semibold text-gray-900 w-1/3">
                        Feature
                      </th>
                      <th className="text-center p-6 bg-primary-50">
                        <div className="flex items-center justify-center gap-2">
                          <Heart className="w-5 h-5 text-primary-600" />
                          <span className="font-bold text-primary-900">Vayo Vault</span>
                        </div>
                      </th>
                      <th className="text-center p-6 bg-gray-50">
                        <div className="flex items-center justify-center gap-2">
                          <Ban className="w-5 h-5 text-gray-600" />
                          <span className="font-bold text-gray-900">Traditional Timeshares</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((comparison, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="p-6 font-medium text-gray-900">
                          {comparison.feature}
                        </td>
                        
                        {/* Vayo Vault Column */}
                        <td className="p-6 text-center bg-primary-50/30">
                          <div className="flex items-center justify-center gap-2">
                            {comparison.vayoVault.icon && (
                              <comparison.vayoVault.icon className={`w-4 h-4 ${
                                comparison.vayoVault.positive ? 'text-success-500' : 'text-error-500'
                              }`} />
                            )}
                            <span className={`font-semibold ${
                              comparison.vayoVault.positive ? 'text-success-700' : 'text-error-700'
                            }`}>
                              {comparison.vayoVault.value}
                            </span>
                          </div>
                        </td>
                        
                        {/* Timeshare Column */}
                        <td className="p-6 text-center bg-gray-50/50">
                          <div className="flex items-center justify-center gap-2">
                            {comparison.timeshare.icon && (
                              <comparison.timeshare.icon className={`w-4 h-4 ${
                                comparison.timeshare.positive ? 'text-success-500' : 'text-error-500'
                              }`} />
                            )}
                            <span className={`font-semibold ${
                              comparison.timeshare.positive ? 'text-success-700' : 'text-error-700'
                            }`}>
                              {comparison.timeshare.value}
                            </span>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4">
              Our Ironclad Guarantees
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in complete transparency and your right to choose. 
              That's why we offer these guarantees with every membership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <Card variant="interactive" className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-success-100 rounded-full">
                        <guarantee.icon className="w-8 h-8 text-success-600" />
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-gray-900 mb-2">
                      {guarantee.title}
                    </h4>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {guarantee.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <Card variant="featured" className="p-8 max-w-4xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4">
                Experience True Travel Freedom
              </h3>
              
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Join 10,000+ members who chose transparency over contracts, 
                freedom over commitments, and savings over sales pressure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="hero"
                  onClick={handleJoinNow}
                  className="group"
                >
                  Join Vayo Vault Today
                  <CheckCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                No contracts • Cancel anytime • No hidden fees
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default AntiTimeshareSection