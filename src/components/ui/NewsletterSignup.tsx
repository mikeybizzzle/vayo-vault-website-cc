'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { EmailService, FormValidation } from '@/lib/emailService';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'inline';
  className?: string;
  placeholder?: string;
  buttonText?: string;
  showDisclaimer?: boolean;
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  variant = 'default',
  className = '',
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  showDisclaimer = true
}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    const emailValidation = FormValidation.email(email);
    if (!emailValidation.valid) {
      setStatus('error');
      setMessage(emailValidation.message || 'Invalid email');
      return;
    }

    setIsLoading(true);
    setStatus('idle');
    
    try {
      const result = await EmailService.subscribeToNewsletter({
        email,
        subscriptionSource: 'website_footer'
      });
      
      if (result.success) {
        setStatus('success');
        setMessage(result.message);
        setEmail(''); // Clear form on success
      } else {
        setStatus('error');
        setMessage(result.message);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  const variants = {
    default: {
      container: 'space-y-4',
      form: 'flex flex-col sm:flex-row gap-3',
      input: 'flex-1',
      button: 'sm:w-auto'
    },
    compact: {
      container: 'space-y-2',
      form: 'flex gap-2',
      input: 'flex-1 text-sm',
      button: 'px-4 py-2 text-sm'
    },
    inline: {
      container: 'space-y-2',
      form: 'flex gap-2',
      input: 'flex-1',
      button: 'whitespace-nowrap'
    }
  };

  const currentVariant = variants[variant];

  if (status === 'success') {
    return (
      <div className={`${currentVariant.container} ${className}`}>
        <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex-shrink-0 mr-3">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-green-800">
              Successfully subscribed!
            </p>
            <p className="text-xs text-green-600 mt-1">
              {message}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${currentVariant.container} ${className}`}>
      <form onSubmit={handleSubmit} className={currentVariant.form}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={`${currentVariant.input} ${
            status === 'error' ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''
          }`}
          disabled={isLoading}
          required
        />
        <Button
          type="submit"
          variant="primary"
          className={currentVariant.button}
          loading={isLoading}
          disabled={isLoading || !email}
        >
          {isLoading ? 'Subscribing...' : buttonText}
        </Button>
      </form>
      
      {/* Error Message */}
      {status === 'error' && (
        <p className="text-sm text-red-600 mt-1">
          {message}
        </p>
      )}
      
      {/* Disclaimer */}
      {showDisclaimer && status !== 'error' && (
        <p className="text-xs text-gray-500 mt-2">
          No spam. Unsubscribe anytime. Member deals only.
        </p>
      )}
    </div>
  );
};

export default NewsletterSignup;