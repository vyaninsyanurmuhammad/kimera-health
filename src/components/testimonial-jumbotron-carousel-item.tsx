import Image from "next/image";
import React from "react";
import { CarouselItem } from "./ui/carousel";
import { Button } from "./ui/button";

const TestimonialJumbotronCarouselItem = () => {
  return (
    <>
      <CarouselItem className="basis-full pl-0">
        <div className="w-full h-[640px] xl:h-[720px] relative">
          <Image
            className="object-cover -z-10 h-full w-full"
            src={"/assets/images/medical-hospital.jpg"}
            fill
            sizes="100%"
            alt="medical-hospital"
          />
          <div className="w-full h-full flex flex-col justify-center p-4 xl:p-20 bg-gradient-to-tr from-slate-800 from-20% to-transparent">
            <div className="w-full xl:w-[35%] h-full flex flex-col justify-end gap-6 py-12 xl:pt-0">
              <div className="h-2 w-16 rounded-full bg-emerald-600"></div>

              <div className="w-full h-fit flex flex-col gap-3">
                <p className="text-4xl/snug xl:text-5xl/snug font-medium text-white">
                  Access Our Exclusive Health Hub
                </p>
                <p className="text-lg/snug xl:text-xl/snug font-medium text-white/50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae ante finibus ligula commodo ultrices. Sed viverra leo eu
                  sapien aliquet finibus. Pellentesque sit amet porta ligula, id
                  auctor tellus. Cras vitae facilisis magna.
                </p>
              </div>

              <Button className="rounded-full w-fit px-12 py-6 xl:py-8 text-dodger-blue-700 bg-white hover:bg-white/90">
                <p className="text-lg xl:text-xl font-medium">Learn More</p>
              </Button>
            </div>
          </div>
        </div>
      </CarouselItem>
    </>
  );
};

export default TestimonialJumbotronCarouselItem;
