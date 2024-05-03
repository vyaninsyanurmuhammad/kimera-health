import React from "react";
import TagSection from "./tag-section";
import KnowlageHubSmallCard from "./knowlage-hub-small-card";
import KnowlageHubBigCard from "./knowlage-hub-big-card";
import Image from "next/image";
import { Button } from "./ui/button";
import KnowlageHubLatestCard from "./knowlage-hub-latest-card";

const HomeKnowlageHub = () => {
  const knowlageHubJournals = [
    {
      title:
        "Healtncare Horizons Advancements in Medicine, Innovations, Integration, And Impact",
      date: "May 22, 2024",
      src: "scientific-genetic.jpg",
      alt: "scientific-genetic",
    },
    {
      title:
        "The Journal of Medical Science and Practice: Exploring Innovations, Integration, And Impact",
      date: "May 16, 2024",
      src: "microscoping-lab.jpg",
      alt: "microscoping-lab",
    },
    {
      title: "Clinical Innovations in Healthcare: A Journal of Cutting an Arm",
      date: "May 4, 2024",
      src: "nurse-measuring.jpg",
      alt: "nurse-measuring",
    },
  ];
  const knowlageHubLatestJournals = [
    {
      title:
        "Empowering Patients: The Role of Digital Health in Transforming Healthcare Delivery",
      date: "May 22, 2024",
      src: "ygft.png",
      alt: "ygft",
    },
    {
      title:
        "Tackling Global Health Challenges: Strategies for Sustainable Healthcare Solutions",
      date: "May 16, 2024",
      src: "lucas-vasques-9vnACvX2748-unsplash 1.png",
      alt: "lucas-vasques-9vnACvX2748-unsplash 1",
    },
    {
      title:
        "From Crisis to Care: The Evolution of Healthcare Systems in a Changing World",
      date: "May 4, 2024",
      src: "image 19 (1).png",
      alt: "image 19 (1)",
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col gap-24 items-start px-8 py-28 xl:p-28">
        <div className="w-full flex flex-col gap-12 items-start">
          <div className="w-full xl:w-[820px] flex flex-col gap-6 items-start">
            <TagSection color="emerald" text="featured products" />
            <p className="text-4xl/snug xl:text-5xl/snug font-semibold text-slate-800 text-start">
              Your Gateway to the Latest Insights, Research, & Networking
            </p>
          </div>
          <div className="w-full flex flex-col gap-6 items-start">
            <div className="w-full flex flex-row items-center justify-between gap-3">
              <span className="font-semibold capitalize text-xl xl:text-2xl text-dodger-blue-800">
                Conference & Journal
              </span>
              <Button className="rounded-full w-fit px-8 py-6 text-dodger-blue-500 bg-white hover:bg-white/90">
                <span className="font-medium">View More</span>
              </Button>
            </div>

            <div className="w-full flex flex-col xl:flex-row gap-8">
              <div className="w-full xl:w-[60%] h-auto">
                <KnowlageHubBigCard className="absolute left-0 bottom-0 z-10" />
              </div>
              <div className="w-full xl:w-[40%] flex flex-col gap-8 z-0">
                {knowlageHubJournals.map((data, index) => {
                  const { title, date, src, alt } = data;

                  return (
                    <KnowlageHubSmallCard
                      key={`${title}-${index}`}
                      type="journal"
                      title={title}
                      date={date}
                      src={src}
                      alt={alt}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 items-start">
          <div className="w-full flex flex-row items-center justify-between gap-3">
            <span className="font-semibold capitalize text-xl xl:text-2xl text-dodger-blue-800">
              Latest Info About Kimera
            </span>
            <Button className="rounded-full w-fit px-8 py-6 text-dodger-blue-500 bg-white hover:bg-white/90">
              <span className="font-medium">View More</span>
            </Button>
          </div>
          <div className="w-full flex flex-col xl:flex-row gap-8">
            {knowlageHubLatestJournals.map((data, index) => {
              const { title, date, src, alt } = data;

              return (
                <KnowlageHubLatestCard
                  key={`${title}-${index}`}
                  title={title}
                  date={date}
                  src={src}
                  alt={alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeKnowlageHub;
