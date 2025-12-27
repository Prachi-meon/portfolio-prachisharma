'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@/components/atoms';
import { TECH_STACK, TECH_STACK_CONTENT } from '@/data/siteContent';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './TechStack.module.scss';

export interface TechStackProps {
  className?: string;
}

const TechStack: React.FC<TechStackProps> = ({ className = '' }) => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.2 });
  const headerRef = useRef<HTMLDivElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
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

  const getCardScrollAmount = () => {
    if (!carouselRef.current) return 300;
    const firstCard = carouselRef.current.querySelector(`.${styles.techStack__card}`) as HTMLElement | null;
    if (!firstCard) return 300;
    const rect = firstCard.getBoundingClientRect();
    const style = window.getComputedStyle(firstCard);
    const marginRight = parseFloat(style.marginRight || '0');
    return Math.round(rect.width + marginRight);
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const amount = getCardScrollAmount();
      carouselRef.current.scrollBy({ left: -amount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const amount = getCardScrollAmount();
      carouselRef.current.scrollBy({ left: amount, behavior: 'smooth' });
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

  useEffect(() => {
    const handleResize = () => {
      updateScrollButtons();
    };

    window.addEventListener('resize', handleResize);
    // in case fonts/images change layout after mount
    setTimeout(updateScrollButtons, 300);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={sectionRef} id="tech-stack" className={techStackClasses}>
      <div className={styles.techStack__container}>
        <div
          ref={headerRef}
          className={`${styles.techStack__header} ${isInView ? styles['techStack__header--animated'] : ''}`}
        >
          <h2 className={styles.techStack__title}>{TECH_STACK_CONTENT.title}</h2>
          <p className={styles.techStack__subtitle}>
            {TECH_STACK_CONTENT.subtitle}
          </p>
        </div>

        <div
          ref={carouselContainerRef}
          className={`${styles.techStack__carousel} ${isInView ? styles['techStack__carousel--animated'] : ''}`}
        >
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
              {TECH_STACK.map((tech, index) => {
                const isFlipped = flippedCard === tech.id;
                const cardClasses = [
                  styles.techStack__card,
                  isFlipped && styles['techStack__card--flipped'],
                  isInView && styles['techStack__card--animated'],
                ].filter(Boolean).join(' ');

                return (
                  <div
                    key={tech.id}
                    className={cardClasses}
                    style={{ animationDelay: `${600 + index * 100}ms` }}
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
                          <span>{TECH_STACK_CONTENT.touchHint}</span>
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
                            <span>{TECH_STACK_CONTENT.flipBackTouch}</span>
                          </>
                        ) : (
                          <>
                            <Icon name="MousePointer" size="sm" />
                            <span>{TECH_STACK_CONTENT.flipBackHover}</span>
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
