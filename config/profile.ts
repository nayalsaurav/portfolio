export const GITHUB_USERNAME = 'nayalsaurav';

export const profile = {
  name: 'Saurav Nayal',
  title: 'Software Developer',
  taglines: ['Backend Engineer', 'Node.js Developer', 'API & System Design'],
  bio: "Hi, I'm Saurav — a Node.js Backend Developer building scalable solutions. I design and build reliable backend systems using TypeScript, React, Next.js, Bun, and PostgreSQL, with a strong focus on API design, performance, and clean architecture.",

  contact: {
    email: 'nayalsaurav@gmail.com',
    phone: '+91-7678306331',
    website: 'https://nayalsaurav.in/',
    linkedin: 'https://www.linkedin.com/in/nayalsaurav/',
    github: 'https://github.com/nayalsaurav',
    leetcode: 'https://leetcode.com/nayalsaurav',
    twitter: 'https://twitter.com/nayalsaurav',
  },

  skills: [
    {
      category: 'Programming Languages',
      skills: ['C++', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
    },
    {
      category: 'Front-End',
      skills: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'shadcn/ui'],
    },
    {
      category: 'Back-End',
      skills: ['Node.js', 'Express.js', 'Prisma ORM', 'MongoDB', 'PostgreSQL'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'Cloudflare'],
    },
    {
      category: 'Core Subjects',
      skills: [
        'Data Structures & Algorithms',
        'DBMS',
        'OS',
        'Computer Networks',
        'OOP',
      ],
    },
  ],

  experience: [
    {
      id: 'track-always',
      company: 'Track Always',
      position: 'Software Developer Intern',
      type: 'Internship',
      startDate: 'Aug 2025',
      companyLogo: '/track-always.png',
      endDate: 'Nov 2025',
      isCurrentEmployer: false,
      skills: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Git'],
      highlights: [
        'Developed and maintained backend services for an e-commerce platform using TypeScript and Node.js.',
        'Collaborated with a 6-member Agile team to design scalable APIs and improve overall data flow efficiency.',
        'Optimized backend performance and reduced API response time by 35% through query optimization and code refactoring.',
        'Enhanced system reliability and code quality by enforcing TypeScript best practices and implementing unit tests.',
      ],
    },
    {
      id: 'ibm-trainee',
      company: 'IBM Technology',
      position: 'Front-End Web Development Trainee',
      type: 'Trainee',
      startDate: 'Jul 2025',
      companyLogo: 'ibm.avif',
      endDate: 'Aug 2025',
      isCurrentEmployer: false,
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Git'],
      highlights: [
        'Led a collaborative team of six in building responsive web interfaces, successfully delivering three diverse mini-projects using React.js and Agile methodologies.',
        'Architected a reusable front-end component library that streamlined the UI development process, cutting development time by 35%.',
        'Maintained a high-integrity collaborative codebase using Git, establishing best practices for version control and minimizing merge conflicts.',
        'Elevated application performance by conducting rigorous Lighthouse audits, optimizing core web vitals to boost scores from 70 to over 95.',
      ],
    },
  ],

  projects: [
    {
      id: 'ghostgram',
      name: 'GhostGram',
      description:
        'An anonymous Q&A platform with secure authentication, profile management, and modular dashboard features.',
      year: '2025',
      techStack: [
        'Next.js',
        'MongoDB',
        'TypeScript',
        'Tailwind CSS',
        'NextAuth.js',
      ],
      highlights: [
        'Developed an anonymous Q&A platform with secure authentication, profile management, and modular dashboard features.',
        'Implemented session-based authentication using NextAuth.js, ensuring consistent and secure access management.',
        'Optimized front-end performance with Next.js and Tailwind CSS, achieving a Lighthouse score of 98+ across all core metrics.',
        'Enhanced client-side rendering and dynamic content updates to improve interactivity and maintain seamless navigation.',
      ],
      github: 'https://github.com/nayalsaurav/GhostGram',
      live: 'https://ghostgram.nayalsaurav.in/',
    },
    {
      id: 'ai360',
      name: 'AI360',
      description:
        'A modular AI productivity suite featuring 7+ utilities such as Text Summarizer, Email Generator, Cold Email Writer, and Image Generator.',
      year: '2025',
      techStack: [
        'Next.js',
        'TypeScript',
        'Prisma',
        'Better Auth',
        'Gemini',
        'FluxAI',
        'ImageKit',
        'Tailwind CSS',
      ],
      highlights: [
        'Built a modular AI productivity suite featuring 7+ utilities such as Text Summarizer, Email Generator, Cold Email Writer, and Image Generator, designed for continuous expansion.',
        'Integrated Gemini and FluxAI for real-time text and image generation, automating creative and analytical workflows with 60% faster task execution.',
        'Implemented secure OAuth authentication using Better Auth and Prisma ORM, ensuring 99.9% session stability and scalable role-based access.',
        'Optimized image delivery through ImageKit and enhanced front-end responsiveness with Next.js and Tailwind CSS, improving load performance by 45%.',
      ],
      github: 'https://github.com/nayalsaurav/ai360',
      live: 'https://ai360.nayalsaurav.in/',
    },
  ],

  achievements: [
    {
      id: 'leetcode-rating',
      title: 'LeetCode Top 12.5%',
      description:
        'Achieved a LeetCode contest rating of 1709, placing in the top 12.5% globally, with 455+ problems solved.',
      link: 'https://leetcode.com/nayalsaurav',
      icon: 'code',
    },
    {
      id: 'codezen-hackathon',
      title: 'CodeZen Hackathon 2025 - Top 7',
      description:
        'Top 7 out of 50+ teams at CodeZen Hackathon 2025 for an AI-powered healthcare platform.',
      icon: 'trophy',
    },
    {
      id: 'nsut-avinya',
      title: "NSUT Avinya'25 - Top 6",
      description:
        "Top 6 out of 30+ teams at NSUT Avinya'25 for interactive web application development.",
      icon: 'medal',
    },
    {
      id: 'global-rank',
      title: 'Global Rank 1341',
      description:
        'Global Rank 1341 in a national-level competitive programming contest with thousands of participants.',
      icon: 'star',
    },
    {
      id: 'dsa-program',
      title: '22-Week DSA Program',
      description:
        'Completed a 22-week structured DSA problem-solving program.',
      icon: 'award',
    },
  ],

  education: [
    {
      id: 'btech',
      degree: 'B.Tech. Computer Science & Engineering',
      institution: 'Guru Gobind Singh Indraprastha University',
      location: 'New Delhi',
      startYear: '2022',
      endYear: '2026',
      score: '86.75%',
      scoreType: 'Percentage',
    },
    {
      id: 'class-12',
      degree: 'Class 12 Non-Medical',
      institution: 'Lt. Col Mehar Little Angels Public School',
      location: 'New Delhi',
      startYear: '2021',
      endYear: '2022',
      score: '93%',
      scoreType: 'Percentage',
    },
  ],
};

export default profile;
