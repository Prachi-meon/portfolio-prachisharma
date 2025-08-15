'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/molecules';
import { Navigation } from '@/components/molecules';
import styles from './Header.module.scss';

export interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = [
    styles.header,
    isScrolled && styles['header--scrolled'],
    className,
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClasses}>
      <div className={styles.header__container}>
        <Logo className={styles.header__logo} />
        <Navigation className={styles.header__navigation} />
      </div>
    </header>
  );
};

export default Header;
