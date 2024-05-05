import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React, { ReactNode } from "react";
import HeroCard from "./hero-card";
import NavbarLanguagesSelect from "./navbar-languages-select";
import { Separator } from "./ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="px-8 xl:px-28 pt-[calc(360px+32px)] xl:pt-[calc(360px+112px)] pb-12 h-fit w-full flex flex-col gap-12 relative overflow-hidden">
        <div className="absolute w-full xl:w-[80%] h-[720px] xl:h-fit top-0 xl:top-auto xl:bottom-0 left-0 translate-x-0 xl:translate-x-12 -z-20">
          <Image
            src={"/assets/svg/Frame 48095490.svg"}
            className="object-contain w-full h-fit !relative"
            fill
            sizes="100%"
            alt="Frame 48095490"
          />
        </div>
  
        <div className="absolute w-1/2 xl:w-[30%] h-fit top-28 right-0 -z-10">
          <Image
            src={"/assets/svg/Rectangle 374 (3).svg"}
            className="object-contain w-full h-fit !relative"
            fill
            sizes="100%"
            alt="Rectangle 374-3"
          />
        </div>
        <div className="absolute w-1/2 xl:w-[40%] h-fit bottom-0 right-0 -z-10">
          <Image
            src={"/assets/svg/Rectangle 373 (1).svg"}
            className="object-contain w-full h-fit !relative"
            fill
            sizes="100%"
            alt="Rectangle 373-1"
          />
        </div>
        <div className="w-full h-fit flex flex-row gap-3 justify-between items-center">
          <div className="w-14 h-14">
            <Image
              src={`/assets/images/image 1.png`}
              className="z-0 object-contain object-center w-full h-full !relative"
              fill
              sizes="100%"
              alt="navbar-image-01"
            />
          </div>

          <NavbarLanguagesSelect />
        </div>
        <div className="w-full flex flex-col xl:flex-row gap-24">
          <div className="w-full xl:w-1/2 flex flex-col gap-12">
            <div className="w-full flex flex-col gap-12">
              <div className="w-full flex flex-col gap-6">
                <div className="h-2 w-16 rounded-full bg-emerald-600"></div>
                <p className="text-4xl/snug xl:text-5xl/snug font-medium text-slate-800 text-start">
                  We help you to find the best pain management product that suit
                  your needs
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-3 items-start">
                  <MapPin className="text-slate-800/50" />
                  <div className="flex flex-col gap-1">
                    <p className="text-xl/snug font-semibold text-start text-slate-800">
                      Chimera Flux (S) PteLsd
                    </p>
                    <p className="text-xl/snug font-medium text-start text-slate-800/50">
                      800eil ngLare # 35 02 Centina West Singapore 389601
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <Phone className="text-slate-800/50" />
                  <p className="text-xl/snug font-semibold text-start text-slate-800">
                    +46569831022
                  </p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <Mail className="text-slate-800/50" />
                  <p className="text-xl/snug font-semibold text-start text-slate-800">
                    enguries@eliteialux.com
                  </p>
                </div>
              </div>
              <div className="w-full h-fit flex flex-col gap-3">
                <p className="text-xl font-medium text-slate-500">
                  Our products are certified by
                </p>
                <div className="w-fit h-fit flex flex-row gap-3">
                  <Image
                    className="!relative"
                    src={"/assets/images/image 12.png"}
                    height={56}
                    width={56}
                    sizes="100%"
                    alt="iso-01"
                  />
                  <Image
                    className="!relative"
                    src={"/assets/images/Frame 33.png"}
                    height={56}
                    width={56}
                    sizes="100%"
                    alt="iso-02"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col xl:flex-row gap-24 xl:gap-12">
            <div className="w-full xl:w-1/2 flex flex-col items-start gap-6">
              <div className="w-full xl:w-fit flex flex-col items-start gap-6">
                <div className="h-2 w-16 rounded-full bg-dodger-blue-500"></div>
                <div className="w-full flex flex-col gap-3 xl:gap-8">
                  <NavigationLink href="/">Home</NavigationLink>
                  <NavigationLink href="/about">About Us</NavigationLink>
                  <NavigationLink href="/partners">Our Partners</NavigationLink>
                  <NavigationLink href="blog">Blog</NavigationLink>
                  <NavigationLink href="contact">Contact</NavigationLink>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-1/2 flex flex-col items-end gap-6">
              <div className="w-full xl:w-fit flex flex-col items-start gap-6">
                <div className="h-2 w-16 rounded-full bg-slate-800"></div>

                <div className="w-full xl:w-fit h-fit flex flex-col gap-4">
                  <HeroCard
                    icon="brain"
                    text="Brain Stimulation"
                    orientation="horizontal"
                  />
                  <HeroCard
                    icon="bone"
                    text="Chronic Pain Reliefer"
                    orientation="horizontal"
                  />
                  <HeroCard
                    icon="monitor"
                    text="Technical Trainings"
                    orientation="horizontal"
                  />
                  <HeroCard
                    icon="heart-handshake"
                    text="Quality Support"
                    orientation="horizontal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <Separator orientation="horizontal" className="bg-slate-800/30" />
          <div className="w-full flex flex-row justify-between gap-6">
            <span className="w-auto text-slate-800">
              © 2024 Company Name. All rights reserved.
            </span>
            <div className="flex flex-col xl:flex-row gap-2 xl:gap-8">
              <Link
                href={"/"}
                className="text-nowrap flex flex-row items-centertext-lg font-medium text-dodger-blue-800 hover:text-dodger-blue-800/90"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/"}
                className="text-nowrap flex flex-row items-center text-lg font-medium text-dodger-blue-800 hover:text-dodger-blue-800/90"
              >
                Term of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NavigationLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      shallow
      className="text-nowrap flex flex-row items-center text-xl xl:text-3xl font-medium text-slate-800 hover:text-slate-800/90"
    >
      {children}
    </Link>
  );
};

export default Footer;
