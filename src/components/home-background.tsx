import Image from "next/image";
import React from "react";

const HomeBackground = () => {
  return (
    <>
      <div className="absolute w-full xl:w-[80%] h-fit top-0 left-0 translate-x-0 xl:translate-x-12 -z-20">
        <Image
          src={"/assets/svg/Frame 48095490.svg"}
          className="object-contain w-full h-fit !relative"
          fill
          sizes="100%"
          alt="Frame 48095490"
        />
      </div>
      <div className="absolute w-[40%] xl:w-[20%] h-fit top-0 right-0 -z-20">
        <Image
          src={"/assets/svg/Rectangle 374.svg"}
          className="object-contain w-full h-fit !relative"
          fill
          sizes="100%"
          alt="Rectangle 374"
        />
      </div>
      <div className="absolute w-[40%] h-fit top-[450px] left-0 -z-20">
        <Image
          src={"/assets/svg/Rectangle 373.svg"}
          className="object-contain w-full h-fit !relative"
          fill
          sizes="100%"
          alt="Rectangle 373"
        />
      </div>
      <div className="absolute w-1/2 xl:w-[30%] h-fit top-[30px] xl:top-[200px] right-[20%] -z-20">
        <Image
          src={"/assets/svg/Group 1.svg"}
          className="object-contain w-full h-fit !relative"
          fill
          sizes="100%"
          alt="Group 1"
        />
      </div>
    </>
  );
};

export default HomeBackground;
