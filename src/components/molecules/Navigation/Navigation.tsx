'use client';

import React, { useState, useEffect } from 'react';
import { Icon } from '@/components/atoms';
import { NavigationItem } from '@/types';
import { NAVIGATION_ITEMS } from '@/data/siteContent';
import styles from './Navigation.module.scss';

export interface NavigationProps {
  items?: NavigationItem[];
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  items = NAVIGATION_ITEMS,
  className = '',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  const navigationClasses = [
    styles.navigation,
    className,
  ].filter(Boolean).join(' ');

  const mobileMenuClasses = [
    styles.navigation__mobileMenu,
    isMobileMenuOpen && styles['navigation__mobileMenu--open'],
  ].filter(Boolean).join(' ');

  return (
    <nav className={navigationClasses} role="navigation" aria-label="Main navigation">
      {/* Desktop Navigation */}
      <ul className={styles.navigation__desktop}>
        {items.map((item) => (
          <li key={item.href} className={styles.navigation__item}>
            <button
              className={styles.navigation__link}
              onClick={() => scrollToSection(item.href)}
              aria-label={item.label}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className={styles.navigation__mobileButton}
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
      >
        <span className={styles.navigation__hamburger}>
          <span className={styles.navigation__hamburgerLine} />
          <span className={styles.navigation__hamburgerLine} />
          <span className={styles.navigation__hamburgerLine} />
        </span>
      </button>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={mobileMenuClasses}
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className={styles.navigation__mobileList}>
          {items.map((item, index) => (
            <li key={item.href} className={styles.navigation__mobileItem}>
              <button
                className={styles.navigation__mobileLink}
                onClick={() => scrollToSection(item.href)}
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={item.label}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className={styles.navigation__overlay}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navigation;
