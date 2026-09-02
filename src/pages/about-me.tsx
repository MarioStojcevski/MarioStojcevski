import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImageGalleryModal } from "@/components/ui/modal";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/ui/scroll-reveal";
import { QUICK_LINKS_EXTENDED } from "@/constants/social";

const techStack = {
  "Languages": ["TypeScript", "JavaScript", "Python", "Java", "C# (.NET)", "SQL"],
  "Frontend": ["React", "Next.js", "Angular", "Vue", "NuxtJS", "MaterialUI", "DaisyUI", "ChakraUI", "ShadcnUI", "Bootstrap", "ThreeJS", "PhaserJS", "Remotion"],
  "Backend": ["Node.js", "NestJS", "Strapi", "FastAPI", "Java Spring", ".NET Core"],
  "Cloud & DevOps": ["Azure Stack", "Azure Functions", "AWS (Lambda, S3, CloudFront, EC2, IAM)", "Docker", "PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis", "RabbitMQ"],
  "AI & Agentic": ["OpenAI", "Agentic Workflows", "OpenCode", "Cursor", "Deep Learning", "Computer Vision", "Machine Learning"],
  "IoT & Protocols": ["MQTT", "Tektelic", "IoT", "DynamoDB", "AuroraDB"],
  "Other": ["Linux", "Arch Linux", "Linux Ricing", "FFmpeg", "Chrome Extensions", "Puppeteer", "Audio Engineering", "WordPress"],
};

const coreStrengths = [
  { title: "Client Listening", description: "Translating what clients actually need into actionable technical requirements", color: "bg-chart-2" },
  { title: "Full Ownership", description: "From estimation to delivery — I own the entire lifecycle of a feature", color: "bg-chart-3" },
  { title: "Team Leadership", description: "Guiding teams through complex projects while keeping everyone aligned", color: "bg-chart-5" },
];

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
        <ScrollReveal>
          <motion.h1
            className="text-5xl lg:text-7xl font-heading mb-4"
            style={{ rotate: -1 }}
            whileHover={{ rotate: 0 }}
          >
            About Me
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-12">
            Beyond the code, there's a whole world of passions and adventures.
          </p>
        </ScrollReveal>

        {/* Bio Section */}
        <ScrollReveal>
          <Card className="bg-chart-5 mb-12">
            <CardContent className="pt-8 pb-8">
              <p className="text-lg leading-relaxed mb-4">
                When I'm not coding, you'll find me outdoors pursuing my passions. These activities
                keep me balanced and bring fresh perspectives to my work. They remind me that
                problem-solving isn't just about code—it's about approaching challenges with
                creativity and determination.
              </p>
              <p className="text-lg leading-relaxed">
                I'm also an audio engineer actively making music, mostly boom bap hip hop and experimental electronic music.
                Music production allows me to combine my technical skills with artistic expression, creating
                something that resonates on a different level than code.
              </p>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* What I Bring Section */}
        <ScrollReveal>
          <h2 className="text-4xl lg:text-5xl font-heading mb-8">What I Bring</h2>
        </ScrollReveal>

        <StaggerChildren className="grid md:grid-cols-3 gap-6 mb-12">
          {coreStrengths.map((item, index) => (
            <StaggerItem key={item.title}>
              <motion.div
                style={{ rotate: (index - 1) * 2 }}
                whileHover={{ rotate: 0, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className={`${item.color} h-full`}>
                  <CardContent className="pt-8 pb-8">
                    <h3 className="text-2xl font-heading mb-3">{item.title}</h3>
                    <p className="text-base">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Tech Stack Section */}
        <ScrollReveal>
          <h2 className="text-4xl lg:text-5xl font-heading mb-8">Tech Stack</h2>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="mb-12">
            <CardContent className="pt-8 pb-8">
              <div className="space-y-6">
                {Object.entries(techStack).map(([category, techs]) => (
                  <div key={category}>
                    <h3 className="font-bold text-sm uppercase tracking-wide mb-3 text-gray-500">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <Badge key={tech} className="bg-chart-1 text-black border-black text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Hobbies Section */}
        <ScrollReveal>
          <h2 className="text-4xl lg:text-5xl font-heading mb-8">My Passions</h2>
        </ScrollReveal>

        <StaggerChildren className="grid md:grid-cols-3 gap-6 mb-12">
          <StaggerItem>
            <motion.div
              style={{ rotate: -2 }}
              whileHover={{ rotate: [0, -10, 15, -8, 10, 0], scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                className="bg-chart-2 h-full cursor-pointer"
                onClick={() => setOpenModal("hiking")}
              >
                <CardHeader>
                  <h3 className="text-3xl font-heading">Hiking</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-base">
                    I love exploring nature trails and mountains. There's something peaceful
                    about being in nature that helps me recharge and find inspiration.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              style={{ rotate: 1 }}
              whileHover={{ rotate: [0, 12, -8, 10, -5, 0], scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                className="bg-chart-3 h-full cursor-pointer"
                onClick={() => setOpenModal("rock-climbing")}
              >
                <CardHeader>
                  <h3 className="text-3xl font-heading">Rock Climbing</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-base">
                    Rock climbing challenges me both physically and mentally. It teaches
                    problem-solving, patience, and pushing beyond limits.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              style={{ rotate: 2 }}
              whileHover={{ rotate: [0, -12, 8, -10, 5, 0], scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                className="bg-chart-4 h-full cursor-pointer"
                onClick={() => setOpenModal("cycling")}
              >
                <CardHeader>
                  <h3 className="text-3xl font-heading">Cycling</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-base">
                    Whether it's road cycling or mountain biking, I enjoy the freedom and
                    adventure that comes with exploring on two wheels.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </StaggerItem>
        </StaggerChildren>

        {/* Music CTA */}
        <ScrollReveal>
          <Card className="bg-chart-1 mb-12">
            <CardContent className="pt-8 pb-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-3xl font-heading mb-2">Audio Engineer</h3>
                <p className="text-lg">
                  Certified from DNS Production Skopje. Check out my music and multi-stem demos.
                </p>
              </div>
              <Link to="/music">
                <Button className="bg-black text-white hover:bg-chart-5 whitespace-nowrap">
                  View Music
                </Button>
              </Link>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Gallery CTA */}
        <ScrollReveal>
          <Card className="bg-chart-5 mb-12">
            <CardContent className="pt-8 pb-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-3xl font-heading mb-2">Photo Gallery</h3>
                <p className="text-lg">
                  See photos from my hiking, climbing, cycling adventures and more.
                </p>
              </div>
              <Link to="/gallery">
                <Button className="bg-black text-white hover:bg-chart-2 whitespace-nowrap">
                  View Gallery
                </Button>
              </Link>
            </CardContent>
          </Card>
        </ScrollReveal>

        <Footer
          title="Let's Connect"
          description="Interested in collaborating or just want to chat? Feel free to reach out!"
          quickLinks={QUICK_LINKS_EXTENDED}
          showEmail
        />
      </div>

      <ImageGalleryModal
        title="Hiking"
        images={hikingImages}
        isOpen={openModal === "hiking"}
        onClose={() => setOpenModal(null)}
      />
      <ImageGalleryModal
        title="Rock Climbing"
        images={rockClimbingImages}
        isOpen={openModal === "rock-climbing"}
        onClose={() => setOpenModal(null)}
      />
      <ImageGalleryModal
        title="Cycling"
        images={cyclingImages}
        isOpen={openModal === "cycling"}
        onClose={() => setOpenModal(null)}
      />
    </Layout>
  );
};

export default AboutMe;
