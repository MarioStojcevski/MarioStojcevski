import Layout from "@/components/layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GameModal } from "@/components/ui/modal";
import { PageHeader } from "@/components/ui/page-header";
import { games } from "@/constants/games";
import type { Game } from "@/constants/games";
import { useModal } from "@/hooks/use-modal";
import { cardHoverStyles, borderBlack } from "@/lib/styles";

const Games = () => {
  const { isOpen, selectedItem, open, close } = useModal<Game>();

  return (
    <Layout>
      <div className="space-y-8">
        <PageHeader
          title="Games"
          description="Some games I've built. They're full of bugs, so bring your patience with you! 🎮"
          titleClassName="text-6xl lg:text-7xl font-bold text-chart-5 mb-8"
        />

        <div>
          <div className="grid md:grid-cols-2 gap-8">
            {games.map((game) => (
              <Card key={game.title} className={`${game.color} ${borderBlack} ${cardHoverStyles}`}>
                {game.image && (
                  <div className={`w-full h-48 overflow-hidden ${borderBlack} rounded-t-base border-b-2`}>
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}
                <CardHeader>
                  <h2 className="text-3xl font-bold">{game.title}</h2>
                </CardHeader>
                <CardContent className="p-6">
                  {game.description && (
                    <p className="text-base text-gray-700 mb-6">{game.description}</p>
                  )}
                  <Button
                    onClick={() => open(game)}
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
      {selectedItem && (
        <GameModal
          game={selectedItem}
          isOpen={isOpen}
          onClose={close}
        />
      )}
    </Layout>
  );
};

export default Games;

