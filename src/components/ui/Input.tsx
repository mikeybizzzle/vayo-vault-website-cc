/**
 * Input Component
 * 
 * Form input component optimized for mobile-first travel booking flows
 * Includes validation states and travel-specific input types
 */

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  [
    'flex w-full rounded-md border bg-background px-3 py-2 text-sm',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'placeholder:text-muted-foreground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'transition-all duration-200 ease-smooth',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-input hover:border-primary/40 focus:border-primary',
        ],
        error: [
          'border-error hover:border-error focus:border-error',
          'focus-visible:ring-error',
        ],
        success: [
          'border-success hover:border-success focus:border-success',
          'focus-visible:ring-success',
        ],
        ghost: [
          'border-transparent bg-transparent hover:bg-muted/50 focus:bg-background focus:border-primary',
        ],
      },
      
      size: {
        sm: 'h-8 px-3 py-1 text-xs',
        default: 'h-10 px-3 py-2',
        lg: 'h-12 px-4 py-3 text-base',
        xl: 'h-14 px-5 py-4 text-lg',
      },
      
      // Mobile optimization
      touch: {
        true: 'min-h-[44px] text-base', // iOS zoom prevention and touch target
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      touch: false,
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  success?: string;
  helper?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    variant, 
    size, 
    touch,
    type = 'text',
    label,
    error,
    success,
    helper,
    leftIcon,
    rightIcon,
    loading,
    id,
    ...props 
  }, ref) => {
    const inputId = id || React.useId();
    const hasError = !!error;
    const hasSuccess = !!success && !hasError;
    
    // Determine variant based on validation state
    const computedVariant = hasError ? 'error' : hasSuccess ? 'success' : variant;
    
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-foreground mb-2"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none">
              {leftIcon}
            </div>
          )}
          
          <input
            type={type}
            className={cn(
              inputVariants({ variant: computedVariant, size, touch }),
              leftIcon && 'pl-10',
              (rightIcon || loading) && 'pr-10',
              className
            )}
            ref={ref}
            id={inputId}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${inputId}-error` : 
              success ? `${inputId}-success` : 
              helper ? `${inputId}-helper` : 
              undefined
            }
            {...props}
          />
          
          {(rightIcon || loading) && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {loading ? (
                <div className="w-4 h-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : (
                rightIcon
              )}
            </div>
          )}
        </div>
        
        {/* Validation and helper messages */}
        {error && (
          <p id={`${inputId}-error`} className="mt-1 text-sm text-error flex items-center gap-1">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
        
        {success && !error && (
          <p id={`${inputId}-success`} className="mt-1 text-sm text-success flex items-center gap-1">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {success}
          </p>
        )}
        
        {helper && !error && !success && (
          <p id={`${inputId}-helper`} className="mt-1 text-sm text-muted-foreground">
            {helper}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

// Travel-specific input compositions

interface DateRangeInputProps extends Omit<InputProps, 'type' | 'placeholder'> {
  checkIn?: string;
  checkOut?: string;
  onCheckInChange?: (date: string) => void;
  onCheckOutChange?: (date: string) => void;
}

export const DateRangeInput = React.forwardRef<HTMLDivElement, DateRangeInputProps>(
  ({ 
    checkIn, 
    checkOut, 
    onCheckInChange, 
    onCheckOutChange, 
    label = 'Travel Dates',
    className,
    ...props 
  }, ref) => (
    <div ref={ref} className={cn('grid grid-cols-2 gap-4', className)}>
      <Input
        type="date"
        label="Check-in"
        value={checkIn}
        onChange={(e) => onCheckInChange?.(e.target.value)}
        leftIcon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        }
        touch
        {...props}
      />
      <Input
        type="date"
        label="Check-out"
        value={checkOut}
        onChange={(e) => onCheckOutChange?.(e.target.value)}
        leftIcon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        }
        touch
        {...props}
      />
    </div>
  )
);

interface SearchInputProps extends Omit<InputProps, 'type'> {
  onSearch?: (query: string) => void;
  suggestions?: string[];
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch, suggestions, placeholder = 'Search destinations...', ...props }, ref) => (
    <Input
      ref={ref}
      type="search"
      placeholder={placeholder}
      leftIcon={
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      }
      onKeyDown={(e) => {
        if (e.key === 'Enter' && onSearch) {
          onSearch(e.currentTarget.value);
        }
      }}
      touch
      {...props}
    />
  )
);

interface GuestCountInputProps extends Omit<InputProps, 'type' | 'value' | 'onChange'> {
  adults?: number;
  children?: number;
  onAdultsChange?: (count: number) => void;
  onChildrenChange?: (count: number) => void;
}

export const GuestCountInput = React.forwardRef<HTMLDivElement, GuestCountInputProps>(
  ({ 
    adults = 1, 
    children = 0, 
    onAdultsChange, 
    onChildrenChange, 
    label = 'Guests',
    className,
    ...props 
  }, ref) => (
    <div ref={ref} className={cn('space-y-4', className)}>
      {label && (
        <label className="block text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center justify-between p-3 border border-input rounded-md">
          <div>
            <div className="font-medium">Adults</div>
            <div className="text-sm text-muted-foreground">Ages 13+</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-8 h-8 rounded-full border border-input flex items-center justify-center hover:bg-accent disabled:opacity-50"
              onClick={() => onAdultsChange?.(Math.max(1, adults - 1))}
              disabled={adults <= 1}
            >
              −
            </button>
            <span className="w-8 text-center font-medium">{adults}</span>
            <button
              type="button"
              className="w-8 h-8 rounded-full border border-input flex items-center justify-center hover:bg-accent"
              onClick={() => onAdultsChange?.(adults + 1)}
            >
              +
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 border border-input rounded-md">
          <div>
            <div className="font-medium">Children</div>
            <div className="text-sm text-muted-foreground">Ages 0-12</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-8 h-8 rounded-full border border-input flex items-center justify-center hover:bg-accent disabled:opacity-50"
              onClick={() => onChildrenChange?.(Math.max(0, children - 1))}
              disabled={children <= 0}
            >
              −
            </button>
            <span className="w-8 text-center font-medium">{children}</span>
            <button
              type="button"
              className="w-8 h-8 rounded-full border border-input flex items-center justify-center hover:bg-accent"
              onClick={() => onChildrenChange?.(children + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
);

interface EmailInputProps extends Omit<InputProps, 'type'> {}

export const EmailInput = React.forwardRef<HTMLInputElement, EmailInputProps>(
  ({ placeholder = 'Enter your email address', ...props }, ref) => (
    <Input
      ref={ref}
      type="email"
      placeholder={placeholder}
      leftIcon={
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
      }
      touch
      {...props}
    />
  )
);

interface PhoneInputProps extends Omit<InputProps, 'type'> {
  countryCode?: string;
}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ countryCode = '+1', placeholder = '(555) 123-4567', ...props }, ref) => (
    <Input
      ref={ref}
      type="tel"
      placeholder={placeholder}
      leftIcon={
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-sm text-muted-foreground">{countryCode}</span>
        </div>
      }
      touch
      {...props}
    />
  )
);

DateRangeInput.displayName = 'DateRangeInput';
SearchInput.displayName = 'SearchInput';
GuestCountInput.displayName = 'GuestCountInput';
EmailInput.displayName = 'EmailInput';
PhoneInput.displayName = 'PhoneInput';

export { Input, inputVariants };