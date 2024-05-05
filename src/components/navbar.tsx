"use client";

import React, {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useState,
} from "react";
import NavbarLanguagesSelect from "@/components/navbar-languages-select";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const router = usePathname();

  const navigations = [
    { text: "home", href: "/" },
    { text: "about us", href: "/about" },
    { text: "our partner", href: "/partners" },
    { text: "blog", href: "/blog" },
    { text: "contact", href: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenSheet, setIsOpenSheet] = useState(false);

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
          <div className="h-10 w-full">
            <Image
              src={`/assets/images/image 1.png`}
              className="z-0 object-contain object-center w-full h-full !relative"
              fill
              sizes="100%"
              alt="navbar-image-01"
            />
          </div>

          <div className="hidden xl:block">
            <NavbarLanguagesSelect />
          </div>
        </div>
        <div className="hidden xl:flex flex-row gap-12">
          <div className="flex flex-row items-center gap-6">
            {navigations.map((data, index) => {
              const { text, href } = data;

              return (
                <NavigationLink
                  key={`${text}-${index}`}
                  href={href}
                  isActive={href === router}
                >
                  {text}
                </NavigationLink>
              );
            })}
          </div>
          <Button className="rounded-full px-6 h-12 bg-dodger-blue-500 text-base font-semibold hover:bg-dodger-blue-500/90">
            <span>Request a demo</span>
          </Button>
        </div>
        <div className="block xl:hidden">
          <Sheet open={isOpenSheet} onOpenChange={setIsOpenSheet}>
            <SheetTrigger asChild>
              <Button className="rounded-full aspect-square bg-white px-1 hover:bg-slate-100/90 text-dodger-blue-500">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <div className="w-full flex flex-col gap-4">
                <NavbarLanguagesSelect />
                <div className="w-full flex flex-col">
                  {navigations.map((data, index) => {
                    const { text, href } = data;

                    return (
                      <NavigationLinkMobile
                        key={`${text}-${index}`}
                        href={href}
                        isActive={href === router}
                        onClick={() => {
                          if (!(href === router)) setIsOpenSheet(false);
                        }}
                      >
                        {text}
                      </NavigationLinkMobile>
                    );
                  })}
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
  href,
  onClick,
}: {
  children: ReactNode;
  isActive?: boolean;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
}) => {
  return (
    <>
      <div className="flex flex-row gap-2">
        <div className="w-2 h-auto flex items-center">
          {isActive && (
            <div className="w-2 h-1 rounded-full bg-dodger-blue-500"></div>
          )}
        </div>
        <Link
          href={href}
          shallow
          onClick={onClick}
          className={`w-fit text-nowrap flex flex-row items-center font-bold capitalize ${
            isActive
              ? "text-dodger-blue-500 hover:text-dodger-blue-500/90"
              : "text-slate-700 hover:text-slate-700/90"
          }`}
        >
          {children}
        </Link>
      </div>
    </>
  );
};

const NavigationLinkMobile = ({
  children,
  isActive = false,
  href,
  onClick,
}: {
  children: ReactNode;
  isActive?: boolean;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
}) => {
  return (
    <Link
      href={href}
      shallow
      onClick={onClick}
      className={`w-full py-3 text-nowrap flex flex-row items-center text-xl xl:text-3xl font-medium capitalize ${
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
