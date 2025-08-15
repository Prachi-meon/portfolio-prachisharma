'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id="projects" className={projectsClasses}>
      <div className={styles.projects__container}>
        <motion.div
          className={styles.projects__header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.projects__title}>Featured Projects</h2>
          <p className={styles.projects__subtitle}>
            A showcase of my recent work and contributions
          </p>
        </motion.div>

        <div className={styles.projects__grid}>
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              className={styles.projects__card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.projects__cardImage}>
                <div className={styles.projects__imagePlaceholder}>
                  <Icon name="FolderOpen" size="xl" />
                </div>
                <div className={styles.projects__cardOverlay}>
                  <div className={styles.projects__cardActions}>
                    {project.githubUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Icon name="Github" size="sm" />
                        GitHub
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        aria-label={`View ${project.title} live`}
                      >
                        <Icon name="ExternalLink" size="sm" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.projects__cardContent}>
                <h3 className={styles.projects__cardTitle}>{project.title}</h3>
                <p className={styles.projects__cardDescription}>
                  {project.description}
                </p>
                
                <div className={styles.projects__cardMeta}>
                  <div className={styles.projects__metaItem}>
                    <Icon name="User" size="sm" />
                    <span>{project.role}</span>
                  </div>
                  <div className={styles.projects__metaItem}>
                    <Icon name="Calendar" size="sm" />
                    <span>{project.timeline}</span>
                  </div>
                </div>

                <div className={styles.projects__cardTechnologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.projects__technology}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className={styles.projects__footer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://github.com/prachisharma', '_blank')}
            aria-label="View more projects on GitHub"
          >
            <Icon name="Github" size="md" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
