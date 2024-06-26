"use client";

import VideoCard from "@/components/video-card";
import React, { useEffect, useState } from "react";
import TagSection from "./tag-section";
import Image from "next/image";

const HomeAbout = () => {
  const videos = [
    {
      src: "https://tecdn.b-cdn.net/img/video/forest.mp4",
      caption: "24/7 Product Support",
    },
    {
      src: "https://tecdn.b-cdn.net/img/video/Agua-natural.mp4",
      caption: "Health System Integration",
    },
    {
      src: "https://tecdn.b-cdn.net/img/video/Lines.mp4",
      caption: "Health Tools Provider",
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000);
    return () => clearTimeout(timer);
  }, [currentVideoIndex]);

  return (
    <>
      <div className="w-full p-12 xl:p-28 my-12 xl:my-28 flex flex-row">
        <div className="w-full flex flex-col gap-6 relative">
          <div className="absolute bg-dodger-blue-500 -z-10 -inset-8 xl:-inset-20 rounded-xl overflow-hidden">
            <Image
              className="object-cover object-top h-full w-full !relative mix-blend-soft-light"
              src={"/assets/images/ghdfg.png"}
              fill
              sizes="100%"
              alt="ghdfg"
            />
            <div className="absolute h-[40%] xl:h-[720px] w-fit top-0 right-0">
              <Image
                className="object-cover h-full w-fit !relative"
                src={"/assets/svg/Group 1 (1).svg"}
                fill
                sizes="100%"
                alt="Group-1-1"
              />
            </div>
          </div>
          <TagSection color="white-opacity" text="about us" />
          <div className="w-full flex flex-col xl:flex-row gap-12">
            <div className="w-full xl:w-[30%] shrink-0 flex flex-col gap-16">
              <p className="text-4xl/snug xl:text-5xl/snug font-medium text-white">
                We are comitted to ensuring relieble supply and backed by
                unwavering quality support
              </p>
              <div className="w-full flex flex-col gap-6">
                <div className="w-fit h-fit flex flex-row gap-4 items-center justify-center">
                  <span className="text-5xl font-semibold text-white">8+</span>
                  <div className="flex gap-1.5 bg-white/20 rounded-full px-6 py-2 justify-center items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-white"></div>
                    <span className="text-white font-medium">Partners</span>
                  </div>
                </div>
                <div className="w-fit h-fit flex flex-row gap-4 items-center justify-center">
                  <span className="text-5xl font-semibold text-white">30+</span>
                  <div className="flex gap-1.5 bg-white/20 rounded-full px-6 py-2 justify-center items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-white"></div>
                    <span className="text-white font-medium">Customers</span>
                  </div>
                </div>
                <div className="w-fit h-fit flex flex-row gap-4 items-center justify-center">
                  <span className="text-5xl font-semibold text-white">3</span>
                  <div className="flex gap-1.5 bg-white/20 rounded-full px-6 py-2 justify-center items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-white"></div>
                    <span className="text-white font-medium">Countries</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[70%] flex flex-row gap-4">
              {videos.map((video, index) => {
                const { src, caption } = video;

                return (
                  <VideoCard
                    key={`${caption}-${index}`}
                    src={src}
                    caption={caption}
                    autoplay={index === currentVideoIndex ? true : false}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
