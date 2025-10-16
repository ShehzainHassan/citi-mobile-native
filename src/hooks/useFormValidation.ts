import { ValidationRule } from '@/interfaces';
import { sanitizeInput, validationRules } from '@/utils';
import { useState } from 'react';

type FormFields = { [key: string]: string };
type FormErrors = { [key: string]: string | null };

export const useFormValidation = (initialValues: FormFields) => {
  const [values, setValues] = useState<FormFields>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (field: string, text: string) => {
    const sanitized = sanitizeInput(text, field);
    setValues(prev => ({ ...prev, [field]: sanitized }));
    validateField(field, sanitized);
  };

  const validateField = (field: string, value: string) => {
    const rule = validationRules[field as keyof typeof validationRules] as
      | ValidationRule
      | undefined;
    let error: string | null = null;

    if (!rule) return true;

    if ('regex' in rule && !rule.regex.test(value)) {
      error = rule.message;
    } else if ('matchField' in rule && value !== values[rule.matchField]) {
      error = rule.message;
    }

    setErrors(prev => ({ ...prev, [field]: error }));
    return !error;
  };

  const validateAll = () => {
    let valid = true;
    const newErrors: FormErrors = {};

    Object.keys(values).forEach(field => {
      const rule = validationRules[field as keyof typeof validationRules] as
        | ValidationRule
        | undefined;
      if (!rule) return;

      const value = values[field];
      let isValid = true;

      if ('regex' in rule) {
        isValid = rule.regex.test(value);
      } else if ('matchField' in rule) {
        isValid = value === values[rule.matchField];
      }

      if (!isValid) {
        newErrors[field] = rule.message;
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };

  return {
    values,
    errors,
    handleChange,
    validateAll,
    setValues,
  };
};
