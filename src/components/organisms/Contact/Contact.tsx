'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

  const contactClasses = [
    styles.contact,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleInputChange = (field: keyof ContactForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
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

  return (
    <section id="contact" className={contactClasses}>
      <div className={styles.contact__container}>
        <motion.div
          className={styles.contact__header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.contact__title}>Get In Touch</h2>
          <p className={styles.contact__subtitle}>
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className={styles.contact__content}>
          {/* Contact Information */}
          <motion.div
            className={styles.contact__info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.contact__infoTitle}>Let's Connect</h3>
            <p className={styles.contact__infoDescription}>
              I'm always open to discussing new opportunities, interesting projects, and creative ideas.
            </p>

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
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contact__socialLink}
                    aria-label={`Visit ${social.name}`}
                  >
                    <Icon name={social.icon as any} size="md" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className={styles.contact__form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.contact__formRow}>
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange('name')}
                required
                fullWidth
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                required
                fullWidth
              />
            </div>

            <Input
              label="Phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange('phone')}
              fullWidth
            />

            <Textarea
              label="Message"
              name="purpose"
              value={formData.purpose}
              onChange={handleInputChange('purpose')}
              rows={6}
              placeholder="Tell me about your project, timeline, and any specific requirements..."
              required
              fullWidth
            />

            {submitStatus === 'success' && (
              <motion.div
                className={styles.contact__success}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Icon name="CheckCircle" size="sm" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className={styles.contact__error}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Icon name="AlertCircle" size="sm" />
                <span>Something went wrong. Please try again or contact me directly.</span>
              </motion.div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isSubmitting}
              fullWidth
              aria-label="Send message"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
