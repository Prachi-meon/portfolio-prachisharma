'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/atoms';
import { TechStack as TechStackType } from '@/types';
import { TECH_STACK } from '@/utils/constants';
import styles from './TechStack.module.scss';

export interface TechStackProps {
  className?: string;
}

const TechStack: React.FC<TechStackProps> = ({ className = '' }) => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const techStackClasses = [
    styles.techStack,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  // Check scroll position for navigation buttons
  useEffect(() => {
    const checkScrollPosition = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    checkScrollPosition();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', checkScrollPosition);
      }
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  const handleCardClick = (techId: string) => {
    if (isTouchDevice) {
      setFlippedCard(flippedCard === techId ? null : techId);
    }
  };

  const handleCardHover = (techId: string, isHovering: boolean) => {
    if (!isTouchDevice) {
      setFlippedCard(isHovering ? techId : null);
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Adjust based on card width + gap
      const newScrollLeft = carouselRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, techId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick(techId);
    }
  };

  return (
    <section id="tech-stack" className={techStackClasses}>
      <div className={styles.techStack__container}>
        <motion.div
          className={styles.techStack__header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.techStack__title}>Tech Stack</h2>
          <p className={styles.techStack__subtitle}>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className={styles.techStack__carouselWrapper}>
          {/* Left scroll button */}
          {canScrollLeft && (
            <button
              className={styles.techStack__scrollButton}
              onClick={() => scrollCarousel('left')}
              aria-label="Scroll left"
              type="button"
            >
              <Icon name="ChevronLeft" size="lg" />
            </button>
          )}

          <div className={styles.techStack__carousel}>
            <div 
              ref={carouselRef}
              className={styles.techStack__track}
              role="region"
              aria-label="Technology stack carousel"
              tabIndex={0}
            >
              {TECH_STACK.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  className={styles.techStack__card}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => handleCardHover(tech.id, true)}
                  onHoverEnd={() => handleCardHover(tech.id, false)}
                  onClick={() => handleCardClick(tech.id)}
                  onKeyDown={(e) => handleKeyDown(e, tech.id)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${tech.name} - ${tech.shortDescription}. Click to see more details.`}
                  aria-pressed={flippedCard === tech.id}
                >
                  <div className={styles.techStack__cardInner}>
                    {/* Front of card */}
                    <motion.div
                      className={styles.techStack__cardFront}
                      animate={{
                        rotateY: flippedCard === tech.id ? 180 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className={styles.techStack__cardContent}>
                        <div className={styles.techStack__logo}>
                          <Icon name="Code" size="xl" />
                        </div>
                        <h3 className={styles.techStack__cardTitle}>{tech.name}</h3>
                        <p className={styles.techStack__cardDescription}>
                          {tech.shortDescription}
                        </p>
                        <div className={styles.techStack__category}>
                          <span className={styles.techStack__categoryTag}>
                            {tech.category}
                          </span>
                        </div>
                        {isTouchDevice && (
                          <div className={styles.techStack__touchHint}>
                            <Icon name="Hand" size="sm" />
                            <span>Tap to flip</span>
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Back of card */}
                    <motion.div
                      className={styles.techStack__cardBack}
                      animate={{
                        rotateY: flippedCard === tech.id ? 0 : -180,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className={styles.techStack__cardContent}>
                        <h3 className={styles.techStack__cardTitle}>{tech.name}</h3>
                        <p className={styles.techStack__cardDescription}>
                          {tech.longDescription}
                        </p>
                        <div className={styles.techStack__hoverHint}>
                          {isTouchDevice ? (
                            <>
                              <Icon name="Hand" size="sm" />
                              <span>Tap to flip back</span>
                            </>
                          ) : (
                            <>
                              <Icon name="MousePointer" size="sm" />
                              <span>Hover to flip</span>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right scroll button */}
          {canScrollRight && (
            <button
              className={styles.techStack__scrollButton}
              onClick={() => scrollCarousel('right')}
              aria-label="Scroll right"
              type="button"
            >
              <Icon name="ChevronRight" size="lg" />
            </button>
          )}
        </div>

        <motion.div
          className={styles.techStack__categories}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className={styles.techStack__categoriesTitle}>Categories</h3>
          <div className={styles.techStack__categoryList}>
            {['frontend', 'backend', 'database', 'devops', 'other'].map((category) => (
              <span key={category} className={styles.techStack__categoryItem}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
