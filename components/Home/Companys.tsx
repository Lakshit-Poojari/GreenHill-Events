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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // duplicate images for seamless looping
  const sliderImages = [...images, ...images];

  return (
    <section className="py-17 mx-16.25 px-6.75">
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
          <div className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 20}%)`, }}>

            {
                sliderImages.map((img, index) => (
                <div key={index} className="relative min-w-[20%] h-30 flex items-center justify-center" >
                    <Image src={img} alt={`logo-${index}`} fill className="object-contain p-2 "/>
                </div>
                ))
            }
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
}