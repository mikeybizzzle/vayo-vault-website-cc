import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read Vayo Vault\'s terms of service including membership terms, booking policies, cancellation procedures, and user responsibilities.',
  openGraph: {
    title: 'Vayo Vault Terms of Service',
    description: 'Terms and conditions for Vayo Vault travel membership service.',
  },
};

export default function TermsPage() {
  const lastUpdated = 'December 15, 2024';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Clear, straightforward terms for your Vayo Vault membership
          </p>
          <Badge variant="outline">
            Last Updated: {lastUpdated}
          </Badge>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Card variant="default" className="mb-8">
            <div className="p-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Quick Summary
                </h3>
                <p className="text-blue-800 text-sm leading-relaxed">
                  By using Vayo Vault, you agree to pay $37/month for membership, follow our booking guidelines, 
                  and respect other members. You can cancel anytime with no penalties. We provide exclusive travel 
                  deals and support, but you're responsible for your travel decisions and arrangements.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 mb-6">
                  By accessing and using Vayo Vault's services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                  prohibited from using our services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Membership Terms</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Subscription</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Monthly membership costs $37 per month</li>
                  <li>Annual membership costs $370 per year (equivalent to 10 months)</li>
                  <li>Automatic renewal unless cancelled</li>
                  <li>No long-term contracts or commitments</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Cancellation</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Cancel anytime through your member portal or by contacting support</li>
                  <li>Cancellation takes effect at the end of your current billing period</li>
                  <li>No cancellation fees or penalties</li>
                  <li>Access continues until the end of your paid period</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Services Provided</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Platform Access</h3>
                <p className="text-gray-700 mb-4">
                  Members receive access to our exclusive travel deals platform, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Curated luxury travel deals at discounted rates</li>
                  <li>Direct booking capabilities through our platform</li>
                  <li>24/7 member support for bookings and account issues</li>
                  <li>Member community access and travel resources</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Deal Availability</h3>
                <p className="text-gray-700 mb-6">
                  Deal availability is subject to partner inventory and may change without notice. 
                  We strive to maintain accurate pricing and availability but cannot guarantee 
                  specific deals will remain available.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Booking and Travel</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Booking Responsibility</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Members are responsible for reviewing all booking details before confirmation</li>
                  <li>All bookings are subject to partner property terms and conditions</li>
                  <li>Travel insurance is recommended and available through third parties</li>
                  <li>Members must meet all travel requirements (passport, visa, health, etc.)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Cancellation and Changes</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Booking changes subject to partner property policies</li>
                  <li>Cancellation policies vary by property and are displayed before booking</li>
                  <li>Vayo Vault is not responsible for penalties imposed by partner properties</li>
                  <li>We will assist with reasonable change requests when possible</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Membership Fees</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Membership fees are charged monthly or annually as selected</li>
                  <li>All fees are non-refundable except during the 30-day guarantee period</li>
                  <li>Failed payments may result in service suspension</li>
                  <li>Price changes will be communicated 30 days in advance</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Booking Payments</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Booking payments are separate from membership fees</li>
                  <li>Full payment is typically required at time of booking</li>
                  <li>All booking payments go directly to partner properties</li>
                  <li>Vayo Vault does not charge booking fees</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Responsibilities</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Account Security</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Keep login credentials secure and confidential</li>
                  <li>Notify us immediately of any unauthorized account access</li>
                  <li>You are responsible for all activity under your account</li>
                  <li>Do not share your account with others</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Prohibited Uses</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Commercial resale of deals or membership benefits</li>
                  <li>Automated booking systems or bots</li>
                  <li>Abuse of customer support systems</li>
                  <li>Violation of partner property terms</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitations and Disclaimers</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Service Availability</h3>
                <p className="text-gray-700 mb-4">
                  We strive for 99.9% uptime but cannot guarantee uninterrupted service. 
                  Maintenance and updates may temporarily affect platform availability.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Third-Party Relationships</h3>
                <p className="text-gray-700 mb-6">
                  Vayo Vault acts as an intermediary between members and partner properties. 
                  We are not responsible for the actions, services, or policies of partner properties.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacy and Data</h2>
                <p className="text-gray-700 mb-6">
                  Your privacy is important to us. Please review our Privacy Policy for details 
                  on how we collect, use, and protect your personal information.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifications</h2>
                <p className="text-gray-700 mb-6">
                  We reserve the right to modify these terms with 30 days' notice. 
                  Continued use of our services after changes constitutes acceptance of new terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  For questions about these terms or our services:
                </p>
                <ul className="list-none text-gray-700 space-y-2">
                  <li><strong>Email:</strong> legal@vayovault.com</li>
                  <li><strong>Phone:</strong> 1-800-VAYO-123</li>
                  <li><strong>Address:</strong> 123 Travel Way, Suite 100, Miami, FL 33101</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              These terms are effective as of {lastUpdated}
            </p>
            <p className="text-sm text-gray-600">
              Questions about our terms? <a href="/contact" className="text-primary-600 hover:underline">Contact our legal team</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}