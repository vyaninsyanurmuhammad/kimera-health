import React, { useEffect, useRef, useState } from "react";
import TagSection from "./tag-section";
import Marquee from "react-fast-marquee";
import PartnerTag from "./partner-tag";
import { Separator } from "./ui/separator";
import HomeTestimonialForm from "./home-testimonial-form";
import HomeTestimonialCarousel from "./home-testimonial-carousel";
import HomeTestimonialJumbotronCarousel from "./home-testimonial-jumbotron-carousel";
import Image from "next/image";

const HomeTestimonial = () => {
  const firstPartners = [
    {
      src: "image 42.png",
    },
    {
      src: "image 30.png",
    },
    {
      src: "image 31.png",
    },
    {
      src: "image 32.png",
    },
    {
      src: "image 33.png",
    },
    {
      src: "image 36.png",
    },
    {
      src: "image 39.png",
    },
  ];

  const secoundPartners = [
    {
      src: "image 40.png",
    },
    {
      src: "image 41.png",
    },
    {
      src: "image 34.png",
    },
    {
      src: "image 35.png",
    },
    {
      src: "image 37.png",
    },
    {
      src: "image 38.png",
    },
  ];

  return (
    <>
      <div className="w-full pt-28 pb-[360px] bg-dodger-blue-950 rounded-tr-[84px] xl:rounded-tr-[112px] flex flex-col gap-24 relative">
        <div className="absolute w-full h-[50%] bottom-0 left-0 bg-[#223548] -z-0 rounded-tr-[84px] overflow-hidden">
          <div className="absolute w-full h-fit top-0 xl:-top-[250px] -right-[480px] -z-0 mix-blend-soft-light opacity-50">
            <Image
              src={"/assets/svg/Mask group.svg"}
              className="object-contain w-full h-fit !relative"
              fill
              sizes="100%"
              alt="Frame 48095490"
            />
          </div>
          <div className="absolute w-[80%] xl:w-[25%] h-fit bottom-0 left-0 -z-20">
            <Image
              src={"/assets/svg/Group 1 (3).svg"}
              className="object-contain w-full h-fit !relative"
              fill
              sizes="100%"
              alt="Group 1-3"
            />
          </div>
          <div className="absolute w-[80%] xl:w-[80%] h-fit bottom-0 left-0 -z-20">
            <Image
              src={"/assets/svg/Rectangle 375.svg"}
              className="object-contain w-full h-fit !relative"
              fill
              sizes="100%"
              alt="Rectangle 375"
            />
          </div>
        </div>

        <div className="absolute w-full h-fit top-0 xl:-top-[540px] -right-0 -z-0 mix-blend-soft-light opacity-50">
          <Image
            src={"/assets/svg/Mask group.svg"}
            className="object-contain w-full h-fit !relative"
            fill
            sizes="100%"
            alt="Frame 48095490"
          />
        </div>
        <div className="w-full flex flex-col px-8 xl:px-0 xl:pl-28 gap-12">
          <div className="w-full xl:w-[820px] flex flex-col gap-6 items-start">
            <TagSection color="emerald" text="featured products" />
            <p className="text-4xl/snug xl:text-5xl/snug font-semibold text-white text-start">
              Discover the Stories, Insights, & Impact of Our Valued Customers
            </p>
          </div>
          <div className="flex flex-col xl:flex-row justify-start xl:items-center gap-12">
            <div className="flex flex-col items-start gap-3">
              <span className="text-[148px] leading-snug tracking-tighter bg-gradient-to-tr from-emerald-400 via-70% to-blue-700 bg-clip-text text-transparent">
                30+
              </span>
              <p className="text-xl/none font-medium text-white/30">
                Total Our Customers
              </p>
            </div>
            <div className="flex flex-col gap-6 w-full h-fit overflow-hidden justify-center relative">
              <div className="left-0 w-48 absolute z-10 h-full bg-gradient-to-r from-dodger-blue-950 xl:from-[#223656] via-70% to-transparent"></div>
              <div className="block xl:hidden -right-1 w-48 absolute z-10 h-full bg-gradient-to-l from-dodger-blue-950 via-70% to-transparent"></div>
              <Marquee className="w-full">
                {firstPartners.map((data, index) => {
                  const { src } = data;

                  return (
                    <PartnerTag
                      key={`partner-1-${index}`}
                      src={src}
                      alt={`partner-1-${index}`}
                    />
                  );
                })}
              </Marquee>
              <Marquee className="w-full" direction="right">
                {secoundPartners.map((data, index) => {
                  const { src } = data;

                  return (
                    <PartnerTag
                      key={`partner-1-${index}`}
                      src={src}
                      alt={`partner-1-${index}`}
                    />
                  );
                })}
              </Marquee>
            </div>
          </div>
        </div>
        <div className="w-full px-8 xl:px-28">
          <Separator orientation="horizontal" className="bg-white/30" />
        </div>
        <HomeTestimonialCarousel />
        <HomeTestimonialForm />
        <HomeTestimonialJumbotronCarousel />
      </div>
    </>
  );
};

export default HomeTestimonial;
