import React from "react";
import TagSection from "./tag-section";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const HomeTestimonialForm = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center px-8 xl:px-28 gap-12 z-20">
        <div className="w-fit flex flex-col gap-6 items-center">
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
      </div>
    </>
  );
};

export default HomeTestimonialForm;
