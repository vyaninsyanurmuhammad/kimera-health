import { Minus } from "lucide-react";
import React from "react";
import { text } from "stream/consumers";

type TagSectionProps = {
  className?: string;
  text?: string;
};
const TagSection = ({ className, text }: TagSectionProps) => {
  return (
    <>
      <div className={`flex flex-row gap-3 ${className} items-center text-sm xl:text-base`}>
        <Minus />
        <span className="font-bold uppercase">{text ?? "lorem ipsum"}</span>
      </div>
    </>
  );
};

export default TagSection;
