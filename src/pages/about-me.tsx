import Layout from "@/components/layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MultiStemAudioPlayer } from "@/components/ui/multi-stem-audio-player";

const AboutMe = () => {
  return (
    <Layout>
      <div className="w-full">
        <h1 className="text-5xl lg:text-6xl font-bold text-chart-5 mb-8">
          About Me
        </h1>

        <div className="space-y-8 mb-12">

          <div>
            <h2 className="text-3xl font-bold mb-4">My Passions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-chart-5 border-2 border-black">
                <CardHeader>
                  <h3 className="text-xl font-bold">🏔️ Hiking</h3>
                </CardHeader>
                <CardContent className="pb-8">
                  <p className="text-gray-700">
                    I love exploring nature trails and mountains. There's something peaceful 
                    about being in nature that helps me recharge and find inspiration.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-chart-2 border-2 border-black">
                <CardHeader>
                  <h3 className="text-xl font-bold">🧗 Rock Climbing</h3>
                </CardHeader>
                <CardContent className="pb-8">
                  <p className="text-gray-700">
                    Rock climbing challenges me both physically and mentally. It teaches 
                    problem-solving, patience, and pushing beyond limits.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-chart-4 border-2 border-black">
                <CardHeader>
                  <h3 className="text-xl font-bold">🚴 Cycling</h3>
                </CardHeader>
                <CardContent className="pb-8">
                  <p className="text-gray-700">
                    Whether it's road cycling or mountain biking, I enjoy the freedom and 
                    adventure that comes with exploring on two wheels.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Beyond Code</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              When I'm not coding, you'll find me outdoors pursuing my passions. These activities 
              keep me balanced and bring fresh perspectives to my work. They remind me that 
              problem-solving isn't just about code—it's about approaching challenges with 
              creativity and determination.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I'm also an audio engineer actively making music, mostly boom bap hip hop and experimental electronic music. 
              Music production allows me to combine my technical skills with artistic expression, creating 
              something that resonates on a different level than code.
            </p>
            
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-4">Music</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I'm also a certified audio engineer from{" "}
                <a
                  href="https://www.google.com/maps/search/DNS+Production+Skopje"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  DNS Production Skopje
                </a>
                .
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Here's one of many projects I worked on
              </p>
              <MultiStemAudioPlayer
                stems={[
                  { title: "drums", src: "/audio/parking_demo - 0001 - Group - Drums Group.mp3" },
                  { title: "muzika", src: "/audio/muzika -  - Output - Stereo Out.mp3" },
                  { title: "vokali", src: "/audio/parking_demo - 0011 - Group - Vocals Group.mp3" },
                  { title: "DOBACKII", src: "/audio/parking_demo - 0012 - Group - DOBACKI  Group.mp3" },
                  { title: "Chorusche", src: "/audio/parking_demo - 0029 - Group - Chorus Group.mp3" },
                ]}
              />
            </div>
          </div>

          <div className="border-2 border-black rounded-base bg-main p-6">
            <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-700 mb-4">
              Interested in collaborating or just want to chat? Feel free to reach out!
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.linkedin.com/in/mariostojcevski" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Badge className="text-base px-4 py-2 cursor-pointer bg-[#0077B5] text-white border-[#0077B5] hover:bg-[#005885] hover:border-[#005885] transition-all">
                  LinkedIn
                </Badge>
              </a>
              <a 
                href="https://github.com/mariostojcevski" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Badge className="text-base px-4 py-2 cursor-pointer bg-[#24292e] text-white border-[#24292e] hover:bg-[#181717] hover:border-[#181717] transition-all">
                  GitHub
                </Badge>
              </a>
              <a href="mailto:mariostojcevski@gmail.com" className="cursor-pointer">
                <Badge className="text-base px-4 py-2 cursor-pointer bg-pink-500 text-white border-pink-500 hover:bg-pink-600 hover:border-pink-600 transition-all">
                  Email
                </Badge>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;