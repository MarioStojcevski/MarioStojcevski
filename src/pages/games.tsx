import { useState } from "react";
import Layout from "@/components/layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GameModal } from "@/components/ui/modal";
import { games } from "@/constants/games";
import type { Game } from "@/constants/games";
import { cardHoverStyles } from "@/lib/styles";

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
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold text-chart-5 mb-8">
            Games
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Some games I've built. They're full of bugs, so bring your patience with you! 🎮
          </p>
        </div>

        <div>
          <div className="grid md:grid-cols-2 gap-8">
            {games.map((game) => (
              <Card key={game.title} className={`${game.color} border-2 border-black ${cardHoverStyles}`}>
                {game.image && (
                  <div className="w-full h-48 overflow-hidden border-b-2 border-black rounded-t-base">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}
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

