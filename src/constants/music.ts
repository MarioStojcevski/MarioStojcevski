export interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  src: string;
  hasStems: boolean;
}

export const tracks: Track[] = [
  {
    id: 1,
    title: "Parking",
    artist: "Ziper",
    duration: "3:42",
    src: "/audio/parking_demo - 0001 - Group - Drums Group.mp3",
    hasStems: true,
  },
  {
    id: 2,
    title: "Midnight Drive",
    artist: "Mario S.",
    duration: "4:15",
    src: "",
    hasStems: false,
  },
  {
    id: 3,
    title: "Urban Flow",
    artist: "Mario S.",
    duration: "3:58",
    src: "",
    hasStems: false,
  },
  {
    id: 4,
    title: "Neon Lights",
    artist: "Mario S.",
    duration: "5:01",
    src: "",
    hasStems: false,
  },
  {
    id: 5,
    title: "Deep Blue",
    artist: "Mario S.",
    duration: "4:33",
    src: "",
    hasStems: false,
  },
  {
    id: 6,
    title: "Concrete Jungle",
    artist: "Mario S.",
    duration: "3:27",
    src: "",
    hasStems: false,
  },
  {
    id: 7,
    title: "Sunrise",
    artist: "Mario S.",
    duration: "4:48",
    src: "",
    hasStems: false,
  },
  {
    id: 8,
    title: "Echoes",
    artist: "Mario S.",
    duration: "3:55",
    src: "",
    hasStems: false,
  },
  {
    id: 9,
    title: "Gravity",
    artist: "Mario S.",
    duration: "4:20",
    src: "",
    hasStems: false,
  },
  {
    id: 10,
    title: "Last Train Home",
    artist: "Mario S.",
    duration: "5:12",
    src: "",
    hasStems: false,
  },
];

export interface Stem {
  title: string;
  src: string;
}

export const parkingStems: Stem[] = [
  { title: "Drums", src: "/audio/parking_demo - 0001 - Group - Drums Group.mp3" },
  { title: "Bass", src: "/audio/muzika -  - Output - Stereo Out.mp3" },
  { title: "Vocals", src: "/audio/parking_demo - 0011 - Group - Vocals Group.mp3" },
  { title: "Other", src: "/audio/parking_demo - 0012 - Group - DOBACKI  Group.mp3" },
  { title: "Chorus", src: "/audio/parking_demo - 0029 - Group - Chorus Group.mp3" },
];
