'use client';

import React, { useState } from 'react';
import { Button, Input, Textarea, Icon } from '@/components/atoms';
import { ContactForm } from '@/types';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/utils/constants';
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
      const response = await fetch('/api/contact', {
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
    <section id="contact" className={contactClasses}>
      <div className={styles.contact__container}>
        <div className={styles.contact__header}>
          <h2 className={styles.contact__title}>Get In Touch</h2>
          <p className={styles.contact__subtitle}>
            Ready to start a project or have a question? Let's talk!
          </p>
        </div>

        <div className={styles.contact__content}>
          {/* Contact Information */}
          <div className={styles.contact__info}>
            <h3 className={styles.contact__infoTitle}>Contact Information</h3>
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
              <h4>Follow Me</h4>
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
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  fullWidth
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  fullWidth
                />
              </div>

              <Input
                type="tel"
                name="phone"
                placeholder="Your Phone (optional)"
                value={formData.phone}
                onChange={handleInputChange}
                fullWidth
              />

              <Textarea
                name="purpose"
                placeholder="Tell me about your project or question..."
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
                Send Message
              </Button>

              {submitStatus === 'success' && (
                <div className={`${styles.contact__status} ${styles['contact__status--success']}`}>
                  <Icon name="CheckCircle" size="sm" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className={`${styles.contact__status} ${styles['contact__status--error']}`}>
                  <Icon name="AlertCircle" size="sm" />
                  <span>Something went wrong. Please try again or contact me directly.</span>
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
