'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/atoms';
import { SITE_CONFIG } from '@/utils/constants';
import styles from './Hero.module.scss';

export interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroClasses = [
    styles.hero,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id="home" className={heroClasses}>
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <motion.div
            className={styles.hero__text}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1
              className={styles.hero__title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hi, I'm <span className={styles.hero__highlight}>{SITE_CONFIG.name}</span>
            </motion.h1>
            
            <motion.h2
              className={styles.hero__subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {SITE_CONFIG.title}
            </motion.h2>
            
            <motion.p
              className={styles.hero__description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {SITE_CONFIG.description}
            </motion.p>
            
            <motion.div
              className={styles.hero__actions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={handleContactClick}
                aria-label="Get in touch"
              >
                Get in Touch
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleProjectsClick}
                aria-label="View my projects"
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className={styles.hero__visual}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={styles.hero__image}>
              <div className={styles.hero__imagePlaceholder}>
                <span>PS</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className={styles.hero__scroll}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className={styles.hero__scrollIndicator}>
            <motion.div
              className={styles.hero__scrollDot}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <span className={styles.hero__scrollText}>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
