/**
 * Form Validation Hook
 * 
 * Custom hook for form validation with:
 * - Real-time validation
 * - Custom validation rules
 * - Error messaging
 * - Accessibility support
 * - Loading states
 */

'use client'

import { useState, useCallback, useRef } from 'react'

interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  email?: boolean
  phone?: boolean
  custom?: (value: any) => string | null
  message?: string
}

interface FormField {
  value: any
  error?: string
  touched: boolean
  validating: boolean
}

interface UseFormValidationOptions {
  onSubmit?: (values: Record<string, any>) => Promise<void> | void
  onChange?: (field: string, value: any) => void
  validateOnChange?: boolean
  validateOnBlur?: boolean
  debounceMs?: number
}

const defaultValidationMessages = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  minLength: 'Must be at least {min} characters',
  maxLength: 'Must be no more than {max} characters',
  pattern: 'Please enter a valid value'
}

// Validation patterns
const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\+]?[(]?[\d\s\-\(\)]{10,}$/,
  url: /^https?:\/\/.+/
}

export const useFormValidation = (
  initialValues: Record<string, any>,
  validationRules: Record<string, ValidationRule>,
  options: UseFormValidationOptions = {}
) => {
  const {
    onSubmit,
    onChange,
    validateOnChange = true,
    validateOnBlur = true,
    debounceMs = 300
  } = options

  // Form state
  const [fields, setFields] = useState<Record<string, FormField>>(() => {
    const initialFields: Record<string, FormField> = {}
    Object.keys(initialValues).forEach(key => {
      initialFields[key] = {
        value: initialValues[key],
        touched: false,
        validating: false
      }
    })
    return initialFields
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const debounceTimeouts = useRef<Record<string, NodeJS.Timeout>>({})

  // Validate single field
  const validateField = useCallback((fieldName: string, value: any): string | null => {
    const rules = validationRules[fieldName]
    if (!rules) return null

    // Required validation
    if (rules.required && (!value || value.toString().trim() === '')) {
      return rules.message || defaultValidationMessages.required
    }

    // Skip other validations if field is empty and not required
    if (!value || value.toString().trim() === '') {
      return null
    }

    const stringValue = value.toString()

    // Email validation
    if (rules.email && !patterns.email.test(stringValue)) {
      return rules.message || defaultValidationMessages.email
    }

    // Phone validation
    if (rules.phone && !patterns.phone.test(stringValue.replace(/\s/g, ''))) {
      return rules.message || defaultValidationMessages.phone
    }

    // Pattern validation
    if (rules.pattern && !rules.pattern.test(stringValue)) {
      return rules.message || defaultValidationMessages.pattern
    }

    // Length validations
    if (rules.minLength && stringValue.length < rules.minLength) {
      return rules.message || defaultValidationMessages.minLength.replace('{min}', rules.minLength.toString())
    }

    if (rules.maxLength && stringValue.length > rules.maxLength) {
      return rules.message || defaultValidationMessages.maxLength.replace('{max}', rules.maxLength.toString())
    }

    // Custom validation
    if (rules.custom) {
      return rules.custom(value)
    }

    return null
  }, [validationRules])

  // Update field value
  const setFieldValue = useCallback((fieldName: string, value: any) => {
    setFields(prev => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        value,
        error: prev[fieldName]?.touched ? validateField(fieldName, value) : undefined
      }
    }))

    onChange?.(fieldName, value)

    // Debounced validation on change
    if (validateOnChange) {
      if (debounceTimeouts.current[fieldName]) {
        clearTimeout(debounceTimeouts.current[fieldName])
      }

      debounceTimeouts.current[fieldName] = setTimeout(() => {
        setFields(prev => ({
          ...prev,
          [fieldName]: {
            ...prev[fieldName],
            error: validateField(fieldName, value)
          }
        }))
      }, debounceMs)
    }
  }, [validateField, onChange, validateOnChange, debounceMs])

  // Handle field blur
  const handleBlur = useCallback((fieldName: string) => {
    setFields(prev => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        touched: true,
        error: validateOnBlur ? validateField(fieldName, prev[fieldName].value) : prev[fieldName].error
      }
    }))
  }, [validateField, validateOnBlur])

  // Validate all fields
  const validateAll = useCallback((): boolean => {
    let isValid = true
    const newFields = { ...fields }

    Object.keys(validationRules).forEach(fieldName => {
      const error = validateField(fieldName, fields[fieldName]?.value)
      newFields[fieldName] = {
        ...newFields[fieldName],
        touched: true,
        error
      }
      if (error) isValid = false
    })

    setFields(newFields)
    return isValid
  }, [fields, validateField, validationRules])

  // Get field values
  const getValues = useCallback(() => {
    const values: Record<string, any> = {}
    Object.keys(fields).forEach(key => {
      values[key] = fields[key].value
    })
    return values
  }, [fields])

  // Handle form submission
  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault()
    
    if (isSubmitting) return

    setSubmitError(null)
    
    if (!validateAll()) {
      return
    }

    setIsSubmitting(true)

    try {
      if (onSubmit) {
        await onSubmit(getValues())
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }, [isSubmitting, validateAll, onSubmit, getValues])

  // Reset form
  const reset = useCallback(() => {
    setFields(prev => {
      const resetFields: Record<string, FormField> = {}
      Object.keys(prev).forEach(key => {
        resetFields[key] = {
          value: initialValues[key] || '',
          touched: false,
          validating: false
        }
      })
      return resetFields
    })
    setSubmitError(null)
  }, [initialValues])

  // Set field error manually
  const setFieldError = useCallback((fieldName: string, error: string | null) => {
    setFields(prev => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        error: error || undefined
      }
    }))
  }, [])

  // Check if form is valid
  const isValid = Object.values(fields).every(field => !field.error)
  const hasErrors = Object.values(fields).some(field => field.error)
  const isDirty = Object.values(fields).some(field => field.touched)

  // Get field props for easy integration
  const getFieldProps = useCallback((fieldName: string) => ({
    value: fields[fieldName]?.value || '',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(fieldName, e.target.value),
    onBlur: () => handleBlur(fieldName),
    error: fields[fieldName]?.error,
    'aria-invalid': !!fields[fieldName]?.error,
    'aria-describedby': fields[fieldName]?.error ? `${fieldName}-error` : undefined
  }), [fields, setFieldValue, handleBlur])

  return {
    fields,
    values: getValues(),
    isValid,
    hasErrors,
    isDirty,
    isSubmitting,
    submitError,
    setFieldValue,
    setFieldError,
    handleBlur,
    handleSubmit,
    validateAll,
    reset,
    getFieldProps
  }
}

// Email validation helper
export const validateEmail = (email: string): boolean => {
  return patterns.email.test(email)
}

// Phone validation helper
export const validatePhone = (phone: string): boolean => {
  return patterns.phone.test(phone.replace(/\s/g, ''))
}

// Common validation rules
export const commonValidationRules = {
  email: {
    required: true,
    email: true,
    message: 'Please enter a valid email address'
  },
  password: {
    required: true,
    minLength: 8,
    message: 'Password must be at least 8 characters'
  },
  name: {
    required: true,
    minLength: 2,
    message: 'Name must be at least 2 characters'
  },
  phone: {
    phone: true,
    message: 'Please enter a valid phone number'
  }
}