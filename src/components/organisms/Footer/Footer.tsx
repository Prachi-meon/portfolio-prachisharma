'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '@/components/molecules';
import { Icon } from '@/components/atoms';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/utils/constants';
import styles from './Footer.module.scss';

export interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  const footerClasses = [
    styles.footer,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <footer className={footerClasses}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          {/* Left: Logo & Copyright */}
          <motion.div
            className={styles.footer__left}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Logo size="sm" href="#" />
            <p className={styles.footer__copyright}>
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </motion.div>

          {/* Center: Disclaimer */}
          <motion.div
            className={styles.footer__center}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={styles.footer__disclaimer}>
              Built with Next.js, TypeScript, and SASS. Designed with accessibility and performance in mind.
            </p>
          </motion.div>

          {/* Right: Contact & Social */}
          <motion.div
            className={styles.footer__right}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.footer__contact}>
              <a href={`mailto:${SITE_CONFIG.email}`} className={styles.footer__email}>
                {SITE_CONFIG.email}
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`} className={styles.footer__phone}>
                {SITE_CONFIG.phone}
              </a>
            </div>
            
            <div className={styles.footer__social}>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footer__socialLink}
                  aria-label={`Visit ${social.name}`}
                >
                  <Icon name={social.icon as any} size="sm" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.footer__bottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className={styles.footer__divider} />
          <p className={styles.footer__bottomText}>
            Made with ❤️ by {SITE_CONFIG.name}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
