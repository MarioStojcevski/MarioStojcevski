import type { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "Rendalone - AI Video Editing Platform",
    description: "Rendalone is an AI-powered video editing platform built as part of MamOps. It uses a Python API with FFmpeg running on a homelab server to render videos, storing them locally and returning download URLs. Features agentic video creation where users can input their own AI API keys and use their models to create and edit videos. The key differentiator: videos remain fully manually editable at every stage — no lock-in after generation. Automation and manual tweaking work together seamlessly.",
    responsibilities: [
      "Development",
      "Software Architecture",
      "DevOps"
    ],
    technologies: [
      "Python",
      "FFmpeg",
      "React",
      "TypeScript",
      "AI/LLM Integration",
      "Homelab Server"
    ],
    image: "https://images.unsplash.com/photo-1755997268370-56418ad174c2?w=800&h=600&fit=crop",
    year: "2024",
    status: "In Progress",
    highlights: [
      "Python API with FFmpeg for video rendering on homelab server",
      "Agentic AI video creation with user-provided API keys",
      "Full manual editing preserved alongside AI automation",
      "Self-hosted infrastructure for cost control",
      "Part of MamOps company platform"
    ]
  },
  {
    title: "C3RM - Customer Relationship Management",
    description: "CRM system for a company's hiring pipeline. Integrated LeakyIn browser extension to scrape LinkedIn profiles for future hires — HR can approve draft data, then the system parses full profile details, evaluates candidate fit, and creates entries in the C3RM database. Features modular architecture with talent and core modules for comprehensive customer and workforce management.",
    responsibilities: [
      "Development",
      "System Architecture",
      "Integration"
    ],
    technologies: [
      "NextJS",
      "Strapi",
      "NodeJS",
      "PostgreSQL",
      "Chakra UI",
      "TypeScript",
      "Docker"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    year: "2022",
    status: "Completed",
    highlights: [
      "Modular architecture built for extensibility",
      "LeakyIn integration for automated LinkedIn profile import",
      "AI-powered candidate evaluation and matching",
      "Talent module for recruitment and onboarding",
      "Centralized customer data management"
    ]
  },
  {
    title: "LeakyIn - LinkedIn Profile Chrome Extension",
    description: "Chrome browser extension for a company's hiring workflow. Extracts LinkedIn profile data via screenshots, uses OCR and AI to structure the information, and integrates with C3RM to create hiring profiles. HR can scrape a profile with one click, approve draft data, then get full parsing with skills evaluation and candidate-company fit scoring.",
    responsibilities: [
      "Development",
      "AI Integration"
    ],
    technologies: [
      "Chrome Extension",
      "React",
      "TypeScript",
      "OpenAI",
      "Tesseract OCR",
      "Tailwind CSS",
      "Manifest V3"
    ],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop",
    year: "2023",
    status: "Completed",
    highlights: [
      "One-click LinkedIn profile scraping",
      "OCR + AI for structured data extraction",
      "Automatic candidate-company fit evaluation",
      "Direct integration with C3RM hiring system",
      "Resume generation via Reactive Resume integration"
    ]
  },
  {
    title: "StudyBuddy - Course Management System",
    description: "A course management application (similar to Udemy) built with Koa.js and React. Features comprehensive database scripts written in PL/pgSQL for managing course data, student enrollments, and learning progress. Focus on robust database architecture and scalable backend design.",
    responsibilities: [
      "Development",
      "Database Architecture",
      "Software Architecture"
    ],
    technologies: [
      "Koa.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "PL/pgSQL",
      "Node.js"
    ],
    image: "https://i.pinimg.com/736x/ff/f3/74/fff37403b5f35cc7d87dc86b2cdcd9e4.jpg",
    year: "2021",
    status: "In Progress",
    url: "https://github.com/MarioStojcevski/study-buddy",
    highlights: [
      "Advanced PL/pgSQL database scripts for complex operations",
      "Course management and enrollment system",
      "Student progress tracking",
      "TypeScript-based architecture",
      "Scalable backend design with Koa.js"
    ]
  },
  {
    title: "IoT Temperature Monitoring System",
    description: "Web application for Boehringer Ingelheim, a major pharmaceutical company. Monitors temperature-sensitive storage fridges for drugs using IoT devices. Built an admin panel to monitor and send commands to IoT devices, ensuring compliance with storage requirements through real-time data visualization and alerting.",
    responsibilities: [
      "Development",
      "System Integration"
    ],
    technologies: [
      "Node.js",
      "React.js",
      "AWS",
      "MQTT",
      "IoT"
    ],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
    year: "2021",
    status: "Completed",
    client: "Boehringer Ingelheim",
    highlights: [
      "Real-time fridge temperature monitoring via IoT devices",
      "MQTT protocol for device communication",
      "Admin panel for device command and control",
      "Compliance with pharmaceutical storage requirements",
      "Data visualization and alerting systems"
    ]
  },
  {
    title: "mariostojcevski.com",
    description: "Personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a bold neobrutalist design with electric color palette, animated background blobs with mouse-tracking parallax, scroll-reveal animations, and a bottom dock navigation. Includes pages for projects, gallery, music player with multi-stem breakdown, blog, and community events.",
    responsibilities: [
      "Development",
      "Design",
      "UI/UX"
    ],
    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "Tailwind CSS v4",
      "Framer Motion",
      "Vite"
    ],
    url: "https://mariostojcevski.github.io/MarioStojcevski/",
    image: "https://i.pinimg.com/1200x/2b/27/38/2b273887b6df3de4a38567a68be61cbf.jpg",
    year: "2025",
    status: "Completed",
    highlights: [
      "Neobrutalist design with electric color palette",
      "Animated blobs with mouse-tracking parallax",
      "Bottom dock navigation for 10+ pages",
      "Multi-stem music player with audio decomposition",
      "Filterable masonry gallery with lightbox",
      "Scroll-reveal and page transition animations"
    ]
  },
  {
    title: "MebelMajstor - Chemical Cleaning Services",
    description: "Official live website for MebelMajstor, a chemical cleaning services business. Built with pure React and Supabase for database and API. Mobile-first approach since clients prefer a web experience over installing a dedicated app. Showcases services, contact information, and business details.",
    responsibilities: [
      "Development",
      "Design"
    ],
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "Vite"
    ],
    url: "https://github.com/MarioStojcevski/nekasveti",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
    year: "2025",
    status: "Completed",
    highlights: [
      "Live production website for real business",
      "Supabase backend for database and API",
      "Mobile-first responsive design",
      "Pure React without heavy frameworks",
      "Client-focused UX for non-technical users"
    ]
  },
];

export default projects;
