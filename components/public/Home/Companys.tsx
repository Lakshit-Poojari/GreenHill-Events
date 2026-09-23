"use client";

import Image from "next/image";

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
  // Duplicate the images so the animation can loop seamlessly
  const sliderImages = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div className="flex w-max company-slider">
        {/* First set */}
        <div className="flex shrink-0">
          {images.map((img, index) => (
            <div
              key={`first-${index}`}
              className="
            relative shrink-0
            w-[calc((100vw-80px))]
            sm:w-[calc((100vw-112px)/2)]
            md:w-[calc((100vw-128px)/3)]
            lg:w-[calc((100vw-160px)/4)]
            h-20 sm:h-24 md:h-28 lg:h-30
            px-4 sm:px-6 md:px-8 lg:px-10
          "
            >
              <Image
                src={img}
                alt={`logo-${index}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Exact duplicate */}
        <div className="flex shrink-0">
          {images.map((img, index) => (
            <div
              key={`second-${index}`}
              className="
            relative shrink-0
            w-[calc((100vw-80px))]
            sm:w-[calc((100vw-112px)/2)]
            md:w-[calc((100vw-128px)/3)]
            lg:w-[calc((100vw-160px)/4)]
            h-20 sm:h-24 md:h-28 lg:h-30
            px-4 sm:px-6 md:px-8 lg:px-10
          "
            >
              <Image
                src={img}
                alt={`logo-${index}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companys;
