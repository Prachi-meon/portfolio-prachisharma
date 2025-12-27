'use client';

import React from 'react';
import styles from './Logo.module.scss';

export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.logo} ${className}`}>
      <div className={styles.logo__brand}>
        <span className={styles.logo__name}>Prachi Sharma</span>
        <span className={styles.logo__subtitle}>Full Stack Developer</span>
      </div>
    </div>
  );
};

export default Logo;
