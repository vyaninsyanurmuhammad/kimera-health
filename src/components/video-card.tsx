"use client";

import React, { useState, useEffect, useRef } from "react";

type VideoCardProps = {
  src: string;
  caption: string;
  autoplay: boolean;
};

const VideoCard = ({ src, caption, autoplay }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (videoRef.current) {
      if (autoplay) {
        videoRef.current.play();
        const timer = setInterval(() => {
          if (videoRef.current) {
            // const currentTime = videoRef.current.currentTime;
            // const duration = videoRef.current.duration;
            setProgress((v) => (v >= 100 ? 0 : v + 10));
          }
        }, 1000);
        return () => clearInterval(timer);
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setProgress(0);
      }
    }
  }, [autoplay]);

  return (
    <>
      <div
        className={`rounded-lg flex flex-col gap-2.5 ${
          autoplay ? "w-[50%]" : "w-[25%] h-3/5"
        } transition-all ease-in-out duration-700`}
      >
        <div className="w-full h-3 rounded-full bg-dodger-blue-50 shrink-0 overflow-hidden">
          <div
            className={`bg-emerald-500 rounded-full h-full transition-all ease-in`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="w-full h-full rounded-lg bg-dodger-blue-50 overflow-hidden relative">
          <div className="absolute bottom-0 left-0 z-10 w-full p-2 transition-all ease-in-out">
            <p className="w-full rounded-lg px-6 py-4 text-lg bg-white font-medium text-slate-800 transition-all ease-in-out">
              {caption}
            </p>
          </div>
          <video ref={videoRef} className="w-full h-full object-cover" muted>
            <source src={src} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
