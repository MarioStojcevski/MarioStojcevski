import Layout from "@/components/layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Games = () => {
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
          {/* GTA San Andreas Mini Game */}
          <Card className="bg-chart-2 border-2 border-black">
            <CardHeader>
              <h2 className="text-2xl font-bold">GTA San Andreas Mini Game</h2>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-[600px] border-2 border-black rounded-base overflow-hidden">
                <iframe
                  src="https://mariostojcevski.github.io/gta-san-andreas-mini-game/"
                  className="w-full h-full border-0"
                  title="GTA San Andreas Mini Game"
                  allow="gamepad; fullscreen"
                />
              </div>
            </CardContent>
          </Card>

          {/* Phaser3 Memory Game */}
          <Card className="bg-chart-3 border-2 border-black">
            <CardHeader>
              <h2 className="text-2xl font-bold">Phaser3 Memory Game</h2>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-[600px] border-2 border-black rounded-base overflow-hidden">
                <iframe
                  src="https://mariostojcevski.github.io/phaser3-memory-game/"
                  className="w-full h-full border-0"
                  title="Phaser3 Memory Game"
                  allow="gamepad; fullscreen"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Games;

