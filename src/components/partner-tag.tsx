import Image from "next/image";
import React from "react";

type PartnerTagProps = {
  src: string;
  alt: string;
};

const PartnerTag = ({ src, alt }: PartnerTagProps) => {
  return (
    <>
      <div className="h-fit w-full flex justify-center mx-5">
        <div className="rounded-full h-16 w-fit py-4 px-10 bg-white relative">
          <Image
            src={`/assets/images/partners/${src}`}
            className="!relative object-contain h-full w-fit"
            fill
            sizes="100%"
            alt={alt}
          />
        </div>
      </div>
    </>
  );
};

export default PartnerTag;
