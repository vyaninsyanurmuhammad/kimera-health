import React from "react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import DynamicIcon from "./dynamic-icon";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type HeroCardProps = {
  icon?: keyof typeof dynamicIconImports;
  text?: string;
  href?: string;
  orientation?: "horizontal" | "vertical";
};

const HeroCard = ({ icon, text, orientation, href }: HeroCardProps) => {
  return (
    <>
      <div
        className={`w-full flex shrink-0 items-start justify-center bg-slate-50 rounded-xl p-6 ${
          orientation === "horizontal"
            ? "flex-row gap-6 h-fit "
            : orientation === "vertical"
            ? "flex-col gap-2 h-full"
            : "flex-col gap-2 h-full"
        }`}
      >
        <div className="h-full w-fit flex justify-start items-center">
          <div className="h-fit w-fit rounded-full p-4 bg-dodger-blue-100">
            <DynamicIcon
              name={icon ?? "brain"}
              size={24}
              className="text-dodger-blue-500"
            />
          </div>
        </div>

        <div className="h-full w-full flex flex-col justify-center">
          <p className="text-xl font-medium text-slate-800 break-words">
            {text ?? "Lorem Ipsum"}
          </p>
          {orientation === "horizontal" && (
            <Link
              href={href ?? "/"}
              className="flex flex-row items-center gap-3 text-lg font-medium text-dodger-blue-500 hover:text-dodger-blue-800/50"
            >
              Check Now
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default HeroCard;
