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
      <div className={`flex flex-row gap-2.5 ${className}`}>
        <Minus />
        <span className="font-bold uppercase">{text ?? "lorem ipsum"}</span>
      </div>
    </>
  );
};

export default TagSection;
