import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { NewsletterSignup } from '@/components/ui/NewsletterSignup';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '#' },
    ],
    membership: [
      { name: 'Join Now', href: '/membership' },
      { name: 'Member Login', href: '/login' },
      { name: 'Pricing', href: '/membership#pricing' },
      { name: 'Benefits', href: '/membership#benefits' },
    ],
    support: [
      { name: 'Help Center', href: '/contact#faq' },
      { name: 'Contact Support', href: '/contact' },
      { name: 'Booking Help', href: '/contact#booking' },
      { name: 'Account Help', href: '/contact#account' },
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookies', href: '/privacy#cookies' },
      { name: 'Disclaimer', href: '/terms#disclaimer' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  ];

  const SocialIcon = ({ icon, className }: { icon: string; className?: string }) => {
    const iconPaths: { [key: string]: string } = {
      facebook: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
      twitter: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
      instagram: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM12 16.624c-2.563 0-4.625-2.062-4.625-4.624C7.375 9.437 9.437 7.376 12 7.376s4.625 2.061 4.625 4.624c0 2.562-2.062 4.624-4.625 4.624zm5.471-8.108c-.75 0-1.364-.612-1.364-1.364 0-.75.614-1.364 1.364-1.364.75 0 1.364.614 1.364 1.364 0 .752-.614 1.364-1.364 1.364z',
      linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    };

    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d={iconPaths[icon]} />
      </svg>
    );
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Get Exclusive Travel Deals
            </h3>
            <p className="text-gray-400 mb-6">
              Join our newsletter to receive the best member-only travel deals and insider tips delivered to your inbox weekly.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterSignup
                variant="default"
                placeholder="Enter your email"
                buttonText="Subscribe"
                showDisclaimer={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="font-bold text-xl">Vayo Vault</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-sm">
              The Netflix of travel savings. Unlock exclusive luxury travel experiences at unbeatable prices with our $37/month membership.
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <SocialIcon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="success" size="sm">
                10,000+ Members
              </Badge>
              <Badge variant="success" size="sm">
                $2M+ Saved
              </Badge>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Membership</h4>
            <ul className="space-y-2">
              {footerLinks.membership.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>30-Day Guarantee</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Cancel Anytime</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              © {currentYear} Vayo Vault. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;