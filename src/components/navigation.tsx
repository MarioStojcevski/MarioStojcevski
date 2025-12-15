import { NavLink } from "react-router";
import { cn } from "@/lib/utils";

const Navigation = () => { 
  return (
    <nav className="z-5 h-20 border-2 border-black bg-main rounded-base flex items-center justify-center p-2">
      <ul className="flex flex-1 list-none items-center justify-center space-x-1">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => cn(
              "inline-flex h-10 items-center justify-center px-4 py-2 text-base font-bold border-2 border-black bg-main text-main-foreground rounded-base transition-all hover:bg-black hover:text-white",
              isActive && "bg-black text-white"
            )}
          >
            <img width={25} src="./logo.png" alt="Logo" />
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about-me" 
            className={({ isActive }) => cn(
              "inline-flex h-10 items-center justify-center px-4 py-2 text-base font-bold border-2 border-black bg-main text-main-foreground rounded-base transition-all hover:bg-black hover:text-white",
              isActive && "bg-black text-white"
            )}
          >
            About me
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => cn(
              "inline-flex h-10 items-center justify-center px-4 py-2 text-base font-bold border-2 border-black bg-main text-main-foreground rounded-base transition-all hover:bg-black hover:text-white",
              isActive && "bg-black text-white"
            )}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/art" 
            className={({ isActive }) => cn(
              "inline-flex h-10 items-center justify-center px-4 py-2 text-base font-bold border-2 border-black bg-main text-main-foreground rounded-base transition-all hover:bg-black hover:text-white",
              isActive && "bg-black text-white"
            )}
          >
            Art
          </NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Navigation;
