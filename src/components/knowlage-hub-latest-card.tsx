import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const KnowlageHubLatestCard = () => {
  return (
    <>
      <div className="w-full flex flex-col bg-white rounded-lg p-2 xl:p-4">
        <div className="relative w-full h-72 rounded-md overflow-hidden">
          <Image
            src="/assets/images/health-care.jpg"
            className="relative object-cover"
            fill
            sizes="100%"
            alt="health-care"
          />
        </div>
        <div className="w-full flex flex-col gap-6 px-4 py-6 xl:py-8">
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center text-slate-500 text-sm xl:text-base">
              <Calendar size={16} />
              <span>May 12, 2024</span>
            </div>
            <p className="text-xl/snug xl:text-2xl/snug font-semibold text-slate-800 line-clamp-2">
              Empowering Patients: The Role of Digital Health in Transforming
              Heterogen to Medicine
            </p>
          </div>

          <Link
            href={"/"}
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

export default KnowlageHubLatestCard;
