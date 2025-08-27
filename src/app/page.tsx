import { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Testimonials } from '@/components/sections/testimonials'
import { Pricing } from '@/components/sections/pricing'
import { FAQ } from '@/components/sections/faq'
import { CTA } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'Vayo Vault - The Netflix of Travel Savings',
  description: 'Unlock exclusive luxury travel experiences at unbeatable prices with our $37/month membership. Hand-curated deals, transparent pricing, cancel anytime.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}