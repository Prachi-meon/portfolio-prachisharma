'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/atoms';
import { HERO_CONTENT } from '@/data/siteContent';
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
  const [isExpanded, setIsExpanded] = useState(false);
  const descThreshold = 180;
  const isLongDesc = HERO_CONTENT.description && HERO_CONTENT.description.length > descThreshold;
  const truncatedDesc = HERO_CONTENT.description?.slice(0, descThreshold).trim();

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
              {HERO_CONTENT.greeting}{' '}
              <span className={styles.hero__highlight}>{HERO_CONTENT.highlight}</span>
            </h1>
            
            <h2 ref={subtitleRef} className={styles.hero__subtitle}>
              {HERO_CONTENT.subtitle}
            </h2>
            
            <div className={styles.hero__descriptionWrap}>
              <p
                ref={descriptionRef}
                className={styles.hero__description}
              >
                {isLongDesc && !isExpanded ? (
                  <>
                    {truncatedDesc}
                    <button
                      type="button"
                      className={styles.hero__ellipsisInline}
                      onClick={() => setIsExpanded((s) => !s)}
                      aria-expanded={isExpanded}
                      aria-label={isExpanded ? 'Show less description' : 'Show full description'}
                    >
                      ...
                    </button>
                  </>
                ) : (
                  <>
                    {HERO_CONTENT.description}
                    {isLongDesc && (
                      <button
                        type="button"
                        className={styles.hero__ellipsisInline}
                        onClick={() => setIsExpanded((s) => !s)}
                        aria-expanded={isExpanded}
                        aria-label={isExpanded ? 'Show less description' : 'Show full description'}
                      >
                        Show less
                      </button>
                    )}
                  </>
                )}
              </p>
            </div>
            
            <div ref={actionsRef} className={styles.hero__actions}>
              <Button
                variant="primary"
                size="lg"
                onClick={handleContactClick}
                aria-label={HERO_CONTENT.primaryCta.ariaLabel}
              >
                {HERO_CONTENT.primaryCta.label}
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleProjectsClick}
                aria-label={HERO_CONTENT.secondaryCta.ariaLabel}
              >
                {HERO_CONTENT.secondaryCta.label}
              </Button>
            </div>
          </div>
          
          <div ref={visualRef} className={styles.hero__visual}>
            <div className={styles.hero__image}>
              <Image
                src="/banner-image.png"
                alt="Prachi Sharma - Hero banner"
                fill
                className={styles.hero__imagePlaceholder}
                priority
              />
            </div>
          </div>
        </div>
        
        <div ref={scrollRef} className={styles.hero__scroll}>
          <div className={styles.hero__scrollIndicator}>
            <div className={styles.hero__scrollDot} />
          </div>
          <span className={styles.hero__scrollText}>{HERO_CONTENT.scrollHint}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;