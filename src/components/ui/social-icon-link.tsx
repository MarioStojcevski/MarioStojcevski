import { LinkedInIcon, GitHubIcon } from "./icons";

interface SocialIconLinkProps {
  platform: "linkedin" | "github" | "stackoverflow" | "codewars";
  href: string;
  className?: string;
}

export const SocialIconLink = ({ platform, href, className = "" }: SocialIconLinkProps) => {
  const baseClasses = "text-gray-700 transition-colors";
  const platformClasses = {
    linkedin: "hover:text-[#0077B5]",
    github: "hover:text-black",
    stackoverflow: "hover:opacity-80",
    codewars: "hover:opacity-80",
  };

  const renderIcon = () => {
    switch (platform) {
      case "linkedin":
        return <LinkedInIcon size={20} />;
      case "github":
        return <GitHubIcon size={20} />;
      case "stackoverflow":
        return <img src="/stackoverflow.webp" alt="Stack Overflow" className="w-5 h-5" />;
      case "codewars":
        return <img src="/codewars.png" alt="Codewars" className="w-5 h-5" />;
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${platformClasses[platform]} ${className}`}
      aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
    >
      {renderIcon()}
    </a>
  );
};
