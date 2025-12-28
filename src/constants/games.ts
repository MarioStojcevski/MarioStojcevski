export interface Game {
  title: string;
  url: string;
  description?: string;
  color: string;
  image?: string;
}

export const games: Game[] = [
  {
    title: "Korab",
    url: "https://www.youtube.com/watch?v=zzSN-z5h7sg",
    description: "This game was built with Construct3 but the project is lost, all i have is this youtube video of the playable",
    color: "bg-chart-5",
    image: "/games/korab.png",
  },
  {
    title: "GTA San Andreas Mini Game",
    url: "https://mariostojcevski.github.io/gta-san-andreas-mini-game/",
    description: "A mini game inspired by GTA San Andreas. Fuuull of bugs!",
    color: "bg-chart-2",
    image: "/games/gta-san-andreas.png",
  },
  {
    title: "Beer Memory Game",
    url: "https://mariostojcevski.github.io/phaser3-memory-game/",
    description: "A memory card matching game...matching.. beers?",
    color: "bg-chart-3",
    image: "/games/memory-beers.png",
  },
  {
    title: "TABLA_BAKI - Backgammon Game",
    url: "https://github.com/mihailDamchevski/TABLA_BAKI",
    description: "A Backgammon game project currently in development. TABLA_BAKI will be a digital implementation of the classic board game Backgammon, built with Python. The project aims to provide an engaging gaming experience with traditional Backgammon rules and gameplay mechanics.",
    color: "bg-chart-4",
  },
];

