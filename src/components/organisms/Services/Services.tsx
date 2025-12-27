'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@/components/atoms';
import { Service } from '@/types';
import { SERVICES } from '@/utils/constants';
import styles from './Services.module.scss';

export interface ServicesProps {
  className?: string;
}

const Services: React.FC<ServicesProps> = ({ className = '' }) => {
  const [isInView, setIsInView] = useState(false);
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

  const servicesClasses = [
    styles.services,
    className,
  ].filter(Boolean).join(' ');

  return (
    <section ref={sectionRef} id="services" className={servicesClasses}>
      <div className={styles.services__container}>
        <div ref={headerRef} className={styles.services__header}>
          <h2 className={styles.services__title}>Services I Offer</h2>
          <p className={styles.services__subtitle}>
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>

        <div ref={gridRef} className={styles.services__grid}>
          {SERVICES.map((service, index) => (
            <div 
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
      </div>
    </section>
  );
};

export default Services;
