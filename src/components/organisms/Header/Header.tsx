'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Logo } from '@/components/molecules';
import { Navigation } from '@/components/molecules';
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
        <Logo className={styles.header__logo} />
        <Navigation className={styles.header__navigation} />
      </div>
    </header>
  );
};

export default Header;
