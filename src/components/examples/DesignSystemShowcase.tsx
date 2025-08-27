/**
 * Design System Showcase
 * 
 * Comprehensive example demonstrating all components and design patterns
 * in realistic travel booking scenarios
 */

'use client';

import React from 'react';
import { 
  Button, 
  BookingButton, 
  HeroButton, 
  TrustButton, 
  ExclusiveButton 
} from '../ui/Button';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  TravelCard,
  PricingCard 
} from '../ui/Card';
import { 
  Badge,
  VerifiedBadge,
  BestsellerBadge,
  ExclusiveBadge,
  SavingsBadge,
  RatingBadge,
  NewBadge 
} from '../ui/Badge';
import { 
  Input,
  DateRangeInput,
  SearchInput,
  GuestCountInput,
  EmailInput 
} from '../ui/Input';
import { Modal, BookingModal, ConfirmationModal } from '../ui/Modal';
import { Navigation, NavLink } from '../ui/Navigation';

export default function DesignSystemShowcase() {
  const [showBookingModal, setShowBookingModal] = React.useState(false);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);
  const [bookingStep, setBookingStep] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  
  // Form states
  const [checkIn, setCheckIn] = React.useState('');
  const [checkOut, setCheckOut] = React.useState('');
  const [adults, setAdults] = React.useState(2);
  const [children, setChildren] = React.useState(0);
  const [email, setEmail] = React.useState('');
  const [guestName, setGuestName] = React.useState('');

  const mockUser = {
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    membershipTier: 'premium' as const,
  };

  const handleBooking = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setShowBookingModal(false);
    setShowConfirmModal(true);
  };

  const nextStep = () => {
    if (bookingStep < 3) {
      setBookingStep(bookingStep + 1);
    }
  };

  const prevStep = () => {
    if (bookingStep > 1) {
      setBookingStep(bookingStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Example */}
      <Navigation
        user={mockUser}
        onAuthAction={(action) => console.log(`Auth action: ${action}`)}
      >
        <NavLink href="/destinations" active>
          Destinations
        </NavLink>
        <NavLink href="/experiences">
          Experiences
        </NavLink>
        <NavLink href="/membership">
          Membership
        </NavLink>
        <NavLink href="/help" external>
          Help Center
        </NavLink>
      </Navigation>

      {/* Hero Section */}
      <section className="hero-spacing-y bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-display-xl font-bold text-primary mb-6 text-balance">
            Unlock Exclusive Luxury Travel
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join Vayo Vault and access hand-curated luxury experiences at member-only prices. 
            The Netflix of travel savings – simple, transparent, and cancel anytime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <HeroButton 
              rightIcon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              }
            >
              Start Free Trial
            </HeroButton>
            <Button variant="ghost" size="hero">
              View Sample Deals
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="section-spacing-y">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-bold text-center mb-8">
              Find Your Perfect Getaway
            </h2>
            
            <Card variant="elevated" className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <SearchInput 
                  placeholder="Where do you want to go?"
                  className="lg:col-span-2"
                />
                <DateRangeInput
                  checkIn={checkIn}
                  checkOut={checkOut}
                  onCheckInChange={setCheckIn}
                  onCheckOutChange={setCheckOut}
                />
              </div>
              
              <GuestCountInput
                adults={adults}
                children={children}
                onAdultsChange={setAdults}
                onChildrenChange={setChildren}
                className="mb-6"
              />
              
              <Button variant="primary" size="lg" className="w-full">
                Search Exclusive Deals
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="section-spacing-y bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-bold text-center mb-12">
            Featured Destinations
            <p className="text-base text-muted-foreground font-normal mt-2">
              Hand-curated luxury experiences for our members
            </p>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <TravelCard
              image="/api/placeholder/400/300"
              imageAlt="Luxury villa with infinity pool overlooking the Aegean Sea"
              title="Santorini Luxury Villa"
              description="Private infinity pool, 4 bedrooms, breathtaking sunset views"
              price="$299/night"
              originalPrice="$450/night"
              savings="33%"
              badge={<ExclusiveBadge />}
            >
              <div className="flex items-center gap-2 mt-3">
                <RatingBadge rating={4.9} />
                <VerifiedBadge />
              </div>
              <div className="mt-4 space-y-2">
                <BookingButton 
                  className="w-full"
                  onClick={() => setShowBookingModal(true)}
                >
                  Book Now - $299/night
                </BookingButton>
                <Button variant="ghost" size="default" className="w-full">
                  Save to Wishlist
                </Button>
              </div>
            </TravelCard>

            <TravelCard
              image="/api/placeholder/400/300"
              imageAlt="Overwater bungalow in crystal clear lagoon"
              title="Maldives Overwater Suite"
              description="Overwater bungalow with glass floor, private deck, butler service"
              price="$599/night"
              originalPrice="$899/night"
              savings="34%"
              badge={<BestsellerBadge />}
            >
              <div className="flex items-center gap-2 mt-3">
                <RatingBadge rating={4.8} />
                <VerifiedBadge />
                <NewBadge />
              </div>
              <div className="mt-4 space-y-2">
                <BookingButton className="w-full">
                  Book Now - $599/night
                </BookingButton>
                <Button variant="ghost" size="default" className="w-full">
                  View Gallery
                </Button>
              </div>
            </TravelCard>

            <TravelCard
              image="/api/placeholder/400/300"
              imageAlt="Mountain chalet with panoramic Alpine views"
              title="Swiss Alpine Chalet"
              description="Ski-in/ski-out access, hot tub, panoramic mountain views"
              price="$399/night"
              originalPrice="$650/night"
              savings="39%"
              badge={<SavingsBadge>Best Value</SavingsBadge>}
            >
              <div className="flex items-center gap-2 mt-3">
                <RatingBadge rating={4.7} />
                <VerifiedBadge />
              </div>
              <div className="mt-4 space-y-2">
                <BookingButton className="w-full">
                  Book Now - $399/night
                </BookingButton>
                <Button variant="ghost" size="default" className="w-full">
                  Check Availability
                </Button>
              </div>
            </TravelCard>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Pricing */}
      <section className="section-spacing-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold mb-4">
              Choose Your Membership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of smart travelers who save an average of 40% on luxury experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <PricingCard
              plan="Explorer"
              price="Free"
              period="forever"
              description="Perfect for trying us out"
              features={[
                'Access to public deals',
                'Email deal alerts',
                'Basic customer support',
                'Mobile app access'
              ]}
              cta={
                <Button variant="outline" size="default" className="w-full">
                  Start Free
                </Button>
              }
            />

            <PricingCard
              plan="Premium"
              price="$37"
              period="month"
              description="Most popular for frequent travelers"
              popular={true}
              features={[
                'Members-only pricing',
                'Exclusive property access',
                'Priority customer support',
                'Advanced search filters',
                'Booking protection',
                'Cancel anytime'
              ]}
              cta={
                <Button variant="exclusive" size="default" className="w-full">
                  Start Free Trial
                </Button>
              }
            />

            <PricingCard
              plan="VIP"
              price="$97"
              period="month"
              description="Ultimate luxury for travel enthusiasts"
              features={[
                'Everything in Premium',
                'Concierge booking service',
                'VIP-only experiences',
                'Flexible cancellation',
                'Travel insurance included',
                'Personal travel advisor'
              ]}
              cta={
                <Button variant="exclusive" size="default" className="w-full">
                  Contact Sales
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-spacing-y bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold mb-4">
              Why 50,000+ Members Trust Vayo Vault
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Verified Properties</h3>
              <p className="text-sm text-muted-foreground">
                Every property is personally inspected and verified by our team
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Secure Booking</h3>
              <p className="text-sm text-muted-foreground">
                Bank-level security with instant booking confirmation
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">No Hidden Fees</h3>
              <p className="text-sm text-muted-foreground">
                Transparent pricing with all costs shown upfront
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Expert travel support whenever you need help
              </p>
            </Card>
          </div>

          <div className="text-center">
            <TrustButton 
              leftIcon={
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              }
            >
              100% Secure & Protected
            </TrustButton>
          </div>
        </div>
      </section>

      {/* Component Examples Section */}
      <section className="section-spacing-y">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-bold text-center mb-12">
            Design System Components
          </h2>

          {/* Button Examples */}
          <div className="mb-12">
            <h3 className="text-h3 font-semibold mb-6">Button Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="trust">Trust Signal</Button>
              <Button variant="exclusive">Exclusive</Button>
              <Button variant="primary" loading>Loading...</Button>
            </div>
          </div>

          {/* Badge Examples */}
          <div className="mb-12">
            <h3 className="text-h3 font-semibold mb-6">Badge Variants</h3>
            <div className="flex flex-wrap gap-3">
              <VerifiedBadge />
              <BestsellerBadge />
              <ExclusiveBadge />
              <SavingsBadge>Save 40%</SavingsBadge>
              <RatingBadge rating={4.8} />
              <NewBadge />
              <Badge variant="limited">Limited Time</Badge>
              <Badge variant="free">Free Cancellation</Badge>
            </div>
          </div>

          {/* Input Examples */}
          <div className="mb-12">
            <h3 className="text-h3 font-semibold mb-6">Input Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              <Input 
                label="Full Name"
                placeholder="Enter your full name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
              />
              <EmailInput 
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input 
                label="Phone Number"
                type="tel"
                placeholder="(555) 123-4567"
                success="Phone number verified"
              />
              <Input 
                label="Password"
                type="password"
                placeholder="Enter password"
                error="Password must be at least 8 characters"
              />
            </div>
          </div>

          {/* Typography Examples */}
          <div className="mb-12">
            <h3 className="text-h3 font-semibold mb-6">Typography Scale</h3>
            <div className="space-y-4">
              <div className="text-display-xl">Display XL - Hero Headlines</div>
              <div className="text-display-lg">Display Large - Section Headlines</div>
              <div className="text-h1">Heading 1 - Page Titles</div>
              <div className="text-h2">Heading 2 - Section Titles</div>
              <div className="text-h3">Heading 3 - Subsection Titles</div>
              <div className="text-lg">Large text - Lead paragraphs</div>
              <div className="text-base">Base text - Body content</div>
              <div className="text-sm">Small text - Labels and captions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        title="Complete Your Booking"
        step={bookingStep}
        totalSteps={3}
      >
        {bookingStep === 1 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Travel Details</h3>
            <DateRangeInput
              checkIn={checkIn}
              checkOut={checkOut}
              onCheckInChange={setCheckIn}
              onCheckOutChange={setCheckOut}
            />
            <GuestCountInput
              adults={adults}
              children={children}
              onAdultsChange={setAdults}
              onChildrenChange={setChildren}
            />
          </div>
        )}

        {bookingStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Guest Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="First Name" required />
              <Input label="Last Name" required />
            </div>
            <EmailInput label="Email Address" required />
            <Input label="Phone Number" type="tel" required />
          </div>
        )}

        {bookingStep === 3 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Payment Details</h3>
            <div className="p-4 border border-border rounded-lg bg-muted/50">
              <h4 className="font-semibold mb-2">Booking Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Santorini Luxury Villa (3 nights)</span>
                  <span>$897</span>
                </div>
                <div className="flex justify-between text-success">
                  <span>Member Discount (33%)</span>
                  <span>-$296</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & Fees</span>
                  <span>$54</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$655</span>
                </div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Your payment information is secure and encrypted</span>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <Button 
            variant="ghost" 
            onClick={prevStep}
            disabled={bookingStep === 1}
          >
            Back
          </Button>
          <Button 
            variant="primary"
            onClick={bookingStep === 3 ? handleBooking : nextStep}
            loading={bookingStep === 3 && isLoading}
          >
            {bookingStep === 3 ? 'Complete Booking' : 'Continue'}
          </Button>
        </div>
      </BookingModal>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        type="success"
        title="Booking Confirmed!"
        confirmText="View Booking Details"
        cancelText="Close"
        onConfirm={() => {
          console.log('View booking details');
          setShowConfirmModal(false);
        }}
      >
        <p className="text-center text-muted-foreground mb-4">
          Your reservation at <strong>Santorini Luxury Villa</strong> has been confirmed.
        </p>
        <p className="text-center text-sm text-muted-foreground">
          Confirmation details have been sent to your email address.
        </p>
      </ConfirmationModal>
    </div>
  );
}