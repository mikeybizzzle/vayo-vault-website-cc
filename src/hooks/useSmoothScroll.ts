/**
 * Smooth Scroll Hook
 * 
 * Custom hook for smooth scrolling functionality with:
 * - Configurable easing functions
 * - Offset support for fixed headers
 * - Cancel on user interaction
 * - Performance optimization
 */

'use client'

import { useCallback, useRef } from 'react'

interface SmoothScrollOptions {
  duration?: number
  offset?: number
  easing?: 'easeInOut' | 'easeIn' | 'easeOut' | 'linear'
  onComplete?: () => void
  onCancel?: () => void
}

// Easing functions
const easingFunctions = {
  linear: (t: number) => t,
  easeIn: (t: number) => t * t,
  easeOut: (t: number) => t * (2 - t),
  easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

export const useSmoothScroll = () => {
  const animationFrame = useRef<number | null>(null)
  const isScrolling = useRef(false)

  // Cancel current scroll animation
  const cancelScroll = useCallback(() => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current)
      animationFrame.current = null
      isScrolling.current = false
    }
  }, [])

  // Smooth scroll to element
  const scrollToElement = useCallback((
    elementOrSelector: HTMLElement | string,
    options: SmoothScrollOptions = {}
  ) => {
    const {
      duration = 800,
      offset = 0,
      easing = 'easeInOut',
      onComplete,
      onCancel
    } = options

    // Find target element
    const element = typeof elementOrSelector === 'string' 
      ? document.querySelector(elementOrSelector) as HTMLElement
      : elementOrSelector

    if (!element) {
      console.warn('Scroll target element not found')
      return
    }

    // Cancel any existing scroll
    if (isScrolling.current) {
      cancelScroll()
      onCancel?.()
    }

    // Get scroll positions
    const startPosition = window.pageYOffset
    const targetPosition = element.offsetTop - offset
    const distance = targetPosition - startPosition

    // Don't animate if already at target
    if (Math.abs(distance) < 1) {
      onComplete?.()
      return
    }

    let startTime: number | null = null
    isScrolling.current = true

    // Animation function
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime

      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const easedProgress = easingFunctions[easing](progress)
      
      const currentPosition = startPosition + (distance * easedProgress)
      window.scrollTo(0, currentPosition)

      if (progress < 1 && isScrolling.current) {
        animationFrame.current = requestAnimationFrame(animate)
      } else {
        isScrolling.current = false
        animationFrame.current = null
        onComplete?.()
      }
    }

    // Start animation
    animationFrame.current = requestAnimationFrame(animate)

    // Cancel on user scroll
    const handleUserScroll = () => {
      if (isScrolling.current) {
        cancelScroll()
        onCancel?.()
      }
      window.removeEventListener('wheel', handleUserScroll)
      window.removeEventListener('touchstart', handleUserScroll)
      window.removeEventListener('keydown', handleUserScroll)
    }

    window.addEventListener('wheel', handleUserScroll, { passive: true })
    window.addEventListener('touchstart', handleUserScroll, { passive: true })
    window.addEventListener('keydown', handleUserScroll)

  }, [cancelScroll])

  // Smooth scroll to position
  const scrollToPosition = useCallback((
    targetY: number,
    options: SmoothScrollOptions = {}
  ) => {
    const {
      duration = 800,
      easing = 'easeInOut',
      onComplete,
      onCancel
    } = options

    // Cancel any existing scroll
    if (isScrolling.current) {
      cancelScroll()
      onCancel?.()
    }

    const startPosition = window.pageYOffset
    const distance = targetY - startPosition

    // Don't animate if already at target
    if (Math.abs(distance) < 1) {
      onComplete?.()
      return
    }

    let startTime: number | null = null
    isScrolling.current = true

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime

      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const easedProgress = easingFunctions[easing](progress)
      
      const currentPosition = startPosition + (distance * easedProgress)
      window.scrollTo(0, currentPosition)

      if (progress < 1 && isScrolling.current) {
        animationFrame.current = requestAnimationFrame(animate)
      } else {
        isScrolling.current = false
        animationFrame.current = null
        onComplete?.()
      }
    }

    animationFrame.current = requestAnimationFrame(animate)
  }, [cancelScroll])

  // Scroll to top
  const scrollToTop = useCallback((options: SmoothScrollOptions = {}) => {
    scrollToPosition(0, options)
  }, [scrollToPosition])

  // Create scroll handler for navigation links
  const createScrollHandler = useCallback((
    targetSelector: string,
    options: SmoothScrollOptions = {}
  ) => {
    return (e: React.MouseEvent) => {
      e.preventDefault()
      scrollToElement(targetSelector, options)
    }
  }, [scrollToElement])

  return {
    scrollToElement,
    scrollToPosition,
    scrollToTop,
    createScrollHandler,
    cancelScroll,
    isScrolling: isScrolling.current
  }
}

// Hook for scroll-triggered animations
export const useScrollAnimation = (
  threshold = 0.1,
  rootMargin = '0px'
) => {
  const animatedElements = useRef<Map<Element, boolean>>(new Map())

  const observeElement = useCallback((
    element: Element,
    onInView: () => void,
    onOutOfView?: () => void
  ) => {
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedElements.current.get(element)) {
          animatedElements.current.set(element, true)
          onInView()
        } else if (!entry.isIntersecting && onOutOfView) {
          onOutOfView()
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      animatedElements.current.delete(element)
    }
  }, [threshold, rootMargin])

  return { observeElement }
}