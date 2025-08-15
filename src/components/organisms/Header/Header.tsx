'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo, Navigation } from '@/components/molecules';
import { NAVIGATION_ITEMS } from '@/utils/constants';
import styles from './Header.module.scss';

export interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerClasses = [
    styles.header,
    isScrolled && styles['header--scrolled'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <motion.header
        className={headerClasses}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className={styles.header__container}>
          <Logo size="md" />
          
          <Navigation
            items={NAVIGATION_ITEMS}
            isOpen={isMobileMenuOpen}
            onToggle={handleMobileMenuToggle}
          />
        </div>
      </motion.header>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.header__backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleMobileMenuToggle}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
