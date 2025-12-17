import maVault from "../assets/mavault.png";
import jobTracker from "../assets/jobtracker.png";
import portfolio from "../assets/portfolio.png";
import studentsHelper from "../assets/studenthelper.png";
import studentsManager from "../assets/studentsManager.png";

import type { Project } from "../types/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "MA Vault",
    subTitle:
      "A personal image gallery app with authentication, social features, and optimized media performance.",

    description:
      "MA Vault is a full-featured image gallery platform built with a focus on performance, accessibility, and a smooth user experience. It includes secure Supabase authentication with email confirmation, optimized image handling with WebP and HEIC format conversion, and a responsive interface enhanced by Framer Motion animations. This is a personal project where I showcase my own images and allow users to upload theirs. Built to merge my photography and web development passions.",

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
      "Authentication & authorization with Supabase",
      "Supabase email authentication with confirmation flow",
      "Image upload, like, and comment system for authenticated users",
      "Views tracking system for all images",
      "Smart upload system supporting HEIC, PNG, JPEG, and JPG formats",
      "Client-side image optimization and WebP conversion for uploads",
      "Drag-and-drop image uploads with form validation",
      "Advanced data Caching with React Query",
      "Infinite scrolling using React Virtual with pagination for large galleries",
      "Image search, filtering, and sorting for fast content discovery",
      "User profile customization including personal info and profile picture",
      "Command palette with search and full-page navigation",
      "Responsive UI with smooth animations powered by Framer Motion",
      "Comprehensive error handling with toast notifications",
      "Dark mode support",
      "Accessibility-focused code",
    ],

    Challenges:
      "Building a platform that handles many large images efficiently required implementing compression, optimized formats, and careful caching with React Query (especially for infinite scroll) as well as a good data base design. Integrating Supabase authentication with a smooth UX and ensuring fast performance across devices also presented unique challenges.",

    outcome:
      "Delivered a polished and responsive image gallery app that feels both personal and social with a seamless user experience across devices. Achieved up to 40% reduction in storage size by using webp image conversion and greatly improved load times through advanced media handling with React query + React Virtual.",

    imageUrl: maVault,
    liveLink: "https://ma-vault.vercel.app/home",
    gitHubLink: "https://github.com/Eng-Muntadher/MAVault",
    youtubeLink: "",
    figmaLink:
      "https://www.figma.com/design/fN0jn4IeJC3jrNPjTNmX0M/MA-Vault?t=gCRPkwud0Hbc3Jej-0",
    isFinished: true,
  },

  {
    id: 2,
    title: "Job Application Tracker",
    subTitle:
      "A scalable job management system with AI assistance integration, real-time charts analytics, and secure authentication.",

    description:
      "A full-featured job application tracker platform designed to help users efficiently manage and monitor their job applications. The platform provides secure authentication to protect user data and ensures privacy. It offers complete CRUD functionality, allowing users to create, read, update, and delete applications with ease. An intuitive dashboard gives users a clear overview of their application statuses, upcoming deadlines, and other key metrics.",
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
      "React Markdown",
      "React Error Boundary",
    ],

    keyFeatures: [
      "Full authentication & authorization with Supabase",
      "CRUD operations for job applications",
      "Real-time Pie and Line charts using Recharts",
      "OpenAI-powered assistant for intelligent task support",
      "Advanced search, sorting, and filtering",
      "Clean global state management with Redux Toolkit",
      "Advanced data caching with React Query",
      "User profile CRUD oprations & user avatar upload",
      "Notifications using React Hot Toast",
      "Dark theme support",
      "Responsive and accessible UI",
      "Form validation",
      "Error boundaries and error handling",
      "Accessibility-focused code",
    ],

    Challenges:
      "Ensuring smooth chart animations while handling real-time data required careful performance optimizations. Integrating an AI assistant and building a scalable state management structure also introduced architectural challenges.",

    outcome:
      "Created a powerful full stack and user-friendly platform that simplifies job tracking and enhances productivity. The app delivers fast performance, clear analytics, and an AI-enhanced workflow that provides real value to users.",

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
      "My personal portfolio website highlights my technical skills, featured projects, educational background, and professional accomplishments. Built with performance, accessibility, and user experience in mind, it features smooth page transitions, responsive design, and interactive components, all built with modern web technologies.",

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
      "Smooth page transitions and animations using Framer Motion",
      "Contact form with validation and email functionality",
      "SEO optimized with semantic HTML and meta tags",
      "Clean and intuitive navigation",
      "Dark mode support",
      "Accessibility-focused code",
    ],

    Challenges:
      "Designing a portfolio that effectively represents my journey while maintaining excellent performance and accessibility. Implementing smooth animations, responsive layouts, and email functionality without sacrificing speed was a key challenge.",

    outcome:
      "Created a polished, professional portfolio that showcases my skills, projects, and growth as a frontend developer. The website delivers a seamless experience across devices and has become a central part of my personal online brand.",

    imageUrl: portfolio,
    liveLink: "https://muntadher-ahmed.vercel.app",
    gitHubLink: "https://github.com/Eng-Muntadher/Portfolio-App",
    youtubeLink: "",
    figmaLink:
      "https://www.figma.com/design/1LNGOAX1BV4PI1sEHHiqBD/Portfolio-Web-App-Design?node-id=3-13162&m=dev",
    isFinished: true,
  },

  {
    id: 4,
    title: "Student Management System",
    subTitle:
      "A school management system with SQL-heavy data operations and a lightweight Python backend.",

    description:
      "A web-based student management system designed to help schools track students, classes, and academic performance. The application relies heavily on SQL queries for data retrieval and manipulation, combined with a lightweight Python backend and a vanilla JavaScript frontend to deliver a practical and efficient solution.",

    technologiesUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "SQL / MySQL",
      "Local Server (XAMPP)",
    ],

    keyFeatures: [
      "Student records management with full CRUD operations",
      "Advanced SQL queries for tracking grades, classes, and performance",
      "Relational database design for students, classes, and tests",
      "Lightweight Python backend for database communication",
      "Dynamic UI updates using vanilla JavaScript",
      "Data consistency handling between related entities via SQL joins",
      "Theme toggle support",
    ],

    Challenges:
      "This project was heavily query-driven, requiring complex SQL logic to retrieve, join and update related data efficiently. Connecting the database to a Python backend, managing relationships between tables, and keeping frontend data in sync introduced significant challenges. Debugging queries, handling edge cases, and ensuring data integrity across operations demanded careful planning and testing.",

    outcome:
      "Delivered a functional and reliable school management system that demonstrates skills in SQL, backend integration, and full data flow from database to UI. The project highlights the ability to design relational databases, write complex queries, and connect a frontend application to a backend service built from scratch.",

    imageUrl: studentsManager,
    gitHubLink: "https://github.com/Eng-Muntadher/Student-Management-System",
    liveLink: "none",
    isFinished: true,
  },

  {
    id: 5,
    title: "Undecided yet",
    subTitle:
      "A web platform to assist students in choosing the right college major based on interests and skills.",

    description:
      "This will be an AI integrated web application designed to guide students in selecting a suitable college major. It provides a user-friendly interface where students can input preferences, explore majors, and receive tailored recommendations. The project focuses on performance, accessibility, and delivering a clear, intuitive experience.",

    technologiesUsed: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "React Query",
      "Lucid Icons",
      "Supabase",
      "ChatGpt Api",
      "more",
    ],

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

    imageUrl: studentsHelper,
    liveLink: "",
    gitHubLink: "",
    youtubeLink: "",
    isFinished: false,
  },
];
