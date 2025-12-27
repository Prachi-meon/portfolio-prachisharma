'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Button, Icon } from '@/components/atoms';
import { PROJECTS, PROJECTS_CONTENT } from '@/data/siteContent';
import styles from './Projects.module.scss';

export interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className = '' }) => {
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
                headerRef.current?.classList.add(styles['projects__header--animated']);
              }, 200);
            }
            
            if (gridRef.current) {
              setTimeout(() => {
                gridRef.current?.classList.add(styles['projects__grid--animated']);
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

  const projectsClasses = [
    styles.projects,
    className,
  ].filter(Boolean).join(' ');

  return (
    <section ref={sectionRef} id="projects" className={projectsClasses}>
      <div className={styles.projects__container}>
        <div ref={headerRef} className={styles.projects__header}>
          <h2 className={styles.projects__title}>{PROJECTS_CONTENT.title}</h2>
          <p className={styles.projects__subtitle}>
            {PROJECTS_CONTENT.subtitle}
          </p>
        </div>

        <div ref={gridRef} className={styles.projects__grid}>
          {(showAll ? PROJECTS : PROJECTS.slice(0, visibleCount)).map((project, index) => (
            <div 
              id={`project-${project.id}`}
              key={project.id} 
              className={`${styles.projects__card} ${isInView ? styles['projects__card--animated'] : ''}`}
              style={{ animationDelay: `${600 + index * 150}ms` }}
            >
              <div className={styles.projects__imageContainer}>
                <div className={styles.projects__imagePlaceholder}>
                  <Icon name="Image" size="xl" />
                  <span>{project.title}</span>
                </div>
                <div className={styles.projects__overlay}>
                  <div className={styles.projects__overlayContent}>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <Icon name="ExternalLink" size="sm" />
                      {PROJECTS_CONTENT.actions.liveDemo}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Icon name="Github" size="sm" />
                      {PROJECTS_CONTENT.actions.sourceCode}
                    </Button>
                  </div>
                </div>
              </div>

              <div className={styles.projects__content}>
                <h3 className={styles.projects__projectTitle}>{project.title}</h3>
                <p className={styles.projects__description}>{project.description}</p>
                
                <div className={styles.projects__meta}>
                  <div className={styles.projects__metaItem}>
                    <Icon name="User" size="sm" />
                    <span>{project.role}</span>
                  </div>
                  <div className={styles.projects__metaItem}>
                    <Icon name="Calendar" size="sm" />
                    <span>{project.timeline}</span>
                  </div>
                </div>

                <div className={styles.projects__technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.projects__tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {PROJECTS.length > visibleCount && (
            <div className={styles.projects__actions}>
            <Button
              variant="ghost"
              size="md"
              onClick={() => {
                const next = !showAll;
                setShowAll(next);
                if (next) {
                  setTimeout(() => {
                    const id = PROJECTS[visibleCount]?.id;
                    const el = id ? document.getElementById(`project-${id}`) : null;
                    el?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                  }, 250);
                } else {
                  sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              {showAll ? PROJECTS_CONTENT.actions.showLess : PROJECTS_CONTENT.actions.viewMore}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
