import maVault from "../assets/mavault.png";
import jobTracker from "../assets/jobtracker.png";
import portfolio from "../assets/portfolio.png";
import students from "../assets/studenthelper.png";

import type { Project } from "../types/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "MA Vault",
    subTitle:
      "A personal image gallery app with authentication, social features, and optimized media performance.",

    description:
      "MA Vault is a full-featured image gallery platform built with a focus on performance, accessibility, and smooth user experience. It includes secure Supabase authentication with email confirmation, optimized media handling using WebP and HEIC formats, and a responsive interface enhanced by Framer Motion animations.",

    technologiesUsed: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "React Query",
      "React Hot Toast",
      "Lucide Icons",
      "Supabase",
      "Day.js",
      "React Dropzone",
      "Framer Motion",
      "React Virtual",
      "heic2any",
      "React Error Boundary",
    ],

    keyFeatures: [
      "Supabase email authentication with confirmation flow",
      "Image compression and support for WebP/HEIC formats",
      "User profiles with likes, comments, and bookmarks",
      "Infinite scrolling and pagination for large galleries",
      "Search, filtering and sorting for fast content discovery",
      "Responsive UI with smooth animations",
      "Keyboard-accessible command palette and accessibility standard code",
      "Dark Mode support",
    ],

    Challenges:
      "Building a platform that handles many large images efficiently required implementing compression, optimized formats, and careful caching with React Query (especially for infinite scroll). Integrating Supabase authentication with a smooth UX and ensuring fast performance across devices also presented unique challenges.",

    outcome:
      "Delivered a polished and responsive image gallery app with a seamless user experience across devices. Achieved up to 40% reduction in storage size and greatly improved load times through advanced media handling.",

    imageUrl: maVault,
    liveLink: "https://ma-vault.vercel.app/home",
    gitHubLink: "https://github.com/Eng-Muntadher/MAVault", // replace with actual link
    youtubeLink: "",
    figmaLink:
      "https://www.figma.com/design/fN0jn4IeJC3jrNPjTNmX0M/MA-Vault?t=gCRPkwud0Hbc3Jej-0",
    isFinished: true,
  },

  {
    id: 2,
    title: "Job Application Tracker",
    subTitle:
      "A scalable job management system with AI assistance, real-time analytics, and secure authentication.",

    description:
      "A full-featured job application management platform providing secure authentication, complete CRUD functionality, and an intuitive dashboard. Built with performance in mind, the app delivers real-time insights through interactive charts and a smooth, responsive UI.",

    technologiesUsed: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "React Query",
      "Redux Toolkit",
      "React Hot Toast",
      "Recharts",
      "OpenAI API",
      "Lucide Icons",
      "Day.js",
      "Supabase",
      "Framer Motion",
      "React Markdown",
      "React Error Boundary",
    ],

    keyFeatures: [
      "Secure user authentication and full CRUD operations",
      "Real-time Pie and Line charts using Recharts",
      "Optimized chart animations for smooth performance",
      "OpenAI-powered assistant for intelligent task support",
      "Advanced search, sorting, and filtering",
      "Clean global state management with Redux Toolkit",
      "Dark Mode support",
      "Responsive and accessible UI",
    ],

    Challenges:
      "Ensuring smooth chart animations while handling real-time data required careful performance optimizations. Integrating an AI assistant and building a scalable state management structure also introduced architectural challenges.",

    outcome:
      "Created a powerful, user-friendly platform that simplifies job tracking and enhances productivity. The app delivers fast performance, clear analytics, and an AI-enhanced workflow that provides real value to users.",

    imageUrl: jobTracker,
    liveLink: "https://jobtracker-99.vercel.app/",
    gitHubLink: "https://github.com/Eng-Muntadher/jobtracker",
    youtubeLink: "",
    figmaLink:
      "https://www.figma.com/design/mpsBxlJ4se2CLcwh9es5M3/Job-Application-Tracker?node-id=10-38552&p=f&t=tReQciv5etDKg8Ec-0",
    isFinished: true,
  },

  {
    id: 3,
    title: "Portfolio Website",
    subTitle:
      "A modern, responsive showcase of my frontend development journey, skills, and projects.",

    description:
      "My personal portfolio website highlights my technical skills, featured projects, educational background, and professional accomplishments. Built with performance, accessibility, and user experience in mind, it features smooth page transitions, responsive design, and interactive components, all crafted with modern web technologies.",

    technologiesUsed: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "React Hot Toast",
      "EmailJs",
      "Lucide Icons",
      "React Error Boundary",
    ],

    keyFeatures: [
      "Fully responsive design optimized for all devices",
      "Interactive project showcase with live demos and source code links",
      "Comprehensive skills and education sections",
      "Smooth page transitions and animations",
      "Contact form with validation and email functionality",
      "SEO optimized with semantic HTML and meta tags",
      "Clean and intuitive navigation",
      "Dark mode support",
    ],

    Challenges:
      "Designing a portfolio that effectively represents my journey while maintaining excellent performance and accessibility. Implementing smooth animations, responsive layouts, and email functionality without sacrificing speed was a key challenge.",

    outcome:
      "Created a polished, professional portfolio that showcases my skills, projects, and growth as a frontend developer. The website delivers a seamless experience across devices and has become a central part of my personal brand.",

    imageUrl: portfolio,
    liveLink: "",
    gitHubLink: "https://github.com/Eng-Muntadher/Portfolio-App",
    youtubeLink: "",
    figmaLink:
      "https://www.figma.com/design/1LNGOAX1BV4PI1sEHHiqBD/Portfolio-Web-App-Design?node-id=3-13162&m=dev",
    isFinished: true,
  },

  {
    id: 4,
    title: "Undecided yet",
    subTitle:
      "A web platform to assist students in choosing the right college major based on interests and skills.",

    description:
      "This will be a responsive web application designed to guide students in selecting a suitable college major. It provides a user-friendly interface where students can input preferences, explore majors, and receive tailored recommendations. The project focuses on performance, accessibility, and delivering a clear, intuitive experience.",

    technologiesUsed: ["Next.js", "Tailwind CSS", "TypeScript", "More"],

    keyFeatures: [
      "Interactive questionnaire to assess student interests and skills",
      "Tailored major recommendations based on inputs",
      "Responsive and accessible design for all devices",
      "Smooth animations and transitions using Framer Motion",
      "Clean navigation and user-friendly interface",
    ],

    Challenges:
      "Designing an engaging experience that accurately guides students required balancing interactive UI elements with clear, concise recommendations. Ensuring responsiveness and accessibility across devices was also a key focus.",

    outcome:
      "Delivered a polished, intuitive platform that helps students make informed decisions about their college majors. The website is visually appealing, accessible, and provides a seamless user experience.",

    imageUrl: students,
    liveLink: "",
    gitHubLink: "",
    youtubeLink: "",
    isFinished: false,
  },
];
