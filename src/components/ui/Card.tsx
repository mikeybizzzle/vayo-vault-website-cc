/**
 * Card Component
 * 
 * Flexible card component optimized for travel content display
 * Supports various layouts and interaction patterns
 */

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  [
    'rounded-lg border bg-card text-card-foreground shadow-sm',
    'transition-all duration-200 ease-smooth',
  ],
  {
    variants: {
      variant: {
        // Default card styling
        default: 'border-border',
        
        // Elevated card with more shadow
        elevated: 'shadow-md hover:shadow-lg',
        
        // Interactive card with hover effects
        interactive: [
          'cursor-pointer hover-card',
          'hover:shadow-md hover:-translate-y-1',
          'border-border hover:border-primary/20',
        ],
        
        // Featured card with gradient border
        featured: [
          'border-2 border-transparent bg-gradient-to-r from-primary/10 to-secondary/10',
          'shadow-md hover:shadow-lg',
          'relative overflow-hidden',
          'before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-primary before:to-secondary before:-z-10',
        ],
        
        // Ghost card with minimal styling
        ghost: 'border-transparent shadow-none bg-transparent',
        
        // Outline only
        outline: 'border-2 shadow-none bg-transparent',
        
        // Travel destination card
        destination: [
          'overflow-hidden relative group',
          'border-0 shadow-lg hover:shadow-xl',
          'transform hover:-translate-y-2 transition-all duration-300',
        ],
        
        // Pricing card
        pricing: [
          'border-2 hover:border-primary/50',
          'shadow-sm hover:shadow-lg',
          'transition-all duration-200',
        ],
        
        // Member exclusive card
        exclusive: [
          'bg-gradient-to-br from-secondary-50 to-secondary-100',
          'border-secondary/30 border-2',
          'shadow-md',
          'relative overflow-hidden',
        ],
      },
      
      size: {
        sm: 'p-4',
        default: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
        
        // Travel-specific sizes
        'destination': 'p-0', // No padding for image cards
        'compact': 'p-3',
        'spacious': 'p-8 md:p-12',
      },
      
      radius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        default: 'rounded-lg',
        lg: 'rounded-xl',
        xl: 'rounded-2xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      radius: 'default',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, radius, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, size, radius, className }))}
      {...props}
    />
  )
);

Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5', className)}
    {...props}
  />
));

CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));

CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));

CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('pt-0', className)}
    {...props}
  />
));

CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center pt-0', className)}
    {...props}
  />
));

CardFooter.displayName = 'CardFooter';

// Travel-specific card compositions

interface TravelCardProps extends CardProps {
  image?: string;
  imageAlt?: string;
  title: string;
  description?: string;
  price?: string;
  originalPrice?: string;
  savings?: string;
  badge?: React.ReactNode;
  children?: React.ReactNode;
}

const TravelCard = React.forwardRef<HTMLDivElement, TravelCardProps>(
  ({ 
    image, 
    imageAlt, 
    title, 
    description, 
    price, 
    originalPrice, 
    savings, 
    badge,
    children,
    className,
    ...props 
  }, ref) => (
    <Card
      ref={ref}
      variant="destination"
      className={cn('max-w-sm mx-auto', className)}
      {...props}
    >
      {image && (
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {badge && (
            <div className="absolute top-3 left-3 z-10">
              {badge}
            </div>
          )}
          {savings && (
            <div className="absolute top-3 right-3 bg-success text-white px-2 py-1 rounded-full text-xs font-semibold">
              Save {savings}
            </div>
          )}
        </div>
      )}
      
      <CardContent className="p-6">
        <CardHeader className="p-0 pb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          {description && (
            <CardDescription>{description}</CardDescription>
          )}
        </CardHeader>
        
        {price && (
          <div className="flex items-center gap-2 mt-4">
            <span className="text-2xl font-bold text-primary">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
        )}
        
        {children}
      </CardContent>
    </Card>
  )
);

TravelCard.displayName = 'TravelCard';

interface PricingCardProps extends CardProps {
  plan: string;
  price: string;
  period?: string;
  description?: string;
  features?: string[];
  popular?: boolean;
  cta?: React.ReactNode;
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ 
    plan, 
    price, 
    period = 'month', 
    description, 
    features = [], 
    popular = false,
    cta,
    className,
    ...props 
  }, ref) => (
    <Card
      ref={ref}
      variant={popular ? 'featured' : 'pricing'}
      className={cn('relative max-w-sm mx-auto', className)}
      {...props}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        </div>
      )}
      
      <CardHeader className="text-center pb-8 pt-6">
        <CardTitle className="text-xl">{plan}</CardTitle>
        {description && (
          <CardDescription className="mt-2">{description}</CardDescription>
        )}
        <div className="mt-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
      </CardHeader>
      
      <CardContent>
        {features.length > 0 && (
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      
      {cta && (
        <CardFooter className="pt-6">
          <div className="w-full">
            {cta}
          </div>
        </CardFooter>
      )}
    </Card>
  )
);

PricingCard.displayName = 'PricingCard';

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  TravelCard,
  PricingCard,
  cardVariants,
};