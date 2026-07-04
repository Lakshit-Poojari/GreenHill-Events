"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaClock, FaUser } from "react-icons/fa";

const posts = [
  {
    id: 1,
    slug: "costa-smeralda-event-entertainment",
    image: "/Home/RecentPost/costa.webp",
    category: "CASE STUDIES",
    title: "COSTA SMERALDA EVENT ENTERTAINMENT",
    author: "theatrewp",
    date: "February 22, 2022",
    youtube: "https://www.youtube.com/embed/ZXvUbVxW1Ag",
  },
  {
    id: 2,
    slug: "ica-bespoke-entertainment",
    image: "/Home/RecentPost/ica.webp",
    category: "CASE STUDIES",
    title: "ICA - BESPOKE ENTERTAINMENT",
    author: "theatrewp",
    date: "February 22, 2022",
    description: `The International Cotton Association would like suggestions for entertainment for their gala dinner to celebrate their 175th anniversary. It should reference the present and future work of the organisation, and their international presence, ethical approach and global success. Taking our inspiration from the phenomenal opening ceremony of London's 2012 Olympic Games, we would incorporate international acts from India, China, Pakistan, America, Brazil and the U.K. This would involve dance, music, drama and audio and visual effects to communicate the strong ethical message of the association and its future success. The Performance An International Celebration!`,
  },
  {
    id: 3,
    slug: "kia-oval-bar-entertainment",
    image: "/Home/RecentPost/kia.webp",
    category: "CASE STUDIES",
    title: "KIA OVAL BAR/ENTERTAINMENT",
    author: "theatrewp",
    date: "February 22, 2022",
    youtube: "https://www.youtube.com/embed/Yt8l7Ah6TMk?si=46MIMgDLLczeXtGa",
  },
  {
    id: 4,
    slug: "surprise-birthday-event-management",
    image: "/Home/RecentPost/surprise.webp",
    category: "CASE STUDIES",
    title: "SURPRISE BIRTHDAY - EVENT MANAGEMENT",
    author: "theatrewp",
    date: "February 22, 2022",
    youtube: "https://www.youtube.com/embed/4o4JMfvb5k8?si=2PxVVD9Oqa6adPXC",
  },
];

const RecentPosts = () => {
  // Responsive cards-per-view: 1 = mobile, 2 = tablet, 3 = desktop
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const getCardsPerView = () => {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 3; // desktop
    };

    const handleResize = () => setCardsPerView(getCardsPerView());

    handleResize(); // set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Start at index = posts.length (first item of the second/original set)
  const [currentIndex, setCurrentIndex] = useState(posts.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Clone posts to create a seamless infinite loop: [cloned] + [original] + [cloned]
  const extendedPosts = [...posts, ...posts, ...posts];

  useEffect(() => {
    const interval = setInterval(() => {
      nextPost();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextPost = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevPost = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // This fires instantly when the CSS sliding animation finishes
  const handleTransitionEnd = () => {
    // If we've scrolled into the third (cloned) set, instantly jump back to the middle
    if (currentIndex >= posts.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - posts.length);
    }
    // If we've scrolled backward into the first (cloned) set, jump forward to the middle
    else if (currentIndex < posts.length) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + posts.length);
    }
  };

  // Width of a single card as a % of the track, and how far to translate
  const cardWidthPercent = 100 / cardsPerView;
  const translatePercent = currentIndex * cardWidthPercent;

  return (
    <div className="mx-4 px-2 py-10 sm:mx-8 sm:px-4 sm:py-14 lg:mx-16.25 lg:px-6.75 lg:py-17">
      <div className="text-center">
        <p className="text-4xl sm:text-5xl lg:text-[4.125rem] font-['Playfair_Display']">
          Recent Posts
        </p>
        <hr className="w-[15%] mx-auto mt-2 border-2 rounded-full border-[#C9AC8C]" />
      </div>

      <section className="relative flex items-center justify-center h-180 mt-12 overflow-hidden">
        {/* Left Button */}
        <button
          onClick={prevPost}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl sm:text-4xl lg:text-5xl text-white z-20 bg-black/20 hover:bg-black/50 rounded-full w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center"
        >
          &#10094;
        </button>

        {/* Carousel Window */}
        <div className="w-full px-4 sm:px-8 lg:px-16">
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
            {extendedPosts.map((post, i) => (
              <div
                key={`${post.id}-${i}`}
                className="shrink-0 px-2 sm:px-3 lg:px-4"
                style={{ width: `${cardWidthPercent}%` }}
              >
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#C9AC8C] hover:shadow-2xl">
                  <div className="m-2 overflow-hidden rounded-xl">
                    <Link href={`/${post.slug}`}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={1000}
                        height={500}
                        className="h-48 sm:h-56 lg:h-60 w-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </Link>
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <span className="mb-4 w-fit rounded-full bg-[#C9AC8C] px-3 py-1 text-xs text-black">
                      {post.category}
                    </span>

                    <h2 className="text-lg sm:text-xl font-semibold text-white">
                      {post.title}
                    </h2>

                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <FaUser className="text-[#C9AC8C]" />
                        {post.author}
                      </div>

                      <div className="flex items-center gap-2">
                        <FaClock className="text-[#C9AC8C]" />
                        {post.date}
                      </div>
                    </div>

                    {post.youtube && (
                      <div className="mt-5 overflow-hidden rounded-xl">
                        <iframe
                          width="100%"
                          height="250"
                          src={post.youtube}
                          title={post.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}

                    {post.description && (
                      <p className="mt-5 text-sm leading-7 text-gray-300 line-clamp-10">
                        {post.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextPost}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl sm:text-4xl lg:text-5xl text-white z-20 bg-black/20 hover:bg-black/50 rounded-full w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center"
        >
          &#10095;
        </button>
      </section>
    </div>
  );
};

export default RecentPosts;