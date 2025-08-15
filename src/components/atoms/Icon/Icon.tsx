'use client';

import React from 'react';
import * as LucideIcons from 'lucide-react';
import styles from './Icon.module.scss';

export type IconName = keyof typeof LucideIcons;

export interface IconProps {
  name: IconName;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color,
  className = '',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden = true,
}) => {
  const LucideIcon = LucideIcons[name] as React.ComponentType<any>;

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in Lucide React`);
    return null;
  }

  const iconClasses = [
    styles.icon,
    styles[`icon--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <LucideIcon
      className={iconClasses}
      style={color ? { color } : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
    />
  );
};

export default Icon;
