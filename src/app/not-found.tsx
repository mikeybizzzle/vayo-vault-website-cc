import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export default function NotFound() {
  const popularPages = [
    { name: 'How It Works', href: '/how-it-works', description: 'Learn about our simple 3-step process' },
    { name: 'Membership', href: '/membership', description: 'Join for just $37/month' },
    { name: 'About Us', href: '/about', description: 'Meet our travel industry experts' },
    { name: 'Contact', href: '/contact', description: 'Get help from our support team' }
  ];

  const featuredDeals = [
    {
      destination: 'Santorini, Greece',
      originalPrice: '$4,200',
      memberPrice: '$1,680',
      savings: '60%'
    },
    {
      destination: 'Maui, Hawaii',
      originalPrice: '$3,800',
      memberPrice: '$1,520',
      savings: '60%'
    },
    {
      destination: 'Bali, Indonesia',
      originalPrice: '$2,900',
      memberPrice: '$1,160',
      savings: '60%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* 404 Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            {/* Large 404 illustration */}
            <div className="relative inline-block">
              <div className="text-[8rem] md:text-[12rem] font-bold text-primary-100 leading-none select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">✈️</div>
              </div>
            </div>
          </div>

          <Badge variant="outline" className="mb-6">
            Page Not Found
          </Badge>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! This Page Took a Detour
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Looks like this page went on vacation without telling us! 
            Don't worry - there are plenty of amazing destinations to explore on our site.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button variant="primary" size="lg">
                Go Back Home
              </Button>
            </Link>
            <Link href="/membership">
              <Button variant="secondary" size="lg">
                Join Now - $37/month
              </Button>
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            If you think this is a mistake, please <Link href="/contact" className="text-primary-600 hover:underline">contact our support team</Link>
          </p>
        </div>
      </section>

      {/* Popular Pages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Popular Pages
            </h2>
            <p className="text-gray-600">
              These might be what you're looking for
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPages.map((page) => (
              <Card key={page.name} variant="default" className="hover:shadow-lg transition-shadow">
                <Link href={page.href} className="block p-6 text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {page.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {page.description}
                  </p>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deals Teaser */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              While You're Here, Check Out These Deals
            </h2>
            <p className="text-gray-600 mb-6">
              These exclusive member deals won't last long
            </p>
            <Badge variant="success">
              Join today to unlock these savings
            </Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredDeals.map((deal) => (
              <Card key={deal.destination} variant="default">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {deal.destination}
                      </h3>
                      <p className="text-sm text-gray-600">Luxury Resort</p>
                    </div>
                    <Badge variant="success" size="sm">
                      {deal.savings} OFF
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Public Rate:</span>
                      <span className="text-sm font-medium line-through text-gray-500">
                        {deal.originalPrice}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Member Rate:</span>
                      <span className="text-lg font-bold text-primary-600">
                        {deal.memberPrice}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-xs text-gray-500 text-center">
                      Members-only pricing • Join to unlock
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/membership">
              <Button variant="primary" size="lg">
                Join Now to See All Deals
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Finding Something?
          </h2>
          
          <p className="text-gray-600 mb-8">
            Our team is here to help you navigate to the right place
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-sm text-gray-600 mb-3">
                Chat with our support team in real-time
              </p>
              <Button variant="outline" size="sm">
                Start Chat
              </Button>
            </div>

            <div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-sm text-gray-600 mb-3">
                Call us for immediate assistance
              </p>
              <Button variant="outline" size="sm">
                1-800-VAYO-123
              </Button>
            </div>

            <div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-sm text-gray-600 mb-3">
                Send us a message anytime
              </p>
              <Link href="/contact">
                <Button variant="outline" size="sm">
                  Contact Form
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Don't Let This Detour Stop Your Journey
          </h2>
          <p className="text-primary-100 mb-8">
            Join thousands of smart travelers already saving on luxury experiences
          </p>
          <Link href="/membership">
            <Button variant="secondary" size="lg">
              Start Your Adventure - $37/month
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}