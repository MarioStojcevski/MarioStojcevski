import { NavLink as RouterNavLink, useLocation } from "react-router";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SocialLinks } from "./social-links";

const MotionNavLink = motion.create(RouterNavLink);

const navItems = [
  { to: "/", label: "Home", icon: HomeIcon },
  { to: "/about-me", label: "About", icon: UserIcon },
  { to: "/projects", label: "Projects", icon: CodeIcon },
  { to: "/research", label: "Research", icon: FlaskIcon },
  { to: "/games", label: "Games", icon: GamepadIcon },
  { to: "/gallery", label: "Gallery", icon: ImageIcon },
  { to: "/music", label: "Music", icon: MusicIcon },
  { to: "/blog", label: "Blog", icon: PenIcon },
  { to: "/community", label: "Community", icon: PeopleIcon },
  { to: "/trainings", label: "Trainings", icon: StarIcon },
];

export function BentoDock() {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 border-4 border-black bg-white rounded-none px-2 py-2 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] sm:bottom-6 md:bottom-8"
    >
      <MotionNavLink
        to="/"
        className={({ isActive }) =>
          cn(
            "flex h-10 w-10 items-center justify-center border-4 border-black transition-all duration-150 sm:hidden",
            isActive ? "bg-black text-white" : "bg-white text-black hover:bg-black hover:text-white"
          )
        }
      >
        <img width={20} src="./logo.png" alt="Logo" />
      </MotionNavLink>

      <div className="hidden sm:flex items-center gap-1">
        {navItems.map((item) => {
          const isActive =
            item.to === "/"
              ? location.pathname === "/" || location.pathname === ""
              : location.pathname.startsWith(item.to);

          return (
            <MotionNavLink
              key={item.to}
              to={item.to}
              className={cn(
                "group relative flex items-center gap-2 px-3 py-2 text-sm font-bold border-4 border-black transition-all duration-150 cursor-pointer",
                isActive
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-black hover:text-white"
              )}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <span className="hidden lg:inline">{item.label}</span>
            </MotionNavLink>
          );
        })}
      </div>

      <div className="flex sm:hidden items-center gap-1">
        {navItems.slice(1).map((item) => {
          const isActive = location.pathname.startsWith(item.to);

          return (
            <MotionNavLink
              key={item.to}
              to={item.to}
              className={cn(
                "flex h-10 w-10 items-center justify-center border-4 border-black transition-all duration-150 cursor-pointer",
                isActive
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-black hover:text-white"
              )}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="h-4 w-4" />
            </MotionNavLink>
          );
        })}
      </div>

      <div className="hidden sm:block ml-1">
        <SocialLinks />
      </div>
    </motion.nav>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="square">
      <path d="M3 12L12 3l9 9" />
      <path d="M9 21V12h6v9" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="square">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-2a6 6 0 0112 0v2" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="square">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function GamepadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="square">
      <rect x="2" y="6" width="20" height="12" rx="0" />
      <line x1="6" y1="10" x2="6" y2="14" />
      <line x1="4" y1="12" x2="8" y2="12" />
      <circle cx="16" cy="10" r="1" fill="currentColor" />
      <circle cx="18" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function ImageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="square">
      <rect x="3" y="3" width="18" height="18" />
      <circle cx="9" cy="9" r="2" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

function MusicIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="square">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function PenIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="square">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function PeopleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="square">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="square">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function FlaskIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="square">
      <path d="M9 3h6" />
      <path d="M10 3v7.4a2 2 0 01-.5 1.3L4 18.5a2 2 0 001.5 3.5h13a2 2 0 001.5-3.5l-5.5-6.8A2 2 0 0114 10.4V3" />
    </svg>
  );
}
