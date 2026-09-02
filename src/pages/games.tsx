import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GameModal } from "@/components/ui/modal";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/ui/scroll-reveal";
import { games } from "@/constants/games";
import type { Game } from "@/constants/games";
import { useModal } from "@/hooks/use-modal";

const Games = () => {
  const { isOpen, selectedItem, open, close } = useModal<Game>();

  return (
    <Layout>
      <ScrollReveal>
        <motion.h1
          className="text-5xl lg:text-7xl font-heading mb-4"
          style={{ rotate: 1 }}
          whileHover={{ rotate: 0 }}
        >
          Games
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-12">
          Some games I've built. They're full of bugs, so bring your patience with you!
        </p>
      </ScrollReveal>

      <StaggerChildren className="grid md:grid-cols-2 gap-8">
        {games.map((game, index) => (
          <StaggerItem key={game.title}>
            <motion.div
              style={{ rotate: (index % 2 === 0 ? -2 : 2) }}
              whileHover={{ rotate: [0, -8, 12, -5, 8, 0], scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className={`${game.color} h-full`}>
                {game.image && (
                  <div className="w-full h-48 overflow-hidden border-b-4 border-black">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}
                <CardHeader>
                  <h2 className="text-3xl font-heading">{game.title}</h2>
                </CardHeader>
                <CardContent className="pb-8">
                  {game.description && (
                    <p className="text-base mb-6">{game.description}</p>
                  )}
                  <Button
                    onClick={() => open(game)}
                    className="w-full cursor-pointer"
                  >
                    Play Game
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerChildren>

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
