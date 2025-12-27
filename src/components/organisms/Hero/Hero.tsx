'use client';

import React from 'react';
import { Button } from '@/components/atoms';
import styles from './Hero.module.scss';

export interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroClasses = [
    styles.hero,
    className,
  ].filter(Boolean).join(' ');

  return (
    <section className={heroClasses}>
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <div className={styles.hero__text}>
            <h1 className={styles.hero__title}>
              <span className={styles.hero__greeting}>Hello, I'm</span>
              <span className={styles.hero__name}>Prachi Sharma</span>
              <span className={styles.hero__role}>Full Stack Developer</span>
            </h1>
            
            <p className={styles.hero__description}>
              I create beautiful, responsive, and high-performance web applications 
              using modern technologies. Passionate about clean code, user experience, 
              and turning ideas into reality.
            </p>
            
            <div className={styles.hero__actions}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className={styles.hero__cta}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className={styles.hero__cta}
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className={styles.hero__visual}>
            <div className={styles.hero__imagePlaceholder}>
              <div className={styles.hero__imageContent}>
                <div className={styles.hero__codeBlock}>
                  <span className={styles.hero__codeLine}>const developer = {`{`}</span>
                  <span className={styles.hero__codeLine}>  name: "Prachi Sharma",</span>
                  <span className={styles.hero__codeLine}>  role: "Full Stack Developer",</span>
                  <span className={styles.hero__codeLine}>  skills: ["React", "Node.js", "TypeScript"],</span>
                  <span className={styles.hero__codeLine}>  passion: "Building amazing web apps"</span>
                  <span className={styles.hero__codeLine}>{`}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.hero__scrollIndicator}>
          <div className={styles.hero__scrollText}>Scroll to explore</div>
          <div className={styles.hero__scrollArrow} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
