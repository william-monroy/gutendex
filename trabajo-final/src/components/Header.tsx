import React from "react";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ThemeSwitch } from "./ThemeSwitch";

export const Header: React.FC = () => {
  const menuItems = ["Inicio", "Acerca de", "API", "Catálogo"];

  const [mounted, setMounted] = useState(false);
  const [isSelected, setIsSelected] = useState(true);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-3",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      // disableAnimation
      // isBordered
    >
      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem isActive>
          <Link color="primary" href="#">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            Acerca de
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            API
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Catálogo
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch
            isSelected={isSelected}
            onClick={() => {
              setIsSelected(!isSelected);
              setTheme(isSelected ? "dark" : "light");
            }}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "primary"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
