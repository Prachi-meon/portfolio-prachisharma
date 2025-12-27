'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Logo.module.scss';

export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.logo} ${className}`}>
      <Image
        src="/logo.avif"
        alt="Prachi Sharma logo"
        width={40}
        height={40}
        className={styles.logo__image}
        priority
      />
    </div>
  );
};

export default Logo;
