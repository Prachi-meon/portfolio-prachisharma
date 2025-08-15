'use client';

import React from 'react';
import { Icon } from '@/components/atoms';
import { Service } from '@/types';
import { SERVICES } from '@/utils/constants';
import styles from './Services.module.scss';

export interface ServicesProps {
  className?: string;
}

const Services: React.FC<ServicesProps> = ({ className = '' }) => {
  const servicesClasses = [
    styles.services,
    className,
  ].filter(Boolean).join(' ');

  return (
    <section id="services" className={servicesClasses}>
      <div className={styles.services__container}>
        <div className={styles.services__header}>
          <h2 className={styles.services__title}>Services I Offer</h2>
          <p className={styles.services__subtitle}>
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>

        <div className={styles.services__grid}>
          {SERVICES.map((service) => (
            <div key={service.id} className={styles.services__card}>
              <div className={styles.services__icon}>
                <Icon name={service.icon} size="xl" />
              </div>
              
              <h3 className={styles.services__cardTitle}>{service.title}</h3>
              <p className={styles.services__description}>{service.description}</p>
              
              <ul className={styles.services__features}>
                {service.features.map((feature, index) => (
                  <li key={index} className={styles.services__feature}>
                    <Icon name="Check" size="sm" />
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
