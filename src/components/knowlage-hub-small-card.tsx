import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";
import KnowlageHubType from "./knowlage-hub-type";

type KnowlageHubSmallCard = {
  title: string;
  date: string;
  src: string;
  alt: string;
  type?: "conference" | "journal";
};

const KnowlageHubSmallCard = ({
  type,
  title,
  date,
  src,
  alt,
}: KnowlageHubSmallCard) => {
  return (
    <>
      <div className="w-full h-fit bg-white rounded-lg flex flex-row p-2 gap-2">
        <div className="w-full h-auto flex flex-col justify-center gap-4 p-4">
          <KnowlageHubType type={type} />
          <div className="h-full flex flex-col gap-4 justify-end">
            <p className="text-2xl/snug font-medium text-slate-800 line-clamp-2">
              {title}
            </p>
            <div className="flex flex-row gap-4 items-center text-slate-500">
              <Calendar size={16} />
              <span>{date}</span>
            </div>
          </div>
        </div>
        <div className="w-48 h-48 flex shrink-0 rounded-md bg-dodger-blue-500 relative overflow-hidden">
          <Image
            src={`/assets/images/${src}`}
            fill
            sizes="100%"
            className="object-cover"
            alt={alt}
          />
        </div>
      </div>
    </>
  );
};

export default KnowlageHubSmallCard;
