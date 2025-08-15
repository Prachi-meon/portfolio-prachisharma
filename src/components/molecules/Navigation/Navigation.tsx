'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/atoms';
import { NavigationItem } from '@/types';
import styles from './Navigation.module.scss';

export interface NavigationProps {
  items: NavigationItem[];
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  items,
  isOpen = false,
  onToggle,
  className = '',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    onToggle?.();
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    onToggle?.();
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navClasses = [
    styles.navigation,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const mobileMenuClasses = [
    styles.navigation__mobileMenu,
    isMobileMenuOpen && styles['navigation__mobileMenu--open'],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={navClasses} role="navigation" aria-label="Main navigation">
      {/* Desktop Navigation */}
      <ul className={styles.navigation__desktop}>
        {items.map((item) => (
          <li key={item.href} className={styles.navigation__item}>
            <button
              className={styles.navigation__link}
              onClick={() => handleNavClick(item.href)}
              aria-label={`Navigate to ${item.label} section`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className={styles.navigation__toggle}
        onClick={handleToggle}
        aria-expanded={isMobileMenuOpen}
        aria-label="Toggle mobile menu"
        aria-controls="mobile-menu"
      >
        <AnimatePresence mode="wait">
          {isMobileMenuOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Icon name="X" size="lg" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Icon name="Menu" size="lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className={mobileMenuClasses}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ul className={styles.navigation__mobileList}>
              {items.map((item) => (
                <motion.li
                  key={item.href}
                  className={styles.navigation__mobileItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <button
                    className={styles.navigation__mobileLink}
                    onClick={() => handleNavClick(item.href)}
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
