'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    // In real implementation, handle authentication here
    console.log('Login attempted:', formData);
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate password reset
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    alert('Password reset instructions sent to your email!');
    setShowForgotPassword(false);
    setResetEmail('');
  };

  const memberBenefits = [
    'Access to exclusive deals updated daily',
    'Up to 70% off luxury travel experiences',
    'One-click booking with instant confirmation',
    '24/7 dedicated member support',
    'No booking fees or hidden charges'
  ];

  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center py-12 px-6">
        <Card variant="default" className="w-full max-w-md">
          <div className="p-8">
            <div className="text-center mb-8">
              <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="font-bold text-xl text-primary-600">Vayo Vault</span>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Reset Your Password
              </h1>
              <p className="text-gray-600 text-sm">
                Enter your email and we'll send you reset instructions
              </p>
            </div>

            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div>
                <label htmlFor="resetEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  id="resetEmail"
                  name="resetEmail"
                  type="email"
                  required
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full"
                  placeholder="Enter your email address"
                />
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="w-full"
                loading={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Reset Instructions'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setShowForgotPassword(false)}
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                ← Back to Login
              </button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      <div className="flex">
        {/* Left Side - Login Form */}
        <div className="flex-1 flex items-center justify-center py-12 px-6 lg:px-8">
          <Card variant="default" className="w-full max-w-md">
            <div className="p-8">
              <div className="text-center mb-8">
                <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">V</span>
                  </div>
                  <span className="font-bold text-xl text-primary-600">Vayo Vault</span>
                </Link>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome Back
                </h1>
                <p className="text-gray-600 text-sm">
                  Sign in to access your exclusive travel deals
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
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

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    Forgot password?
                  </button>
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  loading={isLoading}
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>

              <div className="mt-6 text-center border-t pt-6">
                <p className="text-sm text-gray-600 mb-4">
                  Don't have an account?
                </p>
                <Link href="/membership">
                  <Button variant="outline" size="default" className="w-full">
                    Join Vayo Vault - $37/month
                  </Button>
                </Link>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Secure login with 256-bit SSL encryption
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Side - Benefits */}
        <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:justify-center bg-primary-600 text-white px-12">
          <div className="max-w-md">
            <Badge variant="secondary" className="mb-6">
              10,000+ Happy Members
            </Badge>
            
            <h2 className="text-3xl font-bold mb-4">
              Your Exclusive Travel Deals Await
            </h2>
            
            <p className="text-primary-100 mb-8 text-lg">
              Access luxury travel experiences at up to 70% off public rates. 
              New deals added daily, members-only pricing.
            </p>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-primary-100">
                What's waiting for you:
              </h3>
              {memberBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-300 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-primary-100">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary-700 rounded-lg">
              <h4 className="font-semibold mb-2">Today's Featured Deal</h4>
              <p className="text-primary-100 text-sm mb-2">
                Luxury Villa in Santorini
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-primary-200 line-through">$4,200</span>
                  <span className="text-xl font-bold text-white ml-2">$1,680</span>
                </div>
                <Badge variant="success" size="sm">
                  60% OFF
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Benefits */}
      <div className="lg:hidden bg-white py-12 px-6">
        <div className="max-w-md mx-auto text-center">
          <h3 className="font-semibold text-lg text-gray-900 mb-6">
            What you get as a member:
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {memberBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start text-left">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}