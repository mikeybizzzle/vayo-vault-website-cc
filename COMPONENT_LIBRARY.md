# Vayo Vault Component Library

A comprehensive collection of React components built for the travel booking industry, optimized for mobile-first experiences and conversion.

## Quick Start

```bash
# Install dependencies
npm install class-variance-authority clsx tailwind-merge

# Import components
import { Button, Card, Badge, Input, Modal, Navigation } from '@/components/ui';
```

## Components

### Button

Versatile button component with travel-specific variants and micro-interactions.

#### Basic Usage

```tsx
import { Button } from '@/components/ui/Button';

// Primary booking action
<Button variant="primary" size="booking">
  Book This Experience
</Button>

// Secondary action
<Button variant="secondary">
  Learn More
</Button>

// With loading state
<Button variant="primary" loading={isLoading}>
  {isLoading ? 'Processing...' : 'Book Now'}
</Button>
```

#### Variants

| Variant | Usage | Visual Style |
|---------|-------|--------------|
| `primary` | Main CTAs, booking actions | Blue gradient background, white text |
| `secondary` | Alternative actions | Gold gradient background, white text |
| `outline` | Secondary actions, less prominent | Border with primary color, transparent bg |
| `ghost` | Minimal actions, navigation | Transparent, hover background |
| `destructive` | Cancellation, removal | Red background, white text |
| `success` | Confirmation actions | Green background, white text |
| `trust` | Trust signals, guarantees | White bg, blue border and text |
| `exclusive` | Premium, member-only actions | Gold gradient, premium styling |

#### Sizes

| Size | Height | Usage |
|------|---------|--------|
| `xs` | 32px | Compact spaces, inline actions |
| `sm` | 36px | Secondary actions |
| `default` | 40px | Standard buttons |
| `lg` | 44px | Important actions |
| `booking` | 48px | Primary booking CTAs |
| `hero` | 56px | Hero section buttons |
| `mobile-cta` | 48px + full width | Mobile call-to-action |

#### Examples

```tsx
// Travel-specific button compositions
import { 
  BookingButton, 
  HeroButton, 
  TrustButton, 
  ExclusiveButton 
} from '@/components/ui/Button';

<BookingButton onClick={handleBooking}>
  Reserve Your Spot
</BookingButton>

<HeroButton rightIcon={<ArrowIcon />}>
  Join Vayo Vault Today
</HeroButton>

<TrustButton leftIcon={<ShieldIcon />}>
  100% Secure Booking
</TrustButton>

<ExclusiveButton leftIcon={<LockIcon />}>
  Members Only Deal
</ExclusiveButton>
```

#### Props API

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success' | 'trust' | 'exclusive';
  size?: 'xs' | 'sm' | 'default' | 'lg' | 'booking' | 'hero' | 'mobile-cta';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}
```

---

### Card

Flexible card component for displaying travel content, pricing, and information.

#### Basic Usage

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';

<Card variant="interactive">
  <CardHeader>
    <CardTitle>Luxury Villa in Santorini</CardTitle>
    <CardDescription>Breathtaking views of the Aegean Sea</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Experience the magic of Santorini in this stunning villa...</p>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Book Now</Button>
  </CardFooter>
</Card>
```

#### Variants

| Variant | Usage | Visual Style |
|---------|-------|--------------|
| `default` | Standard content cards | Border, subtle shadow |
| `elevated` | Important content | Enhanced shadow |
| `interactive` | Clickable cards | Hover animations, pointer cursor |
| `featured` | Highlighted content | Gradient border, enhanced styling |
| `ghost` | Minimal cards | No border or shadow |
| `destination` | Travel destination display | No padding, optimized for images |
| `pricing` | Pricing tables | Enhanced borders, hover effects |
| `exclusive` | Member-only content | Gold accent, premium styling |

#### Travel-Specific Cards

```tsx
import { TravelCard, PricingCard } from '@/components/ui/Card';

// Travel destination card
<TravelCard
  image="/images/santorini.jpg"
  imageAlt="Santorini villa with infinity pool"
  title="Santorini Luxury Villa"
  description="Private infinity pool, 4 bedrooms, sunset views"
  price="$299/night"
  originalPrice="$450/night"
  savings="33%"
  badge={<ExclusiveBadge />}
>
  <div className="mt-4">
    <Button variant="primary" size="default">
      View Details
    </Button>
  </div>
</TravelCard>

// Pricing card
<PricingCard
  plan="Premium Membership"
  price="$37"
  period="month"
  description="Access to exclusive luxury experiences"
  features={[
    'Members-only pricing',
    'Exclusive property access',
    'Concierge support',
    'Cancel anytime'
  ]}
  popular={true}
  cta={
    <Button variant="exclusive" size="default" className="w-full">
      Start Free Trial
    </Button>
  }
/>
```

#### Props API

```tsx
interface CardProps {
  variant?: 'default' | 'elevated' | 'interactive' | 'featured' | 'ghost' | 'destination' | 'pricing' | 'exclusive';
  size?: 'sm' | 'default' | 'lg' | 'xl' | 'destination' | 'compact' | 'spacious';
  radius?: 'none' | 'sm' | 'default' | 'lg' | 'xl' | 'full';
  className?: string;
  children: React.ReactNode;
}

interface TravelCardProps extends CardProps {
  image?: string;
  imageAlt?: string;
  title: string;
  description?: string;
  price?: string;
  originalPrice?: string;
  savings?: string;
  badge?: React.ReactNode;
}
```

---

### Badge

Status indicators and trust signals optimized for travel booking scenarios.

#### Basic Usage

```tsx
import { Badge } from '@/components/ui/Badge';

<Badge variant="success">Verified</Badge>
<Badge variant="warning">Limited Availability</Badge>
<Badge variant="exclusive">Members Only</Badge>
```

#### Variants

| Variant | Usage | Visual Style |
|---------|-------|--------------|
| `verified` | Verified properties/experiences | Green with checkmark icon |
| `bestseller` | Popular choices | Gold with star icon |
| `exclusive` | Member-only content | Blue with lock icon |
| `savings` | Savings amount | Green, bold text |
| `new` | New properties/features | Gradient with bounce animation |
| `limited` | Low availability | Orange with pulse animation |
| `rating` | User ratings | Yellow with star icon |
| `free` | Free amenities/perks | Green, bold text |
| `premium` | Premium features | Gold gradient |
| `trusted` | Trust indicators | Blue border, light background |

#### Travel-Specific Badges

```tsx
import { 
  VerifiedBadge, 
  BestsellerBadge, 
  ExclusiveBadge, 
  SavingsBadge,
  RatingBadge,
  LimitedBadge 
} from '@/components/ui/Badge';

<VerifiedBadge>Verified Property</VerifiedBadge>
<BestsellerBadge />
<ExclusiveBadge />
<SavingsBadge>Save 40%</SavingsBadge>
<RatingBadge rating={4.8} />
<LimitedBadge>Only 2 left!</LimitedBadge>
```

#### Props API

```tsx
interface BadgeProps {
  variant?: 'default' | 'verified' | 'bestseller' | 'exclusive' | 'savings' | 'new' | 'limited' | 'rating' | 'free' | 'premium';
  size?: 'sm' | 'default' | 'lg' | 'xl';
  icon?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  className?: string;
  children: React.ReactNode;
}
```

---

### Input

Form input components optimized for mobile-first travel booking flows.

#### Basic Usage

```tsx
import { Input } from '@/components/ui/Input';

<Input
  label="Email Address"
  type="email"
  placeholder="your@email.com"
  leftIcon={<EmailIcon />}
  required
/>

// With validation
<Input
  label="Phone Number"
  type="tel"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  error={phoneError}
  success={phoneValid ? 'Phone number verified' : undefined}
/>
```

#### Variants

| Variant | Usage | Visual Style |
|---------|-------|--------------|
| `default` | Standard inputs | Border, focus ring |
| `error` | Form validation errors | Red border and focus ring |
| `success` | Successful validation | Green border and focus ring |
| `ghost` | Minimal styling | Transparent, hover background |

#### Travel-Specific Inputs

```tsx
import { 
  DateRangeInput, 
  SearchInput, 
  GuestCountInput, 
  EmailInput, 
  PhoneInput 
} from '@/components/ui/Input';

// Date range picker
<DateRangeInput
  checkIn={checkInDate}
  checkOut={checkOutDate}
  onCheckInChange={setCheckIn}
  onCheckOutChange={setCheckOut}
/>

// Destination search
<SearchInput
  placeholder="Where do you want to go?"
  onSearch={handleDestinationSearch}
/>

// Guest counter
<GuestCountInput
  adults={adultCount}
  children={childrenCount}
  onAdultsChange={setAdults}
  onChildrenChange={setChildren}
/>

// Contact inputs
<EmailInput 
  label="Email"
  required 
/>

<PhoneInput 
  label="Phone"
  countryCode="+1"
/>
```

#### Props API

```tsx
interface InputProps {
  variant?: 'default' | 'error' | 'success' | 'ghost';
  size?: 'sm' | 'default' | 'lg' | 'xl';
  touch?: boolean; // Mobile optimization
  label?: string;
  error?: string;
  success?: string;
  helper?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  className?: string;
  // Standard input props
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
}
```

---

### Modal

Accessible modal components optimized for conversion flows and booking processes.

#### Basic Usage

```tsx
import { Modal } from '@/components/ui/Modal';

<Modal
  isOpen={isModalOpen}
  onClose={closeModal}
  title="Complete Your Booking"
  description="Just a few more details to secure your reservation"
>
  <BookingForm onSubmit={handleBooking} />
</Modal>
```

#### Variants

| Variant | Usage | Visual Style |
|---------|-------|--------------|
| `default` | Standard modals | Border, standard shadow |
| `elevated` | Important modals | Enhanced shadow, no border |
| `minimal` | Clean presentation | Light shadow, minimal styling |
| `booking` | Booking flows | Gradient background, premium feel |
| `success` | Confirmation dialogs | Green accent, success styling |
| `warning` | Warning dialogs | Orange accent, attention styling |

#### Travel-Specific Modals

```tsx
import { 
  BookingModal, 
  ConfirmationModal, 
  GalleryModal 
} from '@/components/ui/Modal';

// Multi-step booking modal
<BookingModal
  isOpen={showBooking}
  onClose={closeBooking}
  title="Complete Your Booking"
  step={2}
  totalSteps={3}
>
  <PaymentForm />
</BookingModal>

// Confirmation modal
<ConfirmationModal
  isOpen={showConfirmation}
  onClose={closeConfirmation}
  type="success"
  title="Booking Confirmed!"
  confirmText="View Booking Details"
  onConfirm={viewBookingDetails}
>
  Your reservation at Santorini Villa has been confirmed.
  Check your email for details.
</ConfirmationModal>

// Image gallery modal
<GalleryModal
  isOpen={showGallery}
  onClose={closeGallery}
  images={propertyImages}
  currentIndex={currentImageIndex}
  onIndexChange={setCurrentImageIndex}
/>
```

#### Props API

```tsx
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: 'default' | 'elevated' | 'minimal' | 'booking' | 'success' | 'warning';
  size?: 'sm' | 'default' | 'lg' | 'xl' | '2xl' | 'booking' | 'confirmation' | 'gallery';
  title?: string;
  description?: string;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

---

### Navigation

Mobile-optimized navigation with membership status and trust signals.

#### Basic Usage

```tsx
import { Navigation, NavLink } from '@/components/ui/Navigation';

<Navigation
  user={currentUser}
  onAuthAction={handleAuth}
>
  <NavLink href="/destinations" active={pathname === '/destinations'}>
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
```

#### Features

- **Mobile-first responsive design**
- **Membership tier display**
- **Trust indicators (SSL, security)**
- **Smooth hamburger menu animation**
- **Scroll-aware styling**
- **Authentication integration**

#### User States

```tsx
// Logged out user
<Navigation onAuthAction={handleAuth}>
  {/* Navigation links */}
</Navigation>

// Logged in member
<Navigation
  user={{
    name: "John Doe",
    email: "john@example.com",
    membershipTier: "premium"
  }}
  onAuthAction={handleAuth}
>
  {/* Navigation links */}
</Navigation>
```

#### Props API

```tsx
interface NavigationProps {
  variant?: 'default' | 'elevated' | 'minimal' | 'floating';
  size?: 'sm' | 'default' | 'lg';
  logo?: React.ReactNode;
  user?: {
    name: string;
    email: string;
    avatar?: string;
    membershipTier?: 'free' | 'premium' | 'vip';
  } | null;
  onAuthAction?: (action: 'login' | 'signup' | 'logout') => void;
  children: React.ReactNode;
  className?: string;
}

interface NavLinkProps {
  href: string;
  active?: boolean;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}
```

---

## Component Composition Patterns

### Booking Card Layout

```tsx
<TravelCard
  image="/santorini-villa.jpg"
  title="Luxury Santorini Villa"
  description="Private infinity pool overlooking the Aegean Sea"
  price="$299/night"
  originalPrice="$450/night"
  savings="33%"
  badge={<ExclusiveBadge />}
>
  <div className="flex items-center gap-2 mt-3">
    <RatingBadge rating={4.9} />
    <VerifiedBadge>Verified</VerifiedBadge>
  </div>
  
  <div className="mt-4 space-y-2">
    <Button variant="primary" size="default" className="w-full">
      Book Now - $299/night
    </Button>
    <Button variant="ghost" size="default" className="w-full">
      Save to Wishlist
    </Button>
  </div>
</TravelCard>
```

### Booking Flow Modal

```tsx
<BookingModal
  isOpen={showBooking}
  onClose={closeBooking}
  title="Complete Your Booking"
  step={currentStep}
  totalSteps={3}
>
  {currentStep === 1 && (
    <>
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
    </>
  )}
  
  {currentStep === 2 && (
    <>
      <Input label="First Name" required />
      <Input label="Last Name" required />
      <EmailInput label="Email" required />
      <PhoneInput label="Phone" required />
    </>
  )}
  
  {currentStep === 3 && (
    <PaymentForm onSubmit={completeBooking} />
  )}
  
  <div className="flex justify-between mt-6">
    <Button 
      variant="ghost" 
      onClick={previousStep}
      disabled={currentStep === 1}
    >
      Back
    </Button>
    <Button 
      variant="primary"
      onClick={currentStep === 3 ? completeBooking : nextStep}
      loading={isLoading}
    >
      {currentStep === 3 ? 'Complete Booking' : 'Continue'}
    </Button>
  </div>
</BookingModal>
```

## Best Practices

### Accessibility

1. **Always include proper ARIA labels**
2. **Use semantic HTML elements**
3. **Ensure keyboard navigation works**
4. **Test with screen readers**
5. **Maintain high contrast ratios**

### Performance

1. **Import only needed components**
2. **Use React.memo() for expensive components**
3. **Optimize images with next/image**
4. **Lazy load modals and heavy components**
5. **Monitor bundle size impact**

### Mobile Optimization

1. **Design for thumb navigation**
2. **Use 44px+ touch targets**
3. **Test on real devices**
4. **Consider one-handed usage**
5. **Optimize for various screen densities**

### Conversion Optimization

1. **Use trust signals prominently**
2. **Make CTAs clear and compelling**
3. **Reduce form friction**
4. **Show progress in multi-step flows**
5. **Provide clear error messaging**

## Theming and Customization

### CSS Custom Properties

All components use CSS custom properties for theming:

```css
:root {
  --color-primary-500: #0066CC;
  --color-secondary-500: #FFB800;
  --font-size-base: 1rem;
  --spacing-unit: 8px;
}

/* Dark theme example */
.dark {
  --color-background: #111827;
  --color-text-primary: #F9FAFB;
}
```

### Component Customization

```tsx
// Override default styles
<Button 
  variant="primary" 
  className="bg-gradient-to-r from-purple-500 to-pink-500"
>
  Custom Styled Button
</Button>

// Extend variants with class-variance-authority
const customButtonVariants = cva(
  buttonVariants.base,
  {
    variants: {
      ...buttonVariants.variants,
      custom: 'bg-gradient-to-r from-purple-500 to-pink-500'
    }
  }
);
```

## Testing

### Component Testing

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

test('Button renders correctly', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('Button handles click events', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Accessibility Testing

```tsx
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('Button has no accessibility violations', async () => {
  const { container } = render(<Button>Accessible button</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Migration Guide

### From Existing Components

1. **Audit current components** for accessibility and performance
2. **Map existing props** to new component API
3. **Update imports** to use new component library
4. **Test thoroughly** in different browsers and devices
5. **Monitor performance** after migration

### Breaking Changes

- Component props have been standardized
- CSS class names follow new naming convention
- Some variant names have changed for clarity
- Touch optimization requires `touch` prop on inputs

---

*This component library is actively maintained and updated. For questions, feature requests, or bug reports, please reach out to the development team.*