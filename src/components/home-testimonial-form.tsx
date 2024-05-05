import React from "react";
import TagSection from "./tag-section";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import PartnerTag from "./partner-tag";

const HomeTestimonialForm = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-center gap-12 xl:px-28 z-20">
        <div className="hidden xl:flex w-full h-auto flex-col gap-28">
          <div className="flex justify-end">
            <PartnerTag src="image 31.png" alt="partner-1-1" isMargin={false} />
          </div>
          <div className="flex justify-start">
            <PartnerTag src="image 30.png" alt="partner-1-2" isMargin={false} />
          </div>
          <div className="flex justify-end">
            <PartnerTag src="image 41.png" alt="partner-1-3" isMargin={false} />
          </div>
        </div>
        <div className="w-fit xl:shrink-0 flex flex-col gap-6 items-center">
          <TagSection color="emerald" text="featured products" />
          <p className="text-4xl/snug xl:text-5xl/snug font-semibold text-white text-start">
            Let&apos;s Start the Conversation
          </p>
          <div className="w-full grid grid-flow-row gap-6">
            <div className="grid w-full items-center gap-2.5">
              <Label htmlFor="full-name" className="text-white font-normal">
                Full Name&nbsp;<span className="text-red-500">*</span>
              </Label>
              <Input
                className="w-full py-5 px-5 h-fit bg-dodger-blue-200/20 text-white border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                type="text"
                placeholder="Input your full name"
              />
            </div>
            <div className="grid w-full items-center gap-2.5">
              <Label htmlFor="full-name" className="text-white font-normal">
                Hospital&nbsp;<span className="text-red-500">*</span>
              </Label>
              <Input
                className="w-full py-5 px-5 h-fit bg-dodger-blue-200/20 text-white border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                type="text"
                placeholder="Input your hospital name"
              />
            </div>
            <div className="grid w-full items-center gap-2.5">
              <Label htmlFor="full-name" className="text-white font-normal">
                Email&nbsp;<span className="text-red-500">*</span>
              </Label>
              <Input
                className="w-full py-5 px-5 h-fit bg-dodger-blue-200/20 text-white border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                type="text"
                placeholder="Input your email"
              />
            </div>
            <div className="grid w-full items-center gap-2.5">
              <Label htmlFor="full-name" className="text-white font-normal">
                Message&nbsp;<span className="text-red-500">*</span>
              </Label>
              <Textarea
                className="w-full py-5 px-5 bg-dodger-blue-200/20 text-white border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                rows={10}
                placeholder="Input your message"
              />
            </div>
          </div>
          <Button className="rounded-full px-16 py-6 bg-dodger-blue-500 hover:bg-dodger-blue-500/90">
            <span>Start a Conversation</span>
          </Button>
        </div>
        <div className="hidden xl:flex w-full h-auto flex-col justify-end gap-28">
          <div className="flex justify-start">
            <PartnerTag src="image 37.png" alt="partner-2-1" isMargin={false} />
          </div>

          <div className="flex justify-end">
            <PartnerTag src="image 36.png" alt="partner-2-2" isMargin={false} />
          </div>

          <div className="flex justify-start">
            <PartnerTag src="image 32.png" alt="partner-2-3" isMargin={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTestimonialForm;
