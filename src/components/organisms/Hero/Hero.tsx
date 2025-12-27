'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/atoms';
import { SITE_CONFIG } from '@/utils/constants';
import styles from './Hero.module.scss';

export interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

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

  // Animation effect using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            
            // Add animation classes with delays
            if (textRef.current) {
              setTimeout(() => {
                textRef.current?.classList.add(styles['hero__text--animated']);
              }, 200);
            }
            
            if (titleRef.current) {
              setTimeout(() => {
                titleRef.current?.classList.add(styles['hero__title--animated']);
              }, 400);
            }
            
            if (subtitleRef.current) {
              setTimeout(() => {
                subtitleRef.current?.classList.add(styles['hero__subtitle--animated']);
              }, 600);
            }
            
            if (descriptionRef.current) {
              setTimeout(() => {
                descriptionRef.current?.classList.add(styles['hero__description--animated']);
              }, 800);
            }
            
            if (actionsRef.current) {
              setTimeout(() => {
                actionsRef.current?.classList.add(styles['hero__actions--animated']);
              }, 1000);
            }
            
            if (visualRef.current) {
              setTimeout(() => {
                visualRef.current?.classList.add(styles['hero__visual--animated']);
              }, 400);
            }
            
            if (scrollRef.current) {
              setTimeout(() => {
                scrollRef.current?.classList.add(styles['hero__scroll--animated']);
              }, 1200);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroSection = document.querySelector(`.${styles.hero}`);
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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
          <div ref={textRef} className={styles.hero__text}>
            <h1 ref={titleRef} className={styles.hero__title}>
              Hi, I'm <span className={styles.hero__highlight}>{SITE_CONFIG.name}</span>
            </h1>
            
            <h2 ref={subtitleRef} className={styles.hero__subtitle}>
              {SITE_CONFIG.title}
            </h2>
            
            <p ref={descriptionRef} className={styles.hero__description}>
              {SITE_CONFIG.description}
            </p>
            
            <div ref={actionsRef} className={styles.hero__actions}>
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
            </div>
          </div>
          
          <div ref={visualRef} className={styles.hero__visual}>
            <div className={styles.hero__image}>
              <div className={styles.hero__imagePlaceholder}>
                <span>PS</span>
              </div>
            </div>
          </div>
        </div>
        
        <div ref={scrollRef} className={styles.hero__scroll}>
          <div className={styles.hero__scrollIndicator}>
            <div className={styles.hero__scrollDot} />
          </div>
          <span className={styles.hero__scrollText}>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;