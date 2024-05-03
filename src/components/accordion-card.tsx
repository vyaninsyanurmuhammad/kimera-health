import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type AcordionCardProps = {
  title: string;
  src: string;
  href?: string;
};

const AccordionCard = ({ title, src, href }: AcordionCardProps) => {
  return (
    <>
      <div className="w-full h-full bg-white rounded-lg flex flex-col justify-end gap-3 py-12">
        <div className="w-full h-40 xl:h-full relative">
          <Image
            src={`/assets/images/${src}`}
            className="z-0 object-contain object-center w-full h-fit"
            fill
            sizes="100%"
            alt="acordion-card-image-03"
          />
        </div>
        <div className="flex flex-col px-6 xl:px-6 2xl:px-12 gap-3">
          <p className="text-xl xl:text-2xl 2xl:text-3xl/snug break-words font-medium text-slate-800">{title}</p>
          <Link
            href={href ?? "/"}
            className="flex flex-row items-center gap-3 text-lg font-medium text-dodger-blue-500 hover:text-dodger-blue-500/90"
          >
            <span>Learn More</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AccordionCard;
