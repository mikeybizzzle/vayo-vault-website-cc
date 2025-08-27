'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'About', href: '/about' },
    { name: 'Membership', href: '/membership' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 font-bold text-xl text-primary-600 hover:text-primary-700 transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span>Vayo Vault</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary-600',
                  isActive(item.href)
                    ? 'text-primary-600 font-semibold'
                    : 'text-gray-700'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Member Login
              </Button>
            </Link>
            <Link href="/membership">
              <Button variant="primary" size="sm">
                Join for $37/month
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50 font-semibold'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-200 space-y-2">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    Member Login
                  </Button>
                </Link>
                <Link href="/membership" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" size="sm" className="w-full">
                    Join for $37/month
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Trust Badge Bar */}
      {pathname === '/' && (
        <div className="bg-primary-50 border-b border-primary-100">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex justify-center items-center space-x-6 text-sm">
              <Badge variant="success" size="sm">
                10,000+ Members
              </Badge>
              <span className="text-primary-700">✓ 30-Day Money Back Guarantee</span>
              <span className="text-primary-700">✓ Cancel Anytime</span>
              <span className="text-primary-700">✓ No Contracts</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;