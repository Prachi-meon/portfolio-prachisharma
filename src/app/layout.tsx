import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Prachi Sharma - Full-Stack Developer & UI/UX Designer',
  description: 'Passionate full-stack developer specializing in modern web technologies, creating exceptional digital experiences with clean code and beautiful design.',
  keywords: [
    'full-stack developer',
    'web developer',
    'UI/UX designer',
    'React',
    'Next.js',
    'TypeScript',
    'portfolio',
    'frontend developer',
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
    title: 'Prachi Sharma - Full-Stack Developer & UI/UX Designer',
    description: 'Passionate full-stack developer specializing in modern web technologies, creating exceptional digital experiences with clean code and beautiful design.',
    url: 'https://prachisharma.com',
    siteName: 'Prachi Sharma Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prachi Sharma - Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prachi Sharma - Full-Stack Developer & UI/UX Designer',
    description: 'Passionate full-stack developer specializing in modern web technologies, creating exceptional digital experiences with clean code and beautiful design.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
