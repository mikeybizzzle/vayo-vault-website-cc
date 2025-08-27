/**
 * OptimizedImage Component
 * 
 * Performance-optimized image component with:
 * - Automatic format selection (WebP/AVIF)
 * - Lazy loading with intersection observer
 * - Responsive sizing
 * - Blur placeholder
 * - Error handling and fallbacks
 */

'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'
import { imageConfig } from '@/config/performance'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string
  fallbackSrc?: string
  lazy?: boolean
  quality?: 'hero' | 'content' | 'thumbnail' | 'background'
  aspectRatio?: 'square' | '4/3' | '16/9' | '3/2' | 'auto'
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down'
  placeholderColor?: string
  onLoad?: () => void
  onError?: () => void
  className?: string
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  fallbackSrc,
  alt,
  lazy = true,
  priority = false,
  quality = 'content',
  aspectRatio = 'auto',
  objectFit = 'cover',
  placeholderColor = 'bg-gray-200',
  onLoad,
  onError,
  className,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(!lazy || priority)
  const imgRef = useRef<HTMLDivElement>(null)

  // Get quality setting
  const imageQuality = imageConfig.qualities[quality]
  
  // Get responsive sizes based on quality
  const sizes = (() => {
    switch (quality) {
      case 'hero': return imageConfig.sizes.hero
      case 'thumbnail': return imageConfig.sizes.thumbnail
      case 'content': return imageConfig.sizes.content
      default: return imageConfig.sizes.card
    }
  })()

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority || !imgRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    )

    observer.observe(imgRef.current)

    return () => observer.disconnect()
  }, [lazy, priority])

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  // Handle image error
  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  // Get aspect ratio classes
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'square': return 'aspect-square'
      case '4/3': return 'aspect-[4/3]'
      case '16/9': return 'aspect-video'
      case '3/2': return 'aspect-[3/2]'
      default: return ''
    }
  }

  // Get object fit class
  const getObjectFitClass = () => {
    switch (objectFit) {
      case 'contain': return 'object-contain'
      case 'fill': return 'object-fill'
      case 'scale-down': return 'object-scale-down'
      default: return 'object-cover'
    }
  }

  const currentSrc = hasError && fallbackSrc ? fallbackSrc : src
  const shouldShowImage = isInView || priority

  return (
    <div
      ref={imgRef}
      className={cn(
        'relative overflow-hidden',
        getAspectRatioClass(),
        !isLoaded && placeholderColor,
        className
      )}
    >
      {shouldShowImage ? (
        <>
          <Image
            src={currentSrc}
            alt={alt}
            fill
            quality={imageQuality}
            priority={priority}
            sizes={sizes}
            placeholder="blur"
            blurDataURL={imageConfig.blurDataUrls.default}
            onLoad={handleLoad}
            onError={handleError}
            className={cn(
              'transition-opacity duration-300',
              getObjectFitClass(),
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            {...props}
          />
          
          {/* Loading placeholder */}
          {!isLoaded && (
            <div className={cn(
              'absolute inset-0 flex items-center justify-center',
              placeholderColor
            )}>
              <div className="w-8 h-8 border-2 border-primary-200 border-t-primary-500 rounded-full animate-spin" />
            </div>
          )}
        </>
      ) : (
        // Lazy loading placeholder
        <div className={cn(
          'absolute inset-0 flex items-center justify-center',
          placeholderColor
        )}>
          <div className="text-center">
            <div className="w-6 h-6 border border-gray-300 rounded mx-auto mb-2" />
            <p className="text-xs text-gray-400">Loading...</p>
          </div>
        </div>
      )}
      
      {/* Error state */}
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-400">
            <div className="w-8 h-8 border border-gray-300 rounded mx-auto mb-2" />
            <p className="text-xs">Failed to load</p>
          </div>
        </div>
      )}
    </div>
  )
}

// Specialized image components
export const HeroImage: React.FC<Omit<OptimizedImageProps, 'quality' | 'priority'>> = (props) => (
  <OptimizedImage {...props} quality="hero" priority />
)

export const ContentImage: React.FC<Omit<OptimizedImageProps, 'quality'>> = (props) => (
  <OptimizedImage {...props} quality="content" />
)

export const ThumbnailImage: React.FC<Omit<OptimizedImageProps, 'quality'>> = (props) => (
  <OptimizedImage {...props} quality="thumbnail" />
)

export const BackgroundImage: React.FC<Omit<OptimizedImageProps, 'quality' | 'aspectRatio'>> = (props) => (
  <OptimizedImage {...props} quality="background" aspectRatio="auto" />
)

export default OptimizedImage