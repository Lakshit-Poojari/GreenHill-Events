"use client";

import { ChevronsDown } from "lucide-react";
import { useEffect, useState } from "react";

const text = [
  "Greenhill Entertainment was born out of London's West End. We have built a solid reputation for providing world class entertainment in over 50 countries worldwide.",

  "Our bars bring elegance to any wedding or party and create a talking point to a corporate or sporting event, making your event more memorable.",

  "Bands have to be one of the most popular event entertainment.",
];

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextText();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextText = () => {
    setCurrentText((prev) => (prev + 1) % text.length);
  };

  const prevText = () => {
    setCurrentText((prev) => (prev - 1 + text.length) % text.length);
  };

  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative flex items-center pb-10 h-150 justify-center py-17">

      {/* Left Button */}
      <button
        onClick={prevText}
        className="absolute left-8 top-1/2 -translate-y-1/2 text-5xl text-white"
      >
        &#10094;
      </button>

      {/* Text */}
      <p className="max-w-5xl mx-auto md:pt-5 px-20 text-center text-5xl sm:text-6xl font-['Playfair_Display'] text-white">
        {text[currentText]}
      </p>

      {/* Right Button */}
      <button
        onClick={nextText}
        className="absolute right-8 top-1/2 -translate-y-1/2 text-5xl  text-white"
      >
        &#10095;
      </button>
      <button
      onClick={scrollToNext}
      className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex h-19 w-14 items-center justify-center rounded-full border-2 border-white bg-transparent text-white transition-all duration-300 hover:border-[#C8AD8C] hover:bg-[#C8AD8C] hover:text-black"
      aria-label="Scroll Down"
    >
      <ChevronsDown className="h-10 pt-2  w-6 animate-bounce" />
    </button>

    </section>
  );
};

export default HeroSection;