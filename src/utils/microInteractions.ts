/**
 * Micro-interactions Utilities
 * 
 * Collection of subtle animations and interactions for enhanced UX:
 * - Button hover effects
 * - Loading states
 * - Success/error feedback
 * - Scroll-triggered animations
 * - Form field interactions
 */

import { Variants, MotionProps } from 'framer-motion'

// Animation variants for common interactions
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
}

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
}

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
}

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
}

export const bounceIn: Variants = {
  initial: { opacity: 0, scale: 0.3 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  exit: { opacity: 0, scale: 0.3 }
}

// Button interaction variants
export const buttonHover: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
}

export const buttonFloat: Variants = {
  initial: { y: 0, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" },
  hover: { 
    y: -2,
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

export const ctaButton: Variants = {
  initial: { 
    scale: 1,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
  },
  hover: { 
    scale: 1.02,
    y: -1,
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    transition: { duration: 0.2 }
  },
  tap: { 
    scale: 0.98,
    y: 0,
    transition: { duration: 0.1 }
  }
}

// Card interaction variants
export const cardHover: Variants = {
  initial: { y: 0, scale: 1 },
  hover: { 
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

export const cardFloat: Variants = {
  initial: { y: 0 },
  animate: { 
    y: [-2, 2, -2],
    transition: { 
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Loading animations
export const spinLoader: Variants = {
  initial: { rotate: 0 },
  animate: { 
    rotate: 360,
    transition: { 
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
}

export const pulseLoader: Variants = {
  initial: { scale: 1, opacity: 1 },
  animate: { 
    scale: [1, 1.1, 1],
    opacity: [1, 0.7, 1],
    transition: { 
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const dotsLoader: Variants = {
  initial: { y: 0 },
  animate: { 
    y: [-10, 0, -10],
    transition: { 
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Success/Error feedback animations
export const successBounce: Variants = {
  initial: { scale: 0 },
  animate: { 
    scale: [0, 1.2, 1],
    transition: { 
      duration: 0.6,
      times: [0, 0.6, 1],
      ease: "easeOut"
    }
  }
}

export const errorShake: Variants = {
  initial: { x: 0 },
  animate: { 
    x: [-10, 10, -10, 10, 0],
    transition: { 
      duration: 0.5,
      ease: "easeInOut"
    }
  }
}

export const warningPulse: Variants = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.05, 1],
    transition: { 
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Scroll-triggered animations
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

// Form field interactions
export const fieldFocus: Variants = {
  initial: { scale: 1 },
  focus: { 
    scale: 1.02,
    transition: { duration: 0.2 }
  }
}

export const labelFloat: Variants = {
  initial: { y: 0, scale: 1 },
  float: { 
    y: -20,
    scale: 0.85,
    transition: { duration: 0.2 }
  }
}

// Navigation and modal animations
export const slideInRight: Variants = {
  initial: { x: "100%" },
  animate: { 
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 }
  },
  exit: { 
    x: "100%",
    transition: { duration: 0.2 }
  }
}

export const slideInLeft: Variants = {
  initial: { x: "-100%" },
  animate: { 
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 }
  },
  exit: { 
    x: "-100%",
    transition: { duration: 0.2 }
  }
}

export const slideUp: Variants = {
  initial: { y: "100%" },
  animate: { 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 }
  },
  exit: { 
    y: "100%",
    transition: { duration: 0.2 }
  }
}

export const modalBackdrop: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.2 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
}

// Progress and loading states
export const progressBar: Variants = {
  initial: { scaleX: 0 },
  animate: { 
    scaleX: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const countUp = (from: number, to: number): Variants => ({
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 1,
      ease: "easeOut"
    }
  }
})

// Badge and notification animations
export const badgeEntry: Variants = {
  initial: { scale: 0, rotate: -180 },
  animate: { 
    scale: 1,
    rotate: 0,
    transition: { 
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
}

export const notificationSlide: Variants = {
  initial: { x: "100%", opacity: 0 },
  animate: { 
    x: 0,
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  },
  exit: { 
    x: "100%",
    opacity: 0,
    transition: { duration: 0.2 }
  }
}

// Utility functions for creating custom animations
export const createFadeIn = (delay = 0, duration = 0.6): MotionProps => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { delay, duration }
})

export const createSlideIn = (
  direction: 'left' | 'right' | 'up' | 'down' = 'up',
  delay = 0,
  duration = 0.8
): MotionProps => {
  const directions = {
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
    up: { x: 0, y: 30 },
    down: { x: 0, y: -30 }
  }

  const initial = { opacity: 0, ...directions[direction] }
  const animate = { opacity: 1, x: 0, y: 0 }

  return {
    initial,
    whileInView: animate,
    viewport: { once: true },
    transition: { delay, duration, ease: "easeOut" }
  }
}

export const createScaleIn = (delay = 0, duration = 0.6): MotionProps => ({
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { delay, duration, ease: "easeOut" }
})

export const createStagger = (
  childDelay = 0.1,
  parentDelay = 0
): MotionProps => ({
  initial: {},
  whileInView: {},
  viewport: { once: true },
  transition: {
    staggerChildren: childDelay,
    delayChildren: parentDelay
  }
})

// Performance-optimized animation presets
export const quickFade: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 }
}

export const smoothSlide: MotionProps = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" }
}

export const gentleBounce: MotionProps = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: "easeOut" }
}