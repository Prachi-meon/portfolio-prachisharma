'use client';

import React, { forwardRef } from 'react';
import styles from './Input.module.scss';

export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  success?: boolean;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  id?: string;
  name?: string;
  autoComplete?: string;
  className?: string;
  'aria-describedby'?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      placeholder,
      value,
      defaultValue,
      onChange,
      onBlur,
      onFocus,
      disabled = false,
      required = false,
      error,
      success = false,
      fullWidth = false,
      size = 'md',
      label,
      id,
      name,
      autoComplete,
      className = '',
      'aria-describedby': ariaDescribedby,
    },
    ref
  ) => {
    const inputId = id || `input-${name || Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${inputId}-error` : undefined;

    const inputClasses = [
      styles.input,
      styles[`input--${size}`],
      fullWidth && styles['input--full-width'],
      disabled && styles['input--disabled'],
      error && styles['input--error'],
      success && styles['input--success'],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={styles.input__wrapper}>
        {label && (
          <label htmlFor={inputId} className={styles.input__label}>
            {label}
            {required && <span className={styles.input__required}>*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          className={inputClasses}
          aria-describedby={errorId || ariaDescribedby}
          aria-invalid={!!error}
        />
        {error && (
          <div id={errorId} className={styles.input__error} role="alert">
            {error}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
