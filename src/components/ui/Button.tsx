/**
 * Button Component
 * 
 * A versatile button component inspired by Stripe's design patterns
 * with variants optimized for travel booking flows
 */

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // Base styles - consistent across all variants
  [
    'inline-flex items-center justify-center whitespace-nowrap rounded-md',
    'text-sm font-medium ring-offset-background transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'touch-button', // Ensures 44px minimum touch target
    'relative overflow-hidden',
    'hover-lift', // Subtle hover animation
  ],
  {
    variants: {
      variant: {
        // Primary - Main CTAs like "Book Now", "Join Vayo Vault"
        primary: [
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
          'bg-gradient-trust', // Custom travel gradient
          'booking-button', // Special booking animation
        ],
        
        // Secondary - Alternative actions like "Learn More"
        secondary: [
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
          'bg-gradient-luxury',
        ],
        
        // Destructive - Cancellation, removal actions
        destructive: [
          'bg-error text-error-foreground shadow-sm hover:bg-error/90',
        ],
        
        // Outline - Secondary actions, less prominent
        outline: [
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
          'border-primary text-primary hover:bg-primary/5',
        ],
        
        // Ghost - Minimal styling for subtle actions
        ghost: [
          'hover:bg-accent hover:text-accent-foreground',
          'text-primary hover:bg-primary/10',
        ],
        
        // Link - Text-only actions
        link: [
          'text-primary underline-offset-4 hover:underline p-0 h-auto',
          'hover-underline',
        ],
        
        // Success - Confirmation actions
        success: [
          'bg-success text-success-foreground shadow hover:bg-success/90',
        ],
        
        // Warning - Attention-requiring actions
        warning: [
          'bg-warning text-warning-foreground shadow hover:bg-warning/90',
        ],
        
        // Trust - For trust signals and guarantees
        trust: [
          'bg-white text-primary border-2 border-primary shadow-sm',
          'hover:bg-primary hover:text-white',
          'trust-badge',
        ],
        
        // Member exclusive - For premium actions
        exclusive: [
          'bg-gradient-to-r from-secondary-400 to-secondary-600',
          'text-white shadow-lg hover:shadow-xl',
          'hover:from-secondary-500 hover:to-secondary-700',
        ],
      },
      
      size: {
        xs: 'h-8 rounded-md px-3 text-xs',
        sm: 'h-9 rounded-md px-3',
        default: 'h-10 px-4 py-2',
        lg: 'h-11 rounded-md px-8',
        xl: 'h-12 rounded-lg px-10 text-base',
        '2xl': 'h-14 rounded-lg px-12 text-lg font-semibold',
        
        // Special sizes for travel context
        'booking': 'h-12 px-8 text-base font-semibold rounded-lg',
        'hero': 'h-14 px-10 text-lg font-bold rounded-xl',
        'mobile-cta': 'h-12 w-full px-6 text-base font-semibold rounded-lg', // Full width mobile
      },
      
      // Animation intensity
      animation: {
        none: '',
        subtle: 'hover-lift',
        medium: 'hover-scale',
        strong: 'animate-pulse',
      },
      
      // Loading state
      loading: {
        true: 'cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      animation: 'subtle',
      loading: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    animation, 
    loading = false, 
    leftIcon, 
    rightIcon, 
    children, 
    disabled,
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading;
    
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, animation, loading, className })
        )}
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...props}
      >
        {loading && (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {!loading && leftIcon && (
          <span className="mr-2 flex items-center">{leftIcon}</span>
        )}
        <span className="flex items-center">{children}</span>
        {!loading && rightIcon && (
          <span className="ml-2 flex items-center">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

// Travel-specific button compositions
export const BookingButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant' | 'size'>>(
  (props, ref) => (
    <Button 
      ref={ref} 
      variant="primary" 
      size="booking" 
      className="bg-gradient-trust font-semibold tracking-wide"
      {...props} 
    />
  )
);

export const HeroButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant' | 'size'>>(
  (props, ref) => (
    <Button 
      ref={ref} 
      variant="primary" 
      size="hero" 
      animation="medium"
      className="shadow-xl hover:shadow-2xl"
      {...props} 
    />
  )
);

export const TrustButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
  (props, ref) => (
    <Button 
      ref={ref} 
      variant="trust" 
      className="font-semibold"
      {...props} 
    />
  )
);

export const ExclusiveButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
  (props, ref) => (
    <Button 
      ref={ref} 
      variant="exclusive" 
      className="font-bold tracking-wide"
      {...props} 
    />
  )
);

BookingButton.displayName = 'BookingButton';
HeroButton.displayName = 'HeroButton';
TrustButton.displayName = 'TrustButton';
ExclusiveButton.displayName = 'ExclusiveButton';

export { Button, buttonVariants };