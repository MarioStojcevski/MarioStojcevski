import { useEffect } from "react";
import { useLocation } from "react-router";
import Layout from "@/components/layout";
import { TechnologyBadge } from "@/components/ui/technology-badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ProjectModal } from "@/components/ui/modal";
import projects from "@/constants/projects";
import type { Project } from "@/types/project";
import { useModal } from "@/hooks/use-modal";
import { cardHoverStyles, projectCardColors, createSlug, borderBlack } from "@/lib/styles";

const Projects = () => {
  const { isOpen, selectedItem, open, close } = useModal<Project>();
  const location = useLocation();

  useEffect(() => {
    // Scroll to project if hash is present in URL
    if (location.hash) {
      const hash = location.hash.substring(1); // Remove the #
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <Layout>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => {
          const colorClass = projectCardColors[index % projectCardColors.length];
          const projectSlug = createSlug(project.title);
          return (
            <Card 
              key={project.title}
              id={projectSlug}
              onClick={() => open(project)}
              className={`${colorClass} ${cardHoverStyles}`}
            >
              <CardHeader className="text-3xl">
                {project.title}
              </CardHeader>
              <hr className="mx-6 border border-black" />
              <CardContent>
                <div className={`w-full h-48 overflow-hidden ${borderBlack} rounded-base mb-2 mt-4`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {project.description}
              </CardContent>
              <CardFooter className="overflow-x-auto flex flex-wrap">
                {project.technologies.map((tech) => (
                  <TechnologyBadge key={`${project.title}-${tech}`} technology={tech} className="mx-0.5 my-0.5" />
                ))}
              </CardFooter>
            </Card>
          );
        })}
      </div>
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