import { Link } from "react-router";
import { SocialIconLink } from "./ui/social-icon-link";
import { SOCIAL_URLS, QUICK_LINKS } from "@/constants/social";

type QuickLink = { readonly to: string; readonly label: string };

interface FooterProps {
  title?: string;
  description?: string;
  quickLinks?: readonly QuickLink[];
  showEmail?: boolean;
}

export const Footer = ({
  title = "Quick Links",
  description,
  quickLinks = QUICK_LINKS,
  showEmail = false,
}: FooterProps) => {
  return (
    <div className="border-2 border-black rounded-base bg-main p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className={`${description ? "text-4xl" : "text-3xl"} font-bold ${description ? "mb-2" : ""}`}>
            {title}
          </h2>
          {description && <p className="text-gray-700 text-base">{description}</p>}
        </div>
        <div className="flex gap-3">
          <SocialIconLink platform="linkedin" href={SOCIAL_URLS.LINKEDIN} />
          <SocialIconLink platform="github" href={SOCIAL_URLS.GITHUB} />
          <SocialIconLink platform="stackoverflow" href={SOCIAL_URLS.STACK_OVERFLOW} />
          <SocialIconLink platform="codewars" href={SOCIAL_URLS.CODEWARS} />
        </div>
      </div>
      <hr className="border-t-2 border-black mb-4" />
      <div className="flex flex-col gap-2 text-base mb-4">
        {showEmail && (
          <a
            href={`mailto:${SOCIAL_URLS.EMAIL}`}
            className="inline-block text-gray-700 hover:text-black hover:underline transition-colors font-semibold w-fit"
          >
            📧 Email: {SOCIAL_URLS.EMAIL}
          </a>
        )}
        {quickLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="inline-block text-gray-700 hover:text-black hover:underline transition-colors w-fit"
          >
            {link.label}
          </Link>
        ))}
      </div>
      {!showEmail && (
        <div className="mt-6 text-center text-base text-gray-600">
          © 2025 mariostojcevski
        </div>
      )}
    </div>
  );
};
