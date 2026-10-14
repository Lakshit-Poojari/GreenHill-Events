"use client";

import SectionHeading from "@/components/public/SectionHeading";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

const services = [
  {
    title: "Dry Hire",
    image: "/MobileBar/Bar/dry.webp",
    description: `Simply hire just the horsebox, fully equipped ready for service. We will deliver, set-up and collect. 
                 This is ideal for venues that already have a bar team, to compliment an existing bar, provide additional 
                 refrigeration facilities, for caterers providing drinks, or for those who simply wish to throw their own party 
                 and provide the drink. A refundable damage deposit is required. Bar Staff optional.`,
    link: "/dry-hire",
  },
  {
    title: "Standard Bar",
    image: "/MobileBar/Bar/standard.webp",
    description: `We attend your event with our experienced team of bar staff and a full range of mouth-watering drinks 
                 designed by us or chosen by you.We are personal license holders, we will formally take care of the TENS 
                 application if one is required. Cash and payments are taken. A hire fee is payable with an agreed minimum spend.`,
    link: "/standard-bar",
  },
  {
    title: "Complimentary Bar",
    image: "/MobileBar/Bar/complementry.webp",
    description: `We attend your event and run a ‘tab’ for hosts who would like to entertain their guests with complimentary 
                  drinks of their choice. Our software allows us to track all drinks in real time to give the host a breakdown 
                  of everything that was spent, on what and when. A hire fee is payable with an agreed minimum spend.`,
    link: "/complimentary-bar",
  },
  {
    title: "Sporting & festivals",
    image: "/MobileBar/Bar/sporting-and-festival.jpg",
    description: `We provide high-quality bars to a multitude of events, including festivals, concerts, stadiums and sporting 
                  venues. We have worked with venues and events such as Saracens Rugby, Twickenham, London Stadium, Kia Oval, 
                  Winter wonderland Hyde Park.`,
    link: "/sporting-festival-bar",
  },
  {
    title: "Our Bars",
    image: "/MobileBar/Bar/our-bar.jpg",
    description: `After deciding that horse box bars would be the right fit in 2018 Simon went on a mission to find the first 
                  of many. The fleet started off with Wombat who after a long transformation process became the first bar to join 
                  the business. Now 5 years later Wombat has been joined by Freddie, Bentos, Mercer and Fairbanks 4 other horsebox 
                  bars. Not forgetting Bella & Neller our simply perfect pop-up bar that can be ready for any occasion. Following 
                  Simons love of rugby our horsebox bars are named after players who played for his hometown rugby team Halifax 
                  Panthers.`,
    link: "/our-bars",
  },
];

const page = () => {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(services.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Responsive cards per view
  useEffect(() => {
    const getCardsPerView = () => {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };

    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Create cloned sets for infinite slider
  const extendedServices = [...services, ...services, ...services];

  // Next slide
  const nextSlide = useCallback(() => {
    setIsTransitioning(true);

    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Previous slide
  const prevSlide = useCallback(() => {
    setIsTransitioning(true);

    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  // Reset position after reaching cloned slides
  const handleTransitionEnd = () => {
    // Reached third set
    if (currentIndex >= services.length * 2) {
      setIsTransitioning(false);

      setCurrentIndex((prev) => prev - services.length);
    }

    // Reached first set
    else if (currentIndex < services.length) {
      setIsTransitioning(false);

      setCurrentIndex((prev) => prev + services.length);
    }
  };

  const cardWidthPercent = 100 / cardsPerView;

  const translatePercent = currentIndex * cardWidthPercent;

  return (
    <>
      <div className="mx-4 pt-26 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-16.25 text-[#C9AC8C]">
        <SectionHeading title="Bar" />
        <div className=" text-[20.4px] items-start italic text-justify space-y-1.5 my-6 py-3 font-['Old_Standard_TT']">
          <div>
            <p className="pb-3">
              WE ASPIRE TO DELIVER A TRULY UNIQUE AND MEMORABLE EXPERIENCE FROM
              START TO FINISH.
            </p>
          </div>
          <div>
            <p className="pb-3">
              While the market already offered a range of horse box bars, the
              majority only offer the bar. We believed there was a gap in the
              market for a company that not only supplies the bar but can offer
              a range of entertainment acts or the option to organise the whole
              event for you.
            </p>
            <p className="pb-3">
              Simon Greenhill owner of The Greenhill Bar and entertainment has
              always had a passion for good alcohol and music. With a passion to
              deliver an unrivalled level of service Simon founded a business
              with the simple principles of fair prices, cold premium beverages,
              conversations and smiles and a beautifully presented bar with
              excellent entertainment.
            </p>
            <p className="pb-3">
              We operate a clear pricing tariff with no extra hidden charges.
              The Booking fee covers the cost of setting up the bar and two
              trained members of staff per event.
            </p>
            <p className="pb-3">
              Depending on the size of the event and bar package, there might be
              a minimum spend deposit required.
            </p>
            <div>
              <p>Why we do it</p>
              <ol className="list-decimal ml-4">
                <li>Making memories with family and friend</li>
                <li>Crafting incredible experiences for people</li>
                <li>
                  Showing others what the arts and entertainment industry has to
                  offer
                </li>
              </ol>
            </div>
          </div>
        </div>
        {/* Slider */}
        <section className="relative flex items-center mt-12 overflow-hidden">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20
              text-3xl sm:text-4xl lg:text-5xl
              text-[#C9AC8C]
              bg-black/20 hover:bg-black/50
              rounded-full
              w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12
              flex items-center justify-center"
          >
            &#10094;
          </button>

          {/* Carousel Window */}
          <div className="w-full mx-8 sm:mx-10 lg:mx-12 overflow-hidden">
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${translatePercent}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedServices.map((service, index) => (
                <div
                  key={`${service.title}-${index}`}
                  className="shrink-0 px-2 sm:px-3 lg:px-4"
                  style={{
                    width: `${cardWidthPercent}%`,
                  }}
                >
                  <div
                    className="    group relative
    shadow-md
    overflow-hidden
    flex flex-col
    min-h-197.5 h-full
    border border-[#C9AC8C]/40
    transition-all duration-500
    hover:border-[#C9AC8C] p-3 rounded-2xl"
                  >
                    <div className="group overflow-hidden rounded-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={500}
                        height={300}
                        className="
      w-full h-64 object-cover rounded-2xl
      transition-transform duration-500 ease-in-out
      group-hover:scale-110
    "
                      />
                    </div>

                    <div className="py-6 px-1 flex flex-col flex-1">
                      <h3 className="text-[20.4px] italic font-semibold font-['Old_Standard_TT'] mb-3 text-center">
                        {service.title}
                      </h3>

                      <p className="text-justify font-['Poppins'] flex-1">
                        {service.description}
                      </p>

                      <Link href={service.link} className="mt-auto self-center">
                        <button
                          className="mb-5 text-[1.25rem] border border-[#C9AC8C]
                            rounded-4xl px-10 py-3
                            text-[#C9AC8C]
                            animate-[shake-horizontal_3.5s_cubic-bezier(.455,.03,.515,.955)_infinite_both]
                            hover:bg-[#C9AC8C]
                            hover:text-black
                            transition duration-300"
                        >
                          MORE INFO
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20
              text-3xl sm:text-4xl lg:text-5xl
              text-[#C9AC8C]
              bg-black/20 hover:bg-black/50
              rounded-full
              w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12
              flex items-center justify-center"
          >
            &#10095;
          </button>
        </section>
      </div>
    </>
  );
};

export default page;
