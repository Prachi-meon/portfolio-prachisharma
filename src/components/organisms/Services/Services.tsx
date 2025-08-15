'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id="services" className={servicesClasses}>
      <div className={styles.services__container}>
        <motion.div
          className={styles.services__header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.services__title}>Services I Offer</h2>
          <p className={styles.services__subtitle}>
            Comprehensive solutions to help bring your digital vision to life
          </p>
        </motion.div>

        <div className={styles.services__grid}>
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              className={styles.services__card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={styles.services__cardHeader}>
                <div className={styles.services__icon}>
                  <Icon name={service.icon as any} size="xl" />
                </div>
                <h3 className={styles.services__cardTitle}>{service.title}</h3>
              </div>
              
              <p className={styles.services__cardDescription}>
                {service.description}
              </p>
              
              <ul className={styles.services__features}>
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className={styles.services__feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                  >
                    <Icon name="Check" size="sm" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className={styles.services__cardFooter}>
                <motion.div
                  className={styles.services__accent}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index * 0.1) + 0.3 }}
                />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className={styles.services__cta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className={styles.services__ctaTitle}>
            Ready to start your project?
          </h3>
          <p className={styles.services__ctaDescription}>
            Let's discuss how I can help bring your ideas to life
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
