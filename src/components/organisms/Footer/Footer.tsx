'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Logo } from '@/components/molecules';
import { Icon } from '@/components/atoms';
import { SOCIAL_LINKS, SITE_CONFIG } from '@/utils/constants';
import styles from './Footer.module.scss';

export interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const [isInView, setIsInView] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll-driven animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            
            // Add animation classes with delays
            if (contentRef.current) {
              setTimeout(() => {
                contentRef.current?.classList.add(styles['footer__content--animated']);
              }, 200);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const footerClasses = [
    styles.footer,
    className,
  ].filter(Boolean).join(' ');

  return (
    <footer ref={footerRef} className={footerClasses}>
      <div className={styles.footer__container}>
        <div ref={contentRef} className={styles.footer__content}>
          {/* Logo and Copyright */}
          <div className={styles.footer__brand}>
            <Logo className={styles.footer__logo} />
            <p className={styles.footer__copyright}>
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </div>

          {/* Disclaimer */}
          <div className={styles.footer__disclaimer}>
            <p>
              Built with Next.js, TypeScript, and SASS. Designed for performance and accessibility.
            </p>
          </div>

          {/* Contact and Social */}
          <div className={styles.footer__contact}>
            <div className={styles.footer__contactInfo}>
              <div className={styles.footer__contactItem}>
                <Icon name="Mail" size="sm" />
                <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
              </div>
              <div className={styles.footer__contactItem}>
                <Icon name="Phone" size="sm" />
                <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</a>
              </div>
            </div>

            <div className={styles.footer__social}>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footer__socialLink}
                  aria-label={`Visit ${link.name}`}
                >
                  <Icon name={link.icon} size="md" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
