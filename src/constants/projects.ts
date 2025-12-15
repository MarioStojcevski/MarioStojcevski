import type { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "Video Editing Platform",
    description: "A web-based video editing platform that allows users to easily create and edit videos in real-time using templates. Built with React and serverless AWS Lambda for video production.",
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
      "Real-time video rendering with Remotion",
      "Serverless architecture reducing costs by 60%",
      "Template-based editing system for non-technical users"
    ]
  },
  {
    title: "Image Standardization Tool",
    description: "A web-based image editor for product listings that allows users to generate standardized images meeting specific platform regulations. Integrates platform's API.",
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
      "Automated image processing pipeline",
      "Multi-platform API integration",
      "Batch processing capabilities"
    ]
  },
  {
    title: "Modular CRM System",
    description: "A modular CRM system with a resume builder module that helps manage resumes for employees. Built to be mobile responsive and easily adaptable to other companies.",
    responsibilities: [
      "Development",
      "Software Architecture"
    ],
    technologies: [
      "NextJS",
      "Strapi",
      "NodeJS",
      "PostgreSQL"
    ],
    image: "https://i.pinimg.com/736x/b2/e7/80/b2e780e5063d954a1c016a6623627ecf.jpg",
    year: "2022",
    status: "Completed",
    highlights: [
      "Modular architecture for easy customization",
      "Mobile-first responsive design",
      "Resume builder with export functionality"
    ]
  },
  {
    title: "Student Registration System",
    description: "A government system for automating student registration in primary and secondary schools. The system handles competition forms, stores data, and outputs results.",
    responsibilities: [
      "Development",
      "Software Architecture"
    ],
    technologies: [
      "Angular",
      "Java Spring",
      "PostgreSQL"
    ],
    image: "https://i.pinimg.com/736x/ff/f3/74/fff37403b5f35cc7d87dc86b2cdcd9e4.jpg",
    year: "2021",
    status: "Completed",
    client: "Government Institution",
    highlights: [
      "Handles thousands of student registrations",
      "Automated form processing",
      "Secure data storage and reporting"
    ]
  },
  {
    title: "LinkedIn Profile Scraper Extension",
    description: "An in-house Chrome extension developed for scraping profile data off a professional networking site and converting it into JSON objects using AI tools.",
    responsibilities: [
      "Development"
    ],
    technologies: [
      "Chrome Extension",
      "OpenAI"
    ],
    image: "https://i.pinimg.com/736x/7e/92/bf/7e92bf885410ac57b403b1d708accf92.jpg"
  },
  {
    title: "E-commerce Platform for HVAC Products",
    description: "An e-commerce site built for selling and servicing air conditioning units and related products.",
    responsibilities: [
      "Development"
    ],
    technologies: [
      "WordPress"
    ],
    image: "https://i.pinimg.com/736x/e3/c6/25/e3c625daa1992ed1737f5f2cb5c8c0bb.jpg"
  },
  {
    title: "eestec.mk",
    description: "Enhanced website integrated with a JavaScript framework to provide better user experience and performance.",
    responsibilities: [
      "Development"
    ],
    technologies: [
      "WordPress",
      "React"
    ],
    image: "https://eestecpatras.gr/wp-content/uploads/2020/09/eesteceurope.svg-1024x783.png"
  },
  {
    title: "IoT Temperature Monitoring System",
    description: "Worked on web applications communicating with IoT devices for monitoring temperature-sensitive storage.",
    responsibilities: [
      "Development"
    ],
    technologies: [
      "Node.js",
      "React.js",
      "AWS",
      "MQTT"
    ],
    image: "https://i.pinimg.com/736x/76/8f/fc/768ffcfb71bbd701c318d2fee8362639.jpg"
  },
  {
    title: "Personal Portfolio",
    description: "A personal website to showcase resume, technical projects, soft skills training, and creative endeavors such as music production and programming projects.",
    responsibilities: [
      "Development"
    ],
    technologies: [
      "JavaScript",
      "HTML",
      "CSS"
    ],
    url: "http://mariostojcevski.com/",
    image: "https://i.pinimg.com/1200x/2b/27/38/2b273887b6df3de4a38567a68be61cbf.jpg",
    year: "2024",
    status: "Completed",
    highlights: [
      "Neobrutalism design aesthetic",
      "Responsive and performant",
      "Showcases multiple creative disciplines"
    ]
  },
  {
    title: "Deep Learning Research for Accessibility",
    description: "Published academic papers in the field of Deep Learning, addressing solutions for aiding the mobility of individuals with disabilities.",
    responsibilities: [
      "Research"
    ],
    technologies: [
      "Deep Learning"
    ],
    image: "https://i.pinimg.com/736x/82/2c/fb/822cfb28176afc20a0a0743baf99e7e9.jpg"
  }
];

export default projects;
