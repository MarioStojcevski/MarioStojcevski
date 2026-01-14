import { SOCIAL_URLS } from "@/constants/social";
import { LinkedInIcon, GitHubIcon } from "../ui/icons";

const socialLinks = [
  {
    href: SOCIAL_URLS.LINKEDIN,
    ariaLabel: "LinkedIn",
    bgColor: "bg-[#0077B5]",
    hoverBg: "hover:bg-[#005885]",
    hoverBorder: "hover:border-[#005885]",
    icon: <LinkedInIcon size={20} />,
  },
  {
    href: SOCIAL_URLS.GITHUB,
    ariaLabel: "GitHub",
    bgColor: "bg-[#24292e]",
    hoverBg: "hover:bg-[#181717]",
    hoverBorder: "hover:border-[#181717]",
    icon: <GitHubIcon size={20} />,
  },
  {
    href: SOCIAL_URLS.STACK_OVERFLOW,
    ariaLabel: "Stack Overflow",
    bgColor: "bg-white",
    hoverBg: "hover:bg-gray-100",
    hoverBorder: "hover:border-white",
    icon: (
      <img 
        src="/stackoverflow.webp" 
        alt="Stack Overflow" 
        className="w-5 h-5"
      />
    ),
  },
  {
    href: SOCIAL_URLS.CODEWARS,
    ariaLabel: "Codewars",
    bgColor: "bg-white",
    hoverBg: "hover:bg-gray-100",
    hoverBorder: "hover:border-white",
    icon: (
      <img 
        src="/codewars.png" 
        alt="Codewars" 
        className="w-5 h-5"
      />
    ),
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex gap-2">
      {socialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex h-10 w-10 items-center justify-center border-2 border-black ${link.bgColor} text-white rounded-base transition-all ${link.hoverBg} ${link.hoverBorder} cursor-pointer`}
          aria-label={link.ariaLabel}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

