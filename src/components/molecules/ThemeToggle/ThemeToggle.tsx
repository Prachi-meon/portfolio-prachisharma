"use client";

import React, { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.scss';

const STORAGE_KEY = 'site-theme';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setIsDark(saved === 'dark');
        document.documentElement.classList.toggle('dark', saved === 'dark');
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(prefersDark);
        document.documentElement.classList.toggle('dark', prefersDark);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
    } catch (e) {}
    document.documentElement.classList.toggle('dark', next);
  };

  return (
    <button
      className={styles.toggle}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={toggle}
    >
      <span className={styles.icon}>{isDark ? '🌙' : '☀️'}</span>
    </button>
  );
};

export default ThemeToggle;
