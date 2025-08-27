/**
 * Badge Component
 * 
 * Trust signals and status indicators optimized for travel booking
 * Includes specialized variants for travel industry needs
 */

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  [
    'inline-flex items-center rounded-full border px-2.5 py-0.5',
    'text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  ],
  {
    variants: {
      variant: {
        // Default badge
        default: [
          'border-transparent bg-primary text-primary-foreground',
          'hover:bg-primary/80',
        ],
        
        // Secondary badge
        secondary: [
          'border-transparent bg-secondary text-secondary-foreground',
          'hover:bg-secondary/80',
        ],
        
        // Success badge - for confirmations, verified status
        success: [
          'border-transparent bg-success text-success-foreground',
          'hover:bg-success/80',
        ],
        
        // Warning badge - for attention items
        warning: [
          'border-transparent bg-warning text-warning-foreground',
          'hover:bg-warning/80',
        ],
        
        // Error/destructive badge
        destructive: [
          'border-transparent bg-error text-error-foreground',
          'hover:bg-error/80',
        ],
        
        // Outline badge
        outline: [
          'border-border text-foreground',
          'hover:bg-accent hover:text-accent-foreground',
        ],
        
        // Ghost badge - minimal styling
        ghost: [
          'border-transparent text-primary',
          'hover:bg-primary/10',
        ],
        
        // Travel-specific variants
        
        // Verified badge - for verified hotels/experiences
        verified: [
          'border-transparent bg-success/10 text-success border-success/20',
          'hover:bg-success/20',
          'shadow-sm',
        ],
        
        // Bestseller badge
        bestseller: [
          'border-transparent bg-gradient-to-r from-secondary-400 to-secondary-600',
          'text-white shadow-sm',
          'hover:from-secondary-500 hover:to-secondary-700',
        ],
        
        // Member exclusive badge
        exclusive: [
          'border-transparent bg-gradient-to-r from-primary-500 to-primary-700',
          'text-white shadow-sm',
          'hover:from-primary-600 hover:to-primary-800',
        ],
        
        // Limited availability
        limited: [
          'border-transparent bg-warning/10 text-warning border-warning/20',
          'hover:bg-warning/20',
          'animate-pulse',
        ],
        
        // New badge
        new: [
          'border-transparent bg-gradient-to-r from-green-400 to-blue-500',
          'text-white shadow-sm',
          'animate-bounce-subtle',
        ],
        
        // Savings badge
        savings: [
          'border-transparent bg-success text-success-foreground',
          'shadow-sm font-bold',
          'hover:bg-success/90',
        ],
        
        // Trust signals
        trusted: [
          'border-primary/30 bg-primary/5 text-primary',
          'hover:bg-primary/10',
          'shadow-sm',
        ],
        
        // Free badge
        free: [
          'border-transparent bg-green-100 text-green-800',
          'hover:bg-green-200',
          'font-bold',
        ],
        
        // Premium badge
        premium: [
          'border-transparent bg-gradient-to-r from-yellow-400 to-orange-500',
          'text-white shadow-lg',
          'hover:from-yellow-500 hover:to-orange-600',
        ],
        
        // Rating badge
        rating: [
          'border-transparent bg-yellow-100 text-yellow-800',
          'hover:bg-yellow-200',
          'font-bold',
        ],
      },
      
      size: {
        sm: 'px-2 py-0.5 text-xs',
        default: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-1 text-sm',
        xl: 'px-4 py-1.5 text-base',
      },
      
      // Animation variants
      animation: {
        none: '',
        pulse: 'animate-pulse',
        bounce: 'animate-bounce-subtle',
        glow: 'shadow-lg hover:shadow-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      animation: 'none',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, animation, icon, closable, onClose, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size, animation }), className)}
        {...props}
      >
        {icon && <span className="mr-1 flex items-center">{icon}</span>}
        <span className="flex items-center">{children}</span>
        {closable && onClose && (
          <button
            type="button"
            className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={onClose}
            aria-label="Remove badge"
          >
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

// Travel-specific badge compositions with icons

export const VerifiedBadge = React.forwardRef<
  HTMLDivElement,
  Omit<BadgeProps, 'variant' | 'icon'>
>(({ children = 'Verified', ...props }, ref) => (
  <Badge
    ref={ref}
    variant="verified"
    icon={
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    }
    {...props}
  >
    {children}
  </Badge>
));

export const BestsellerBadge = React.forwardRef<
  HTMLDivElement,
  Omit<BadgeProps, 'variant' | 'icon'>
>(({ children = 'Bestseller', ...props }, ref) => (
  <Badge
    ref={ref}
    variant="bestseller"
    animation="glow"
    icon={
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    }
    {...props}
  >
    {children}
  </Badge>
));

export const ExclusiveBadge = React.forwardRef<
  HTMLDivElement,
  Omit<BadgeProps, 'variant' | 'icon'>
>(({ children = 'Members Only', ...props }, ref) => (
  <Badge
    ref={ref}
    variant="exclusive"
    icon={
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
          clipRule="evenodd"
        />
      </svg>
    }
    {...props}
  >
    {children}
  </Badge>
));

export const SavingsBadge = React.forwardRef<
  HTMLDivElement,
  Omit<BadgeProps, 'variant'>
>(({ children, ...props }, ref) => (
  <Badge
    ref={ref}
    variant="savings"
    {...props}
  >
    {children}
  </Badge>
));

export const NewBadge = React.forwardRef<
  HTMLDivElement,
  Omit<BadgeProps, 'variant'>
>(({ children = 'New', ...props }, ref) => (
  <Badge
    ref={ref}
    variant="new"
    animation="bounce"
    {...props}
  >
    {children}
  </Badge>
));

export const FreeBadge = React.forwardRef<
  HTMLDivElement,
  Omit<BadgeProps, 'variant'>
>(({ children = 'Free', ...props }, ref) => (
  <Badge
    ref={ref}
    variant="free"
    {...props}
  >
    {children}
  </Badge>
));

export const RatingBadge = React.forwardRef<
  HTMLDivElement,
  Omit<BadgeProps, 'variant' | 'icon'> & { rating: number }
>(({ rating, children, ...props }, ref) => (
  <Badge
    ref={ref}
    variant="rating"
    icon={
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    }
    {...props}
  >
    {children || `${rating}/5`}
  </Badge>
));

export const LimitedBadge = React.forwardRef<
  HTMLDivElement,
  Omit<BadgeProps, 'variant' | 'animation'>
>(({ children = 'Limited Availability', ...props }, ref) => (
  <Badge
    ref={ref}
    variant="limited"
    animation="pulse"
    {...props}
  >
    {children}
  </Badge>
));

VerifiedBadge.displayName = 'VerifiedBadge';
BestsellerBadge.displayName = 'BestsellerBadge';
ExclusiveBadge.displayName = 'ExclusiveBadge';
SavingsBadge.displayName = 'SavingsBadge';
NewBadge.displayName = 'NewBadge';
FreeBadge.displayName = 'FreeBadge';
RatingBadge.displayName = 'RatingBadge';
LimitedBadge.displayName = 'LimitedBadge';

export { Badge, badgeVariants };