import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Button } from "./ui/button";
import AccordionCard from "./accordion-card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "./ui/carousel";

type AccordionItemCustomProps = {
  className?: string;
  value: string;
  imageTriggerSrc: string;
  imageTriggerAlt: string;
  title: string;
  description: string;
};

const AccordionItemCustom = ({
  className,
  value,
  imageTriggerSrc,
  imageTriggerAlt,
  title,
  description,
}: AccordionItemCustomProps) => {
  return (
    <AccordionItem
      value={value}
      className={`data-[state=closed]:mx-7 xl:data-[state=closed]:mx-14 [&>[data-state=closed]>button>div#btn]:mr-7 xl:[&>[data-state=closed]>button>div#btn]:mr-14 [&>[data-state=closed]>button>div#trigger]:ml-7 xl:[&>[data-state=closed]>button>div#trigger]:ml-14 data-[state=open]:mx-4 xl:data-[state=open]:mx-8  border-none bg-dodger-blue-900 data-[state=open]:bg-dodger-blue-500 data-[state=open]:rounded-lg transition-all ease-out ${className}`}
    >
      <AccordionTrigger className="w-full h-full hover:no-underline data-[state=open]:px-10 xl:data-[state=open]:px-20 py-7 xl:py-14 [&[data-state=open]>div>svg]:rotate-180 relative transition-all duration-500 [&>div#btn]:z-50">
        <div className="absolute w-full h-full -top-0 right-0 z-0 mix-blend-soft-light opacity-50">
          <Image
            src={"/assets/images/image 24.png"}
            className="object-cover object-top w-full h-full !relative"
            fill
            sizes="100%"
            alt="image 24"
          />
        </div>
        <div className="absolute w-1/2 xl:w-fit h-full bottom-0 right-0 z-20">
          <Image
            src={"/assets/svg/Group 7.svg"}
            className="object-contain w-full h-fit !relative"
            fill
            sizes="100%"
            alt="Group 7"
          />
        </div>
        <div id="trigger" className="h-12 w-32 relative">
          <Image
            src={`/assets/images/${imageTriggerSrc}`}
            className="z-0 object-contain relative grayscale saturate-0 brightness-0 invert "
            fill
            sizes="100%"
            alt={imageTriggerAlt}
          />
        </div>
      </AccordionTrigger>
      <AccordionContent className="relative w-full h-fit px-10 xl:px-20 pb-7 xl:pb-14 flex flex-col xl:flex-row gap-12 items-center z-20">
        <div className="absolute w-1/2 xl:w-[20%] h-fit bottom-0 left-0 -z-0">
          <Image
            src={"/assets/svg/Group 1 (2).svg"}
            className="object-contain w-full h-fit !relative"
            fill
            sizes="100%"
            alt="Group 1-2"
          />
        </div>
        <div className="w-full xl:w-[35%] h-fit flex flex-col gap-6 pt-12 xl:pt-0 relative z-50">
          <div className="h-2 w-16 rounded-full bg-emerald-600"></div>

          <div className="w-full h-fit flex flex-col gap-3">
            <p className="text-4xl/snug xl:text-5xl/snug font-medium text-white">
              {title}
            </p>
            <p className="text-lg/snug xl:text-xl/snug font-medium text-white/50">
              {description}
            </p>
          </div>

          <Button className="rounded-full w-fit px-12 py-6 xl:py-8 text-dodger-blue-700 bg-white hover:bg-white/90">
            <p className="text-lg xl:text-xl font-medium">Learn More</p>
          </Button>
        </div>
        <Carousel className="w-full block xl:hidden">
          <CarouselContent>
            <CarouselItem className="basis-full">
              <AccordionCard
                src="waveform-1.png"
                title="Radiotrequency Ablation"
              />
            </CarouselItem>
            <CarouselItem className="basis-full">
              <AccordionCard
                src="waveform-1.png"
                title="Radiotrequency Ablation"
              />
            </CarouselItem>
            <CarouselItem className="basis-full">
              <AccordionCard
                src="waveform-1.png"
                title="Radiotrequency Ablation"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselDots className="!-bottom-4" />
        </Carousel>
        <div className="w-full xl:w-[75%] h-fit xl:h-[520px] hidden xl:grid grid-rows-3 xl:grid-rows-1 grid-cols-1 xl:grid-cols-3 gap-4">
          <AccordionCard src="waveform-1.png" title="Radiotrequency Ablation" />
          <AccordionCard src="spinal-1.png" title="Spinal Card Stimulator" />
          <AccordionCard
            src="multipolar-1.png"
            title="Deep Brain Stimulation"
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionItemCustom;
