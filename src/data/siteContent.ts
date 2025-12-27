import type { Metadata } from 'next';
import { NavigationItem, TechStack, Project, Service, SocialLink } from '@/types';

export const SITE_METADATA: Metadata = {
  title: 'Prachi Sharma - Frontend Specialist',
  description:
    'Passionate frontend Specialist with 6+ years of experience in building interactive, responsive and performance-optimized web applications. Proficient in utilizing cutting-edge technologies to enhance the UX. I have a proven track record in client interaction, exceeding expectations, and driving business growth. My expertise in understanding business and technical requirements has consistently made an impact on product and the client. Seeking a challenging position to contribute my expertise and passion for web development to create next-generation digital solutions.',
  keywords: [
    'Frontend Specialist',
    'web developer',
    'UI/UX designer',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'portfolio',
    'backend developer',
  ],
  authors: [{ name: 'Prachi Sharma' }],
  creator: 'Prachi Sharma',
  publisher: 'Prachi Sharma',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://prachisharma.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Prachi Sharma - Frontend Specialist',
    description:
      'Passionate frontend Specialist with 6+ years of experience in building interactive, responsive and performance-optimized web applications. Proficient in utilizing cutting-edge technologies to enhance the UX. I have a proven track record in client interaction, exceeding expectations, and driving business growth. My expertise in understanding business and technical requirements has consistently made an impact on product and the client. Seeking a challenging position to contribute my expertise and passion for web development to create next-generation digital solutions.',
    url: 'https://prachisharma.com',
    siteName: 'Prachi Sharma Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prachi Sharma - Frontend Specialist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prachi Sharma - Frontend Specialist',
    description:
      'Passionate frontend Specialist with 6+ years of experience in building interactive, responsive and performance-optimized web applications. Proficient in utilizing cutting-edge technologies to enhance the UX. I have a proven track record in client interaction, exceeding expectations, and driving business growth. My expertise in understanding business and technical requirements has consistently made an impact on product and the client. Seeking a challenging position to contribute my expertise and passion for web development to create next-generation digital solutions.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const SITE_CONFIG = {
  name: 'Prachi Sharma',
  title: 'Frontend Specialist',
  description:
    'Passionate frontend Specialist with 6+ years of experience in building interactive, responsive and performance-optimized web applications. Proficient in utilizing cutting-edge technologies to enhance the UX. I have a proven track record in client interaction, exceeding expectations, and driving business growth. My expertise in understanding business and technical requirements has consistently made an impact on product and the client. Seeking a challenging position to contribute my expertise and passion for web development to create next-generation digital solutions.',
  email: 'prachisharma.meon@gmail.com',
  phone: '',
  location: 'Bengaluru, India',
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  greeting: "Hi, I'm",
  highlight: SITE_CONFIG.name,
  subtitle: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  primaryCta: {
    label: 'Get in Touch',
    ariaLabel: 'Get in touch',
  },
  secondaryCta: {
    label: 'View Projects',
    ariaLabel: 'View my projects',
  },
  scrollHint: 'Scroll to explore',
  imagePlaceholderInitials: 'PS',
};

export const TECH_STACK_CONTENT = {
  title: 'Tech Stack',
  subtitle: 'A curated set of technologies, frameworks, and tools I use to design, build, and deliver high-quality digital solutions.',
  touchHint: 'Tap to flip',
  flipBackTouch: 'Tap to flip back',
  flipBackHover: 'Hover to flip back',
};

export const PROJECTS_CONTENT = {
  title: 'Featured Projects',
  subtitle: 'A showcase of my recent work and technical expertise',
  actions: {
    liveDemo: 'Live Demo',
    sourceCode: 'Source Code',
    viewMore: 'View more',
    showLess: 'Show less',
  },
};

export const SERVICES_CONTENT = {
  title: 'Services I Offer',
  subtitle: 'Comprehensive web development solutions tailored to your needs',
  actions: {
    viewMore: 'View more',
    showLess: 'Show less',
  },
};

export const CONTACT_CONTENT = {
  title: 'Get In Touch',
  subtitle: "Ready to start a project or have a question? Let's talk!",
  infoTitle: 'Contact Information',
  socialTitle: 'Follow Me',
  form: {
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    phonePlaceholder: 'Your Phone (optional)',
    purposePlaceholder: 'Tell me about your project or question...',
    submitLabel: 'Send Message',
  },
  status: {
    success: "Message sent successfully! I'll get back to you soon.",
    error: 'Something went wrong. Please try again or contact me directly.',
  },
};

export const FOOTER_CONTENT = {
  disclaimer:
    'Built with Next.js, TypeScript, and SASS. Designed for performance and accessibility.',
};

export const TECH_STACK: TechStack[] = [
  {
    id: 'nextjs',
    name: 'Next.js',
    logo: '/images/tech/nextjs.svg',
    icon: 'SquareCode',
    shortDescription: 'Full-stack React framework',
    longDescription:
      'Built production-ready applications with Next.js 15, leveraging App Router, Server Components, and advanced optimization features for exceptional performance and SEO.',
    category: 'frontend',
  },
  {
    id: 'react',
    name: 'React',
    logo: '/images/tech/react.svg',
    icon: 'Atom',
    shortDescription: 'Modern UI library',
    longDescription:
      'Developed complex user interfaces using React 19 with hooks, context API, and modern patterns. Experience with TypeScript integration and performance optimization.',
    category: 'frontend',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    logo: '/images/tech/typescript.svg',
    icon: 'Braces',
    shortDescription: 'Type-safe JavaScript',
    longDescription:
      'Implemented robust type systems and interfaces for large-scale applications. Enhanced code quality, developer experience, and maintainability.',
    category: 'frontend',
  },
  {
    id: 'redux-toolkit',
    name: 'Redux Toolkit',
    logo: '/images/tech/redux.svg',
    icon: 'Box',
    shortDescription: 'Predictable state management for React',
    longDescription:
      'Built robust application state using Redux Toolkit (RTK) with slices, immer-powered reducers, and RTK Query for efficient data fetching and caching.',
    category: 'frontend',
  },
  {
    id: 'zustand',
    name: 'Zustand',
    logo: '/images/tech/zustand.svg',
    icon: 'Zap',
    shortDescription: 'Lightweight state-management with hooks',
    longDescription:
      'Implemented simple, scalable local state using Zustand — minimal API surface, hooks-first ergonomics, and selective subscriptions for performant updates.',
    category: 'frontend',
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    logo: '/images/tech/graphql.svg',
    icon: 'Database',
    shortDescription: 'Query language & runtime for APIs',
    longDescription:
      'Designed and consumed GraphQL schemas and clients (Apollo/urql) to enable precise, efficient data fetching, real-time subscriptions, and type-safety across the stack.',
    category: 'backend',
  },
  {
    id: 'jest',
    name: 'Jest',
    logo: '/images/tech/jest.svg',
    icon: 'CheckCircle',
    shortDescription: 'JavaScript testing framework',
    longDescription:
      'Wrote unit and integration tests using Jest and React Testing Library to ensure component correctness, maintainability, and regression protection.',
    category: 'other',
  },
  {
    id: 'webpack',
    name: 'Webpack',
    logo: '/images/tech/webpack.svg',
    icon: 'Package',
    shortDescription: 'Module bundler and build tool',
    longDescription:
      'Configured Webpack for custom build pipelines, loaders, and optimizations — code-splitting, caching, and production asset tuning for faster page loads.',
    category: 'devops',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    logo: '/images/tech/javascript.svg',
    icon: 'Braces',
    shortDescription: 'Core scripting language for the web',
    longDescription:
      'Expertise in modern JavaScript (ES6+) patterns, asynchronous programming, DOM manipulation, and performance best practices across browsers.',
    category: 'frontend',
  },
  {
    id: 'html-css',
    name: 'HTML & CSS',
    logo: '/images/tech/html-css.svg',
    icon: 'SquareCode',
    shortDescription: 'Semantic markup & responsive styles',
    longDescription:
      'Built accessible, semantic HTML and responsive CSS using modern layout systems (Flexbox, CSS Grid), progressive enhancement, and strong cross-browser fallbacks.',
    category: 'frontend',
  },
   {
    id: 'sass',
    name: 'SASS',
    logo: '/images/tech/sass.svg',
    icon: 'Palette',
    shortDescription: 'CSS preprocessor',
    longDescription:
      'Created maintainable and scalable stylesheets using SASS with BEM methodology, CSS Grid, Flexbox, and responsive design principles.',
    category: 'frontend',
  },
  {
    id: 'accessibility',
    name: 'Accessibility (a11y)',
    logo: '/images/tech/accessibility.svg',
    icon: 'Globe',
    shortDescription: 'Inclusive design and WCAG practices',
    longDescription:
      'Applied accessibility best practices including semantic HTML, ARIA where necessary, keyboard navigation, focus management, color-contrast testing, and screen-reader verification to ensure inclusivity.',
    category: 'other',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
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
    description:
      'Collaborative project management tool with real-time updates, file sharing, and team collaboration features.',
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
    description:
      'Real-time data visualization dashboard with interactive charts, custom reports, and data export capabilities.',
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
    description:
      'Cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social features.',
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
    url: 'https://github.com/Prachi-meon/',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/prachi-sharma-99a30916b/',
    icon: 'Linkedin',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/_hodophile_2024/',
    icon: 'Instagram',
  },
  {
    name: 'Email',
    url: 'mailto:prachisharma.meon@gmail.com',
    icon: 'Mail',
  },
];

