'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Logo.module.scss';

export interface LogoProps {
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({
  href = '/',
  className = '',
  size = 'md',
}) => {
  const logoClasses = [
    styles.logo,
    styles[`logo--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const LogoContent = () => (
    <motion.div
      className={logoClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <span className={styles.logo__text}>Prachi Sharma</span>
      <span className={styles.logo__subtitle}>Full-Stack Developer</span>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className={styles.logo__link}>
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
};

export default Logo;
