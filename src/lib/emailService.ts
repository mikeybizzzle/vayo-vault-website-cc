// Email service for handling contact forms and newsletter subscriptions
// In a real implementation, this would integrate with EmailJS, SendGrid, or similar service

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  category: string;
  message: string;
  isUrgent?: boolean;
}

export interface NewsletterData {
  email: string;
  firstName?: string;
  subscriptionSource?: string;
}

export interface MembershipSignupData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  plan: 'monthly' | 'annual';
  agreeToTerms: boolean;
  subscribeNewsletter: boolean;
}

// Simulate email service responses
export class EmailService {
  private static delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Contact form submission
  static async submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    console.log('Contact form submitted:', data);
    
    // Simulate API call delay
    await this.delay(1500);
    
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message || !data.category) {
      return {
        success: false,
        message: 'Please fill in all required fields.'
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address.'
      };
    }

    // Simulate successful submission
    const responseTime = data.isUrgent ? '30 minutes' : '2 hours';
    
    return {
      success: true,
      message: `Thank you for your message! We'll respond within ${responseTime}.`
    };
  }

  // Newsletter subscription
  static async subscribeToNewsletter(data: NewsletterData): Promise<{ success: boolean; message: string }> {
    console.log('Newsletter subscription:', data);
    
    await this.delay(1000);
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address.'
      };
    }

    // Simulate checking for existing subscription
    const existingSubscriber = Math.random() < 0.1; // 10% chance of existing subscriber
    
    if (existingSubscriber) {
      return {
        success: true,
        message: 'You\'re already subscribed! Check your inbox for our latest deals.'
      };
    }

    return {
      success: true,
      message: 'Welcome! Check your email for a confirmation and your first exclusive deal.'
    };
  }

  // Membership signup notification
  static async notifyMembershipSignup(data: MembershipSignupData): Promise<{ success: boolean; message: string }> {
    console.log('Membership signup notification:', data);
    
    await this.delay(2000);
    
    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.agreeToTerms) {
      return {
        success: false,
        message: 'Please complete all required fields and agree to terms.'
      };
    }

    return {
      success: true,
      message: 'Welcome to Vayo Vault! Check your email for next steps.'
    };
  }

  // Password reset
  static async sendPasswordReset(email: string): Promise<{ success: boolean; message: string }> {
    console.log('Password reset requested for:', email);
    
    await this.delay(1200);
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: 'Please enter a valid email address.'
      };
    }

    return {
      success: true,
      message: 'Password reset instructions sent! Check your email within 5 minutes.'
    };
  }
}

// Email templates for reference
export const EmailTemplates = {
  contactForm: (data: ContactFormData) => ({
    subject: `New Contact Form: ${data.subject}`,
    priority: data.isUrgent ? 'high' : 'normal',
    category: data.category,
    autoReply: `Thank you for contacting Vayo Vault! We've received your message about "${data.subject}" and will respond ${data.isUrgent ? 'within 30 minutes' : 'within 2 hours during business hours'}.`
  }),

  newsletter: (data: NewsletterData) => ({
    subject: 'Welcome to Vayo Vault Exclusive Deals!',
    welcomeBonus: 'First-time subscriber deal: Extra 10% off your first booking',
    unsubscribeNote: 'You can unsubscribe anytime with one click'
  }),

  membershipWelcome: (data: MembershipSignupData) => ({
    subject: 'Welcome to Vayo Vault - Your Exclusive Access Begins Now!',
    nextSteps: [
      'Complete payment setup',
      'Browse today\'s exclusive deals',
      'Download our mobile app',
      'Join our member community'
    ]
  })
};

// Form validation utilities
export const FormValidation = {
  email: (email: string): { valid: boolean; message?: string } => {
    if (!email) {
      return { valid: false, message: 'Email is required' };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { valid: false, message: 'Please enter a valid email address' };
    }
    return { valid: true };
  },

  phone: (phone: string): { valid: boolean; message?: string } => {
    if (!phone) return { valid: true }; // Phone is optional in most forms
    
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
    
    if (cleanPhone.length < 10) {
      return { valid: false, message: 'Phone number must be at least 10 digits' };
    }
    
    if (!phoneRegex.test(cleanPhone)) {
      return { valid: false, message: 'Please enter a valid phone number' };
    }
    
    return { valid: true };
  },

  required: (value: string, fieldName: string): { valid: boolean; message?: string } => {
    if (!value || value.trim().length === 0) {
      return { valid: false, message: `${fieldName} is required` };
    }
    return { valid: true };
  },

  minLength: (value: string, min: number, fieldName: string): { valid: boolean; message?: string } => {
    if (value.length < min) {
      return { valid: false, message: `${fieldName} must be at least ${min} characters` };
    }
    return { valid: true };
  }
};

export default EmailService;