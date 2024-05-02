import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import HeroCard from "./hero-card";
import NavbarLanguagesSelect from "./navbar-languages-select";
import { Separator } from "./ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="px-28 pt-28 pb-12 h-fit w-full flex flex-col gap-12">
        <div className="w-full h-fit flex flex-row justify-between items-center">
          <p className="text-lg font-semibold">Kimera Health</p>
          <NavbarLanguagesSelect />
        </div>
        <div className="w-full flex flex-row gap-24">
          <div className="w-1/2 flex flex-col gap-12">
            <div className="w-full flex flex-col gap-12">
              <div className="w-full flex flex-col gap-6">
                <div className="h-2 w-16 rounded-full bg-emerald-600"></div>
                <p className="text-5xl/snug font-medium text-slate-800 text-start">
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
                    <p className="text-xl/snug font-semibold text-start text-slate-800/50">
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
                  <div className="w-14 h-14 relative">
                    <Image
                      className="object-cover"
                      src={"/assets/images/iso-01.png"}
                      fill
                      sizes="100%"
                      alt="iso-01"
                    />
                  </div>
                  <div className="w-14 h-14 relative">
                    <Image
                      className="object-cover"
                      src={"/assets/images/iso-02.png"}
                      fill
                      sizes="100%"
                      alt="iso-02"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-row gap-12">
            <div className="w-1/2 flex flex-col items-start gap-6">
              <div className="w-fit flex flex-col items-start gap-6">
                <div className="h-2 w-16 rounded-full bg-dodger-blue-500"></div>
                <div className="flex flex-col gap-8">
                  <p className="text-3xl font-medium text-slate-800">Home</p>
                  <p className="text-3xl font-medium text-slate-800">
                    About Us
                  </p>
                  <p className="text-3xl font-medium text-slate-800">
                    Our Partners
                  </p>
                  <p className="text-3xl font-medium text-slate-800">Blog</p>
                  <p className="text-3xl font-medium text-slate-800">Contact</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-end gap-6">
              <div className="w-fit flex flex-col items-start gap-6">
                <div className="h-2 w-16 rounded-full bg-slate-800"></div>

                <div className="w-fit h-fit flex flex-col gap-4">
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
            <span className="text-slate-800">
              © 2024 Company Name. All rights reserved.
            </span>
            <div className="flex flex-row gap-8">
              <Link
                href={"/"}
                className="flex flex-row items-center gap-3 text-lg font-medium text-dodger-blue-800"
              >
                <span>Privacy Policy</span>
              </Link>
              <Link
                href={"/"}
                className="flex flex-row items-center gap-3 text-lg font-medium text-dodger-blue-800"
              >
                <span>Term of Use</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;