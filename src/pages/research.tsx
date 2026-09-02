import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/ui/scroll-reveal";

const papers = [
  {
    title: "Embedded Deep Learning to Aid the Mobility of Individuals with Disabilities: A Solution for In-House Bus Line Recognition",
    conference: "ICT Innovations 2023",
    url: "https://proceedings.ictinnovations.org/attachment/paper/559/embedded-deep-learning-to-aid-the-mobility-of-individuals-with-disabilities-a-solution-for-in-house-bus-line-recognition.pdf",
    description: "Research on using embedded deep learning systems to help individuals with disabilities navigate in-house bus transportation. Developed a computer vision solution for real-time bus line recognition within indoor environments.",
    topics: ["Deep Learning", "Computer Vision", "Embedded Systems", "Accessibility"],
    color: "bg-chart-5",
  },
  {
    title: "Embedded Deep Learning to Support Hearing Loss Mobility: In-House Speaking Assistant",
    conference: "ICT Innovations 2023",
    url: "https://proceedings.ictinnovations.org/attachment/paper/560/embedded-deep-learning-to-support-hearing-loss-mobility-in-house-speaking-assistant.pdf",
    description: "Research on developing an embedded speaking assistant for individuals with hearing loss in indoor environments. Combines natural language processing with embedded systems to provide real-time speech-to-text and contextual assistance.",
    topics: ["Deep Learning", "NLP", "Embedded Systems", "Accessibility"],
    color: "bg-chart-2",
  },
];

const Research = () => {
  return (
    <Layout>
      <ScrollReveal>
        <motion.h1
          className="text-5xl lg:text-7xl font-heading mb-4"
          style={{ rotate: -1 }}
          whileHover={{ rotate: 0 }}
        >
          Research
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-12">
          Published academic papers in the field of Embedded Deep Learning, focusing on solutions to aid the mobility of individuals with disabilities.
        </p>
      </ScrollReveal>

      <StaggerChildren className="grid gap-8 md:grid-cols-2">
        {papers.map((paper, index) => (
          <StaggerItem key={index}>
            <motion.div
              style={{ rotate: (index % 2 === 0 ? -2 : 2) }}
              whileHover={{ rotate: [0, -8, 12, -5, 8, 0], scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <Card className={`${paper.color} h-full`}>
                <CardContent className="pt-8 pb-8">
                  <div className="text-sm font-bold opacity-70 mb-3 uppercase tracking-wide">
                    {paper.conference}
                  </div>
                  <h2 className="text-2xl font-heading mb-4">{paper.title}</h2>
                  <p className="text-base mb-6">{paper.description}</p>
                  <div className="flex flex-wrap gap-1 mb-6">
                    {paper.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs font-bold border-2 border-black px-2 py-1 bg-white"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <a href={paper.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <Button variant="outline" className="w-full bg-white">
                      Read Paper
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Layout>
  );
};

export default Research;
