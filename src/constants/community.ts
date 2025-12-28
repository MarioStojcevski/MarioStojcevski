export interface SpeakingEvent {
  title: string;
  date: string;
  location: string;
  type: string;
  description?: string;
  topics?: string[];
  url?: string;
  image?: string;
}

export interface Workshop {
  title: string;
  date: string;
  location: string;
  type: string;
  description?: string;
  topics?: string[];
  url?: string;
  image?: string;
}

export const speakingEvents: SpeakingEvent[] = [
  {
    title: "How to code a Bootloader for an Operating system",
    date: "2020",
    location: "Online",
    type: "Tutorial",
    description: "Building a fresh boot from scratch in assembly.",
    topics: ["Assembly", "Bootloader", "Operating System", "Low-level Programming"],
    url: "https://www.youtube.com/watch?v=hbDj4qqAI3A",
    image: "./bootloader-2020/operating-system-bootloader.png"
  },
  {
    title: "BeerJS Vol. 9 - Game Development",
    date: "2023",
    location: "Public Room Skopje",
    type: "BeerJS",
    description: "Spoke at BeerJS Vol. 9, sharing insights and experiences with the local developer community.",
    topics: ["PhaserJS", "Game Development", "JavaScript"],
    url: "https://beerjs.mk",
    image: "./beerjs-2023/beerjs-vol9.jpg"
  },
  {
    title: "C3RX Presentation - Browser Extension",
    date: "2024",
    location: "Base42, Skopje",
    type: "C3RX",
    description: "Presented at C3RX event, discussing modern web technologies and best practices.",
    topics: ["Browser Extension", "Web Technologies", "Chrome Extensions"],
    image: "./c3rx-presentation/base42-c3rx.jpg"
  },
  {
    title: "What The Stack 2024 - Web Development",
    date: "2024",
    location: "MKC, Skopje",
    type: "WhatTheStack",
    description: "Spoke at What The Stack 2024 conference, sharing knowledge about the modern web development stack.",
    topics: ["Web Development", "Full Stack", "Modern Technologies"],
    url: "https://2024.wts.sh",
    image: "./what-the-stack-2024/what-the-stack-mod.jpg"
  },
];

export const workshops: Workshop[] = [
  {
    title: "Full React Course",
    date: "2024",
    location: "Creative Hub, Skopje",
    type: "Workshop",
    description: "A full React course for beginners to advanced developers. We cover the basics of React, how to use it, and how to build a real-world application.",
    topics: ["React", "JavaScript", "HTML", "CSS"],
    url: "https://creativehub.mk/",
    image: "./creative-hub-course/creative-hub.webp"
  },
  {
    title: "React Forms Workshop",
    date: "2024",
    location: "Netavile, Skopje",
    type: "Workshop",
    description: "Led a hands-on workshop focused on building and managing forms in React, covering validation, state management, and best practices.",
    topics: ["React", "Forms", "Validation"],
    image: "./react-forms-workshop/react-forms1.jpg"
  },
];

