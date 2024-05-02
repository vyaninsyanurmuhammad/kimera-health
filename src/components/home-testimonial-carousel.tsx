"use client";

import ClassNames from "embla-carousel-class-names";
import React from "react";
import TestimonialCard from "./testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import Image from "next/image";

const HomeTestimonialCarousel = () => {
  return (
    <>
      <div className="w-full pl-28">
        <Carousel
          className="w-full flex flex-col gap-24"
          plugins={[ClassNames()]}
        >
          <CarouselContent className="">
            <CarouselItem className="">
              <TestimonialCard />
            </CarouselItem>
            <CarouselItem className="">
              <TestimonialCard />
            </CarouselItem>
            <CarouselItem className="">
              <TestimonialCard />
            </CarouselItem>
          </CarouselContent>
          <div className="bottom-4 right-4 flex gap-2 transition-all">
            <CarouselPrevious className="relative w-12 h-12 left-0 top-auto bottom-0 translate-x-0 translate-y-0" />
            <CarouselNext className="relative w-12 h-12 right-0 transition-all top-auto bottom-0 translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
      <div className="w-full flex flex-row justify-between items-center px-20 gap-12">
        <div className="rounded-lg h-[520px] w-1/3 p-2 bg-white relative overflow-hidden mb-64">
          <div className="rounded-md h-full w-full relative overflow-hidden">
            <Image
              src={`/assets/images/health-care.jpg`}
              className="object-cover h-full w-fit"
              fill
              sizes="100%"
              alt="avatar-partner-1"
            />
          </div>
        </div>
        <div className="rounded-lg h-[860px] w-1/3 p-2 bg-white relative overflow-hidden">
          <div className="rounded-md h-full w-full relative overflow-hidden">
            <Image
              src={`/assets/images/microscoping-lab.jpg`}
              className="object-cover h-full w-fit"
              fill
              sizes="100%"
              alt="avatar-partner-1"
            />
          </div>
        </div>
        <div className="rounded-lg h-[520px] w-1/3 p-2 bg-white relative overflow-hidden mt-64">
          <div className="rounded-md h-full w-full relative overflow-hidden">
            <Image
              src={`/assets/images/nurse-measuring.jpg`}
              className="object-cover h-full w-fit"
              fill
              sizes="100%"
              alt="avatar-partner-1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTestimonialCarousel;
