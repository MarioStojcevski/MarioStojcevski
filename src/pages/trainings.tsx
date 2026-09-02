import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/ui/event-card";
import { Modal } from "@/components/ui/modal";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/ui/scroll-reveal";
import { softSkillsTrainings } from "@/constants/trainings";

const Trainings = () => {
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  return (
    <Layout>
      <ScrollReveal>
        <motion.h1
          className="text-5xl lg:text-7xl font-heading mb-4"
          style={{ rotate: 1 }}
          whileHover={{ rotate: 0 }}
        >
          Trainings
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          Soft skills trainings and workshops I've conducted.
        </p>
      </ScrollReveal>

      {/* Certificate Card */}
      <ScrollReveal>
        <Card className="bg-chart-5 mb-12">
          <CardContent className="pt-8 pb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 border-4 border-black bg-white flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="square"
                      className="text-black"
                    >
                      <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12.5" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      <path d="M20 14v4" />
                      <path d="M18 16l2 2 4-4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-heading mb-1">EESTEC Certified Soft Skills Trainer</h3>
                  <p className="text-gray-600 text-base">
                    2-week training in Krakow, Poland during second year undergraduate
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => setIsCertificateModalOpen(true)}
                className="whitespace-nowrap"
              >
                View Certificate
              </Button>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* Trainings */}
      <StaggerChildren className="grid gap-6 md:grid-cols-2">
        {softSkillsTrainings.map((training, index) => (
          <StaggerItem key={index}>
            <motion.div
              style={{ rotate: (index % 2 === 0 ? -1 : 1) }}
              whileHover={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <EventCard
                title={training.title}
                date={training.date}
                duration={training.duration}
                location={training.location}
                description={training.description}
                url={training.url}
                image={training.image}
                coTrainer={training.coTrainer}
                coTrainerUrl={training.coTrainerUrl}
                goal={training.goal}
                learningObjectives={training.learningObjectives}
                badgeTheme="purple"
              />
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <Modal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
      >
        <div className="-m-6" style={{ height: "85vh" }}>
          <iframe
            src="/achievements/soft-skills-trainer-certificate.pdf#toolbar=0&navpanes=0"
            className="w-full h-full border-0"
            title="EESTEC Soft Skills Trainer Certificate"
          />
        </div>
      </Modal>
    </Layout>
  );
};

export default Trainings;
