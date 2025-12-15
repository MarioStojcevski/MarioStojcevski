export type Project = {
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