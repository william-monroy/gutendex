import React from "react";
import {
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
import { NavLink, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Catálogo", path: "/catalog" },
    { name: "Acerca de", path: "/about" },
    { name: "API", path: "/api" },
  ];

  const [mounted, setMounted] = useState(false);
  const [isSelected, setIsSelected] = useState(true);
  const { setTheme } = useTheme();
  const location = useLocation();

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
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive={location.pathname === item.path}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "text-primary" : "text-foreground";
              }}
              color={index === menuItems.length - 1 ? "primary" : "foreground"}
              to={item.path}
            >
              {item.name}
            </NavLink>
          </NavbarItem>
        ))}
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
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "text-primary w-full"
                  : "text-foreground w-full";
              }}
              color="foreground"
              to={item.path}
            >
              {item.name}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
