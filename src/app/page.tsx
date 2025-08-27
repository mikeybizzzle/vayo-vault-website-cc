import React from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Badge variant="success" className="mb-4">
              10,000+ Happy Members
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hidden Travel Deals
            <br />
            <span className="text-primary-600">Unlocked for Members</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Exclusive access to unsold resort, hotel & cruise inventory at up to 70% off public rates. 
            Just $37/month vs. $5,000+ luxury travel clubs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Start Your Membership Today
            </Button>
            <Button variant="secondary" size="lg">
              See How It Works
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            ✓ 30-day money back guarantee &nbsp;&nbsp; ✓ Cancel anytime &nbsp;&nbsp; ✓ No contracts
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join 10,000+ Members Saving $2M+ Annually
            </h2>
            <p className="text-gray-600">Real members, real savings, real experiences</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="default">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-semibold">SJ</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">Marketing Director</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Saved $2,800 on our Bali vacation. The resort was incredible and we paid less than half the public rate!"
                </p>
                <Badge variant="success" size="sm">Saved $2,800</Badge>
              </div>
            </Card>
            
            <Card variant="default">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-semibold">MC</span>
                  </div>
                  <div>
                    <div className="font-semibold">Mike Chen</div>
                    <div className="text-sm text-gray-500">Software Engineer</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "The exclusive cruise deals are amazing. We've booked 3 trips this year and saved over $3,400 total."
                </p>
                <Badge variant="success" size="sm">Saved $3,400</Badge>
              </div>
            </Card>
            
            <Card variant="default">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-semibold">LR</span>
                  </div>
                  <div>
                    <div className="font-semibold">Lisa Rodriguez</div>
                    <div className="text-sm text-gray-500">Teacher</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Finally found a travel club that's actually affordable. No pressure sales, just great deals."
                </p>
                <Badge variant="success" size="sm">Saved $1,900</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600">Simple, transparent, and rewarding</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Join for $37/month</h3>
              <p className="text-gray-600">Quick signup in under 2 minutes. Cancel anytime, no contracts.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Browse Exclusive Deals</h3>
              <p className="text-gray-600">Access our curated selection of luxury travel deals updated daily.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Book & Save Up to 70%</h3>
              <p className="text-gray-600">Book directly through our platform and enjoy incredible savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Timeshare Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            NOT A TIMESHARE
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            We're Different from Traditional Travel Clubs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-red-600 mb-4">Traditional Travel Clubs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• $5,000+ upfront fees</li>
                <li>• Long-term contracts</li>
                <li>• High-pressure sales</li>
                <li>• Hidden fees</li>
                <li>• Limited availability</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-green-600 mb-4">Vayo Vault</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Just $37/month</li>
                <li>• Cancel anytime</li>
                <li>• No pressure, browse at your pace</li>
                <li>• Transparent pricing</li>
                <li>• 500+ exclusive properties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Saving on Luxury Travel?
          </h2>
          
          <p className="text-xl text-primary-100 mb-8">
            Join 10,000+ members who've saved over $2M on their dream vacations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="secondary" size="lg">
              Start Your Membership - $37/month
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
              Get Free Travel Tips
            </Button>
          </div>
          
          <div className="text-sm text-primary-100">
            30-day money back guarantee • Cancel anytime • No contracts
          </div>
        </div>
      </section>
    </div>
  );
}