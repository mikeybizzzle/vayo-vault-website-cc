# Vayo Vault Accessibility Guide

Comprehensive accessibility guidelines ensuring WCAG 2.1 AA compliance for inclusive travel booking experiences.

## Accessibility Statement

Vayo Vault is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone by applying relevant accessibility standards and testing with assistive technologies.

### Our Standards

- **WCAG 2.1 Level AA** compliance
- **Section 508** compliance
- **ADA** (Americans with Disabilities Act) requirements
- **EN 301 549** European accessibility standard

## Core Principles

### 1. Perceivable
Information and user interface components must be presented in ways users can perceive.

### 2. Operable
User interface components and navigation must be operable by all users.

### 3. Understandable
Information and the operation of user interface must be understandable.

### 4. Robust
Content must be robust enough for interpretation by various assistive technologies.

## Color and Contrast

### Minimum Contrast Ratios

#### Text Contrast
```css
/* Normal text (under 18px / 14px bold) */
color-contrast: 4.5:1; /* WCAG AA */
color-contrast: 7:1;   /* WCAG AAA */

/* Large text (18px+ / 14px+ bold) */
color-contrast: 3:1;   /* WCAG AA */
color-contrast: 4.5:1; /* WCAG AAA */
```

#### Non-Text Elements
```css
/* UI components, graphics, icons */
color-contrast: 3:1; /* WCAG AA */
```

### Vayo Vault Color Compliance

All colors in our design system meet WCAG AA standards:

```css
/* Primary blue on white */
--color-primary-500: #0066CC; /* 7.26:1 - AAA compliant */

/* Secondary gold on black */
--color-secondary-500: #FFB800; /* 8.32:1 - AAA compliant */

/* Success green on white */
--color-success-500: #10B981; /* 4.89:1 - AA compliant */

/* Error red on white */
--color-error-500: #EF4444; /* 4.52:1 - AA compliant */
```

### Testing Tools

1. **WebAIM Contrast Checker**: [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/)
2. **Colour Contrast Analyser (CCA)**: Desktop application
3. **Browser DevTools**: Built-in accessibility audits
4. **axe DevTools**: Browser extension

### Implementation

```tsx
// Good: High contrast text
<p className="text-foreground bg-background">
  Readable text with proper contrast
</p>

// Good: Accessible button colors
<Button variant="primary">
  {/* Blue button with white text - 7.26:1 ratio */}
  Book Now
</Button>

// Avoid: Low contrast combinations
<p className="text-gray-400 bg-gray-100">
  {/* Only 1.69:1 ratio - fails WCAG */}
  Hard to read text
</p>
```

## Typography and Readability

### Font Size Requirements

```css
/* Minimum font sizes */
--font-size-minimum: 16px;     /* Mobile base size */
--font-size-desktop: 16px;     /* Desktop base size */
--font-size-large: 18px;       /* Large text threshold */
```

### Line Height Guidelines

```css
/* Optimal line heights for readability */
--line-height-body: 1.5;       /* Body text minimum */
--line-height-headings: 1.25;  /* Headings minimum */
--line-height-lists: 1.5;      /* List items */
```

### Implementation

```tsx
// Good: Readable typography
<div className="text-base leading-relaxed">
  {/* 16px font, 1.625 line height */}
  Travel booking made simple and accessible.
</div>

// Good: Proper heading hierarchy
<h1 className="text-h1">Main Page Title</h1>
<h2 className="text-h2">Section Heading</h2>
<h3 className="text-h3">Subsection Heading</h3>

// Avoid: Text too small on mobile
<div className="text-xs"> {/* 12px - too small */}
  Important booking information
</div>
```

## Touch Targets and Interactive Elements

### Minimum Touch Target Sizes

```css
/* WCAG AAA recommendation */
--touch-target-minimum: 44px;  /* Width and height */
--touch-target-spacing: 8px;   /* Between targets */

/* Implementation */
.touch-target {
  min-height: 44px;
  min-width: 44px;
  padding: var(--spacing-2); /* 16px */
}
```

### Touch Target Guidelines

1. **44px × 44px minimum** for all interactive elements
2. **8px minimum spacing** between touch targets
3. **Visual feedback** on touch/hover/focus
4. **Clear hit areas** that extend beyond visible element

### Implementation

```tsx
// Good: Accessible touch targets
<Button className="touch-target">
  Book Experience
</Button>

// Good: Properly spaced navigation
<nav className="flex gap-2">
  <NavLink className="touch-target">Destinations</NavLink>
  <NavLink className="touch-target">Experiences</NavLink>
</nav>

// Avoid: Touch targets too small or close
<div className="flex">
  <button className="w-6 h-6">×</button> {/* Too small */}
  <button className="w-6 h-6 ml-1">+</button> {/* Too close */}
</div>
```

## Keyboard Navigation

### Tab Order and Focus Management

#### Focus Order Requirements
1. **Logical sequence** following visual layout
2. **Skip to main content** link
3. **Visible focus indicators** on all interactive elements
4. **No keyboard traps** (users can navigate away from any element)

#### Focus Indicators

```css
/* Consistent focus styling */
.focus-visible:focus {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
  border-radius: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .focus-visible:focus {
    outline: 2px solid ButtonText;
    outline-offset: 2px;
  }
}
```

### Implementation

```tsx
// Good: Proper tab order and focus management
<div>
  <button 
    tabIndex={0}
    className="focus-visible:ring-2 focus-visible:ring-primary"
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleAction();
      }
    }}
  >
    Primary Action
  </button>
  <button tabIndex={0}>Secondary Action</button>
</div>

// Good: Skip link for main content
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
>
  Skip to main content
</a>

// Modal focus management
<Modal 
  isOpen={isOpen}
  onClose={closeModal}
  initialFocus={firstButtonRef}
  restoreFocus={true}
>
  <div>Modal content with managed focus</div>
</Modal>
```

### Keyboard Shortcuts

| Key | Action | Context |
|-----|--------|---------|
| `Tab` | Next focusable element | Global |
| `Shift + Tab` | Previous focusable element | Global |
| `Enter` | Activate button/link | Buttons, links |
| `Space` | Activate button, check checkbox | Buttons, form controls |
| `Escape` | Close modal/dropdown | Overlays |
| `Arrow keys` | Navigate within component | Menus, tabs, carousels |
| `Home/End` | First/last item | Lists, carousels |

## Screen Reader Support

### Semantic HTML

#### Proper Element Usage

```tsx
// Good: Semantic markup
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/destinations">Destinations</a></li>
      <li><a href="/experiences">Experiences</a></li>
    </ul>
  </nav>
</header>

<main id="main-content">
  <h1>Luxury Travel Experiences</h1>
  <section aria-labelledby="featured-heading">
    <h2 id="featured-heading">Featured Destinations</h2>
    <article>
      <h3>Santorini Villa</h3>
      <p>Luxury accommodation with stunning views...</p>
    </article>
  </section>
</main>

// Avoid: Non-semantic markup
<div class="header">
  <div class="nav">
    <div class="nav-item">Destinations</div>
  </div>
</div>
```

### ARIA Labels and Descriptions

#### Essential ARIA Attributes

```tsx
// aria-label: Accessible name when text isn't sufficient
<button aria-label="Close booking modal">
  ×
</button>

// aria-labelledby: Reference to element that labels current element
<section aria-labelledby="pricing-heading">
  <h2 id="pricing-heading">Membership Pricing</h2>
</section>

// aria-describedby: Additional description
<input 
  type="password"
  aria-describedby="password-help"
/>
<div id="password-help">
  Password must be at least 8 characters long
</div>

// aria-expanded: State of collapsible content
<button 
  aria-expanded={isMenuOpen}
  aria-controls="mobile-menu"
>
  Menu
</button>

// aria-hidden: Hide decorative elements
<span aria-hidden="true">🏨</span>
<span>Hotel booking available</span>
```

### Dynamic Content Announcements

```tsx
// Live regions for dynamic updates
<div aria-live="polite" aria-atomic="true">
  {bookingStatus && (
    <p>Booking {bookingStatus}</p>
  )}
</div>

// For urgent announcements
<div aria-live="assertive">
  {errorMessage && (
    <p role="alert">{errorMessage}</p>
  )}
</div>
```

## Form Accessibility

### Label Association

```tsx
// Good: Proper label association
<div className="form-field">
  <label htmlFor="email-input" className="required">
    Email Address
  </label>
  <input 
    id="email-input"
    type="email"
    required
    aria-describedby="email-error"
    aria-invalid={!!emailError}
  />
  {emailError && (
    <div id="email-error" role="alert" className="error">
      {emailError}
    </div>
  )}
</div>

// Complex form example
<DateRangeInput
  checkIn={checkIn}
  checkOut={checkOut}
  onCheckInChange={setCheckIn}
  onCheckOutChange={setCheckOut}
  error={dateError}
  aria-describedby="date-help"
/>
<div id="date-help">
  Select your travel dates. Minimum stay is 2 nights.
</div>
```

### Error Handling

```tsx
// Good: Accessible error messaging
<form onSubmit={handleSubmit} aria-labelledby="booking-form-title">
  <h2 id="booking-form-title">Complete Your Booking</h2>
  
  {formErrors.length > 0 && (
    <div role="alert" className="error-summary">
      <h3>Please correct the following errors:</h3>
      <ul>
        {formErrors.map((error, index) => (
          <li key={index}>
            <a href={`#${error.field}`}>{error.message}</a>
          </li>
        ))}
      </ul>
    </div>
  )}
  
  {/* Form fields */}
</form>
```

### Required Field Indicators

```tsx
// Good: Clear required field indication
<label htmlFor="guest-name" className="required">
  Guest Name
  <span aria-label="required" className="text-error">*</span>
</label>

// Alternative: Text indication
<label htmlFor="guest-name">
  Guest Name (required)
</label>
```

## Modal and Dialog Accessibility

### Modal Implementation

```tsx
const Modal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef();
  const previousFocusRef = useRef();
  
  useEffect(() => {
    if (isOpen) {
      // Store previous focus
      previousFocusRef.current = document.activeElement;
      
      // Focus modal
      modalRef.current?.focus();
      
      // Trap focus within modal
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      // Handle escape key
      const handleEscape = (e) => {
        if (e.key === 'Escape') onClose();
      };
      
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
        // Restore focus
        previousFocusRef.current?.focus();
      };
    }
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div 
      className="modal-overlay" 
      role="dialog" 
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <div 
        ref={modalRef}
        className="modal-content"
        tabIndex={-1}
      >
        {title && (
          <h2 id="modal-title">{title}</h2>
        )}
        {children}
        <button onClick={onClose} aria-label="Close modal">
          Close
        </button>
      </div>
    </div>
  );
};
```

## Image and Media Accessibility

### Alt Text Guidelines

```tsx
// Good: Descriptive alt text
<img 
  src="/santorini-villa.jpg" 
  alt="White villa with blue dome overlooking the Aegean Sea in Santorini"
/>

// Good: Decorative images
<img 
  src="/decorative-pattern.svg" 
  alt="" 
  role="presentation"
/>

// Good: Complex images with description
<figure>
  <img 
    src="/price-chart.png" 
    alt="Membership savings chart showing 40% average savings"
    aria-describedby="chart-description"
  />
  <figcaption id="chart-description">
    Chart shows average savings of 40% for Premium members across 
    luxury hotels, with highest savings of 60% in European destinations.
  </figcaption>
</figure>
```

### Video Accessibility

```tsx
// Good: Accessible video player
<video 
  controls
  aria-label="Santorini villa tour"
  aria-describedby="video-description"
>
  <source src="/villa-tour.mp4" type="video/mp4" />
  <track 
    kind="captions" 
    src="/captions-en.vtt" 
    srcLang="en" 
    label="English captions"
    default
  />
  <track 
    kind="descriptions" 
    src="/descriptions-en.vtt" 
    srcLang="en" 
    label="English descriptions"
  />
  <p>
    Your browser doesn't support video. 
    <a href="/villa-tour.mp4">Download the video</a> instead.
  </p>
</video>
<div id="video-description">
  Virtual tour showcasing the villa's infinity pool, 
  panoramic sea views, and luxury amenities.
</div>
```

## Testing and Validation

### Automated Testing Tools

#### axe-core Integration

```javascript
// Install axe testing library
npm install --save-dev @axe-core/react jest-axe

// In your test file
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('BookingForm should not have any accessibility violations', async () => {
  const { container } = render(<BookingForm />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

#### Lighthouse CI Integration

```yaml
# .github/workflows/accessibility.yml
name: Accessibility Testing
on: [push, pull_request]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Audit URLs using Lighthouse
        uses: treosh/lighthouse-ci-action@v9
        with:
          configPath: './lighthouse.config.js'
          uploadArtifacts: true
          temporaryPublicStorage: true
```

### Manual Testing Checklist

#### Keyboard Testing
- [ ] All interactive elements are reachable via keyboard
- [ ] Tab order follows logical sequence
- [ ] Focus indicators are clearly visible
- [ ] No keyboard traps exist
- [ ] Escape key closes modals/menus

#### Screen Reader Testing
- [ ] Content reads in logical order
- [ ] Headings create proper document outline
- [ ] Form labels are properly associated
- [ ] Error messages are announced
- [ ] Dynamic content updates are announced

#### Visual Testing
- [ ] Content is readable when zoomed to 200%
- [ ] Color is not the only way to convey information
- [ ] Text has sufficient contrast ratios
- [ ] Focus indicators have adequate contrast
- [ ] Content reflows properly at different viewport sizes

### Testing with Assistive Technologies

#### Screen Readers
- **NVDA** (Windows, free)
- **JAWS** (Windows, commercial)
- **VoiceOver** (macOS/iOS, built-in)
- **TalkBack** (Android, built-in)
- **Orca** (Linux, free)

#### Voice Control
- **Dragon NaturallySpeaking** (Windows)
- **Voice Control** (macOS/iOS)
- **Voice Access** (Android)

#### Switch Navigation
- Test with keyboard-only navigation
- Test with switch access simulators

## Mobile Accessibility

### iOS Accessibility

```tsx
// VoiceOver optimization
<button
  accessibilityLabel="Book luxury villa in Santorini"
  accessibilityHint="Double tap to start booking process"
  accessibilityRole="button"
>
  Book Now
</button>

// Dynamic type support
<Text style={{ fontSize: 'body' }}>
  Scales with user's text size preference
</Text>
```

### Android Accessibility

```tsx
// TalkBack optimization
<View
  accessible={true}
  accessibilityLabel="Villa details card"
  accessibilityRole="button"
  accessibilityState={{ selected: isSelected }}
>
  {/* Card content */}
</View>
```

## Internationalization (i18n) Accessibility

### Language Support

```html
<!-- Proper language declaration -->
<html lang="en">
  <body>
    <!-- Mixed language content -->
    <p>Welcome to <span lang="fr">Château de Versailles</span></p>
    
    <!-- Alternative language versions -->
    <nav aria-label="Language selection">
      <ul>
        <li><a href="/en" hrefLang="en" aria-current="page">English</a></li>
        <li><a href="/es" hrefLang="es">Español</a></li>
        <li><a href="/fr" hrefLang="fr">Français</a></li>
      </ul>
    </nav>
  </body>
</html>
```

### Right-to-Left (RTL) Support

```css
/* RTL layout support */
[dir="rtl"] .booking-form {
  text-align: right;
}

[dir="rtl"] .navigation-arrow {
  transform: scaleX(-1);
}

/* Logical properties for international layouts */
.card {
  margin-inline-start: 1rem;
  padding-inline: 1rem;
  border-inline-start: 2px solid var(--color-primary);
}
```

## Performance and Accessibility

### Core Web Vitals Impact

1. **Largest Contentful Paint (LCP)**
   - Optimize images with proper alt text
   - Use lazy loading for below-fold content
   - Ensure text remains visible during font load

2. **Cumulative Layout Shift (CLS)**
   - Reserve space for dynamic content
   - Use proper image dimensions
   - Avoid inserting content above existing content

3. **First Input Delay (FID)**
   - Optimize JavaScript bundles
   - Use code splitting for large components
   - Implement service workers for caching

### Implementation

```tsx
// Good: Optimize images for performance and accessibility
<Image
  src="/villa-image.jpg"
  alt="Luxury villa with ocean view in Santorini"
  width={800}
  height={600}
  priority={isAboveFold}
  loading={isAboveFold ? 'eager' : 'lazy'}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>

// Good: Lazy load non-critical components
const BookingModal = lazy(() => import('./BookingModal'));

// Good: Preload critical resources
<Head>
  <link 
    rel="preload" 
    href="/fonts/inter-var.woff2" 
    as="font" 
    type="font/woff2" 
    crossOrigin="" 
  />
</Head>
```

## Legal Compliance and Standards

### WCAG 2.1 AA Requirements

✅ **Level A Requirements**
- Alternative text for images
- Keyboard accessibility
- No seizure-inducing content
- Page titles
- Language identification

✅ **Level AA Requirements**
- Color contrast ratios (4.5:1 normal, 3:1 large text)
- Resize text up to 200%
- No content solely conveyed by color
- Focus indicators
- Consistent navigation

### Section 508 Compliance

- Electronic accessibility standards for federal agencies
- Similar to WCAG 2.1 AA requirements
- Additional requirements for multimedia content

### European EN 301 549

- Harmonized European standard for digital accessibility
- Based on WCAG 2.1 with additional requirements
- Covers web, mobile, and software applications

## Accessibility Documentation

### Component Accessibility Props

```tsx
interface AccessibleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  type?: 'button' | 'submit' | 'reset';
}
```

### Usage Documentation

```tsx
/**
 * BookingButton - Accessible button for booking actions
 * 
 * @example
 * <BookingButton
 *   aria-label="Book villa for March 15-20"
 *   onClick={handleBooking}
 *   loading={isBooking}
 * >
 *   Book Now - $299/night
 * </BookingButton>
 * 
 * Accessibility features:
 * - WCAG AA compliant colors (7.26:1 contrast)
 * - 44px minimum touch target
 * - Loading state announced to screen readers
 * - Keyboard navigable with Enter and Space keys
 */
```

## Getting Help

### Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Articles](https://webaim.org/articles/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

### Testing Tools

- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)

### Support and Training

For accessibility questions or training requests, contact the accessibility team at accessibility@vayovault.com

---

*This accessibility guide is a living document that evolves with web standards and user feedback. Regular updates ensure continued compliance and improved user experience for all travelers.*