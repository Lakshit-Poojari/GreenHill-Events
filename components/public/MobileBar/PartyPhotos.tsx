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
  const [hovered, setHovered] = useState<number | null>(null);

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
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex ${
          isAnimating
            ? "-translate-x-1/3 transition-transform duration-700 ease-in-out"
            : ""
        }`}
        onMouseLeave={() => setHovered(null)}
      >
        {photos.map((src, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            className="
          relative h-80 w-1/2 shrink-0 overflow-hidden
          sm:h-90
          md:h-105 
          md:w-1/3
          lg:h-125
        "
          >
            <Image
              src={src}
              alt={`slide-${index}`}
              fill
              className="h-full w-full object-contain transition-all duration-500"
              style={{
                transform: hovered === index ? "scale(1.08)" : "scale(1)",
                filter:
                  hovered !== null && hovered !== index
                    ? "brightness(0.55)"
                    : "brightness(1)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Previous */}
      {/* <button
        onClick={prev}
        className="
      absolute left-2 top-1/2 z-10
      -translate-y-1/2
      text-3xl text-[#C9A227]/70
      transition-colors hover:text-[#C9A227]
      sm:left-3 sm:text-4xl
      md:left-4 md:text-5xl
    "
      >
        &#10094;
      </button> */}

      {/* Next */}
      {/* <button
        onClick={next}
        className="
      absolute right-2 top-1/2 z-10
      -translate-y-1/2
      text-3xl text-[#C9A227]/70
      transition-colors hover:text-[#C9A227]
      sm:right-3 sm:text-4xl
      md:right-4 md:text-5xl
    "
      >
        &#10095;
      </button> */}
    </div>
  );
}
