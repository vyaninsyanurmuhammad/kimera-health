import React from "react";
import NavbarLanguagesSelect from "@/components/navbar-languages-select";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-row justify-between items-center px-24 py-8">
        <div className="flex flex-row gap-8 items-center">
          <p className="text-lg font-semibold">Kimera Health</p>
          <NavbarLanguagesSelect />
        </div>
        <div className="flex flex-row gap-12">
          <div className="flex flex-row items-center capitalize gap-8">
            <p className="text-dodger-blue-500">home</p>
            <p>about us</p>
            <p>our partner</p>
            <p>blog</p>
            <p>contact</p>
          </div>
          <Button className="rounded-full px-8 py-6 bg-dodger-blue-500 hover:bg-dodger-blue-500/90">
            <p>Request a demo</p>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
