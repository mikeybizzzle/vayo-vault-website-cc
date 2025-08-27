/**
 * Modal Component
 * 
 * Accessible modal component optimized for conversion flows
 * Includes specialized variants for travel booking scenarios
 */

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const modalVariants = cva(
  [
    'fixed inset-0 z-50 flex items-center justify-center p-4',
    'sm:p-6 md:p-8',
  ],
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        default: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        full: 'max-w-full',
        
        // Travel-specific sizes
        booking: 'max-w-2xl w-full',
        confirmation: 'max-w-lg',
        gallery: 'max-w-6xl w-full',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

const modalContentVariants = cva(
  [
    'relative w-full rounded-lg bg-background shadow-xl',
    'animate-scale-in',
    'max-h-[90vh] overflow-y-auto',
  ],
  {
    variants: {
      variant: {
        default: 'border',
        elevated: 'shadow-2xl border-0',
        minimal: 'shadow-lg border-0',
        
        // Travel-specific variants
        booking: [
          'border-0 shadow-2xl',
          'bg-gradient-to-br from-background to-background/95',
        ],
        success: [
          'border-2 border-success/20',
          'bg-gradient-to-br from-success/5 to-background',
        ],
        warning: [
          'border-2 border-warning/20',
          'bg-gradient-to-br from-warning/5 to-background',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ModalProps extends VariantProps<typeof modalVariants> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  variant?: VariantProps<typeof modalContentVariants>['variant'];
  title?: string;
  description?: string;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  contentClassName?: string;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({
    isOpen,
    onClose,
    children,
    size,
    variant = 'default',
    title,
    description,
    showCloseButton = true,
    closeOnOverlayClick = true,
    closeOnEscape = true,
    className,
    contentClassName,
    ...props
  }, ref) => {
    // Handle escape key
    React.useEffect(() => {
      if (!closeOnEscape || !isOpen) return;
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, closeOnEscape, onClose]);
    
    // Prevent body scroll when modal is open
    React.useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'unset';
        };
      }
    }, [isOpen]);
    
    if (!isOpen) return null;
    
    return (
      <>
        {/* Overlay */}
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={closeOnOverlayClick ? onClose : undefined}
          aria-hidden="true"
        />
        
        {/* Modal */}
        <div
          ref={ref}
          className={cn(modalVariants({ size }), className)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
          aria-describedby={description ? 'modal-description' : undefined}
          {...props}
        >
          <div 
            className={cn(modalContentVariants({ variant }), contentClassName)}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            {(title || description || showCloseButton) && (
              <div className="flex items-start justify-between p-6 pb-4">
                <div className="flex-1">
                  {title && (
                    <h2 id="modal-title" className="text-xl font-semibold text-foreground">
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p id="modal-description" className="mt-1 text-sm text-muted-foreground">
                      {description}
                    </p>
                  )}
                </div>
                
                {showCloseButton && (
                  <button
                    type="button"
                    className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    onClick={onClose}
                    aria-label="Close modal"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            )}
            
            {/* Content */}
            <div className={cn(
              'px-6',
              (title || description || showCloseButton) ? 'pb-6' : 'py-6'
            )}>
              {children}
            </div>
          </div>
        </div>
      </>
    );
  }
);

Modal.displayName = 'Modal';

// Travel-specific modal compositions

interface BookingModalProps extends Omit<ModalProps, 'size' | 'variant'> {
  step?: number;
  totalSteps?: number;
}

export const BookingModal = React.forwardRef<HTMLDivElement, BookingModalProps>(
  ({ step, totalSteps, title, children, ...props }, ref) => (
    <Modal
      ref={ref}
      size="booking"
      variant="booking"
      title={
        <div className="flex items-center justify-between w-full">
          <span>{title}</span>
          {step && totalSteps && (
            <div className="text-sm text-muted-foreground font-normal">
              Step {step} of {totalSteps}
            </div>
          )}
        </div>
      }
      {...props}
    >
      {step && totalSteps && (
        <div className="mb-6">
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      )}
      {children}
    </Modal>
  )
);

interface ConfirmationModalProps extends Omit<ModalProps, 'size' | 'variant'> {
  type?: 'success' | 'warning' | 'error';
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  loading?: boolean;
}

export const ConfirmationModal = React.forwardRef<HTMLDivElement, ConfirmationModalProps>(
  ({ 
    type = 'warning',
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm,
    onCancel,
    loading = false,
    children,
    onClose,
    ...props 
  }, ref) => {
    const handleCancel = () => {
      onCancel?.();
      onClose();
    };
    
    const handleConfirm = () => {
      onConfirm?.();
      if (!loading) {
        onClose();
      }
    };
    
    const iconMap = {
      success: (
        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      ),
      warning: (
        <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-warning" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
      ),
      error: (
        <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-error" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
      ),
    };
    
    return (
      <Modal
        ref={ref}
        size="confirmation"
        variant={type}
        onClose={onClose}
        {...props}
      >
        <div className="text-center">
          {iconMap[type]}
          {children}
          
          <div className="flex flex-col-reverse sm:flex-row gap-3 mt-6">
            <button
              type="button"
              className="flex-1 px-4 py-2 text-sm font-medium text-muted-foreground bg-muted hover:bg-muted/80 rounded-md transition-colors"
              onClick={handleCancel}
              disabled={loading}
            >
              {cancelText}
            </button>
            <button
              type="button"
              className={cn(
                'flex-1 px-4 py-2 text-sm font-medium text-white rounded-md transition-colors disabled:opacity-50',
                type === 'success' && 'bg-success hover:bg-success/90',
                type === 'warning' && 'bg-warning hover:bg-warning/90',
                type === 'error' && 'bg-error hover:bg-error/90'
              )}
              onClick={handleConfirm}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Loading...
                </div>
              ) : (
                confirmText
              )}
            </button>
          </div>
        </div>
      </Modal>
    );
  }
);

interface GalleryModalProps extends Omit<ModalProps, 'size' | 'variant'> {
  images: Array<{ src: string; alt: string; caption?: string }>;
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export const GalleryModal = React.forwardRef<HTMLDivElement, GalleryModalProps>(
  ({ images, currentIndex, onIndexChange, onClose, ...props }, ref) => {
    const handlePrevious = () => {
      onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };
    
    const handleNext = () => {
      onIndexChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };
    
    // Handle keyboard navigation
    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') handlePrevious();
        if (e.key === 'ArrowRight') handleNext();
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    });
    
    const currentImage = images[currentIndex];
    
    return (
      <Modal
        ref={ref}
        size="gallery"
        variant="minimal"
        onClose={onClose}
        showCloseButton={false}
        {...props}
      >
        <div className="relative">
          {/* Close button */}
          <button
            type="button"
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition-colors"
            onClick={onClose}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Image */}
          <div className="relative">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-[60vh] sm:h-[70vh] object-cover rounded-lg"
            />
            
            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition-colors"
                  onClick={handlePrevious}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition-colors"
                  onClick={handleNext}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
          
          {/* Caption and counter */}
          <div className="mt-4 text-center">
            {currentImage.caption && (
              <p className="text-muted-foreground mb-2">{currentImage.caption}</p>
            )}
            {images.length > 1 && (
              <p className="text-sm text-muted-foreground">
                {currentIndex + 1} of {images.length}
              </p>
            )}
          </div>
        </div>
      </Modal>
    );
  }
);

BookingModal.displayName = 'BookingModal';
ConfirmationModal.displayName = 'ConfirmationModal';
GalleryModal.displayName = 'GalleryModal';

export { Modal, modalVariants, modalContentVariants };