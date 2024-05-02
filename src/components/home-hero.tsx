import React from "react";
import HeroCard from "@/components/hero-card";
import TagSection from "@/components/tag-section";
import Image from "next/image";

const HomeHero = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-row shrink-0 pb-28">
        <div className="w-1/2 h-fit shrink-0 flex flex-col justify-center gap-6 px-28 py-40">
          <TagSection className="text-emerald-600" text="committed to ensure" />

          <div className="w-full h-fit flex flex-col gap-3">
            <p className="text-5xl/snug font-semibold text-800">
              Redefine Pain Management for a Better, Healthier Future
            </p>
            <p className="text-2xl/snug font-medium text-slate-500">
              We help you to find the best health product that suite your
              Bussiness
            </p>
          </div>
          <div className="w-full h-56 grid grid-cols-4 gap-4">
            <HeroCard icon="brain" text="Brain Stimulation" />
            <HeroCard icon="bone" text="Chronic Pain Reliefer" />
            <HeroCard icon="monitor" text="Technical Trainings" />
            <HeroCard icon="heart-handshake" text="Quality Support" />
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
        <div className="w-1/2 relative">
          <Image
            className="object-cover z-0 relative"
            src={"/assets/images/medical-hospital.jpg"}
            fill
            sizes="100%"
            alt="medical-hospital"
          />
        </div>
      </div>
    </>
  );
};

export default HomeHero;
