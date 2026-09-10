"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const photos = [
  "/MobileBar/Bottles/photo1.jpg",
  "/MobileBar/Bottles/photo2.jpg",
  "/MobileBar/Bottles/photo3.jpg",
  "/MobileBar/Bottles/photo4.jpg",
  "/MobileBar/Bottles/photo5.jpg",
];

const BottlePhotos = () => {
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
    <div className="relative w-full overflow-hidden py-5">
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
            className="
          relative h-64 w-1/2 shrink-0 overflow-hidden
          sm:h-80
          md:h-105 md:w-1/3
          lg:h-125
        "
          >
            <Image
              src={src}
              alt={`slide-${index}`}
              fill
              className="h-full w-full object-cover transition-all duration-500"
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
        className="
      absolute left-2 top-1/2 z-10
      -translate-y-1/2
      text-4xl text-[#C9A227]/70
      transition-colors
      hover:text-[#C9A227]
      sm:left-4 sm:text-5xl
    "
      >
        &#10094;
      </button>

      {/* Next */}
      <button
        onClick={next}
        className="
      absolute right-2 top-1/2 z-10
      -translate-y-1/2
      text-4xl text-[#C9A227]/70
      transition-colors
      hover:text-[#C9A227]
      sm:right-4 sm:text-5xl
    "
      >
        &#10095;
      </button>
    </div>
  );
};

export default BottlePhotos;
