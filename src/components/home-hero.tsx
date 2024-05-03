import React from "react";
import HeroCard from "@/components/hero-card";
import TagSection from "@/components/tag-section";
import Image from "next/image";

const HomeHero = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col-reverse xl:flex-row pb-12 xl:pb-28 gap-12">
        <div className="w-full xl:w-[60%] 2xl:w-1/2 h-fit shrink-0 flex flex-col justify-center gap-6 px-12 xl:pl-28 pb-12 xl:py-40">
          <TagSection
            className="text-sm xl:text-base text-emerald-600"
            text="committed to ensure"
          />

          <div className="w-full h-fit flex flex-col gap-3">
            <p className="text-4xl/snug xl:text-5xl/snug font-semibold text-800">
              Redefine Pain Management for a Better, Healthier Future
            </p>
            <p className="text-xl xl:text-2xl/snug font-medium text-slate-500">
              We help you to find the best health product that suite your
              Bussiness
            </p>
          </div>
          <div className="w-full h-fit xl:h-56 grid grid-rows-4 xl:grid-rows-1 xl:grid-cols-4 gap-4">
            <HeroCard icon="brain" text="Brain Stimulation" />
            <HeroCard icon="bone" text="Chronic Pain Reliefer" />
            <HeroCard icon="monitor" text="Technical Trainings" />
            <HeroCard icon="heart-handshake" text="Quality Support" />
          </div>
          <div className="w-full h-fit flex flex-col gap-3">
            <p className="text-lg xl:text-xl font-medium text-slate-500">
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
        <div className="block xl:block w-full xl:w-[40%] h-96 xl:h-auto 2xl:w-1/2 relative px-12 xl:pr-28 pt-28 xl:py-28">
          <Image
            className="object-cover z-0 h-full w-full !relative rounded-xl"
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
