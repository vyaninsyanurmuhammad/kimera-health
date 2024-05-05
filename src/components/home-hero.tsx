import React from "react";
import HeroCard from "@/components/hero-card";
import TagSection from "@/components/tag-section";
import Image from "next/image";

const HomeHero = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col-reverse xl:flex-row gap-12">
        <div className="w-full xl:w-[50%] 2xl:w-1/2 h-fit shrink-0 flex flex-col justify-center gap-6 px-12 xl:pl-28 pb-[104px] xl:pt-40">
          <TagSection text="committed to ensure" color="emerald" />

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
            <HeroCard icon="brain" text="Brain Simulation" />
            <HeroCard icon="hand-heart" text="Chronic Pain Reliefer" />
            <HeroCard icon="monitor" text="Technical Trainings" />
            <HeroCard icon="heart-handshake" text="Quality Support" />
          </div>
          <div className="w-full h-fit flex flex-col gap-3">
            <p className="text-lg xl:text-xl font-medium text-slate-500">
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
        <div className="w-full xl:w-[50%] h-auto xl:h-auto 2xl:w-1/2 px-12 xl:pr-28 pt-40 xl:pb-20 flex justify-center">
          <div className="w-full xl:w-fit h-full relative">
            <div className="hidden xl:block h-[368px] w-[217px] rounded-xl bg-dodger-blue-500 absolute -left-4 -top-2 -z-10"></div>
            <div className="hidden xl:block h-[228px] w-fit absolute -right-8 -bottom-8">
              <Image
                className="z-10 h-full w-fit !relative"
                src={"/assets/images/Frame 35.png"}
                fill
                sizes="100%"
                alt="medical-hospital"
              />
            </div>
            <div className="h-full w-full xl:w-fit relative">
              <Image
                className="object-contain z-0 !relative h-full w-fit"
                src={"/assets/images/Frame 36.png"}
                fill
                sizes="100%"
                alt="medical-hospital"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
