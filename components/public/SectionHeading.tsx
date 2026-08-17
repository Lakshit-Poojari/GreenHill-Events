import React from "react";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <div>
      <p
        className="
          max-w-5xl
          mx-auto
          px-4
          py-5
          font-['Playfair_Display']
          font-light
          text-center
          text-white
          text-4xl
          sm:text-[4.25rem]
          md:text-5xl
          lg:text-6xl
          xl:text-[5.5rem]
          leading-tight
        "
      >
        {title}
      </p>

      <hr className="w-20 sm:w-[18%] mx-auto border-[#C9AC8C]" />
    </div>
  );
};

export default SectionHeading;
