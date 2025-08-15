import { NavigationItem, TechStack, Project, Service, SocialLink } from '@/types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const TECH_STACK: TechStack[] = [
  {
    id: 'nextjs',
    name: 'Next.js',
    logo: '/images/tech/nextjs.svg',
    shortDescription: 'Full-stack React framework',
    longDescription: 'Built production-ready applications with Next.js 15, leveraging App Router, Server Components, and advanced optimization features for exceptional performance and SEO.',
    category: 'frontend',
  },
  {
    id: 'react',
    name: 'React',
    logo: '/images/tech/react.svg',
    shortDescription: 'Modern UI library',
    longDescription: 'Developed complex user interfaces using React 18 with hooks, context API, and modern patterns. Experience with TypeScript integration and performance optimization.',
    category: 'frontend',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    logo: '/images/tech/typescript.svg',
    shortDescription: 'Type-safe JavaScript',
    longDescription: 'Implemented robust type systems and interfaces for large-scale applications. Enhanced code quality, developer experience, and maintainability.',
    category: 'frontend',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    logo: '/images/tech/nodejs.svg',
    shortDescription: 'Server-side JavaScript',
    longDescription: 'Built scalable backend services and APIs using Node.js with Express, Fastify, and other frameworks. Implemented authentication, database integration, and microservices.',
    category: 'backend',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    logo: '/images/tech/postgresql.svg',
    shortDescription: 'Relational database',
    longDescription: 'Designed and optimized database schemas, wrote complex queries, and implemented data migration strategies. Experience with ORMs like Prisma and TypeORM.',
    category: 'database',
  },
  {
    id: 'docker',
    name: 'Docker',
    logo: '/images/tech/docker.svg',
    shortDescription: 'Containerization',
    longDescription: 'Containerized applications for consistent deployment across environments. Created multi-stage builds, Docker Compose setups, and CI/CD pipelines.',
    category: 'devops',
  },
  {
    id: 'aws',
    name: 'AWS',
    logo: '/images/tech/aws.svg',
    shortDescription: 'Cloud infrastructure',
    longDescription: 'Deployed and managed applications on AWS using services like EC2, S3, RDS, Lambda, and CloudFront. Implemented infrastructure as code with Terraform.',
    category: 'devops',
  },
  {
    id: 'sass',
    name: 'SASS',
    logo: '/images/tech/sass.svg',
    shortDescription: 'CSS preprocessor',
    longDescription: 'Created maintainable and scalable stylesheets using SASS with BEM methodology, CSS Grid, Flexbox, and responsive design principles.',
    category: 'frontend',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
    role: 'Full-stack Developer',
    timeline: '3 months',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    githubUrl: 'https://github.com/prachisharma/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.com',
  },
  {
    id: 'task-management',
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates, file sharing, and team collaboration features.',
    role: 'Frontend Lead',
    timeline: '2 months',
    image: '/images/projects/task-management.jpg',
    technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Material-UI'],
    githubUrl: 'https://github.com/prachisharma/task-management',
    liveUrl: 'https://task-app-demo.com',
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization dashboard with interactive charts, custom reports, and data export capabilities.',
    role: 'Full-stack Developer',
    timeline: '4 months',
    image: '/images/projects/analytics.jpg',
    technologies: ['Next.js', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/prachisharma/analytics-dashboard',
    liveUrl: 'https://analytics-demo.com',
  },
  {
    id: 'mobile-app',
    title: 'Mobile Fitness App',
    description: 'Cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social features.',
    role: 'Mobile Developer',
    timeline: '6 months',
    image: '/images/projects/fitness-app.jpg',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Expo'],
    githubUrl: 'https://github.com/prachisharma/fitness-app',
    liveUrl: 'https://fitness-app-demo.com',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies.',
    icon: 'Globe',
    features: [
      'Full-stack development with Next.js & React',
      'Responsive design with mobile-first approach',
      'Performance optimization & SEO',
      'API development & integration',
    ],
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications for iOS and Android.',
    icon: 'Smartphone',
    features: [
      'React Native development',
      'Native iOS & Android apps',
      'App store optimization',
      'Performance & security best practices',
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user experience.',
    icon: 'Palette',
    features: [
      'Wireframing & prototyping',
      'User research & testing',
      'Design systems & component libraries',
      'Accessibility compliance',
    ],
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description: 'Expert guidance on technology decisions and architecture.',
    icon: 'Lightbulb',
    features: [
      'Technology stack recommendations',
      'Architecture design & review',
      'Performance optimization',
      'Security best practices',
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/prachisharma',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/prachisharma',
    icon: 'Linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/prachisharma',
    icon: 'Twitter',
  },
  {
    name: 'Email',
    url: 'mailto:prachisharma@example.com',
    icon: 'Mail',
  },
];

export const SITE_CONFIG = {
  name: 'Prachi Sharma',
  title: 'Full-Stack Developer & UI/UX Designer',
  description: 'Passionate full-stack developer specializing in modern web technologies, creating exceptional digital experiences with clean code and beautiful design.',
  email: 'prachisharma@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
};
