"use client";

import React, { useEffect, useState } from "react";
import NavbarLanguagesSelect from "@/components/navbar-languages-select";
import { Button } from "@/components/ui/button";

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
        className={`fixed z-50 top-0 w-full h-fit flex flex-row justify-between items-center px-28 transition-all ease-in-out hover:bg-white ${
          isScrolled ? "bg-white py-4" : "py-8"
        }`}
      >
        <div className="flex flex-row gap-8 items-center">
          <p className="text-lg font-semibold">Kimera Health</p>
          <NavbarLanguagesSelect />
        </div>
        <div className="flex flex-row gap-12">
          <div className="flex flex-row items-center font-semibold text-slate-800 capitalize gap-8">
            <p className="text-dodger-blue-500">home</p>
            <p>about us</p>
            <p>our partner</p>
            <p>blog</p>
            <p>contact</p>
          </div>
          <Button className="rounded-full px-8 py-6 bg-dodger-blue-500 hover:bg-dodger-blue-500/90">
            <span>Request a demo</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
