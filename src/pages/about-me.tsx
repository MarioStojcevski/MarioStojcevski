import { useState } from "react";
import Layout from "@/components/layout";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MultiStemAudioPlayer } from "@/components/ui/multi-stem-audio-player";
import { ImageGalleryModal } from "@/components/ui/modal";
import { PageHeader } from "@/components/ui/page-header";
import { QUICK_LINKS_EXTENDED } from "@/constants/social";
import { borderBlack } from "@/lib/styles";

const AboutMe = () => {
  const [openModal, setOpenModal] = useState<"hiking" | "rock-climbing" | "cycling" | null>(null);

  const hikingImages = [
    "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
  ];

  const rockClimbingImages = [
    "/rocks/rock1.jpg",
    "/rocks/rock2.jpg",
  ];

  const cyclingImages = [
    "/bikes/bike1.jpg",
    "/bikes/bike2.jpg",
    "/bikes/bike3.jpg",
    "/bikes/bike4.jpg",
  ];

  return (
    <Layout>
      <div className="w-full">
        <PageHeader
          title="About Me"
          titleClassName="text-6xl lg:text-7xl font-bold text-chart-5 mb-8"
        />

        <div className="space-y-8 mb-12">

          <div>
            <h2 className="text-4xl font-bold mb-4">My Passions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card 
                className={`bg-chart-5 ${borderBlack} cursor-pointer hover:shadow-[8px_8px_0px_0px_rgba(50,50,50,1)] transition-all`}
                onClick={() => setOpenModal("hiking")}
              >
                <CardHeader>
                  <h3 className="text-2xl font-bold">🏔️ Hiking</h3>
                </CardHeader>
                <CardContent className="pb-8">
                  <p className="text-base text-gray-700">
                    I love exploring nature trails and mountains. There's something peaceful 
                    about being in nature that helps me recharge and find inspiration.
                  </p>
                </CardContent>
              </Card>

              <Card 
                className={`bg-chart-2 ${borderBlack} cursor-pointer hover:shadow-[8px_8px_0px_0px_rgba(50,50,50,1)] transition-all`}
                onClick={() => setOpenModal("rock-climbing")}
              >
                <CardHeader>
                  <h3 className="text-2xl font-bold">🧗 Rock Climbing</h3>
                </CardHeader>
                <CardContent className="pb-8">
                  <p className="text-base text-gray-700">
                    Rock climbing challenges me both physically and mentally. It teaches 
                    problem-solving, patience, and pushing beyond limits.
                  </p>
                </CardContent>
              </Card>

              <Card 
                className={`bg-chart-4 ${borderBlack} cursor-pointer hover:shadow-[8px_8px_0px_0px_rgba(50,50,50,1)] transition-all`}
                onClick={() => setOpenModal("cycling")}
              >
                <CardHeader>
                  <h3 className="text-2xl font-bold">🚴 Cycling</h3>
                </CardHeader>
                <CardContent className="pb-8">
                  <p className="text-base text-gray-700">
                    Whether it's road cycling or mountain biking, I enjoy the freedom and 
                    adventure that comes with exploring on two wheels.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-4">Beyond Code</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              When I'm not coding, you'll find me outdoors pursuing my passions. These activities 
              keep me balanced and bring fresh perspectives to my work. They remind me that 
              problem-solving isn't just about code—it's about approaching challenges with 
              creativity and determination.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              I'm also an audio engineer actively making music, mostly boom bap hip hop and experimental electronic music. 
              Music production allows me to combine my technical skills with artistic expression, creating 
              something that resonates on a different level than code.
            </p>
            
            <div className="mt-6">
              <h3 className="text-3xl font-bold mb-4">Music</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
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
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
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

          <Footer
            title="Let's Connect"
            description="Interested in collaborating or just want to chat? Feel free to reach out!"
            quickLinks={QUICK_LINKS_EXTENDED}
            showEmail
          />
        </div>
      </div>

      <ImageGalleryModal
        title="🏔️ Hiking"
        images={hikingImages}
        isOpen={openModal === "hiking"}
        onClose={() => setOpenModal(null)}
      />
      <ImageGalleryModal
        title="🧗 Rock Climbing"
        images={rockClimbingImages}
        isOpen={openModal === "rock-climbing"}
        onClose={() => setOpenModal(null)}
      />
      <ImageGalleryModal
        title="🚴 Cycling"
        images={cyclingImages}
        isOpen={openModal === "cycling"}
        onClose={() => setOpenModal(null)}
      />
    </Layout>
  );
};

export default AboutMe;