export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export interface PasswordValidationResult {
  isValid: boolean;
  hasMinLength: boolean;
  hasUpperCase: boolean;
  hasLowerCase: boolean;
  hasDigit: boolean;
}

export const validatePassword = (password: string): PasswordValidationResult => {
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);

  return {
    isValid: hasMinLength && hasUpperCase && hasLowerCase && hasDigit,
    hasMinLength,
    hasUpperCase,
    hasLowerCase,
    hasDigit,
  };
};
