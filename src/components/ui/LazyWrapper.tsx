/**
 * LazyWrapper Component
 * 
 * Lazy loading wrapper for components with:
 * - Intersection Observer for visibility detection
 * - Configurable loading thresholds
 * - Skeleton placeholder support
 * - Error boundary for failed loads
 */

'use client'

import React, { 
  useState, 
  useRef, 
  useEffect, 
  ReactNode, 
  ComponentType,
  lazy,
  Suspense
} from 'react'
import { lazyLoadingConfig } from '@/config/performance'
import { cn } from '@/lib/utils'

interface LazyWrapperProps {
  children: ReactNode
  fallback?: ReactNode
  rootMargin?: string
  threshold?: number
  className?: string
  placeholder?: ComponentType
  minHeight?: string
  onInView?: () => void
}

const DefaultSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('animate-pulse bg-gray-200 rounded', className)}>
    <div className="space-y-4 p-6">
      <div className="h-4 bg-gray-300 rounded w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded" />
        <div className="h-4 bg-gray-300 rounded w-5/6" />
      </div>
    </div>
  </div>
)

const LazyWrapper: React.FC<LazyWrapperProps> = ({
  children,
  fallback,
  rootMargin = lazyLoadingConfig.rootMargin,
  threshold = lazyLoadingConfig.threshold,
  className,
  placeholder: Placeholder = DefaultSkeleton,
  minHeight = 'auto',
  onInView
}) => {
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          onInView?.()
          observer.disconnect()
        }
      },
      {
        rootMargin,
        threshold
      }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [rootMargin, threshold, onInView])

  const handleError = () => {
    setHasError(true)
  }

  return (
    <div 
      ref={ref} 
      className={cn('w-full', className)}
      style={{ minHeight }}
    >
      {isInView ? (
        hasError ? (
          <div className="flex items-center justify-center p-8 text-gray-500">
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-gray-300 rounded-full mx-auto mb-2" />
              <p>Failed to load content</p>
            </div>
          </div>
        ) : (
          <ErrorBoundary onError={handleError} fallback={fallback}>
            {children}
          </ErrorBoundary>
        )
      ) : (
        <Placeholder className="w-full" />
      )}
    </div>
  )
}

// Error Boundary for lazy loaded components
class ErrorBoundary extends React.Component<{
  children: ReactNode
  onError?: () => void
  fallback?: ReactNode
}> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('LazyWrapper Error:', error, errorInfo)
    this.props.onError?.()
  }

  render() {
    if ((this.state as any).hasError) {
      return this.props.fallback || (
        <div className="flex items-center justify-center p-8 text-gray-500">
          <p>Something went wrong loading this component.</p>
        </div>
      )
    }

    return this.props.children
  }
}

// Higher-order component for lazy loading
export const withLazyLoading = <P extends object>(
  Component: ComponentType<P>,
  options: Partial<LazyWrapperProps> = {}
) => {
  const LazyComponent = (props: P) => (
    <LazyWrapper {...options}>
      <Component {...props} />
    </LazyWrapper>
  )
  
  LazyComponent.displayName = `LazyWrapper(${Component.displayName || Component.name})`
  return LazyComponent
}

// Specialized skeleton components
export const SectionSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('animate-pulse', className)}>
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="h-3 bg-gray-200 rounded w-20 mx-auto mb-4" />
        <div className="h-8 bg-gray-300 rounded w-96 mx-auto mb-4" />
        <div className="h-4 bg-gray-200 rounded w-80 mx-auto" />
      </div>
      
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-gray-200 rounded-lg p-6 space-y-4">
            <div className="h-40 bg-gray-300 rounded" />
            <div className="h-4 bg-gray-300 rounded w-3/4" />
            <div className="h-3 bg-gray-300 rounded w-1/2" />
          </div>
        ))}
      </div>
    </div>
  </div>
)

export const CardSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('animate-pulse bg-white rounded-lg border p-6', className)}>
    <div className="space-y-4">
      <div className="h-4 bg-gray-200 rounded w-1/4" />
      <div className="h-32 bg-gray-200 rounded" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
      <div className="flex justify-between items-center">
        <div className="h-8 bg-gray-200 rounded w-20" />
        <div className="h-6 bg-gray-200 rounded w-16" />
      </div>
    </div>
  </div>
)

export const TestimonialSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('animate-pulse bg-white rounded-lg border p-6', className)}>
    <div className="space-y-4">
      <div className="h-3 bg-gray-200 rounded w-8" />
      <div className="space-y-2">
        <div className="h-3 bg-gray-200 rounded" />
        <div className="h-3 bg-gray-200 rounded w-4/5" />
        <div className="h-3 bg-gray-200 rounded w-3/5" />
      </div>
      <div className="bg-gray-100 rounded p-3 space-y-2">
        <div className="h-3 bg-gray-200 rounded w-2/3" />
        <div className="flex justify-center gap-2">
          <div className="h-6 bg-gray-200 rounded w-16" />
          <div className="h-6 bg-gray-200 rounded w-16" />
        </div>
        <div className="h-4 bg-gray-200 rounded w-24 mx-auto" />
      </div>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-200 rounded-full" />
        <div className="flex-1 space-y-1">
          <div className="h-3 bg-gray-200 rounded w-1/2" />
          <div className="h-2 bg-gray-200 rounded w-1/3" />
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-gray-200 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  </div>
)

// Dynamic import helper with error handling
export const createLazyComponent = <P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallback?: ReactNode
) => {
  const LazyComponent = lazy(importFunc)
  
  return (props: P) => (
    <Suspense fallback={fallback || <DefaultSkeleton />}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

export default LazyWrapper