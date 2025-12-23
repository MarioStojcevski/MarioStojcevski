export interface SpeakingEvent {
  title: string;
  date: string;
  location: string;
  type: string;
  description?: string;
  topic?: string;
  url?: string;
}

export interface Workshop {
  title: string;
  date: string;
  location: string;
  type: string;
  description?: string;
  topics?: string[];
  url?: string;
}

export const speakingEvents: SpeakingEvent[] = [
  // BeerJS events
  // Example structure - update with actual details:
  // {
  //   title: "Your Talk Title",
  //   date: "November 7, 2024",
  //   location: "Base42, Skopje",
  //   type: "BeerJS",
  //   description: "Description of your talk",
  //   topic: "Your topic",
  //   url: "https://beerjs.mk"
  // },
  
  // WhatTheStack events
  // {
  //   title: "Your Talk Title",
  //   date: "September 14, 2024",
  //   location: "MKC, Skopje",
  //   type: "WhatTheStack",
  //   description: "Description of your talk",
  //   topic: "Your topic",
  //   url: "https://2024.wts.sh"
  // },
];

export const workshops: Workshop[] = [
  // Creative Hub courses
  // Example structure - update with actual details:
  // {
  //   title: "Your Workshop Title",
  //   date: "Date",
  //   location: "Creative Hub, Skopje",
  //   type: "Workshop",
  //   description: "Description of your workshop",
  //   topics: ["Topic 1", "Topic 2", "Topic 3"],
  //   url: "https://creativedigitalhub.academy"
  // },
  
  // CodeChem workshops
  // {
  //   title: "Your Workshop Title",
  //   date: "Date",
  //   location: "Location",
  //   type: "CodeChem Workshop",
  //   description: "Description",
  //   topics: ["Topic 1", "Topic 2"],
  //   url: "https://codechem.com"
  // },
];

