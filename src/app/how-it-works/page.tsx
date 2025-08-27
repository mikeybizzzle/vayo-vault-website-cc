import React from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Discover how Vayo Vault\'s simple 3-step process gives you access to exclusive luxury travel deals at up to 70% off public rates.',
  openGraph: {
    title: 'How Vayo Vault Works - Simple 3-Step Process',
    description: 'Join, browse exclusive deals, save up to 70% on luxury travel.',
  },
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: 'Join for $37/month',
      subtitle: 'Quick & Easy Signup',
      description: 'Join our exclusive community in under 2 minutes. No long-term contracts, no hidden fees, cancel anytime.',
      details: [
        'Instant access to member portal',
        'No credit checks or qualifications',
        '30-day money-back guarantee',
        'Cancel online anytime, no calls needed'
      ],
      icon: '👤'
    },
    {
      number: 2,
      title: 'Browse Exclusive Deals',
      subtitle: 'Curated for Quality',
      description: 'Access our hand-selected collection of luxury travel deals updated daily by our travel experts.',
      details: [
        '500+ premium properties worldwide',
        'Deals updated daily, never stale inventory',
        'Detailed property descriptions and photos',
        'Real member reviews and ratings'
      ],
      icon: '🔍'
    },
    {
      number: 3,
      title: 'Book & Save Up to 70%',
      subtitle: 'Instant Booking',
      description: 'Book directly through our secure platform and enjoy incredible savings on your dream vacation.',
      details: [
        'One-click booking with secure payment',
        'Instant confirmation emails',
        'Direct booking with properties',
        '24/7 member support for bookings'
      ],
      icon: '✈️'
    }
  ];

  const dealExamples = [
    {
      destination: 'Santorini, Greece',
      property: 'Luxury Cliffside Villa',
      publicPrice: '$4,200',
      memberPrice: '$1,680',
      savings: '$2,520',
      savingsPercent: '60%',
      nights: '5 nights'
    },
    {
      destination: 'Maui, Hawaii',
      property: 'Beachfront Resort Suite',
      publicPrice: '$3,800',
      memberPrice: '$1,520',
      savings: '$2,280',
      savingsPercent: '60%',
      nights: '4 nights'
    },
    {
      destination: 'Tuscany, Italy',
      property: 'Historic Villa Estate',
      publicPrice: '$5,600',
      memberPrice: '$2,240',
      savings: '$3,360',
      savingsPercent: '60%',
      nights: '7 nights'
    }
  ];

  const faqs = [
    {
      question: 'How do you get these exclusive deals?',
      answer: 'We leverage our industry relationships and bulk buying power to negotiate rates that aren\'t available to the public. Hotels and resorts prefer to offer us their unsold premium inventory at discounted rates rather than leave rooms empty.'
    },
    {
      question: 'Are there any booking restrictions?',
      answer: 'Our deals typically have some travel date restrictions to ensure availability, but we offer much more flexibility than traditional travel clubs. Most deals allow booking 30-365 days in advance with various date options.'
    },
    {
      question: 'What if I need to cancel my trip?',
      answer: 'Cancellation policies vary by property, but they\'re clearly displayed before booking. Many of our deals offer more flexible cancellation than public rates. We also provide trip insurance options for additional protection.'
    },
    {
      question: 'Is my payment information secure?',
      answer: 'Absolutely. We use industry-standard SSL encryption and work with trusted payment processors. Your payment information is never stored on our servers and all transactions are fully secured.'
    },
    {
      question: 'Can I book for family/friends?',
      answer: 'Yes! Your membership allows you to book travel for anyone. Many members book trips as gifts or for family gatherings. The member just needs to be involved in the booking process.'
    },
    {
      question: 'What happens if something goes wrong with my booking?',
      answer: 'Our 24/7 member support team is here to help resolve any issues. We work directly with properties to ensure your experience meets expectations and can assist with rebooking if necessary.'
    }
  ];

  const testimonials = [
    {
      name: 'Rachel Thompson',
      role: 'Marketing Manager',
      image: 'RT',
      quote: 'The booking process was incredibly smooth. Found a luxury resort in Costa Rica, booked in minutes, and saved $2,100 compared to other sites.',
      savings: '$2,100',
      destination: 'Costa Rica'
    },
    {
      name: 'David Kim',
      role: 'Software Developer',
      image: 'DK',
      quote: 'I was skeptical at first, but after saving over $4,000 on three trips this year, I\'m convinced. The deals are real and the properties are amazing.',
      savings: '$4,000',
      destination: 'Multiple trips'
    },
    {
      name: 'Maria Santos',
      role: 'Teacher',
      image: 'MS',
      quote: 'As a teacher, expensive travel was out of reach. Vayo Vault made luxury accessible. The Bali villa we stayed in was pure paradise.',
      savings: '$1,850',
      destination: 'Bali, Indonesia'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Badge variant="success" className="mb-6">
            Simple 3-Step Process
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Vayo Vault Works
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Getting access to exclusive luxury travel deals is simpler than you think. 
            Join thousands of smart travelers who've discovered the easiest way to save on premium experiences.
          </p>
          <Button variant="primary" size="lg">
            Start Saving Today - $37/month
          </Button>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Three Simple Steps to Luxury Travel
            </h2>
            <p className="text-gray-600">
              No complicated applications, no sales presentations, no lengthy commitments
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Connection Line */}
                {step.number < 3 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary-200 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
                
                <Card variant="default" className="h-full relative z-10">
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    
                    <div className="mb-4">
                      <Badge variant="outline" className="text-primary-600 border-primary-200 mb-2">
                        Step {step.number}
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-primary-600 font-medium text-sm">
                        {step.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      {step.details.map((detail, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal Examples */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real Deal Examples
            </h2>
            <p className="text-gray-600">
              See the actual savings our members enjoy on luxury destinations worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {dealExamples.map((deal) => (
              <Card key={deal.destination} variant="default">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{deal.destination}</h3>
                      <p className="text-sm text-gray-600">{deal.property}</p>
                      <p className="text-xs text-gray-500 mt-1">{deal.nights}</p>
                    </div>
                    <Badge variant="success" size="sm">
                      {deal.savingsPercent} OFF
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Public Rate:</span>
                      <span className="text-sm font-medium line-through text-gray-500">{deal.publicPrice}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Member Rate:</span>
                      <span className="text-lg font-bold text-primary-600">{deal.memberPrice}</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">You Save:</span>
                        <span className="font-bold text-green-600">{deal.savings}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">
              * Deal examples are based on recent member bookings. Actual savings may vary.
            </p>
            <Button variant="primary">
              See Current Deals
            </Button>
          </div>
        </div>
      </section>

      {/* Member Success Stories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Member Success Stories
            </h2>
            <p className="text-gray-600">
              Hear from real members about their booking experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} variant="default">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary-600 font-semibold">{testimonial.image}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <Badge variant="success" size="sm">
                      Saved {testimonial.savings}
                    </Badge>
                    <span className="text-gray-500">{testimonial.destination}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything you need to know about how Vayo Vault works
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} variant="default">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Still have questions?
            </p>
            <Button variant="outline">
              Contact Our Support Team
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of smart travelers who've discovered the simple way to access luxury travel deals. 
            Your next dream vacation is just three steps away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="secondary" size="lg">
              Join Now - $37/month
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
              View Current Deals
            </Button>
          </div>
          <div className="text-sm text-primary-100">
            30-day money back guarantee • Cancel anytime • No pressure, no sales calls
          </div>
        </div>
      </section>
    </div>
  );
}