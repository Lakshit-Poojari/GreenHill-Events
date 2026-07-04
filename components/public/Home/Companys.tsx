"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/Home/Company/duerr's.webp",
  "/Home/Company/thatcher.webp",
  "/Home/Company/sab.webp",
  "/Home/Company/saracens.webp",
  "/Home/Company/twinings.webp",
  "/Home/Company/london-stadium.png",
  "/Home/Company/surrey-kia-oval.webp",
  "/Home/Company/srm.webp",
];

export const Companys = () => {
  // Start from the middle copy
  const [current, setCurrent] = useState(images.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Three copies for seamless infinite looping
  const sliderImages = [...images, ...images, ...images];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Re-enable transition after instant jump
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  }, [isTransitioning]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    // Reached third copy → jump back to middle
    if (current >= images.length * 2) {
      setIsTransitioning(false);
      setCurrent((prev) => prev - images.length);
    }
    // Reached first copy → jump forward to middle
    else if (current < images.length) {
      setIsTransitioning(false);
      setCurrent((prev) => prev + images.length);
    }
  };

  return (
    <section className=" pb-12 mx-16.25">
      <div className="container mx-auto relative flex items-center">

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-30 text-[64px] leading-none text-[#C9A227]/70 hover:text-[#C9A227]"
        >
          &#10094;
        </button>

        {/* Slider */}
        <div className="overflow-hidden w-full mx-16">
          <div
            className={`flex ${
              isTransitioning
                ? "transition-transform duration-700 ease-in-out"
                : ""
            }`}
            style={{
              transform: `translateX(-${current * 20}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {sliderImages.map((img, index) => (
              <div
                key={index}
                className="relative min-w-full sm:min-w-[50%] md:min-w-[33.333%] lg:min-w-[25%] xl:min-w-[20%] h-20 sm:h-24 md:h-28 lg:h-30 flex items-center justify-center"
              >
                <Image
                  src={img}
                  alt={`logo-${index}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain pl-4"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-30 text-[64px] leading-none text-[#C9A227]/70 hover:text-[#C9A227]"
        >
          &#10095;
        </button>

      </div>
    </section>
  );
};

export default Companys;
