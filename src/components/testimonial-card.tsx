import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const TestimonialCard = () => {
  return (
    <>
      <div className="w-[720px] flex flex-col gap-12 mr-28">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-full flex flex-row gap-6 items-center">
            <Avatar className="h-14 w-14">
              <AvatarImage
                src="/assets/images/avatar/avatar-1.jpg"
                className="object-cover"
              />
              <AvatarFallback>LS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1 justify-center">
              <p className="font-semibold text-white">Leonardo Smith</p>
              <span className="font-semibold text-white/30">Product Owner</span>
            </div>
          </div>
          <div className="h-fit w-fit flex justify-center">
            <div className="rounded-full h-fit w-fit py-3 px-6 bg-white relative">
              <Image
                src={`/assets/images/partners/image 41.png`}
                className="!relative object-contain h-3 w-fit"
                fill
                sizes="100%"
                alt="avatar-partner-1"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-5xl/snug text-white text-start">10+ Years</p>
            <span className="font-semibold text-lg text-emerald-600">
              Partnership
            </span>
          </div>

          <p className="text-2xl/snug font-normal text-white/50">
            The reliability and effectiveness of Kimera&apos;s solutions have
            consistently exceeded our expectations, allowing us to provide
            cutting-edge treatments to our patients. Not only does Kimera
            deliver high-quality products, but their team also provides
            exceptional support and collaboration, ensuring seamless integration
            and implementation.
          </p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
