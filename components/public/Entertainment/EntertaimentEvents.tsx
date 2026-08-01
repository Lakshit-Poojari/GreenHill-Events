"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const EntertaimentEvents = () => {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();

        if (data.success) {
          const categoryCards = data.category
            .filter((item: any) => item.status === "ACTIVE")
            .map((item: any) => ({
              id: item.id,
              title: item.category_name,
              image: `/${item.image}`,
              text: item.description,
              slug: item.slug,
              has_details: item.has_details,
            }));

          setCards(categoryCards);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <>
      <div className="text-center ">
        <div className="bg-[#686868]  py-6">
          <div className="mx-4 md:mx-8 lg:mx-16.25  px-4 md:px-6.75 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`group w-full h-112.5 perspective-[1000px] ${
                    cards.length % 2 !== 0 && index === cards.length - 1
                      ? "lg:col-span-2 lg:max-w-[50%] lg:mx-auto"
                      : ""
                  }`}
                >
                  <div className=" relative h-full w-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)] ">
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden">
                      <Image
                        src={`/api/uploads/${card.image.replace(/^\/?categories\//, "categories/")}`}
                        fill
                        alt={`Event ${index + 1}`}
                        className="object-cover object-left rounded-lg brightness-35 "
                      />
                    </div>
                    <div className="absolute backface-hidden w-3xl top-40 left-1/2 -translate-x-1/2 z-10">
                      <h3 className="text-white text-2xl  md:text-3xl font-bold text-center">
                        {card.title}
                      </h3>
                      <hr className="w-[102] mx-auto mt-2 border-2 rounded-full border-[#C9AC8C]" />
                    </div>

                    {/* Back */}
                    <div
                      className=" absolute inset-0 flex flex-col justify-between bg-black text-white p-6 rounded-lg 
                          transform-[rotateY(180deg)] backface-hidden "
                    >
                      <p className="md:text-lg text-[#C9AC8C] leading-relaxed">
                        {card.text}
                      </p>

                      {card.has_details === 1 && (
                        <Link
                          href={`/entertainment/${card.slug}`}
                          className="self-center"
                        >
                          <button
                            className="px-6 py-3 border border-[#C9AC8C] rounded-full text-[#C9AC8C]  hover:bg-[#C9AC8C]
                                    hover:text-black"
                          >
                            FIND OUT MORE
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-16.25 px-6.75">
            <p className="text-[#C9AC8C]">
              As well as providing entertainment solutions we can also provide
              refreshments.
              <span className="text-white">The Greenhill Bars </span>, a fleet
              of beautifully restored rice horseboxes, are our modern and
              stylish mobile bar solutions. With drink menus featuring extensive
              gin collections, prosecco and champagne, they really are the
              perfect addition to any event.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntertaimentEvents;
