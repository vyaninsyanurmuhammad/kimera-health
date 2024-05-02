import React from "react";
import TagSection from "./tag-section";
import Marquee from "react-fast-marquee";
import PartnerTag from "./partner-tag";
import { Separator } from "./ui/separator";
import HomeTestimonialForm from "./home-testimonial-form";
import HomeTestimonialCarousel from "./home-testimonial-carousel";

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
      <div className="w-full py-28 bg-dodger-blue-950 rounded-tr-[112px] flex flex-col gap-24">
        <div className="w-full flex flex-col pl-28 gap-12">
          <div className="w-[820px] flex flex-col gap-6 items-start">
            <TagSection className="text-emerald-600" text="featured products" />
            <p className="text-5xl/snug font-semibold text-white text-start">
              Discover the Stories, Insights, & Impact of Our Valued Customers
            </p>
          </div>
          <div className="flex flex-row items-center gap-12">
            <div className="flex flex-col items-start gap-3">
              <span className="text-[148px] tracking-tighter bg-gradient-to-tr from-emerald-400 via-70% to-blue-700 bg-clip-text text-transparent">
                30+
              </span>
              <p className="text-xl/none font-medium text-white/30">
                Total Our Customers
              </p>
            </div>
            <div className="flex flex-col gap-6 w-full h-fit overflow-hidden justify-center relative">
              <div className="left-0 w-48 absolute z-10 h-full bg-gradient-to-r from-dodger-blue-950 via-70% to-transparent"></div>
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
        <div className="w-full px-28">
          <Separator orientation="horizontal" className="bg-white/30" />
        </div>
        <HomeTestimonialCarousel />
        <HomeTestimonialForm />
      </div>
    </>
  );
};

export default HomeTestimonial;
