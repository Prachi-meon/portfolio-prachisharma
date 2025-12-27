'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Logo, Navigation, ThemeToggle } from '@/components/molecules';
import styles from './Header.module.scss';

export interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Initial visibility animation
    const timer = setTimeout(() => {
      setIsVisible(true);
      if (containerRef.current) {
        containerRef.current.classList.add(styles['header__container--visible']);
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const headerClasses = [
    styles.header,
    isScrolled && styles['header--scrolled'],
    isVisible && styles['header--visible'],
    className,
  ].filter(Boolean).join(' ');

  return (
    <header ref={headerRef} className={headerClasses}>
      <div ref={containerRef} className={styles.header__container}>
        <div className={styles.header__brand}>
          <Logo className={styles.header__logo} />
          <span className={styles.header__title}>Prachi Sharma</span>
        </div>
        <div className={styles.header__controls}>
          <Navigation className={styles.header__navigation} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
