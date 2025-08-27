/**
 * FinalCTASection - High-converting final call-to-action
 * 
 * Features:
 * - Urgency elements (limited launch pricing)
 * - Multiple signup pathways
 * - Email capture option
 * - Social proof reinforcement
 * - Risk reversal (guarantees)
 * - Scarcity without false urgency
 */

'use client'

import React, { useState } from 'react'
import { Button, HeroButton } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  Mail, 
  CheckCircle, 
  Star, 
  Users, 
  Shield, 
  Clock,
  Zap,
  Gift,
  Heart,
  Sparkles
} from 'lucide-react'

const FinalCTASection: React.FC = () => {
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleJoinNow = () => {
    // TODO: Integrate with signup flow
    window.location.href = '/signup'
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isLoading) return

    setIsLoading(true)
    
    // TODO: Integrate with email capture API
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
    
    setEmailSubmitted(true)
    setIsLoading(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5" />
      
      {/* Animated Background Shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <Card variant="featured" className="relative overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-secondary-600/5" />
            
            <CardContent className="relative p-8 sm:p-12">
              <div className="text-center">
                
                {/* Limited Time Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-6 flex justify-center"
                >
                  <Badge variant="new" size="lg" className="animate-pulse">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Limited Launch Pricing
                  </Badge>
                </motion.div>

                {/* Main Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-cal-sans"
                >
                  Ready to Unlock Luxury Travel 
                  <span className="text-gradient-gold"> for Less?</span>
                </motion.h2>

                {/* Subheading */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
                >
                  Join 10,000+ smart travelers saving up to 70% on luxury experiences. 
                  Start your membership today and book your first trip this week.
                </motion.p>

                {/* Value Props Row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10"
                >
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-success-500" />
                    <span className="text-gray-700">Cancel Anytime</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Shield className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-700">30-Day Guarantee</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Zap className="w-5 h-5 text-secondary-500" />
                    <span className="text-gray-700">Instant Access</span>
                  </div>
                </motion.div>

                {/* Primary CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0, duration: 0.8 }}
                  className="mb-8"
                >
                  <HeroButton
                    onClick={handleJoinNow}
                    className="group relative overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
                    rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  >
                    Start Your Membership - $37/Month
                  </HeroButton>
                  
                  <p className="text-sm text-gray-600 mt-3">
                    Join in 2 minutes • No contracts • Money-back guarantee
                  </p>
                </motion.div>

                {/* Divider */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="flex items-center justify-center mb-8"
                >
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                  <span className="mx-4 text-sm text-gray-500">or</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                </motion.div>

                {/* Email Capture */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                  className="max-w-md mx-auto"
                >
                  <AnimatePresence mode="wait">
                    {!emailSubmitted ? (
                      <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-sm text-gray-600 mb-4">
                          Not ready to join? Get exclusive deals sent to your inbox
                        </p>
                        
                        <form onSubmit={handleEmailSubmit} className="flex gap-3">
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1"
                            required
                          />
                          <Button 
                            type="submit" 
                            variant="outline"
                            loading={isLoading}
                            leftIcon={<Mail className="w-4 h-4" />}
                          >
                            Subscribe
                          </Button>
                        </form>
                        
                        <p className="text-xs text-gray-500 mt-2">
                          Free travel tips • Exclusive member deals • Unsubscribe anytime
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                      >
                        <div className="flex justify-center mb-3">
                          <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-6 h-6 text-success-600" />
                          </div>
                        </div>
                        
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Thanks for subscribing!
                        </h4>
                        
                        <p className="text-sm text-gray-600 mb-4">
                          You'll receive exclusive deals and travel tips in your inbox.
                        </p>
                        
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={handleJoinNow}
                        >
                          Ready to join now?
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Social Proof Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <Card className="bg-white/60 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
                
                {/* Member Count */}
                <div className="group">
                  <div className="flex justify-center mb-2">
                    <Users className="w-8 h-8 text-primary-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl font-bold text-primary-900 mb-1">10,000+</div>
                  <div className="text-sm text-gray-600">Happy Members</div>
                </div>

                {/* Rating */}
                <div className="group">
                  <div className="flex justify-center mb-2">
                    <Star className="w-8 h-8 text-secondary-500 fill-current group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl font-bold text-primary-900 mb-1">4.9/5</div>
                  <div className="text-sm text-gray-600">Member Rating</div>
                </div>

                {/* Savings */}
                <div className="group">
                  <div className="flex justify-center mb-2">
                    <Gift className="w-8 h-8 text-success-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl font-bold text-primary-900 mb-1">70%</div>
                  <div className="text-sm text-gray-600">Average Savings</div>
                </div>

                {/* Support */}
                <div className="group">
                  <div className="flex justify-center mb-2">
                    <Heart className="w-8 h-8 text-error-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl font-bold text-primary-900 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Member Support</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Final Trust Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of smart travelers who've discovered the secret to luxury travel at unbeatable prices. 
            <span className="font-semibold text-primary-700"> Your dream vacation awaits.</span>
          </p>
          
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>SSL Secured</span>
            </div>
            
            <div className="w-px h-4 bg-gray-300" />
            
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>2-Minute Signup</span>
            </div>
            
            <div className="w-px h-4 bg-gray-300" />
            
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </motion.div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="text-gray-500 hover:text-primary-600"
          >
            Back to Top ↑
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTASection