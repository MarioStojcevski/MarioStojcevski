export const bgColors: number[] = Array.from({ length: 5 }, (_, i) => i+1);

export type Project = { // should this be interface instead of type?
  title: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  url?: string;
  image?: string;
  bgColorIndex?: number;
};