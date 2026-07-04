"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const initialPhotos = [
  "/MobileBar/Partys/aerial.png",
  "/MobileBar/Partys/band.jpg",
  "/MobileBar/Partys/blue.jpg",
  "/MobileBar/Partys/firework.jpg",
  "/MobileBar/Partys/jasz.png",
  "/MobileBar/Partys/La-luna-skills.png",
  "/MobileBar/Partys/Lady-D.png",
  "/MobileBar/Partys/Metraplois.png",
  "/MobileBar/Partys/music.png",
];

export default function PartyPhotos() {
  const [photos, setPhotos] = useState(initialPhotos);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setPhotos((prev) => [...prev.slice(1), prev[0]]);
      setIsAnimating(false);
    }, 700);
  };

  const prev = () => {
    if (isAnimating) return;

    setPhotos((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  useEffect(() => {
    const interval = setInterval(next, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full">

      <div
        className={`flex ${
          isAnimating ? "-translate-x-1/3 transition-transform duration-700 ease-in-out" : ""
        }`}
      >
        {photos.map((src, index) => (
          <div
            key={index}
            className="relative basis-1/3 shrink-0 h-80 md:h-105 lg:h-125"
          >
            <Image
              src={src}
              alt={`slide-${index}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Previous */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-5xl text-[#C9A227]/70 hover:text-[#C9A227]"
      >
        &#10094;
      </button>

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-5xl text-[#C9A227]/70 hover:text-[#C9A227]"
      >
        &#10095;
      </button>

    </div>
  );
}