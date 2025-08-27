/**
 * Navigation Component
 * 
 * Mobile-optimized navigation component for travel platform
 * Includes membership status, trust signals, and smooth interactions
 */

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const navigationVariants = cva(
  [
    'w-full bg-background/95 backdrop-blur-sm border-b border-border',
    'sticky top-0 z-40 transition-all duration-200',
  ],
  {
    variants: {
      variant: {
        default: 'shadow-sm',
        elevated: 'shadow-md',
        minimal: 'border-b-transparent shadow-none',
        floating: 'mx-4 mt-4 rounded-lg border shadow-lg',
      },
      
      size: {
        sm: 'h-14',
        default: 'h-16',
        lg: 'h-18',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface NavigationProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navigationVariants> {
  logo?: React.ReactNode;
  children?: React.ReactNode;
  user?: {
    name: string;
    email: string;
    avatar?: string;
    membershipTier?: 'free' | 'premium' | 'vip';
  } | null;
  onAuthAction?: (action: 'login' | 'signup' | 'logout') => void;
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ className, variant, size, logo, children, user, onAuthAction, ...props }, ref) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    
    // Handle scroll effect
    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const membershipBadge = user?.membershipTier ? (
      <div className={cn(
        'px-2 py-1 rounded-full text-xs font-medium',
        user.membershipTier === 'free' && 'bg-gray-100 text-gray-800',
        user.membershipTier === 'premium' && 'bg-secondary/10 text-secondary-700',
        user.membershipTier === 'vip' && 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
      )}>
        {user.membershipTier === 'free' && 'Free'}
        {user.membershipTier === 'premium' && 'Premium'}
        {user.membershipTier === 'vip' && 'VIP'}
      </div>
    ) : null;
    
    return (
      <nav
        ref={ref}
        className={cn(
          navigationVariants({ variant, size }),
          isScrolled && variant === 'default' && 'shadow-md',
          className
        )}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              {logo ? (
                logo
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">V</span>
                  </div>
                  <span className="text-xl font-bold text-foreground">Vayo Vault</span>
                </div>
              )}
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {children}
              </div>
            </div>
            
            {/* User Menu / Auth */}
            <div className="flex items-center gap-4">
              {/* Trust signals */}
              <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Secure</span>
              </div>
              
              {user ? (
                <div className="flex items-center gap-3">
                  {membershipBadge}
                  
                  {/* User menu button */}
                  <div className="relative">
                    <button
                      type="button"
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {user.avatar ? (
                        <img
                          className="w-8 h-8 rounded-full"
                          src={user.avatar}
                          alt={user.name}
                        />
                      ) : (
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-primary">
                            {user.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <span className="hidden sm:block">{user.name}</span>
                      <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => onAuthAction?.('login')}
                  >
                    Log in
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors touch-button"
                    onClick={() => onAuthAction?.('signup')}
                  >
                    Join Vayo Vault
                  </button>
                </div>
              )}
              
              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden p-2 rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring touch-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                <svg
                  className={cn(
                    'w-6 h-6 transition-transform duration-200',
                    isMobileMenuOpen && 'rotate-90'
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border animate-slide-in-down">
            <div className="px-4 py-6 space-y-4">
              {children}
              
              {!user && (
                <div className="pt-4 border-t border-border space-y-3">
                  <button
                    type="button"
                    className="block w-full text-left px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors touch-button"
                    onClick={() => {
                      onAuthAction?.('login');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Log in
                  </button>
                  <button
                    type="button"
                    className="block w-full px-4 py-2 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors touch-button"
                    onClick={() => {
                      onAuthAction?.('signup');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Join Vayo Vault
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    );
  }
);

Navigation.displayName = 'Navigation';

// Navigation link component
export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  external?: boolean;
  children: React.ReactNode;
}

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, active, external, children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        'px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 touch-button',
        'hover:text-foreground hover:bg-accent',
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        active
          ? 'text-primary bg-primary/10 border border-primary/20'
          : 'text-muted-foreground',
        className
      )}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        {external && (
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        )}
      </span>
    </a>
  )
);

NavLink.displayName = 'NavLink';

// Mobile navigation link for responsive menu
export const MobileNavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, active, children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        'block px-4 py-3 text-base font-medium rounded-lg transition-colors touch-button',
        'hover:text-foreground hover:bg-accent',
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        active
          ? 'text-primary bg-primary/10 border border-primary/20'
          : 'text-muted-foreground',
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
);

MobileNavLink.displayName = 'MobileNavLink';

// Trust indicator component for navigation
export const TrustIndicator = ({ children, icon, className, ...props }: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium',
      'bg-success/10 text-success border border-success/20',
      className
    )}
    {...props}
  >
    {icon || (
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    )}
    {children}
  </div>
);

TrustIndicator.displayName = 'TrustIndicator';

export { Navigation, navigationVariants };