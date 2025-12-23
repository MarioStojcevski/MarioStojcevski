import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Layout from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ProjectModal } from "@/components/ui/modal";
import projects from "@/constants/projects";
import type { Project } from "@/types/project";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
          const colors = ['bg-chart-2', 'bg-chart-3', 'bg-chart-4', 'bg-chart-5'];
          const colorClass = colors[index % colors.length];
          const projectSlug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
          return (
          <Card 
            key={project.title}
            id={projectSlug}
            onClick={() => handleCardClick(project)}
            className={`${colorClass} cursor-pointer transition-all hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0`}>
            <CardHeader className="text-2xl">
              {project.title}
            </CardHeader>
            <hr className="mx-6 border border-black" />
            <CardContent>
              <div className="w-full h-50 overflow-hidden border-2 border-black rounded-base mb-2 mt-4">
                <img
                  src={project.image}
                  alt="Project Image"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {project.description}
            </CardContent>
            <CardFooter className="overflow-x-auto flex flex-wrap">
              {project.technologies.map(tech => <Badge key={project+tech} className="mx-0.5 my-0.5">{tech}</Badge>)}
            </CardFooter>
          </Card>
          );
        })}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </Layout>
  );
};

export default Projects;