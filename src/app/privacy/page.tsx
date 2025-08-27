import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Vayo Vault protects your personal information, what data we collect, how we use it, and your privacy rights as a member.',
  openGraph: {
    title: 'Vayo Vault Privacy Policy',
    description: 'Your privacy and data protection rights with Vayo Vault.',
  },
};

export default function PrivacyPage() {
  const lastUpdated = 'December 15, 2024';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            How we protect and use your personal information
          </p>
          <Badge variant="outline">
            Last Updated: {lastUpdated}
          </Badge>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Card variant="default" className="mb-8">
            <div className="p-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Your Privacy Matters
                </h3>
                <p className="text-green-800 text-sm leading-relaxed">
                  We collect only what we need to provide you with excellent travel deals and support. 
                  We never sell your data, we use bank-level security, and you can delete your account 
                  anytime. Your trust is our most valuable asset.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Information You Provide</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>Account Information:</strong> Name, email, phone number, password</li>
                  <li><strong>Payment Information:</strong> Credit card details, billing address (processed securely by Stripe)</li>
                  <li><strong>Profile Data:</strong> Travel preferences, special requests, profile photo (optional)</li>
                  <li><strong>Booking Information:</strong> Travel dates, destinations, guest details</li>
                  <li><strong>Communications:</strong> Messages with support, reviews, feedback</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Automatically Collected Information</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Usage Data:</strong> Pages visited, features used, time spent on platform</li>
                  <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
                  <li><strong>Location Data:</strong> General location based on IP address</li>
                  <li><strong>Cookies:</strong> Session cookies for functionality, preference cookies</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Service Delivery</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Process membership subscriptions and payments</li>
                  <li>Provide access to exclusive travel deals</li>
                  <li>Facilitate booking reservations with partner properties</li>
                  <li>Deliver customer support and assistance</li>
                  <li>Send booking confirmations and important updates</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Personalization</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Customize deal recommendations based on preferences</li>
                  <li>Remember your booking history and favorites</li>
                  <li>Provide relevant travel tips and content</li>
                  <li>Improve platform usability and experience</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Communication</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Send membership-related notifications</li>
                  <li>Share exclusive deals and offers (with consent)</li>
                  <li>Provide travel tips and inspiration (optional)</li>
                  <li>Respond to inquiries and support requests</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 With Your Consent</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Share booking details with partner properties for reservations</li>
                  <li>Process payments through secure payment providers (Stripe)</li>
                  <li>Share reviews with other members (only if you choose to write them)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Service Providers</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>Payment Processing:</strong> Stripe for secure payment handling</li>
                  <li><strong>Email Services:</strong> SendGrid for transactional emails</li>
                  <li><strong>Analytics:</strong> Google Analytics for usage insights (anonymized)</li>
                  <li><strong>Customer Support:</strong> Help desk tools for support tickets</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 We Never Sell Your Data</h3>
                <p className="text-gray-700 mb-6">
                  <strong>Important:</strong> We do not sell, rent, or lease your personal information to third parties. 
                  Your data is used solely to provide you with our travel membership services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Technical Safeguards</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>256-bit SSL encryption for all data transmission</li>
                  <li>Encrypted data storage with regular security audits</li>
                  <li>Secure payment processing (PCI DSS compliant)</li>
                  <li>Regular security updates and vulnerability testing</li>
                  <li>Two-factor authentication available for accounts</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Access Controls</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Limited employee access on a need-to-know basis</li>
                  <li>Regular training on data protection practices</li>
                  <li>Audit logs for all data access and modifications</li>
                  <li>Secure deletion of data when no longer needed</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Privacy Rights</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Access and Control</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>Access:</strong> View all personal data we have about you</li>
                  <li><strong>Update:</strong> Correct or update your information anytime</li>
                  <li><strong>Delete:</strong> Request deletion of your account and data</li>
                  <li><strong>Export:</strong> Download a copy of your personal data</li>
                  <li><strong>Restrict:</strong> Limit how we use your information</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Communication Preferences</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Unsubscribe from marketing emails anytime</li>
                  <li>Choose which types of notifications to receive</li>
                  <li>Opt out of data analytics (while maintaining functionality)</li>
                  <li>Control cookie preferences in your browser</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4" id="cookies">6. Cookies and Tracking</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Essential Cookies</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Authentication and security cookies (required for login)</li>
                  <li>Shopping cart and booking session cookies</li>
                  <li>Performance and error detection cookies</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Optional Cookies</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Analytics cookies for improving our service (Google Analytics)</li>
                  <li>Preference cookies to remember your settings</li>
                  <li>Marketing cookies for relevant deal recommendations (with consent)</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Active Members:</strong> Data retained while membership is active</li>
                  <li><strong>Cancelled Accounts:</strong> Data deleted within 90 days of cancellation</li>
                  <li><strong>Booking History:</strong> Retained for 7 years for tax and legal purposes</li>
                  <li><strong>Support Communications:</strong> Retained for 3 years for quality assurance</li>
                  <li><strong>Marketing Data:</strong> Deleted immediately upon unsubscribe request</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
                <p className="text-gray-700 mb-6">
                  Your data is primarily stored on servers in the United States. When sharing data with 
                  international partner properties for bookings, we ensure appropriate safeguards are in 
                  place to protect your information according to applicable privacy laws.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-700 mb-6">
                  Vayo Vault is not intended for children under 18. We do not knowingly collect personal 
                  information from children. If you believe a child has provided us with personal information, 
                  please contact us immediately.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
                <p className="text-gray-700 mb-6">
                  We may update this privacy policy to reflect changes in our practices or applicable laws. 
                  We'll notify you of significant changes via email and update the "Last Updated" date. 
                  Your continued use of our services constitutes acceptance of the updated policy.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  For privacy-related questions or to exercise your rights:
                </p>
                <ul className="list-none text-gray-700 space-y-2 mb-6">
                  <li><strong>Email:</strong> privacy@vayovault.com</li>
                  <li><strong>Phone:</strong> 1-800-VAYO-123</li>
                  <li><strong>Mail:</strong> Privacy Officer, Vayo Vault, 123 Travel Way, Suite 100, Miami, FL 33101</li>
                </ul>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Quick Privacy Actions
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Update Your Preferences</p>
                      <p className="text-gray-600">Log into your account → Settings → Privacy</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Download Your Data</p>
                      <p className="text-gray-600">Account → Privacy → Export Data</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Delete Your Account</p>
                      <p className="text-gray-600">Account → Settings → Delete Account</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Unsubscribe</p>
                      <p className="text-gray-600">Click unsubscribe in any marketing email</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              This privacy policy is effective as of {lastUpdated}
            </p>
            <p className="text-sm text-gray-600">
              Questions about your privacy? <a href="/contact" className="text-primary-600 hover:underline">Contact our privacy team</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}