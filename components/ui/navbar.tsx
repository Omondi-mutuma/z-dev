import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { name: "features", path: "/", label: "Features", trigger: false },
    { name: "integrations", path: "/", label: "Integrations", trigger: false },
    { name: "Pricing", path: "/", label: "Pricing", trigger: false },
    { name: "Projects", path: "/", label: "Projects", trigger: false },
    { name: "Blog", path: "/", label: "Blog", trigger: false },
  ];
  return (
    <NavigationMenu className="hidden w-full lg:block">
      <NavigationMenuList>
        {links.map((link, index) => (
          <NavigationMenuItem key={index}>
            <Link href={link.path} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {link.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
