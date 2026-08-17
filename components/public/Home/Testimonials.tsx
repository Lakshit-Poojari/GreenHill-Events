"use client";

import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Tommy Cawston, CEO, The Matt Hampson Foundation",
    review:
      "You guys went down a storm, thank you for making the summer ball such a special night!",
  },
  {
    name: "Sigourney Weaver",
    review: "Thank you Simon and team, you made our event the best one yet.",
  },
  {
    name: "Ellie Jones, BDM, Alton Towers Resort",
    review:
      "Great job at the M&IT Awards on Friday night! An absolutely amazing night had by all!",
  },
  {
    name: "Martin Breading, St Austell Brewery",
    review:
      "We had the ‘Singing Waiters’ perform at our MasterCard Women’s Leadership event. It was a great surprise to all when the waiters started to sing Opera! Their voices were superb and it became even more fun when we all joined in. It was just brilliant. Thanks to Simon Greenhill and Team for making the event a success.",
  },
  {
    name: "Holly Burrows | Head of Events, Sales & Marketing, Foreman's Fish Island",
    review:
      "Many thanks for your time and collaboration for yesterday's event, it is great fun working with you and I LOVE your acts!",
  },
  {
    name: "David Lebond | Divisional Managing Director, P&MM",
    review:
      "Thank you Simon for personally ensuring that the whole event was painless, from the initial brief to the communication to the final delivery of the event.",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setcurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextText();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextText = () => {
    setcurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevText = () => {
    setcurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <>
  <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-16.25 px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 md:py-14 lg:py-17 text-center">
  <div>
    <p className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.125rem]">
      Testimonials
    </p>

    <hr className="w-20 sm:w-[15%] mx-auto mt-2 border-2 rounded-full border-[#C9AC8C]" />
  </div>

  <div>
    <section className="relative flex min-h-70 sm:min-h-75 md:min-h-70 items-center justify-center px-10 sm:px-14 md:px-16 lg:px-20 py-10 sm:py-14 md:py-17">

      {/* Left Button */}
      <button
        onClick={prevText}
        className="absolute left-1 sm:left-3 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl text-white"
      >
        &#10094;
      </button>

      {/* Text */}
      <div className="w-full max-w-5xl mx-auto px-2 sm:px-6 md:px-10 lg:px-20 text-center">
        <p className="font-['Playfair_Display'] text-lg sm:text-xl md:text-2xl lg:text-[25px] font-normal tracking-[-0.4px] md:tracking-[-0.88px] text-white">
          {testimonials[currentTestimonial].name}
        </p>

        <p className="font-['Poppins'] italic mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-xl font-light tracking-normal text-white leading-relaxed">
          {testimonials[currentTestimonial].review}
        </p>
      </div>

      {/* Right Button */}
      <button
        onClick={nextText}
        className="absolute right-1 sm:right-3 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl text-white"
      >
        &#10095;
      </button>

    </section>
  </div>
</div>
    </>
  );
};

export default Testimonials;
