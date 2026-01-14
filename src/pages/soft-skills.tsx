import { useState } from "react";
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { EventCard } from "@/components/ui/event-card";
import { Modal } from "@/components/ui/modal";
import { PageHeader } from "@/components/ui/page-header";
import { softSkillsTrainings } from "@/constants/soft-skills";
import { emptyStateCardStyles, emptyStateContentStyles, borderBlack } from "@/lib/styles";

const SoftSkills = () => {
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <PageHeader
            title="Soft Skills"
            description="Soft skills trainings and workshops I've conducted."
            titleClassName="text-6xl font-bold mb-4 text-purple-600"
            descriptionClassName="text-xl text-gray-700 mb-4"
          />
          <p className="text-xl text-gray-700 mb-6">
            I finished my 2 weeks training in Krakow Poland for a certified soft skills trainer back when I was in second year undergraduate.
          </p>
          <div className="mb-8">
            <Card className={`${borderBlack} bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-[8px_8px_0px_0px_rgba(50,50,50,1)] transition-all cursor-pointer`}>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 ${borderBlack} bg-purple-500 rounded-base flex items-center justify-center`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
                      <h3 className="text-2xl font-bold mb-1">EESTEC Certified Soft Skills Trainer</h3>
                      <p className="text-gray-600 text-base">
                        Official certification from EESTEC Training Team
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsCertificateModalOpen(true);
                    }}
                    className={`inline-flex items-center gap-2 px-4 py-2 ${borderBlack} bg-white rounded-base font-bold hover:bg-black hover:text-white transition-all cursor-pointer whitespace-nowrap`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    View Certificate
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          {softSkillsTrainings.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {softSkillsTrainings.map((training, index) => (
                <EventCard
                  key={index}
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
              ))}
            </div>
          ) : (
            <Card className={emptyStateCardStyles}>
              <CardContent className={emptyStateContentStyles}>
                No soft skills trainings added yet. Check back soon!
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Modal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
      >
        <div className="-m-6" style={{ height: '85vh' }}>
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

export default SoftSkills;

