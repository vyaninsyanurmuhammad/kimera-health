import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "./ui/carousel";
import TestimonialJumbotronCarouselItem from "./testimonial-jumbotron-carousel-item";

const HomeTestimonialJumbotronCarousel = () => {
  return (
    <>
      <div className="h-fit w-full px-4 xl:px-8">
        <div className="h-fit w-full relative">
          <div className="absolute h-[640px] xl:h-[720px] z-10 w-full rounded-lg overflow-hidden bg-slate-800">
            <Carousel>
              <CarouselContent className="ml-0 h-full">
                <TestimonialJumbotronCarouselItem />
                <TestimonialJumbotronCarouselItem />
                <TestimonialJumbotronCarouselItem />
                <TestimonialJumbotronCarouselItem />
              </CarouselContent>
              <CarouselDots />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTestimonialJumbotronCarousel;
