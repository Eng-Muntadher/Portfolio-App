import type { Project } from "@/app/_types/dataTypes";
import maVault from "@/app/assets/mavault.png";
import jobTracker from "@/app/assets/jobtracker.png";
import portfolio from "@/app/assets/portfolio.png";
import majorCompass from "@/app/assets/majorcompass.png";
import studentsManager from "@/app/assets/studentsManager.png";
import majorCompassDashboard from "@/app/assets/major-compass-dashboard.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "Major Compass",
    slug: "major-compass",
    subTitle: "AI-Powered College Major Selection Platform",
    description:
      "A comprehensive web application that helps students make informed decisions about choosing the right college major. Built specifically for Iraqi students with localized data about Iraqi universities, Major Compass combines intelligent AI-powered recommendations with an intuitive bilingual (English/Arabic) user experience to guide students through the complex process of major selection.",
    technologiesUsed: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase SSR",
      "PostgreSQL",
      "OpenAI GPT-4o-mini API",
      "Radix UI",
      "Context API",
      "React Hot Toast",
      "React Markdown",
      "Lucide Icons",
    ],
    keyFeatures: [
      "AI-powered student assessment test analyzing interests, skills, and goals",
      "Intelligent chatbot assistant using OpenAI ChatGPT API for real-time guidance",
      "Comprehensive major database with dynamic filtering, sorting, and search",
      "Side-by-side major comparison tool with URL-based state persistence",
      "User authentication via Supabase with email confirmation and Google OAuth",
      "Full bilingual support (English/Arabic) with dynamic content fetching",
      "Save favorite majors and personalized recommendations",
      "Incremental Static Generation (ISR) and server-side rendering for optimal performance",
      "Fully responsive design with smooth animations and accessibility support",
    ],
    Challenges:
      "Building a bilingual platform with dynamic content switching required careful database schema design and efficient query optimization. Implementing URL-based filter state persistence while maintaining SEO-friendly routes needed a balance between static and dynamic rendering strategies. Integrating OpenAI API for personalized recommendations while managing API costs and response times was crucial. Handling authentication flows with Supabase SSR in Next.js App Router, especially OAuth callbacks and protected routes, required deep understanding of server components and middleware.",
    outcome:
      "Successfully launched a production-ready platform that bridges the information gap for students choosing college majors. The app delivers fast, SEO-optimized pages through strategic use of ISR and SSR, provides intelligent AI guidance through ChatGPT integration, and offers seamless bilingual experience. The platform serves Iraqi students with localized university data while remaining accessible to international users, demonstrating the power of modern web technologies in solving real-world educational challenges.",
    imageUrl: majorCompass,
    liveLink: "https://my-major-compass.vercel.app",
    gitHubLink: "https://github.com/Eng-Muntadher/Major-Compass",
    youtubeLink: "https://youtube.com/watch?v=9_FGSfCyxHw&feature=youtu.be",
    figmaLink:
      "https://www.figma.com/design/gm8by2LB14qytVDY1FQIbv/College-Major-App-Design?node-id=0-1&p=f&t=FKbNg65qMxZUNmAs-0",
    isFinished: true,
  },

  {
    id: 2,
    title: "MA Vault",
    slug: "ma-vault",
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
    youtubeLink: "https://youtu.be/i7olw6nLtrA?si=y0nEU4Pa603foTKK",
    figmaLink:
      "https://www.figma.com/design/fN0jn4IeJC3jrNPjTNmX0M/MA-Vault?t=gCRPkwud0Hbc3Jej-0",
    isFinished: true,
  },

  {
    id: 3,
    title: "Job Tracker",
    slug: "job-tracker",
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
    youtubeLink: "https://youtu.be/jt0IO6CTkw4?si=Rv3eq8Q020tTHo9I",
    figmaLink:
      "https://www.figma.com/design/mpsBxlJ4se2CLcwh9es5M3/Job-Application-Tracker?node-id=10-38552&p=f&t=tReQciv5etDKg8Ec-0",
    isFinished: true,
  },

  {
    id: 4,
    title: "Student Management System",
    slug: "student-management-system",
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
    youtubeLink: "https://youtu.be/-qiwMc3VMCw?si=VKpItWM6p5tTrbqg",
    isFinished: true,
  },

  {
    id: 5,
    title: "Portfolio Website",
    slug: "portfolio-website",
    subTitle:
      "A modern, responsive showcase of my frontend development journey, skills, and projects.",

    description:
      "My personal portfolio website highlights my technical skills, featured projects, educational background, and professional accomplishments. Built with performance, accessibility, and user experience in mind, it features smooth page transitions, responsive design, and interactive components, all built with modern web technologies.",

    technologiesUsed: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Hot Toast",
      "EmailJs",
      "Lucide Icons",
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
    youtubeLink: "https://www.youtube.com/shorts/L7H_s2v_TY8?feature=share",
    figmaLink:
      "https://www.figma.com/design/1LNGOAX1BV4PI1sEHHiqBD/Portfolio-Web-App-Design?node-id=3-13162&m=dev",
    isFinished: true,
  },

  {
    id: 6,
    title: "Major Compass Admin Dashboard",
    slug: "major-compass-admin-dashboard",
    subTitle: "Content Management System for Major Compass",
    description:
      "A dedicated administrative dashboard for managing the Major Compass platform's content and data. Built with React and TypeScript, this CMS allows authorized administrators to add, edit, and manage comprehensive major data across both English and Arabic languages. The dashboard features robust form validation, role-based access control, and real-time database synchronization with the main Major Compass application.",
    technologiesUsed: [
      "React",
      "TypeScript",
      "React Router",
      "React Query (TanStack Query)",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "React Hook Form",
      "Zod",
      "React Hot Toast",
      "Lucide Icons",
    ],
    keyFeatures: [
      "Role-based authentication and authorization with admin-only access",
      "Comprehensive major data entry forms with bilingual support (English/Arabic)",
      "Advanced form validation using React Hook Form and Zod schemas",
      "Optimistic updates and efficient caching with React Query",
      "Real-time CRUD operations synced with Major Compass database",
      "Data table with client-side sorting, filtering, and pagination",
      "Image upload and management for major illustrations",
      "Draft and publish workflow for content review",
      "Toast notifications for user feedback using React Hot Toast",
      "Protected routes with React Router for secure navigation",
      "Input validation for maintaining data consistency across languages",
    ],
    Challenges:
      "Implementing bilingual form validation required creating sophisticated Zod schemas that ensure data completeness in both English and Arabic while handling right-to-left (RTL) text input gracefully. Managing complex relational data for majors, universities, and categories needed careful state management with React Query's cache invalidation strategies. Building an intuitive UX for bulk data entry without overwhelming administrators with forms was challenging. Coordinating React Router's navigation with React Query's data fetching and Supabase's authentication state required thoughtful architecture to prevent race conditions and ensure secure route protection.",
    outcome:
      "Insha'Allah, this dashboard will streamline the content management workflow for Major Compass, enabling efficient addition and maintenance of major data across multiple Iraqi universities. React Query's intelligent caching and background refetching will provide a snappy admin experience while keeping data fresh. The combination of React Hook Form with Zod validation ensures data quality and consistency across both languages. By building with React's component-based architecture, the dashboard remains maintainable and scalable as Major Compass grows to include more universities and majors.",
    imageUrl: majorCompassDashboard,
    isFinished: false,
  },
];
