"use client"

import React, { useEffect, useState } from 'react'

const testimonials = [
  {
    name: "Tommy Cawston, CEO, The Matt Hampson Foundation",
    review:
      "You guys went down a storm, thank you for making the summer ball such a special night!",
  },
  {
    name: "Sigourney Weaver",
    review:
      "Thank you Simon and team, you made our event the best one yet.",
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
      setcurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
  
  return (
    <>
      <div className='mx-16.25 px-6.75 py-17 text-center '>
        <div>
          <p className="text-[4.125rem] font-['Playfair_Display']">Testimonials</p>
          <hr className="w-[15%] mx-auto mt-2 border-2 rounded-full border-[#C9AC8C]"/>
        </div>
        <div>
          <section className="relative flex items-center h-70 justify-center py-17">

                {/* Left Button */}
                <button
                  onClick={prevText}
                  className="absolute left-8 top-1/2 -translate-y-1/2 text-5xl text-white"
                >
                  &#10094;
                </button>

                {/* Text */}
                <div className="max-w-5xl mx-auto px-20 text-center">

                  <p className="font-['Playfair_Display'] text-[22px]  font-normal tracking-[-0.88px] text-white">
                     {testimonials[currentTestimonial].name}
                  </p>
                  <p className="font-['Poppins'] p-13 text-[17px]  font-light tracking-normal text-white">
                    {testimonials[currentTestimonial].review}
                  </p>

                  
                </div>

                {/* Right Button */}
                <button
                  onClick={nextText}
                  className="absolute right-8 top-1/2 -translate-y-1/2 text-5xl  text-white"
                >
                  &#10095;
                </button>

              </section>
        </div>
      </div>
    </>
  )
}

export default Testimonials