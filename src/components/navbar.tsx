"use client";

import React, { ReactNode, useEffect, useState } from "react";
import NavbarLanguagesSelect from "@/components/navbar-languages-select";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed z-50 top-0 w-full h-fit flex flex-row justify-between items-center p-12 xl:px-28 transition-all ease-in-out hover:bg-white ${
          isScrolled ? "bg-white py-4" : "py-8"
        }`}
      >
        <div className="flex flex-row gap-8 items-center">
          <p className="text-lg font-semibold">Kimera Health</p>
          <div className="hidden xl:block">
            <NavbarLanguagesSelect />
          </div>
        </div>
        <div className="hidden xl:flex flex-row gap-12">
          <div className="flex flex-row items-center gap-8">
            <NavigationLink isActive>home</NavigationLink>
            <NavigationLink>about us</NavigationLink>
            <NavigationLink>our partner</NavigationLink>
            <NavigationLink>blog</NavigationLink>
            <NavigationLink>contact</NavigationLink>
          </div>
          <Button className="rounded-full px-8 py-6 bg-dodger-blue-500 hover:bg-dodger-blue-500/90">
            <span>Request a demo</span>
          </Button>
        </div>
        <div className="block xl:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="rounded-full aspect-square bg-white px-1 hover:bg-slate-100/90 text-dodger-blue-500">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <div className="w-full flex flex-col gap-4">
                <NavbarLanguagesSelect />
                <div className="w-full flex flex-col">
                  <NavigationLinkMobile isActive>Home</NavigationLinkMobile>
                  <NavigationLinkMobile>About Us</NavigationLinkMobile>
                  <NavigationLinkMobile>Our Partners</NavigationLinkMobile>
                  <NavigationLinkMobile>Blog</NavigationLinkMobile>
                  <NavigationLinkMobile>Contact</NavigationLinkMobile>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

const NavigationLink = ({
  children,
  isActive = false,
}: {
  children: ReactNode;
  isActive?: boolean;
}) => {
  return (
    <Link
      href={"/"}
      className={`w-fit text-nowrap flex flex-row items-center font-medium capitalize ${
        isActive
          ? "text-dodger-blue-500 hover:text-dodger-blue-500/90"
          : "text-slate-800 hover:text-slate-800/90"
      }`}
    >
      {children}
    </Link>
  );
};

const NavigationLinkMobile = ({
  children,
  isActive = false,
}: {
  children: ReactNode;
  isActive?: boolean;
}) => {
  return (
    <Link
      href={"/"}
      className={`w-full py-3 text-nowrap flex flex-row items-center text-xl xl:text-3xl font-medium ${
        isActive
          ? "text-dodger-blue-500 hover:text-dodger-blue-500/90"
          : "text-slate-800 hover:text-slate-800/90"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
