'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    isUrgent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  const contactMethods = [
    {
      title: '24/7 Member Support',
      description: 'For current members needing booking assistance',
      method: 'Live Chat',
      availability: 'Always available',
      icon: '💬',
      responseTime: 'Under 5 minutes'
    },
    {
      title: 'General Inquiries',
      description: 'Questions about membership and how we work',
      method: 'Email',
      availability: 'Business hours',
      icon: '📧',
      responseTime: 'Within 2 hours'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our travel experts',
      method: '1-800-VAYO-123',
      availability: 'Mon-Fri 8am-8pm EST',
      icon: '📞',
      responseTime: 'Immediate'
    },
    {
      title: 'Partnership Inquiries',
      description: 'For hotels and resorts interested in partnerships',
      method: 'partners@vayovault.com',
      availability: 'Business hours',
      icon: '🤝',
      responseTime: 'Within 24 hours'
    }
  ];

  const faqCategories = [
    {
      id: 'general',
      name: 'General Questions',
      faqs: [
        {
          question: 'How does Vayo Vault work?',
          answer: 'Vayo Vault is a membership-based platform offering exclusive access to luxury travel deals at up to 70% off public rates. You join for $37/month, browse our curated deals, and book directly through our platform.'
        },
        {
          question: 'What makes your deals exclusive?',
          answer: 'We partner directly with luxury hotels and resorts to access their unsold premium inventory. These deals aren\'t available to the general public and offer significant savings over standard booking sites.'
        },
        {
          question: 'Can I cancel my membership anytime?',
          answer: 'Yes! There are no long-term contracts. You can cancel your membership at any time online or by contacting our support team. No cancellation fees or penalties.'
        }
      ]
    },
    {
      id: 'membership',
      name: 'Membership',
      faqs: [
        {
          question: 'How much does membership cost?',
          answer: 'Membership is $37/month with no long-term commitment. We also offer an annual plan for $370 (saving you $74 per year). All plans include the same benefits and access to exclusive deals.'
        },
        {
          question: 'Is there a free trial?',
          answer: 'We offer a 30-day money-back guarantee instead of a free trial. This ensures you can access real deals and test our service fully. If you\'re not satisfied, we\'ll refund your first month completely.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover) and PayPal. All payments are processed securely with 256-bit SSL encryption.'
        }
      ]
    },
    {
      id: 'booking',
      name: 'Booking & Travel',
      faqs: [
        {
          question: 'How do I book a deal?',
          answer: 'Once you\'re a member, browse available deals in your member portal. Click on any deal to see full details, then use our one-click booking system. You\'ll receive instant confirmation via email.'
        },
        {
          question: 'What if I need to cancel my trip?',
          answer: 'Cancellation policies vary by property and are clearly displayed before booking. Many of our deals offer more flexible cancellation than public rates. We also offer travel insurance options for additional protection.'
        },
        {
          question: 'Can I book for family and friends?',
          answer: 'Yes! Your membership allows you to book travel for anyone. The member just needs to be involved in the booking process. Many members book trips as gifts or for family gatherings.'
        }
      ]
    },
    {
      id: 'account',
      name: 'Account & Billing',
      faqs: [
        {
          question: 'How do I update my payment information?',
          answer: 'Log into your member portal and navigate to Account Settings > Billing Information. You can update your payment method, billing address, and view your payment history at any time.'
        },
        {
          question: 'Can I pause my membership?',
          answer: 'Yes, you can pause your membership for up to 3 months per year. This is perfect if you\'re not planning to travel for a while but want to maintain your membership for future use.'
        },
        {
          question: 'What happens if my payment fails?',
          answer: 'If your payment fails, we\'ll send you an email notification with instructions to update your payment method. You\'ll have 7 days to update your information before your membership is paused.'
        }
      ]
    }
  ];

  const supportTeam = [
    {
      name: 'Sarah Miller',
      role: 'Senior Travel Specialist',
      image: 'SM',
      speciality: 'Luxury resorts & European travel',
      languages: 'English, French, Spanish'
    },
    {
      name: 'Marcus Johnson',
      role: 'Booking Specialist',
      image: 'MJ',
      speciality: 'Caribbean & cruise deals',
      languages: 'English, Portuguese'
    },
    {
      name: 'Lisa Park',
      role: 'Member Success Manager',
      image: 'LP',
      speciality: 'Account management & technical support',
      languages: 'English, Korean, Mandarin'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: '',
        isUrgent: false
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Badge variant="success" className="mb-6">
            24/7 Support Available
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We're Here to Help
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Have questions about membership, need booking assistance, or want to learn more? 
            Our travel experts are standing by to help you make the most of your Vayo Vault experience.
          </p>
          <div className="flex justify-center items-center space-x-6">
            <Badge variant="outline" size="sm">Average Response: Under 2 hours</Badge>
            <Badge variant="outline" size="sm">Member Support: Under 5 minutes</Badge>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-gray-600">
              Choose the contact method that works best for your situation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => (
              <Card key={method.title} variant="default" className="text-center h-full">
                <div className="p-6">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {method.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="font-medium text-primary-600">
                      {method.method}
                    </div>
                    <div className="text-gray-500">
                      {method.availability}
                    </div>
                    <Badge variant="success" size="sm">
                      {method.responseTime}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <Card variant="default" className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll respond to your inquiry within 2 hours during business hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
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
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
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
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Category *
                      </label>
                      <select
                        id="category"
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Select a category</option>
                        <option value="membership">Membership Questions</option>
                        <option value="booking">Booking Assistance</option>
                        <option value="technical">Technical Support</option>
                        <option value="billing">Billing & Account</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <div className="mb-6">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="isUrgent"
                        checked={formData.isUrgent}
                        onChange={handleInputChange}
                        className="mt-1 mr-3"
                      />
                      <span className="text-sm text-gray-600">
                        This is urgent (for member booking issues or account problems)
                      </span>
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    loading={isSubmitting}
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    We typically respond within 2 hours during business hours
                  </p>
                </>
              )}
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find quick answers to common questions
            </p>
          </div>

          {/* FAQ Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Content */}
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category) => (
              <div
                key={category.id}
                className={`space-y-4 ${activeTab === category.id ? 'block' : 'hidden'}`}
              >
                {category.faqs.map((faq, index) => (
                  <Card key={index} variant="default">
                    <div className="p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Support Team
            </h2>
            <p className="text-gray-600">
              Real travel experts ready to help with your questions and bookings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportTeam.map((member) => (
              <Card key={member.name} variant="default" className="text-center">
                <div className="p-6">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-600 font-bold text-xl">{member.image}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Speciality:</strong> {member.speciality}</p>
                    <p><strong>Languages:</strong> {member.languages}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Whether you're a current member or considering joining, 
            we're committed to providing exceptional support every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Start Live Chat
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
              Call 1-800-VAYO-123
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}