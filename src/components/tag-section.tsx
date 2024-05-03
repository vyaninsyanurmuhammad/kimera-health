import { Minus } from "lucide-react";
import React from "react";
import { text } from "stream/consumers";

type TagSectionProps = {
  className?: string;
  text?: string;
  color?: "slate" | "emerald" | "dodger" | "white-opacity";
};
const TagSection = ({ className, text, color = "slate" }: TagSectionProps) => {
  return (
    <>
      <div
        className={`flex flex-row gap-2 ${className} items-center text-sm xl:text-base`}
      >
        <div
          className={`w-2 h-1 rounded-full bg-dodger-blue-500 ${
            color === "slate"
              ? "bg-slate-800"
              : color === "emerald"
              ? "bg-emerald-500"
              : color === "dodger"
              ? "bg-dodger-blue-500"
              : color === "white-opacity"
              ? "bg-white/80"
              : "bg-slate-800"
          }`}
        ></div>
        <span
          className={`font-bold uppercase ${
            color === "slate"
              ? "text-slate-800"
              : color === "emerald"
              ? "text-emerald-500"
              : color === "dodger"
              ? "text-dodger-blue-500"
              : color === "white-opacity"
              ? "text-white/80"
              : "text-slate-800"
          }`}
        >
          {text ?? "lorem ipsum"}
        </span>
      </div>
    </>
  );
};

export default TagSection;
