import { Link } from "react-router";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <div>
          <h2 className={`${description ? "text-3xl" : "text-2xl"} font-heading ${description ? "mb-2" : ""}`}>
            {title}
          </h2>
          {description && <p className="text-gray-600 text-base">{description}</p>}
        </div>
        <div className="flex gap-2">
          <SocialIconLink platform="linkedin" href={SOCIAL_URLS.LINKEDIN} />
          <SocialIconLink platform="github" href={SOCIAL_URLS.GITHUB} />
          <SocialIconLink platform="stackoverflow" href={SOCIAL_URLS.STACK_OVERFLOW} />
          <SocialIconLink platform="codewars" href={SOCIAL_URLS.CODEWARS} />
        </div>
      </div>
      <hr className="border-t-4 border-black mb-4" />
      <div className="flex flex-col gap-2 text-base mb-4">
        {showEmail && (
          <a
            href={`mailto:${SOCIAL_URLS.EMAIL}`}
            className="inline-block text-gray-600 hover:text-black hover:underline transition-colors font-semibold w-fit cursor-pointer"
          >
            Email: {SOCIAL_URLS.EMAIL}
          </a>
        )}
        {quickLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="inline-block text-gray-600 hover:text-black hover:underline transition-colors w-fit cursor-pointer"
          >
            {link.label}
          </Link>
        ))}
      </div>
      {!showEmail && (
        <div className="mt-6 text-center text-sm text-gray-500">
          © 2026 mariostojcevski
        </div>
      )}
    </motion.div>
  );
};
