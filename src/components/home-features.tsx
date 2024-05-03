import { Accordion } from "@/components/ui/accordion";
import React from "react";
import AccordionItemCustom from "./accordion-item-custom";
import TagSection from "./tag-section";

const HomeFeatures = () => {
  const accordionDatas = [
    {
      value: "item-1",
      imageTriggerSrc: "image-19.png",
      imageTriggerAlt: "trigger-item-1",
      title: "Innovative Solutions by Boston Scientific",
      description:
        "From advanced spinal cord stimulation systems to innovative neurostimulation technologies, explore Boston Scientific’s range of solutions tailored to address diverse pain management needs with precision and efficacy",
    },
    {
      value: "item-2",
      imageTriggerSrc: "image-16.png",
      imageTriggerAlt: "trigger-item-2",
      title: "Innovative Solutions by Boston Scientific",
      description:
        "From advanced spinal cord stimulation systems to innovative neurostimulation technologies, explore Boston Scientific’s range of solutions tailored to address diverse pain management needs with precision and efficacy",
    },
    {
      value: "item-3",
      imageTriggerSrc: "image-22.png",
      imageTriggerAlt: "trigger-item-3",
      title: "Innovative Solutions by Boston Scientific",
      description:
        "From advanced spinal cord stimulation systems to innovative neurostimulation technologies, explore Boston Scientific’s range of solutions tailored to address diverse pain management needs with precision and efficacy",
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col gap-12 items-center pb-12 xl:pb-28">
        <div className="w-full xl:w-[1080px] flex flex-col px-12 xl:px-28 gap-6 items-center">
          <TagSection color="emerald" text="featured products" />
          <p className="text-4xl/snug xl:text-5xl/snug font-semibold text-800 text-center">
            Your Trusted Source for Advanced Pain Management Solutions
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-2"
        >
          {accordionDatas.map((data, index) => {
            const {
              title,
              description,
              value,
              imageTriggerSrc,
              imageTriggerAlt,
            } = data;

            return (
              <AccordionItemCustom
                className={`${index === 0 && "rounded-t-lg"} ${
                  index === accordionDatas.length - 1 && "rounded-b-lg"
                }`}
                key={`${value}-${index}`}
                value={value}
                imageTriggerSrc={imageTriggerSrc}
                imageTriggerAlt={imageTriggerAlt}
                title={title}
                description={description}
              />
            );
          })}
        </Accordion>
      </div>
    </>
  );
};

export default HomeFeatures;
