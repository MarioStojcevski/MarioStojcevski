import { useState } from "react";
import Layout from "@/components/layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GameModal } from "@/components/ui/modal";

interface Game {
  title: string;
  url: string;
  description?: string;
  color: string;
}

const games: Game[] = [
  {
    title: "GTA San Andreas Mini Game",
    url: "https://mariostojcevski.github.io/gta-san-andreas-mini-game/",
    description: "A mini game inspired by GTA San Andreas. Fuuull of bugs!",
    color: "bg-chart-2",
  },
  {
    title: "Phaser3 Memory Game",
    url: "https://mariostojcevski.github.io/phaser3-memory-game/",
    description: "A memory card matching game built with Phaser3.",
    color: "bg-chart-3",
  },
];

const Games = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayClick = (game: Game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGame(null);
  };

  return (
    <Layout>
      <div className="max-w-6xl">
        <h1 className="text-5xl lg:text-6xl font-bold text-chart-5 mb-8">
          Games
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Some games I've built. They're full of bugs, so bring your patience with you! 🎮
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {games.map((game) => (
            <Card key={game.title} className={`${game.color} border-2 border-black cursor-pointer transition-all hover:translate-x-1 hover:translate-y-1`}>
              <CardHeader>
                <h2 className="text-2xl font-bold">{game.title}</h2>
              </CardHeader>
              <CardContent className="p-6">
                {game.description && (
                  <p className="text-gray-700 mb-6">{game.description}</p>
                )}
                <Button
                  onClick={() => handlePlayClick(game)}
                  className="w-full cursor-pointer"
                >
                  Play Game 🎮
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {selectedGame && (
        <GameModal
          game={selectedGame}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </Layout>
  );
};

export default Games;

