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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae ante finibus ligula commodo ultrices. Sed viverra leo eu sapien aliquet finibus. Pellentesque sit amet porta ligula, id auctor tellus. Cras vitae facilisis magna.",
    },
    {
      value: "item-2",
      imageTriggerSrc: "image-16.png",
      imageTriggerAlt: "trigger-item-2",
      title: "Innovative Solutions by Boston Scientific",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae ante finibus ligula commodo ultrices. Sed viverra leo eu sapien aliquet finibus. Pellentesque sit amet porta ligula, id auctor tellus. Cras vitae facilisis magna.",
    },
    {
      value: "item-3",
      imageTriggerSrc: "image-22.png",
      imageTriggerAlt: "trigger-item-3",
      title: "Innovative Solutions by Boston Scientific",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae ante finibus ligula commodo ultrices. Sed viverra leo eu sapien aliquet finibus. Pellentesque sit amet porta ligula, id auctor tellus. Cras vitae facilisis magna.",
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col gap-12 items-center py-12 xl:py-28">
        <div className="w-full xl:w-[1080px] flex flex-col p-12 xl:px-28 gap-6 items-center">
          <TagSection className="text-emerald-600" text="featured products" />
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
