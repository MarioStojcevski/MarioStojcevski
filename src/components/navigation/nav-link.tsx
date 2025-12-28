import { NavLink as RouterNavLink } from "react-router";
import { cn } from "@/lib/utils";

interface NavLinkItemProps {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const navLinkBaseStyles = [
  "inline-flex h-10 items-center justify-center",
  "px-2 sm:px-4 py-2",
  "text-sm sm:text-base font-bold",
  "border-2 border-black bg-main text-main-foreground",
  "rounded-base transition-all",
  "hover:bg-black hover:text-white",
  "whitespace-nowrap cursor-pointer",
];

export const NavLinkItem = ({ to, children, icon }: NavLinkItemProps) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        cn(...navLinkBaseStyles, isActive && "bg-black text-white")
      }
    >
      {icon || children}
    </RouterNavLink>
  );
};

