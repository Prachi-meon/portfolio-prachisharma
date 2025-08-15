'use client';

import React, { forwardRef } from 'react';
import styles from './Textarea.module.scss';

export interface TextareaProps {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  success?: boolean;
  fullWidth?: boolean;
  rows?: number;
  cols?: number;
  maxLength?: number;
  label?: string;
  id?: string;
  name?: string;
  autoComplete?: string;
  className?: string;
  'aria-describedby'?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
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
      rows = 4,
      cols,
      maxLength,
      label,
      id,
      name,
      autoComplete,
      className = '',
      'aria-describedby': ariaDescribedby,
    },
    ref
  ) => {
    const textareaId = id || `textarea-${name || Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${textareaId}-error` : undefined;

    const textareaClasses = [
      styles.textarea,
      fullWidth && styles['textarea--full-width'],
      disabled && styles['textarea--disabled'],
      error && styles['textarea--error'],
      success && styles['textarea--success'],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={styles.textarea__wrapper}>
        {label && (
          <label htmlFor={textareaId} className={styles.textarea__label}>
            {label}
            {required && <span className={styles.textarea__required}>*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          required={required}
          rows={rows}
          cols={cols}
          maxLength={maxLength}
          autoComplete={autoComplete}
          className={textareaClasses}
          aria-describedby={errorId || ariaDescribedby}
          aria-invalid={!!error}
        />
        {error && (
          <div id={errorId} className={styles.textarea__error} role="alert">
            {error}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
