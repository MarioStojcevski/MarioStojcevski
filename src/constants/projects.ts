import type { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "Renderdeck - Video Editing Platform",
    description: "Renderdeck is an online simple video editing tool specialized to bring the best user experience while creating beautiful videos for products. Users can export videos, download them, or publish directly to Shopify or Amazon accounts. Features a template-based system for easy video creation.",
    responsibilities: [
      "Development",
      "Software Architecture"
    ],
    technologies: [
      "NextJS",
      "Strapi",
      "NodeJS",
      "AWS Lambda",
      "S3",
      "CloudFront",
      "React",
      "TypeScript",
      "Remotion",
      "PostgreSQL"
    ],
    image: "https://i.pinimg.com/1200x/8f/c2/45/8fc245476a4b87259cb923fe9f0b2439.jpg",
    year: "2023",
    status: "Completed",
    highlights: [
      "Simple, user-friendly video editing interface",
      "Template-based video creation system",
      "Direct integration with Shopify and Amazon",
      "Export and download capabilities for product videos"
    ]
  },
  {
    title: "Lista - Amazon Design Platform",
    description: "Lista is an Amazon-centered design platform that lets VAs and Amazon businesses choose premium-looking design templates to brand their products on Amazon for free. Lista is the first and only Amazon-centered platform with templates specific to Amazon's requirements in terms of size and content. Features a design generator that creates branded listing images from product information, images, or renders, eliminating the need for manual design work. Users can fine-tune designs using a high-fidelity editor and integrate images directly to Amazon listings.",
    responsibilities: [
      "Development",
      "System Architecture"
    ],
    technologies: [
      "React",
      "Vue",
      "Strapi",
      "Puppeteer",
      "PostgreSQL",
      "AWS CloudFront",
      "Docker"
    ],
    image: "https://i.pinimg.com/736x/34/e8/43/34e84361c908d4efe592cc659db69619.jpg",
    year: "2023",
    status: "Completed",
    highlights: [
      "First and only Amazon-centered design platform",
      "Amazon-specific templates meeting size and content requirements",
      "Automated design generator - no manual design needed",
      "Input key product selling points and images to generate branded listings",
      "High-fidelity editor for fine-tuning generated designs",
      "Direct integration with Amazon listings",
      "Free premium templates for VAs and Amazon businesses"
    ]
  },
  {
    title: "C3RM - Customer Relationship Management System",
    description: "C3RM (Code Chemistry Customer Relationship Management System) is a powerful CRM platform designed to help businesses effectively manage customer relationships. Built with extensibility in mind, it features modular architecture with talent and core modules, enabling efficient customer interaction management, comprehensive data centralization, and seamless integration capabilities.",
    responsibilities: [
      "Development",
      "Software Architecture"
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
    image: "https://i.pinimg.com/736x/b2/e7/80/b2e780e5063d954a1c016a6623627ecf.jpg",
    year: "2022",
    status: "Completed",
    highlights: [
      "Modular architecture built for extensibility",
      "Talent module for recruitment and onboarding",
      "Core module for customer, project, and workforce management",
      "Centralized customer data management",
      "Streamlined sales processes and lead nurturing"
    ]
  },
  {
    title: "C3RX - Resume Builder Integration",
    description: "C3RX is a resume builder built as part of C3RM, leveraging Reactive Resume (RxResume) to enable users to create, update, and share professional resumes. Users have complete control over resume design including templates, colors, layouts, and sections. Resumes can be shared via unique links, exported as PDF, and saved directly to C3RM. Features real-time preview and dark mode support.",
    responsibilities: [
      "Development",
      "Integration"
    ],
    technologies: [
      "Reactive Resume",
      "React",
      "TypeScript",
      "C3RM Integration"
    ],
    image: "https://i.pinimg.com/736x/b2/e7/80/b2e780e5063d954a1c016a6623627ecf.jpg",
    year: "2023",
    status: "Completed",
    highlights: [
      "Integrated Reactive Resume with C3RM system",
      "Real-time resume preview and editing",
      "Multiple resume creation and management",
      "Direct save to C3RM profiles",
      "Customizable templates, colors, and layouts",
      "PDF export and shareable link functionality"
    ]
  },
  {
    title: "StudyBuddy - Course Management System",
    description: "A course management application (similar to Udemy) built with Koa.js and React. The project features comprehensive database scripts written in PL/pgSQL for managing course data, student enrollments, and learning progress. Currently in development with a focus on robust database architecture and scalable backend design.",
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
    title: "LeakyIn - LinkedIn Profile Extension",
    description: "LeakyIn is a Google Chrome browser extension that extracts LinkedIn profile data and creates hiring profiles in C3RM. The extension captures profile screenshots, uses OCR and AI to extract structured data, and seamlessly integrates with the C3RM system to create hiring profiles and candidacies. Users can check if a profile exists in C3RM and load new profiles with a single click.",
    responsibilities: [
      "Development"
    ],
    technologies: [
      "Chrome Extension",
      "React",
      "TypeScript",
      "OpenAI",
      "Tesseract OCR",
      "Tailwind CSS",
      "DaisyUI",
      "Manifest V3"
    ],
    image: "https://i.pinimg.com/736x/7e/92/bf/7e92bf885410ac57b403b1d708accf92.jpg",
    year: "2023",
    status: "Completed",
    highlights: [
      "Automated LinkedIn profile extraction and processing",
      "Screenshot-based data capture with OCR",
      "AI-powered profile structuring into JSON format",
      "Direct integration with C3RM hiring system",
      "Seamless profile creation workflow"
    ]
  },
  {
    title: "E-commerce Platform for HVAC Products",
    description: "An e-commerce platform built for selling and servicing air conditioning units and related HVAC products. The platform featured product listings, service booking, and customer management. The project is no longer active as the domain registration was discontinued.",
    responsibilities: [
      "Development"
    ],
    technologies: [
      "Angular",
      "Java",
      "Spring"
    ],
    image: "https://i.pinimg.com/736x/e3/c6/25/e3c625daa1992ed1737f5f2cb5c8c0bb.jpg",
    year: "2020",
    status: "On Hold",
    highlights: [
      "Angular frontend for user interface",
      "Java Spring backend for business logic",
      "E-commerce functionality for HVAC products",
      "Service booking and management system"
    ]
  },
  {
    title: "IoT Temperature Monitoring System",
    description: "Developed web applications for a pharmaceutical client to monitor temperature-sensitive storage environments. The system communicates with IoT devices using MQTT protocol to track and manage temperature data in real-time, ensuring compliance with storage requirements. Features include data visualization, alerting systems, and integration with existing monitoring infrastructure.",
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
    image: "https://i.pinimg.com/736x/76/8f/fc/768ffcfb71bbd701c318d2fee8362639.jpg",
    year: "2021",
    status: "Completed",
    client: "Pharmaceutical Company",
    highlights: [
      "Real-time temperature monitoring via IoT devices",
      "MQTT protocol integration for device communication",
      "Data visualization and alerting systems",
      "Compliance with storage requirements",
      "Cloud-based infrastructure on AWS"
    ]
  },
  {
    title: "mariostojcevski.com",
    description: "A personal portfolio website showcasing my work, projects, and professional journey. Built with React and React Router, featuring a neobrutalism design aesthetic with animated background blobs, colorful scrollbars, and interactive modals. The site includes sections for featured projects, games, and about me, with smooth animations and a modern UI.",
    responsibilities: [
      "Development",
      "Design",
      "UI/UX"
    ],
    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "Tailwind CSS",
      "Vite"
    ],
    url: "https://mariostojcevski.github.io/MarioStojcevski/",
    image: "https://i.pinimg.com/1200x/2b/27/38/2b273887b6df3de4a38567a68be61cbf.jpg",
    year: "2024",
    status: "Completed",
    highlights: [
      "Neobrutalism design aesthetic with bold colors and borders",
      "Animated background blobs with floating effects",
      "Interactive project modals with smooth animations",
      "Colorful and shiny custom scrollbars",
      "Responsive design with mobile-first approach",
      "GitHub Pages deployment"
    ]
  },
  {
    title: "Deep Learning Research for Accessibility",
    description: "Published academic papers in the field of Embedded Deep Learning, focusing on solutions to aid the mobility of individuals with disabilities. Research includes in-house bus line recognition systems and speaking assistants for hearing loss support, published in ICT Innovations conference proceedings.",
    responsibilities: [
      "Research",
      "Development"
    ],
    technologies: [
      "Deep Learning",
      "Embedded Systems",
      "Computer Vision",
      "Natural Language Processing"
    ],
    image: "https://i.pinimg.com/736x/82/2c/fb/822cfb28176afc20a0a0743baf99e7e9.jpg",
    year: "2023",
    status: "Completed",
    highlights: [
      "Published paper on embedded deep learning for bus line recognition",
      "Published paper on in-house speaking assistant for hearing loss mobility",
      "Research focused on accessibility and mobility aids",
      "Presented at ICT Innovations conference",
      "Collaborative research with academic team"
    ],
    url: "https://proceedings.ictinnovations.org/authors/821/mario-stojchevski"
  },
  {
    title: "Nekasveti - Chemical Cleaning Services",
    description: "A family project website for a chemical cleaning services business. Built with TypeScript and modern web technologies to provide an online presence for the cleaning services company, showcasing services, contact information, and business details.",
    responsibilities: [
      "Development",
      "Design"
    ],
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "CSS"
    ],
    image: "https://i.pinimg.com/736x/82/2c/fb/822cfb28176afc20a0a0743baf99e7e9.jpg",
    year: "2024",
    status: "In Progress",
    url: "https://github.com/MarioStojcevski/nekasveti",
    highlights: [
      "Family business website",
      "Chemical cleaning services showcase",
      "TypeScript-based development",
      "Modern web technologies"
    ]
  },
];

export default projects;
