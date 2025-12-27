'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Icon, Button } from '@/components/atoms';
import { SERVICES, SERVICES_CONTENT } from '@/data/siteContent';
import styles from './Services.module.scss';

export interface ServicesProps {
  className?: string;
}

const Services: React.FC<ServicesProps> = ({ className = '' }) => {
  const [isInView, setIsInView] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Scroll-driven animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            
            // Add animation classes with delays
            if (headerRef.current) {
              setTimeout(() => {
                headerRef.current?.classList.add(styles['services__header--animated']);
              }, 200);
            }
            
            if (gridRef.current) {
              setTimeout(() => {
                gridRef.current?.classList.add(styles['services__grid--animated']);
              }, 400);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const calculateVisible = () => {
      const w = window.innerWidth;
      if (w >= 1024) setVisibleCount(3);
      else if (w >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };

    calculateVisible();
    window.addEventListener('resize', calculateVisible);
    return () => window.removeEventListener('resize', calculateVisible);
  }, []);

  const servicesClasses = [
    styles.services,
    className,
  ].filter(Boolean).join(' ');

  return (
    <section ref={sectionRef} id="services" className={servicesClasses}>
      <div className={styles.services__container}>
        <div ref={headerRef} className={styles.services__header}>
          <h2 className={styles.services__title}>{SERVICES_CONTENT.title}</h2>
          <p className={styles.services__subtitle}>
            {SERVICES_CONTENT.subtitle}
          </p>
        </div>

        <div ref={gridRef} className={styles.services__grid}>
          {(showAll ? SERVICES : SERVICES.slice(0, visibleCount)).map((service, index) => (
            <div 
              id={`service-${service.id}`}
              key={service.id} 
              className={`${styles.services__card} ${isInView ? styles['services__card--animated'] : ''}`}
              style={{ animationDelay: `${600 + index * 150}ms` } as React.CSSProperties}
            >
              <div className={styles.services__icon}>
                <Icon name={service.icon} size="xl" />
              </div>
              
              <h3 className={styles.services__cardTitle}>{service.title}</h3>
              <p className={styles.services__description}>{service.description}</p>
              
              <ul className={styles.services__features}>
                {service.features.map((feature, index) => (
                  <li key={index} className={styles.services__feature}>
                    <Icon name="CheckCircle" size="sm" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {SERVICES.length > visibleCount && (
          <div className={styles.services__actions}>
            <Button
              variant="ghost"
              size="md"
              onClick={() => {
                const next = !showAll;
                setShowAll(next);
                if (next) {
                  setTimeout(() => {
                    const id = SERVICES[visibleCount]?.id;
                    const el = id ? document.getElementById(`service-${id}`) : null;
                    el?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                  }, 250);
                } else {
                  sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              {showAll ? SERVICES_CONTENT.actions.showLess : SERVICES_CONTENT.actions.viewMore || 'View more'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
