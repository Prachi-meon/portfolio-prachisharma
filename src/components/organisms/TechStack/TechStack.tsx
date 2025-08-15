'use client';

import React, { useState, useRef, useEffect } from 'react';
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

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    updateScrollButtons();
  }, []);

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleCardClick = (techId: string) => {
    if (isTouchDevice) {
      setFlippedCard(flippedCard === techId ? null : techId);
    }
  };

  const handleCardMouseEnter = (techId: string) => {
    if (!isTouchDevice) {
      setFlippedCard(techId);
    }
  };

  const handleCardMouseLeave = () => {
    if (!isTouchDevice) {
      setFlippedCard(null);
    }
  };

  const techStackClasses = [
    styles.techStack,
    className,
  ].filter(Boolean).join(' ');

  return (
    <section id="tech-stack" className={techStackClasses}>
      <div className={styles.techStack__container}>
        <div className={styles.techStack__header}>
          <h2 className={styles.techStack__title}>Tech Stack</h2>
          <p className={styles.techStack__subtitle}>
            Technologies and tools I work with
          </p>
        </div>

        <div className={styles.techStack__carousel}>
          <button
            className={`${styles.techStack__scrollButton} ${styles['techStack__scrollButton--left']}`}
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <Icon name="ChevronLeft" size="lg" />
          </button>

          <div
            ref={carouselRef}
            className={styles.techStack__track}
            onScroll={updateScrollButtons}
          >
            <div className={styles.techStack__cards}>
              {TECH_STACK.map((tech) => {
                const isFlipped = flippedCard === tech.id;
                const cardClasses = [
                  styles.techStack__card,
                  isFlipped && styles['techStack__card--flipped'],
                ].filter(Boolean).join(' ');

                return (
                  <div
                    key={tech.id}
                    className={cardClasses}
                    onClick={() => handleCardClick(tech.id)}
                    onMouseEnter={() => handleCardMouseEnter(tech.id)}
                    onMouseLeave={handleCardMouseLeave}
                    role="button"
                    tabIndex={0}
                    aria-label={`${tech.name} - ${isFlipped ? 'Flipped' : 'Click to flip'}`}
                    aria-pressed={isFlipped}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleCardClick(tech.id);
                      }
                    }}
                  >
                    <div className={styles.techStack__cardFront}>
                      <div className={styles.techStack__cardIcon}>
                        <Icon name={tech.icon} size="xl" />
                      </div>
                      <h3 className={styles.techStack__cardTitle}>{tech.name}</h3>
                      <p className={styles.techStack__cardDescription}>
                        {tech.shortDescription}
                      </p>
                      {isTouchDevice && (
                        <div className={styles.techStack__touchHint}>
                          <Icon name="Hand" size="sm" />
                          <span>Tap to flip</span>
                        </div>
                      )}
                    </div>

                    <div className={styles.techStack__cardBack}>
                      <h3 className={styles.techStack__cardTitle}>{tech.name}</h3>
                      <p className={styles.techStack__cardDescription}>
                        {tech.longDescription}
                      </p>
                      <div className={styles.techStack__cardActions}>
                        {isTouchDevice ? (
                          <>
                            <Icon name="Hand" size="sm" />
                            <span>Tap to flip back</span>
                          </>
                        ) : (
                          <>
                            <Icon name="MousePointer" size="sm" />
                            <span>Hover to flip back</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            className={`${styles.techStack__scrollButton} ${styles['techStack__scrollButton--right']}`}
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <Icon name="ChevronRight" size="lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
