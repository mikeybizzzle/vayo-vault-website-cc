/**
 * Homepage Example
 * 
 * Demonstrates common travel booking patterns and conversion optimization
 * using the Vayo Vault design system
 */

'use client';

import React from 'react';
import { 
  Button, 
  BookingButton, 
  HeroButton 
} from '../ui/Button';
import { 
  TravelCard,
  PricingCard 
} from '../ui/Card';
import { 
  VerifiedBadge,
  BestsellerBadge,
  ExclusiveBadge,
  RatingBadge 
} from '../ui/Badge';
import { SearchInput } from '../ui/Input';
import { Navigation, NavLink } from '../ui/Navigation';

interface Destination {
  id: string;
  image: string;
  title: string;
  description: string;
  location: string;
  price: number;
  originalPrice: number;
  rating: number;
  isExclusive: boolean;
  isBestseller: boolean;
  isNew: boolean;
}

const featuredDestinations: Destination[] = [
  {
    id: '1',
    image: '/api/placeholder/400/300',
    title: 'Santorini Luxury Villa',
    description: 'Private infinity pool overlooking the Aegean Sea',
    location: 'Santorini, Greece',
    price: 299,
    originalPrice: 450,
    rating: 4.9,
    isExclusive: true,
    isBestseller: false,
    isNew: false,
  },
  {
    id: '2',
    image: '/api/placeholder/400/300',
    title: 'Maldives Overwater Suite',
    description: 'Overwater bungalow with glass floor and butler service',
    location: 'Maldives',
    price: 599,
    originalPrice: 899,
    rating: 4.8,
    isExclusive: false,
    isBestseller: true,
    isNew: false,
  },
  {
    id: '3',
    image: '/api/placeholder/400/300',
    title: 'Tuscany Wine Estate',
    description: 'Historic villa surrounded by vineyards',
    location: 'Tuscany, Italy',
    price: 249,
    originalPrice: 380,
    rating: 4.7,
    isExclusive: false,
    isBestseller: false,
    isNew: true,
  },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // In a real app, this would trigger search functionality
  };

  const handleBooking = (destinationId: string) => {
    console.log('Booking destination:', destinationId);
    // In a real app, this would open booking flow
  };

  const calculateSavings = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation
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
        <NavLink href="/about">
          About
        </NavLink>
      </Navigation>

      {/* Hero Section */}
      <section className="relative hero-spacing-y">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display-xl font-bold text-primary mb-6 text-balance">
              The Netflix of Luxury Travel
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Access exclusive luxury experiences at member-only prices. 
              Hand-curated properties, transparent pricing, cancel anytime.
            </p>

            <div className="max-w-md mx-auto mb-8">
              <SearchInput
                placeholder="Where do you want to go?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onSearch={handleSearch}
                size="lg"
                className="w-full"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <HeroButton>
                Start Free Trial
              </HeroButton>
              <Button variant="ghost" size="hero">
                See How It Works
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">50,000+ Happy Members</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">100% Secure Booking</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="section-spacing-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold mb-4">
              Exclusive Member Deals
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hand-picked luxury experiences available only to Vayo Vault members. 
              Save an average of 40% on premium accommodations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredDestinations.map((destination) => {
              const savings = calculateSavings(destination.originalPrice, destination.price);
              let badge = null;
              
              if (destination.isExclusive) {
                badge = <ExclusiveBadge />;
              } else if (destination.isBestseller) {
                badge = <BestsellerBadge />;
              }

              return (
                <TravelCard
                  key={destination.id}
                  image={destination.image}
                  imageAlt={`${destination.title} in ${destination.location}`}
                  title={destination.title}
                  description={destination.description}
                  price={`$${destination.price}/night`}
                  originalPrice={`$${destination.originalPrice}/night`}
                  savings={`${savings}%`}
                  badge={badge}
                  className="animate-fade-in-up"
                >
                  <div className="flex items-center justify-between mt-3 mb-4">
                    <div className="flex items-center gap-2">
                      <RatingBadge rating={destination.rating} />
                      <VerifiedBadge />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {destination.location}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <BookingButton 
                      className="w-full"
                      onClick={() => handleBooking(destination.id)}
                    >
                      Book Now - ${destination.price}/night
                    </BookingButton>
                    <Button variant="ghost" size="default" className="w-full">
                      View Details
                    </Button>
                  </div>
                </TravelCard>
              );
            })}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-spacing-y bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold mb-4">
                Why Choose Vayo Vault?
              </h2>
              <p className="text-muted-foreground">
                We're not like other travel clubs. We're the anti-timeshare.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Traditional vs Vayo Vault comparison */}
              <div className="space-y-6">
                <h3 className="text-h3 font-semibold text-error">
                  Traditional Travel Clubs
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-error/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-error" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Long-term commitments</div>
                      <div className="text-sm text-muted-foreground">Locked into years-long contracts</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-error/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-error" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Hidden fees</div>
                      <div className="text-sm text-muted-foreground">Maintenance fees, booking fees, surprise costs</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-error/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-error" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">High-pressure sales</div>
                      <div className="text-sm text-muted-foreground">Hours-long presentations, pushy tactics</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-error/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-error" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Limited flexibility</div>
                      <div className="text-sm text-muted-foreground">Restricted dates, blackout periods</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-h3 font-semibold text-success">
                  The Vayo Vault Way
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Cancel anytime</div>
                      <div className="text-sm text-muted-foreground">Month-to-month subscription, no contracts</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Transparent pricing</div>
                      <div className="text-sm text-muted-foreground">All costs shown upfront, no surprises</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">No sales pressure</div>
                      <div className="text-sm text-muted-foreground">Browse online, book at your own pace</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Complete flexibility</div>
                      <div className="text-sm text-muted-foreground">Book when you want, where you want</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-spacing-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              No initiation fees, no long-term contracts, no hidden costs. 
              Just honest pricing for luxury travel access.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <PricingCard
                plan="Premium Membership"
                price="$37"
                period="month"
                description="Perfect for frequent travelers"
                features={[
                  'Access to all member-only deals',
                  'Average savings of 40%',
                  'Priority customer support',
                  'Mobile app with offline access',
                  'Flexible booking and cancellation',
                  'No blackout dates or restrictions'
                ]}
                cta={
                  <Button variant="exclusive" size="lg" className="w-full">
                    Start Your Free Trial
                  </Button>
                }
                className="border-2 border-primary/20"
              />

              <div className="flex flex-col justify-center space-y-6 p-8">
                <h3 className="text-h3 font-semibold">
                  Why Membership Works
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                      <div className="font-medium">Collective Bargaining Power</div>
                      <div className="text-sm text-muted-foreground">
                        50,000+ members means better rates for everyone
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                      <div className="font-medium">Curated Quality</div>
                      <div className="text-sm text-muted-foreground">
                        Every property is personally inspected and verified
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                      <div className="font-medium">Exclusive Access</div>
                      <div className="text-sm text-muted-foreground">
                        Properties and rates not available to the general public
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="text-sm font-medium text-muted-foreground mb-2">
                    Average member saves in first month:
                  </div>
                  <div className="text-3xl font-bold text-success">
                    $387
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing-y bg-gradient-to-br from-primary-500/5 to-secondary-500/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-lg font-bold text-primary mb-6">
              Ready to Travel Like an Insider?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Join 50,000+ smart travelers who save an average of 40% on luxury experiences.
              Start your free trial today – no commitment, cancel anytime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <HeroButton className="text-lg px-8">
                Start Free Trial
              </HeroButton>
              <Button variant="ghost" size="hero" className="text-lg">
                Learn More
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              Free for 14 days. No credit card required. Cancel anytime.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}