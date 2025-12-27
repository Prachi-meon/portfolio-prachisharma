'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button, Input, Textarea, Icon } from '@/components/atoms';
import { ContactForm } from '@/types';
import { CONTACT_CONTENT, SITE_CONFIG, SOCIAL_LINKS } from '@/data/siteContent';
import styles from './Contact.module.scss';

export interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    purpose: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
                headerRef.current?.classList.add(styles['contact__header--animated']);
              }, 200);
            }
            
            if (contentRef.current) {
              setTimeout(() => {
                contentRef.current?.classList.add(styles['contact__content--animated']);
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', purpose: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactClasses = [
    styles.contact,
    className,
  ].filter(Boolean).join(' ');

  return (
    <section ref={sectionRef} id="contact" className={contactClasses}>
      <div className={styles.contact__container}>
        <div ref={headerRef} className={styles.contact__header}>
          <h2 className={styles.contact__title}>{CONTACT_CONTENT.title}</h2>
          <p className={styles.contact__subtitle}>
            {CONTACT_CONTENT.subtitle}
          </p>
        </div>

        <div ref={contentRef} className={styles.contact__content}>
          {/* Contact Information */}
          <div className={styles.contact__info}>
            <h3 className={styles.contact__infoTitle}>{CONTACT_CONTENT.infoTitle}</h3>
            <div className={styles.contact__infoItems}>
              <div className={styles.contact__infoItem}>
                <Icon name="Mail" size="lg" />
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
                </div>
              </div>

              <div className={styles.contact__infoItem}>
                <Icon name="Phone" size="lg" />
                <div>
                  <h4>Phone</h4>
                  <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</a>
                </div>
              </div>

              <div className={styles.contact__infoItem}>
                <Icon name="MapPin" size="lg" />
                <div>
                  <h4>Location</h4>
                  <span>{SITE_CONFIG.location}</span>
                </div>
              </div>
            </div>

            <div className={styles.contact__social}>
              <h4>{CONTACT_CONTENT.socialTitle}</h4>
              <div className={styles.contact__socialLinks}>
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contact__socialLink}
                    aria-label={`Visit ${link.name}`}
                  >
                    <Icon name={link.icon} size="md" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.contact__form}>
            <form onSubmit={handleSubmit} className={styles.contact__formContent}>
              <div className={styles.contact__formRow}>
                <Input
                  type="text"
                  name="name"
                  placeholder={CONTACT_CONTENT.form.namePlaceholder}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  fullWidth
                />
                <Input
                  type="email"
                  name="email"
                  placeholder={CONTACT_CONTENT.form.emailPlaceholder}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  fullWidth
                />
              </div>

              <Input
                type="tel"
                name="phone"
                placeholder={CONTACT_CONTENT.form.phonePlaceholder}
                value={formData.phone}
                onChange={handleInputChange}
                fullWidth
              />

              <Textarea
                name="purpose"
                placeholder={CONTACT_CONTENT.form.purposePlaceholder}
                value={formData.purpose}
                onChange={handleInputChange}
                rows={6}
                required
                fullWidth
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={isSubmitting}
                fullWidth
              >
                {CONTACT_CONTENT.form.submitLabel}
              </Button>

              {submitStatus === 'success' && (
                <div className={`${styles.contact__status} ${styles['contact__status--success']}`}>
                  <Icon name="CheckCircle" size="sm" />
                  <span>{CONTACT_CONTENT.status.success}</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className={`${styles.contact__status} ${styles['contact__status--error']}`}>
                  <Icon name="AlertCircle" size="sm" />
                  <span>{CONTACT_CONTENT.status.error}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
