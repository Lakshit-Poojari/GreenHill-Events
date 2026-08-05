"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const photos = [
  "/Event/slider-0.jpg",
  "/Event/slider-1.jpg",
  "/Event/slider-2.jpg",
  "/Event/slider-3.jpg",
  "/Event/slider4.jpg",
  "/Event/slider5.jpg",
  "/Event/slider6.jpg",
];

const Photos = () => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

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
        onMouseLeave={() => setHovered(null)}
      >
        {photos.concat(photos.slice(0, 3)).map((src, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            className="group relative h-80 basis-1/3 shrink-0 overflow-hidden transition-all duration-500 hover:-translate-y-1 md:h-105 lg:h-125"
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

export default Photos;
