/**
 * Social media profile URLs
 */
export const SOCIAL_URLS = {
  LINKEDIN: "https://www.linkedin.com/in/mariostojcevski",
  GITHUB: "https://github.com/mariostojcevski",
  STACK_OVERFLOW: "https://stackoverflow.com/users/12683049/7ziip",
  CODEWARS: "https://www.codewars.com/users/MarioStojcevski",
  EMAIL: "mariostojcevski@gmail.com",
} as const;

/**
 * Quick navigation links
 */
export const QUICK_LINKS = [
  { to: "/projects", label: "All Projects" },
  { to: "/games", label: "Games" },
  { to: "/about-me", label: "About Me" },
] as const;

export const QUICK_LINKS_EXTENDED = [
  ...QUICK_LINKS,
  { to: "/community", label: "Dev Community" },
  { to: "/soft-skills", label: "Soft Skills" },
] as const;
