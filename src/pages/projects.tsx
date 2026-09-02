import { useEffect } from "react";
import { useLocation } from "react-router";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { TechnologyBadge } from "@/components/ui/technology-badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ProjectModal } from "@/components/ui/modal";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/ui/scroll-reveal";
import projects from "@/constants/projects";
import type { Project } from "@/types/project";
import { useModal } from "@/hooks/use-modal";
import { createSlug } from "@/lib/styles";

const Projects = () => {
  const { isOpen, selectedItem, open, close } = useModal<Project>();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  const getCardColor = (index: number) => {
    const colors = ["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4", "bg-chart-5"];
    return colors[index % colors.length];
  };

  const getRotation = (index: number) => {
    const rotations = [-2, 1, -1, 3, -3, 2, -2, 1, 3, -1, 2];
    return rotations[index % rotations.length];
  };

  return (
    <Layout>
      <ScrollReveal>
        <div className="mb-12">
          <motion.h1
            className="text-5xl lg:text-7xl font-heading mb-4"
            style={{ rotate: -1 }}
            whileHover={{ rotate: 0 }}
          >
            Projects
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            A collection of work I've built, designed, and shipped.
          </p>
        </div>
      </ScrollReveal>

      <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const colorClass = getCardColor(index);
          const projectSlug = createSlug(project.title);
          const rotation = getRotation(index);
          return (
            <StaggerItem key={project.title}>
            <motion.div
              style={{ rotate: rotation }}
              whileHover={{ rotate: [rotation, rotation - 5, rotation + 7, rotation - 3, rotation + 2, 0], scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
                <Card
                  id={projectSlug}
                  onClick={() => open(project)}
                  className={`${colorClass} h-full cursor-pointer`}
                >
                  <CardHeader className="text-2xl font-heading">
                    {project.title}
                  </CardHeader>
                  <hr className="mx-6 border-2 border-black" />
                  <CardContent>
                    {project.image && (
                      <div className="w-full h-48 overflow-hidden border-4 border-black mb-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    )}
                    <p className="text-sm line-clamp-3">{project.description}</p>
                  </CardContent>
                  <CardFooter className="overflow-x-auto flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <TechnologyBadge
                        key={`${project.title}-${tech}`}
                        technology={tech}
                        className="mx-0.5 my-0.5"
                      />
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerChildren>

      {selectedItem && (
        <ProjectModal
          project={selectedItem}
          isOpen={isOpen}
          onClose={close}
        />
      )}
    </Layout>
  );
};

export default Projects;
