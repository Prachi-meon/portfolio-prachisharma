import { IconName } from '@/components/atoms/Icon/Icon';

export interface TechStack {
  id: string;
  name: string;
  logo: string;
  icon: IconName;
  shortDescription: string;
  longDescription: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  timeline: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  features: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  purpose: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconName;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeaderProps {
  isScrolled: boolean;
}

export interface FooterProps {
  socialLinks: SocialLink[];
}

export interface TechStackCardProps {
  tech: TechStack;
}

export interface ProjectCardProps {
  project: Project;
}

export interface ServiceCardProps {
  service: Service;
}

export interface ContactFormProps {
  onSubmit: (data: ContactForm) => void;
  isLoading: boolean;
}
