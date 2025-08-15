'use client';

import React from 'react';
import { Button, Icon } from '@/components/atoms';
import { Project } from '@/types';
import { PROJECTS } from '@/utils/constants';
import styles from './Projects.module.scss';

export interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className = '' }) => {
  const projectsClasses = [
    styles.projects,
    className,
  ].filter(Boolean).join(' ');

  return (
    <section id="projects" className={projectsClasses}>
      <div className={styles.projects__container}>
        <div className={styles.projects__header}>
          <h2 className={styles.projects__title}>Featured Projects</h2>
          <p className={styles.projects__subtitle}>
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className={styles.projects__grid}>
          {PROJECTS.map((project) => (
            <div key={project.id} className={styles.projects__card}>
              <div className={styles.projects__imageContainer}>
                <div className={styles.projects__imagePlaceholder}>
                  <Icon name="Image" size="xl" />
                  <span>{project.name}</span>
                </div>
                <div className={styles.projects__overlay}>
                  <div className={styles.projects__overlayContent}>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <Icon name="ExternalLink" size="sm" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Icon name="GitHub" size="sm" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>

              <div className={styles.projects__content}>
                <h3 className={styles.projects__projectTitle}>{project.name}</h3>
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
      </div>
    </section>
  );
};

export default Projects;
