import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { Button } from "./button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className={cn(
          "relative w-full max-w-3xl max-h-[90vh] overflow-y-auto",
          "bg-white border-2 border-black rounded-base p-6",
          "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={cn(
            "absolute top-4 right-4 w-8 h-8",
            "flex items-center justify-center",
            "border-2 border-black rounded-base",
            "bg-white hover:bg-black hover:text-white",
            "font-bold text-lg transition-all"
          )}
          aria-label="Close modal"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
    url?: string;
    image?: string;
    year?: string;
    status?: "Completed" | "In Progress" | "On Hold";
    client?: string;
    highlights?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        {project.image && (
          <div className="w-full h-64 overflow-hidden border-2 border-black rounded-base">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div>
          <h2 className="text-4xl font-bold mb-2">{project.title}</h2>
          {(project.year || project.status || project.client) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.year && (
                <Badge variant="outline">{project.year}</Badge>
              )}
              {project.status && (
                <Badge>{project.status}</Badge>
              )}
              {project.client && (
                <Badge variant="outline">Client: {project.client}</Badge>
              )}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Description</h3>
          <p className="text-gray-700">{project.description}</p>
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div>
            <h3 className="text-xl font-bold mb-2">Highlights</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {project.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h3 className="text-xl font-bold mb-2">Responsibilities</h3>
          <div className="flex flex-wrap gap-2">
            {project.responsibilities.map((resp, index) => (
              <Badge key={index}>{resp}</Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="outline">{tech}</Badge>
            ))}
          </div>
        </div>

        {project.url && (
          <div className="pt-4">
            <Button
              onClick={() => window.open(project.url, "_blank")}
              className="w-full sm:w-auto"
            >
              Visit Project →
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
}

export { Modal, ProjectModal };

