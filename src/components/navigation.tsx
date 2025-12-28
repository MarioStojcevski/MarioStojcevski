import { NavLinkItem } from "./navigation/nav-link";
import { SocialLinks } from "./navigation/social-links";

const navItems = [
  { to: "/", label: "", icon: <img width={25} src="./logo.png" alt="Logo" /> },
  { to: "/about-me", label: "About me" },
  { to: "/projects", label: "Projects" },
  { to: "/games", label: "Games" },
  { to: "/community", label: "Dev Community" },
  { to: "/soft-skills", label: "Soft Skills" },
];

const Navigation = () => {
  return (
    <nav className="relative z-40 min-h-16 sm:h-20 border-2 border-black bg-main rounded-base flex items-center justify-between py-3 px-2 sm:py-4 sm:px-2 md:py-3 md:px-2 overflow-hidden">
      <ul className="flex flex-row flex-wrap flex-1 list-none items-center justify-start gap-1 sm:space-x-1 sm:space-y-0 min-w-0">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLinkItem to={item.to} icon={item.icon}>
              {item.label}
            </NavLinkItem>
          </li>
        ))}
      </ul>
      <SocialLinks />
    </nav>
  );
};

export default Navigation;
