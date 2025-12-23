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

  React.useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 cursor-pointer animate-[modal-fade-in_0.3s_ease-out]"
      onClick={onClose}
    >
      <div
        className={cn(
          "relative w-full max-w-3xl max-h-[90vh] overflow-y-auto custom-scrollbar",
          "bg-white border-2 border-black rounded-base p-6",
          "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
          "animate-[modal-slide-up_0.4s_ease-out]"
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
            "font-bold text-lg transition-all cursor-pointer"
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
          <div className="w-full h-64 overflow-hidden border-2 border-black rounded-base animate-[fade-in-up_0.5s_ease-out_0.1s_both]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="animate-[fade-in-up_0.5s_ease-out_0.2s_both]">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h2 className="text-4xl font-bold flex-1">{project.title}</h2>
            {project.url && (
              <Button
                onClick={() => window.open(project.url, "_blank")}
                className="shrink-0"
              >
                Open in New Tab →
              </Button>
            )}
          </div>
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

        <div className="animate-[fade-in-up_0.5s_ease-out_0.3s_both]">
          <h3 className="text-xl font-bold mb-2">Description</h3>
          <p className="text-gray-700">{project.description}</p>
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="animate-[fade-in-up_0.5s_ease-out_0.4s_both]">
            <h3 className="text-xl font-bold mb-2">Highlights</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {project.highlights.map((highlight, index) => (
                <li 
                  key={index}
                  className="animate-[fade-in-up_0.5s_ease-out_both]"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` } as React.CSSProperties}
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="animate-[fade-in-up_0.5s_ease-out_0.5s_both]">
          <h3 className="text-xl font-bold mb-2">Responsibilities</h3>
          <div className="flex flex-wrap gap-2">
            {project.responsibilities.map((resp, index) => (
              <Badge 
                key={index}
                className="animate-[fade-in-up_0.5s_ease-out_both]"
                style={{ animationDelay: `${0.6 + index * 0.05}s` } as React.CSSProperties}
              >
                {resp}
              </Badge>
            ))}
          </div>
        </div>

        <div className="animate-[fade-in-up_0.5s_ease-out_0.6s_both]">
          <h3 className="text-xl font-bold mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="animate-[fade-in-up_0.5s_ease-out_both]"
                style={{ animationDelay: `${0.7 + index * 0.03}s` } as React.CSSProperties}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

interface GameModalProps {
  game: {
    title: string;
    url: string;
    description?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

function GameModal({ game, isOpen, onClose }: GameModalProps) {
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

  React.useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-[modal-fade-in_0.3s_ease-out]"
    >
      <div
        className={cn(
          "relative w-full max-w-5xl h-[95vh] overflow-hidden",
          "bg-white border-2 border-black rounded-base p-6",
          "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
          "animate-[modal-slide-up_0.4s_ease-out]",
          "flex flex-col"
        )}
      >
        <div className="flex flex-col h-full space-y-4">
          <div className="flex items-start justify-between gap-4 shrink-0">
            <h2 className="text-4xl font-bold flex-1">{game.title}</h2>
            <div className="flex items-center gap-2 shrink-0">
              <Button
                onClick={() => window.open(game.url, "_blank")}
                className="cursor-pointer"
              >
                Open in New Tab →
              </Button>
              <button
                onClick={onClose}
                className={cn(
                  "w-8 h-8",
                  "flex items-center justify-center",
                  "border-2 border-black rounded-base",
                  "bg-white hover:bg-black hover:text-white",
                  "font-bold text-lg transition-all cursor-pointer"
                )}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
          </div>
          {game.description && (
            <p className="text-gray-700 shrink-0">{game.description}</p>
          )}
          <div className="w-full flex-1 min-h-0 border-2 border-black rounded-base overflow-hidden">
            <iframe
              src={game.url}
              className="w-full h-full border-0"
              title={game.title}
              allow="gamepad; fullscreen"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Modal, ProjectModal, GameModal };

