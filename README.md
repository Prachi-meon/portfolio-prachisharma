# Prachi Sharma - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, SASS, and Framer Motion. This project follows atomic design principles and implements best practices for performance, accessibility, and SEO.

## 🚀 Features

### Core Features
- **Next.js 15** with App Router and Server Components
- **TypeScript** for type safety and better developer experience
- **SASS Modules** with BEM methodology for maintainable styles
- **Framer Motion** for smooth animations and interactions
- **Responsive Design** with mobile-first approach
- **Accessibility** compliant with WCAG standards
- **SEO Optimized** with meta tags and structured data

### Sections
- **Hero Section** with animated content and call-to-action buttons
- **Tech Stack** with flip card animations and horizontal carousel
- **Projects** showcase with grid layout and hover effects
- **Services** with modern card design and feature lists
- **Contact Form** with email integration via Nodemailer
- **Footer** with social links and contact information

### Components Architecture
- **Atoms**: Button, Input, Textarea, Icon
- **Molecules**: Logo, Navigation
- **Organisms**: Header, Hero, TechStack, Projects, Services, Contact, Footer

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **SASS** - CSS preprocessor with modules
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend & Tools
- **Nodemailer** - Email sending functionality
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prachisharma/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your configuration:
   ```env
   # Email Configuration (Nodemailer)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=prachisharma@example.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── atoms/            # Basic building blocks
│   ├── molecules/        # Simple component combinations
│   └── organisms/        # Complex component sections
├── styles/               # Global styles and SASS
├── types/                # TypeScript type definitions
└── utils/                # Utility functions and constants
```

## 🎨 Customization

### Colors and Theme
Edit `src/styles/globals.scss` to customize:
- Color palette
- Typography
- Spacing
- Border radius
- Shadows

### Content
Update `src/utils/constants.ts` to modify:
- Personal information
- Tech stack data
- Projects
- Services
- Social links

### Components
Each component can be customized by editing its respective files:
- `src/components/atoms/` - Basic components
- `src/components/molecules/` - Compound components
- `src/components/organisms/` - Page sections

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance

## 🚀 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Bundle Optimization**: Tree shaking and minification

## 📧 Contact Form

The contact form uses Nodemailer to send emails. Configure your email service:

1. **Gmail Setup**:
   - Enable 2-factor authentication
   - Generate an app password
   - Use the app password in `SMTP_PASS`

2. **Other Providers**:
   - Update `SMTP_HOST` and `SMTP_PORT`
   - Use appropriate credentials

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [SASS](https://sass-lang.com/) - CSS preprocessor

## 📞 Contact

- **Email**: prachisharma@example.com
- **LinkedIn**: [linkedin.com/in/prachisharma](https://linkedin.com/in/prachisharma)
- **GitHub**: [github.com/prachisharma](https://github.com/prachisharma)

---

Made with ❤️ by Prachi Sharma
