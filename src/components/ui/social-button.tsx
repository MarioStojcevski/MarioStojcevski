import { Button } from "./button";
import { SOCIAL_COLORS } from "@/lib/styles";
import { LinkedInIcon, GitHubIcon } from "./icons";

interface SocialButtonProps {
  platform: "linkedin" | "github";
  href: string;
  children: React.ReactNode;
  showIcon?: boolean;
}

export const SocialButton = ({ platform, href, children, showIcon = true }: SocialButtonProps) => {
  const platformKey = platform === "linkedin" ? "LINKEDIN" : "GITHUB";
  const colors = SOCIAL_COLORS[platformKey];
  
  const icon = platform === "linkedin" ? (
    <LinkedInIcon size={18} />
  ) : (
    <GitHubIcon size={18} />
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
      <Button
        variant="outline"
        className={`inline-flex items-center gap-2 ${colors.bg} text-white ${colors.border} ${colors.hover} ${colors.hoverBorder}`}
      >
        {showIcon && <span className="shrink-0">{icon}</span>}
        {children}
      </Button>
    </a>
  );
};
