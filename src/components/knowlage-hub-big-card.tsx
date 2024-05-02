import { Calendar } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import KnowlageHubType from "./knowlage-hub-type";
import Image from "next/image";

type KnowlageHubBigCardProps = {
  className?: string;
};

const KnowlageHubBigCard = ({ className }: KnowlageHubBigCardProps) => {
  return (
    <>
      <div
        className={`w-full h-full bg-dodger-blue-300 rounded-lg p-4 flex items-end relative overflow-hidden ${className}`}
      >
        <Image
          src="/assets/images/health-care.jpg"
          className="object-cover"
          fill
          sizes="100%"
          alt="health-care"
        />
        <div className="w-full h-fit relative">
          <div className="w-full h-fit bg-white rounded-md flex flex-row p-10">
            <div className="w-full flex flex-col gap-4">
              <KnowlageHubType type="conference" />
              <p className="text-3xl/snug font-semibold text-slate-800 line-clamp-3">
                Advancing Healthcare: Innovations, Integration, And Impact
              </p>
              <div className="flex flex-row gap-4 items-center text-slate-500">
                <Calendar size={16} />
                <span>May 24, 2024</span>
              </div>
            </div>
            <div className="w-full flex justify-end items-end">
              <Button className="rounded-full w-fit px-12 py-8 text-white bg-dodger-blue-500 hover:bg-dodger-blue-500/90">
                <p className="text-lg font-medium">Register Now</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowlageHubBigCard;
