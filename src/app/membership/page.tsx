'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

export default function MembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    agreeToTerms: false,
    subscribeNewsletter: true
  });

  const benefits = [
    {
      category: 'Access & Savings',
      items: [
        'Up to 70% off luxury travel experiences',
        'Exclusive access to 500+ premium properties',
        'Members-only deals updated daily',
        'No booking fees or hidden charges'
      ]
    },
    {
      category: 'Booking & Support',
      items: [
        'One-click secure booking platform',
        'Instant confirmation for all bookings',
        '24/7 dedicated member support',
        'Flexible cancellation policies'
      ]
    },
    {
      category: 'Member Perks',
      items: [
        'Early access to flash deals',
        'Member-only travel tips and guides',
        'Exclusive member community access',
        'Birthday and anniversary specials'
      ]
    },
    {
      category: 'Guarantee & Flexibility',
      items: [
        '30-day money-back guarantee',
        'Cancel anytime, no penalties',
        'No long-term contracts required',
        'Pause membership up to 3 months'
      ]
    }
  ];

  const comparisonData = [
    {
      feature: 'Monthly Cost',
      vayo: '$37/month',
      traditional: '$500-2000+ upfront',
      public: 'Free'
    },
    {
      feature: 'Commitment',
      vayo: 'Cancel anytime',
      traditional: '1-10 year contracts',
      public: 'None'
    },
    {
      feature: 'Average Savings',
      vayo: '40-70% off',
      traditional: '20-40% off',
      public: '0%'
    },
    {
      feature: 'Booking Fees',
      vayo: '$0',
      traditional: '$50-200 per booking',
      public: 'Varies'
    },
    {
      feature: 'Properties',
      vayo: '500+ luxury',
      traditional: '50-200 properties',
      public: 'All (no curation)'
    },
    {
      feature: 'Support',
      vayo: '24/7 dedicated',
      traditional: 'Business hours only',
      public: 'Limited'
    }
  ];

  const memberReviews = [
    {
      name: 'Amanda Foster',
      image: 'AF',
      rating: 5,
      review: 'Best investment I\'ve made! Saved $3,200 on our anniversary trip to the Maldives. The booking process was seamless.',
      savings: '$3,200',
      months: 8
    },
    {
      name: 'James Wilson',
      image: 'JW',
      rating: 5,
      review: 'I was skeptical at first, but after 6 months and 3 amazing trips, I\'m convinced. The deals are real and the service is excellent.',
      savings: '$4,100',
      months: 6
    },
    {
      name: 'Maria Rodriguez',
      image: 'MR',
      rating: 5,
      review: 'As a teacher, expensive travel seemed impossible. Vayo Vault made luxury affordable. Already planning trip #4!',
      savings: '$2,800',
      months: 10
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with payment processor
    console.log('Form submitted:', formData);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Badge variant="success" className="mb-6">
            10,000+ Happy Members
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Vayo Vault
            <br />
            <span className="text-primary-600">For Just $37/Month</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Unlock exclusive access to luxury travel deals at up to 70% off public rates. 
            No contracts, no hidden fees, cancel anytime.
          </p>
          <div className="flex justify-center items-center space-x-6 mb-8">
            <Badge variant="success" size="sm">30-Day Guarantee</Badge>
            <Badge variant="success" size="sm">Cancel Anytime</Badge>
            <Badge variant="success" size="sm">No Contracts</Badge>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600">
              Choose the plan that works for you. Switch or cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Monthly Plan */}
            <Card 
              variant="default"
              className={`relative cursor-pointer transition-all ${
                selectedPlan === 'monthly' ? 'ring-2 ring-primary-500 shadow-lg' : ''
              }`}
              onClick={() => setSelectedPlan('monthly')}
            >
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary-600">$37</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Perfect for trying out Vayo Vault with complete flexibility
                </p>
                <ul className="space-y-3 text-sm text-left">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    All member benefits included
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cancel anytime, no penalty
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    30-day money back guarantee
                  </li>
                </ul>
              </div>
            </Card>

            {/* Annual Plan */}
            <Card 
              variant="default"
              className={`relative cursor-pointer transition-all ${
                selectedPlan === 'annual' ? 'ring-2 ring-primary-500 shadow-lg' : ''
              }`}
              onClick={() => setSelectedPlan('annual')}
            >
              <Badge 
                variant="success" 
                className="absolute -top-3 left-1/2 transform -translate-x-1/2"
              >
                Save $74
              </Badge>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Annual</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary-600">$370</span>
                  <span className="text-gray-600">/year</span>
                  <div className="text-sm text-gray-500">
                    <span className="line-through">$444</span> - Save $74
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Best value for frequent travelers who want to maximize savings
                </p>
                <ul className="space-y-3 text-sm text-left">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Everything in monthly plan
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    2 months free (save $74)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Priority support access
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything Included in Your Membership
            </h2>
            <p className="text-gray-600">
              Unlock all these benefits for less than $1.25 per day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((category) => (
              <Card key={category.category} variant="default" className="h-full">
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Compare
            </h2>
            <p className="text-gray-600">
              See why smart travelers choose Vayo Vault over traditional travel clubs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-primary-600">
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-2">
                        <span className="text-white text-xs font-bold">V</span>
                      </div>
                      Vayo Vault
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-600">Traditional Clubs</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-600">Public Booking</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {row.vayo}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.traditional}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.public}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Member Reviews */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Members Say
            </h2>
            <p className="text-gray-600">
              Real reviews from real members who've saved thousands
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {memberReviews.map((review) => (
              <Card key={review.name} variant="default">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary-600 font-semibold">{review.image}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="flex items-center">
                        {renderStars(review.rating)}
                        <span className="text-sm text-gray-500 ml-2">
                          Member {review.months} months
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{review.review}"
                  </p>
                  <Badge variant="success" size="sm">
                    Saved {review.savings}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Saving?
            </h2>
            <p className="text-xl text-primary-100 mb-2">
              Join 10,000+ members in under 2 minutes
            </p>
            <p className="text-primary-200">
              30-day money back guarantee • Cancel anytime • No contracts
            </p>
          </div>

          <Card variant="default" className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="Enter your phone number (optional)"
                />
              </div>

              {/* Plan Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Selected Plan
                </label>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-gray-900">
                        {selectedPlan === 'monthly' ? 'Monthly Plan' : 'Annual Plan'}
                      </span>
                      <div className="text-sm text-gray-600">
                        {selectedPlan === 'monthly' ? 
                          'Cancel anytime, full flexibility' : 
                          'Save $74 per year, best value'
                        }
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600">
                        {selectedPlan === 'monthly' ? '$37' : '$370'}
                      </div>
                      <div className="text-sm text-gray-600">
                        /{selectedPlan === 'monthly' ? 'month' : 'year'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    required
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 mr-3"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the <a href="/terms" className="text-primary-600 underline">Terms of Service</a> and{' '}
                    <a href="/privacy" className="text-primary-600 underline">Privacy Policy</a> *
                  </span>
                </label>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleInputChange}
                    className="mt-1 mr-3"
                  />
                  <span className="text-sm text-gray-600">
                    Send me exclusive deals and travel tips (optional)
                  </span>
                </label>
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="w-full text-lg"
              >
                Start My Membership - {selectedPlan === 'monthly' ? '$37/month' : '$370/year'}
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Secure checkout with 256-bit SSL encryption
              </p>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}