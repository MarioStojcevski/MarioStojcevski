import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Navigation = () => { 
  return (
    <NavigationMenu className="z-5">
      <NavigationMenuList>
        <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
          Home
        </NavigationMenuLink>
        <NavigationMenuLink href="/about-me" className={navigationMenuTriggerStyle()}>
          About me
        </NavigationMenuLink>
        <NavigationMenuLink href="/projects" className={navigationMenuTriggerStyle()}>
          Projects
        </NavigationMenuLink>
        <NavigationMenuLink href="/art" className={navigationMenuTriggerStyle()}>
          Art
        </NavigationMenuLink>
      </NavigationMenuList>
    </NavigationMenu>
  )
};

export default Navigation;