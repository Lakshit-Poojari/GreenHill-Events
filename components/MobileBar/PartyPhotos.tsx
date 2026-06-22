
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const photos = [
  "/MobileBar/Partys/aerial.jpg",
  "/MobileBar/Partys/band.jpg",
  "/MobileBar/Partys/blue.jpg",
  "/MobileBar/Partys/firework.jpg",
  "/MobileBar/Partys/jasz.png",
  "/MobileBar/Partys/La-luna-skills.png",
  "/MobileBar/Partys/Lady-D.png",
  "/MobileBar/Partys/Metrplois.png",
  "/MobileBar/Partys/music.png",
];

const PartyPhotos = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % photos.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % photos.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
    }, []);

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 33.3333}%)`,
        }}
      >
        {photos.concat(photos.slice(0, 3)).map((src, index) => (
          <div
            key={index}
            className="basis-1/3 shrink-0 relative h-80 md:h-105 lg:h-125"
          >
            <Image
              src={src}
              alt={`slide-${index}`}
              fill
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Previous */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2  text-[#C9A227]/70 hover:text-[#C9A227]  text-5xl z-10"
      >
        &#10094;
      </button>

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2  text-[#C9A227]/70 hover:text-[#C9A227] text-5xl z-10"
      >
        &#10095;
      </button>
    </div>
  );
};

export default PartyPhotos;
 