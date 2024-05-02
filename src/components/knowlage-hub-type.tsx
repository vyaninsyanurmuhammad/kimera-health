import React from "react";

type KnowlageHubTypeProps = { type?: "conference" | "journal" };

const KnowlageHubType = ({ type }: KnowlageHubTypeProps) => {
  return (
    <>
      <div
        className={`flex flex-row gap-3 items-center justify-center px-3 py-1.5 rounded-full w-fit ${
          type === "conference"
            ? "bg-pink-500/20"
            : type === "journal"
            ? "bg-emerald-500/20"
            : "bg-pink-500/20"
        }`}
      >
        <div
          className={`h-2.5 w-2.5 rounded-full ${
            type === "conference"
              ? "bg-pink-500"
              : type === "journal"
              ? "bg-emerald-500"
              : "bg-pink-500"
          }`}
        ></div>
        <span
          className={`capitalize font-medium text-sm ${
            type === "conference"
              ? "text-pink-500"
              : type === "journal"
              ? "text-emerald-500"
              : "text-pink-500"
          }`}
        >
          {type ?? "lorem ipsum"}
        </span>
      </div>
    </>
  );
};

export default KnowlageHubType;
