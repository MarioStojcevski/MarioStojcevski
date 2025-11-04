import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NavLink } from "react-router";

const Navigation = () => { 
  return (
    <NavigationMenu className="z-5 h-20">
      <NavigationMenuList>
        <NavLink to="/" className={navigationMenuTriggerStyle()}>
          <img width={25} src="./logo.png" />
        </NavLink>
        <NavLink to="/about-me" className={navigationMenuTriggerStyle()}>
          About me
        </NavLink>
        <NavLink to="/projects" className={navigationMenuTriggerStyle()}>
          Projects
        </NavLink>
        <NavLink to="/art" className={navigationMenuTriggerStyle()}>
          Art
        </NavLink>
      </NavigationMenuList>
    </NavigationMenu>
  )
};

export default Navigation;