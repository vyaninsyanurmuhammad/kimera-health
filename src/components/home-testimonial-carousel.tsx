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
      <div className="w-full pl-8 xl:pl-28">
        <Carousel
          className="w-full flex flex-col gap-12 xl:gap-24"
          plugins={[ClassNames()]}
          opts={{ align: "center" }}
        >
          <CarouselContent
            className="-ml-12 xl:ml-[calc(48px*-1)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            <HomeTestimonialCarouselItem />
            <HomeTestimonialCarouselItem />
            <HomeTestimonialCarouselItem />
          </CarouselContent>
          <div className="bottom-4 right-4 flex gap-2 transition-all">
            <CarouselPrevious className="relative w-12 h-12 left-0 top-auto bottom-0 translate-x-0 translate-y-0" />
            <CarouselNext className="relative w-12 h-12 right-0 transition-all top-auto bottom-0 translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
      <div className="w-full flex flex-col xl:flex-row justify-between items-center px-8 xl:px-20 gap-6 xl:gap-12 relative">
        <div className="absolute w-[80%] h-fit -top-28 left-1/2 -translate-x-1/2 -z-0">
          <Image
            src={"/assets/svg/Rectangle 374 (2).svg"}
            className="object-contain w-full h-fit !relative"
            fill
            sizes="100%"
            alt="Rectangle 374 (2)"
          />
        </div>
        <div className="rounded-lg h-80 xl:h-[520px] w-full xl:w-1/3 p-2 bg-white relative overflow-hidden xl:mb-64">
          <div className="rounded-md h-full w-full relative overflow-hidden">
            <Image
              src={`/assets/images/tom-claes-HIdUiamYIs0-unsplash 1.png`}
              className="object-cover h-full w-full xl:w-fit"
              fill
              sizes="100%"
              alt="avatar-partner-1"
            />
          </div>
        </div>
        <div className="rounded-lg h-80 xl:h-[860px] w-full xl:w-1/3 p-2 bg-white relative overflow-hidden">
          <div className="rounded-md h-full w-full relative overflow-hidden">
            <Image
              src={`/assets/images/knb.png`}
              className="object-cover h-full w-fit"
              fill
              sizes="100%"
              alt="avatar-partner-1"
            />
          </div>
        </div>
        <div className="rounded-lg h-80 xl:h-[520px] w-full xl:w-1/3 p-2 bg-white relative overflow-hidden  xl:mt-64">
          <div className="rounded-md h-full w-full relative overflow-hidden">
            <Image
              src={`/assets/images/ygft.png`}
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

const HomeTestimonialCarouselItem = () => {
  return (
    <>
      <CarouselItem
        id="carousel-content"
        className="pl-12 flex-none basis-full xl:basis-auto xl:w-[70%] "
      >
        <TestimonialCard />
      </CarouselItem>
    </>
  );
};

export default HomeTestimonialCarousel;
