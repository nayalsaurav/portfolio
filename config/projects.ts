export type ProjectLinkType = {
  type: string;
  href: string;
  icon: 'github' | 'globe';
};

export type ProjectItemType = {
  id: string;
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: ProjectLinkType[];
  image: string;
  video: string;
  overview?: string;
  features?: string[];
  techDetails?: string[];
};

export const projects: ProjectItemType[] = [
  {
    id: 'kairox',
    title: 'Kairox Analytics',
    href: 'https://kairox.nayalsaurav.in/',
    dates: '2026',
    active: true,
    description:
      'Privacy-first, open-source web analytics. Lightweight (<1kb) and cookie-free alternative to Google Analytics. GDPR, CCPA, and PECR compliant.',
    overview:
      'Kairox is a lightweight, privacy-first web analytics platform that tracks essential metrics without compromising user privacy. It features a beautiful analytics dashboard, device analytics, and global insights, all while remaining fully open-source and self-hostable.',
    features: [
      'Lightweight (<1kb) tracking script with zero performance impact',
      'Privacy-focused: No IP storage, cookies, or fingerprinting',
      'Analytics dashboard with beautiful visualizations',
      'Global insights with privacy-preserving country/region breakdown',
      'Device analytics (OS, Browser, Device type)',
      'Fully supported Dark Mode',
      'Open Source and self-hostable',
    ],
    techDetails: [
      'Frontend: Next.js 15 (App Router) with TypeScript',
      'Database: PostgreSQL via Neon with Prisma ORM',
      'Authentication: Better Auth with Google OAuth',
      'Styling: TailwindCSS & Shadcn UI',
      'Visualization: Recharts for analytics data',
      'Validation: Zod for data integrity',
    ],
    technologies: [
      'Next.js 15',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Better Auth',
      'Tailwind CSS',
      'Shadcn UI',
    ],
    links: [
      {
        type: 'Website',
        href: 'https://kairox.nayalsaurav.in/',
        icon: 'globe',
      },
      {
        type: 'Source',
        href: 'https://github.com/nayalsaurav/kairox',
        icon: 'github',
      },
    ],
    image: 'https://kairox.nayalsaurav.in/og-image.png',
    video: '',
  },
  {
    id: 'ghostgram',
    title: 'GhostGram',
    href: 'https://ghostgram.nayalsaurav.in',
    dates: '2025',
    active: true,
    description:
      'Anonymous question-asking platform. Creators log in to get a unique link, which they can share publicly. Anyone with the link can send questions anonymously.',
    overview:
      "GhostGram is an anonymous Q&A platform where creators can receive questions from their audience without revealing the sender's identity. Perfect for AMAs, feedback collection, and building authentic connections.",
    features: [
      'Unique shareable links for each creator',
      'Completely anonymous question submission',
      'Private dashboard for managing questions',
      'Toggle to accept/pause incoming questions',
      'Clean, minimal interface for seamless experience',
    ],
    techDetails: [
      'Frontend: Next.js with TypeScript and Tailwind CSS',
      'Authentication: NextAuth.js for secure login',
      'Database: MongoDB for flexible document storage',
      'Deployment: Vercel for edge-optimized performance',
    ],
    technologies: [
      'Next.js',
      'MongoDB',
      'NextAuth.js',
      'Tailwind CSS',
      'TypeScript',
    ],
    links: [
      {
        type: 'Website',
        href: 'https://ghostgram.nayalsaurav.in',
        icon: 'globe',
      },
      {
        type: 'Source',
        href: 'https://github.com/nayalsaurav/GhostGram',
        icon: 'github',
      },
    ],
    image: '',
    video:
      'https://res.cloudinary.com/dcoqmeswp/video/upload/v1752588901/agxkiatjiodgq2flgqkd.mp4',
  },
  {
    id: 'akari-art',
    title: 'Akari Art',
    href: 'https://akariart.nayalsaurav.in',
    dates: '2025',
    active: true,
    description:
      'Full-stack app for generating and sharing AI images. Integrated Cloudflare AI and Cloudinary. Secure Google login with NextAuth.',
    overview:
      'Akari Art is an AI-powered image generation platform that lets users create stunning artwork using text prompts. Share your creations with the community or keep them private in your personal gallery.',
    features: [
      'AI image generation with customizable prompts',
      'Public gallery to share and discover artwork',
      'Personal collection management',
      'Google authentication for seamless sign-in',
      'High-quality image storage and optimization',
    ],
    techDetails: [
      'AI Engine: Cloudflare AI for fast, edge-based generation',
      'Media Storage: Cloudinary for optimized image delivery',
      'Frontend: Next.js with shadcn/ui components',
      'Database: MongoDB for user data and artwork metadata',
    ],
    technologies: [
      'Next.js',
      'NextAuth',
      'MongoDB',
      'Tailwind CSS',
      'Cloudflare AI',
      'Cloudinary',
      'shadcn/ui',
    ],
    links: [
      {
        type: 'Website',
        href: 'https://akariart.nayalsaurav.in',
        icon: 'globe',
      },
      {
        type: 'Source',
        href: 'https://github.com/nayalsaurav/Akari-Art',
        icon: 'github',
      },
    ],
    image: '',
    video:
      'https://res.cloudinary.com/dcoqmeswp/video/upload/v1752588903/c6zzcwmtd9za4grmo2zw.mp4',
  },
  {
    id: 'deployit',
    title: 'DeployIt',
    href: '#',
    dates: '2025',
    active: true,
    description:
      'Built a platform to deploy static web apps from GitHub using Cloudflare R2 and Redis. Includes build pipeline, code storage, and global serving.',
    overview:
      'DeployIt is a modern deployment platform that simplifies the process of deploying static web applications. Connect your GitHub repository, and DeployIt handles the rest - from building your app to serving it globally.',
    features: [
      'One-click deployment from GitHub repositories',
      'Automatic build pipeline with support for popular frameworks',
      'Global CDN distribution via Cloudflare R2',
      'Real-time build logs and deployment status',
      'Custom domain support with automatic SSL',
    ],
    techDetails: [
      'Frontend: Next.js with TypeScript for a modern, type-safe UI',
      'Queue System: Redis for managing build jobs and caching',
      'Storage: Cloudflare R2 for storing built assets',
      'Build Pipeline: Custom Node.js workers for processing builds',
    ],
    technologies: [
      'Next.js',
      'Node.js',
      'Redis',
      'Cloudflare R2',
      'Tailwind CSS',
    ],
    links: [
      {
        type: 'Source',
        href: 'https://github.com/nayalsaurav/deployit',
        icon: 'github',
      },
    ],
    image: '',
    video:
      'https://res.cloudinary.com/dcoqmeswp/video/upload/v1752588900/u6uvn2sjxmxsxtkdkmt4.mp4',
  },
  {
    id: 'resumecheckkaro',
    title: 'ResumeCheckKaro',
    href: 'https://resumecheckkaro.nayalsaurav.in',
    dates: '2025',
    active: true,
    description:
      'AI-powered resume analysis tool that provides personalized feedback and helps users track their application progress.',
    overview:
      "ResumeCheckKaro uses Google's Gemini AI to analyze resumes and provide actionable feedback. Get insights on how to improve your resume for specific job roles and track your application progress.",
    features: [
      'AI-powered resume analysis and scoring',
      'Personalized improvement suggestions',
      'Role-specific optimization tips',
      'Application tracking dashboard',
      'Export feedback as PDF reports',
    ],
    techDetails: [
      'AI Engine: Google Gemini API for intelligent analysis',
      'Frontend: Next.js with TypeScript for type safety',
      'Styling: Tailwind CSS for responsive design',
      'File Processing: PDF parsing for resume extraction',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
    links: [
      {
        type: 'Website',
        href: 'https://resumecheckkaro.nayalsaurav.in',
        icon: 'globe',
      },
      {
        type: 'Source',
        href: 'https://github.com/nayalsaurav/resume-check-karo',
        icon: 'github',
      },
    ],
    image: '/resume-check-karo.png',
    video: '',
  },
];

export function getProjectById(id: string): ProjectItemType | undefined {
  return projects.find((project) => project.id === id);
}
