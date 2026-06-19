"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaClock, FaUser } from "react-icons/fa";

const posts = [
  {
    id: 1,
    image: "/Home/RecentPost/costa.webp",
    category: "CASE STUDIES",
    title: "COSTA SMERALDA EVENT ENTERTAINMENT",
    author: "theatrewp",
    date: "February 22, 2022",
    youtube: "https://www.youtube.com/embed/ZXvUbVxW1Ag",
  },
  {
    id: 2,
    image: "/Home/RecentPost/ica.webp",
    category: "CASE STUDIES",
    title: "ICA - BESPOKE ENTERTAINMENT",
    author: "theatrewp",
    date: "February 22, 2022",
    description: `The International Cotton Association would like suggestions for entertainment for their gala dinner to celebrate their 175th anniversary. It should reference the present and future work of the organisation, and their international presence, ethical approach and global success. Taking our inspiration from the phenomenal opening ceremony of London's 2012 Olympic Games, we would incorporate international acts from India, China, Pakistan, America, Brazil and the U.K. This would involve dance, music, drama and audio and visual effects to communicate the strong ethical message of the association and its future success. The Performance An International Celebration!`,
  },
  {
    id: 3,
    image: "/Home/RecentPost/kia.webp",
    category: "CASE STUDIES",
    title: "KIA OVAL BAR/ENTERTAINMENT",
    author: "theatrewp",
    date: "February 22, 2022",
    youtube: "https://www.youtube.com/embed/Yt8l7Ah6TMk?si=46MIMgDLLczeXtGa",
  },
  {
    id: 4,
    image: "/Home/RecentPost/surprise.webp",
    category: "CASE STUDIES",
    title: "SURPRISE BIRTHDAY - EVENT MANAGEMENT",
    author: "theatrewp",
    date: "February 22, 2022",
    youtube: "https://www.youtube.com/embed/4o4JMfvb5k8?si=2PxVVD9Oqa6adPXC",
  },
];

const RecentPosts = () => {
  // Start at index 4 (the first item of the second set)
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

  return (
    <div className="mx-16.25 px-6.75 py-17">
      <div className="text-center">
        <p className="text-[4.125rem] font-['Playfair_Display']">
          Recent Posts
        </p>
        <hr className="w-[15%] mx-auto mt-2 border-2 rounded-full border-[#C9AC8C]" />
      </div>

      <section className="relative flex items-center justify-center mt-12 overflow-hidden">
        
        {/* Left Button */}
        <button
          onClick={prevPost}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-5xl text-white z-20 bg-black/20 hover:bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
        >
          &#10094;
        </button>

        {/* Carousel Window */}
        <div className="w-full px-16 overflow-hidden">
          {/* Sliding Track */}
          <div
            className={`flex w-full ${
              isTransitioning ? "transition-transform duration-500 ease-in-out" : ""
            }`}
            style={{
              transform: `translateX(-${(currentIndex * 100) / 3}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedPosts.map((post, i) => (
              <div key={`${post.id}-${i}`} className="w-1/3 shrink-0 px-4">
                
                <div className="border rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1000}
                    height={500}
                    className="w-full h-60 object-cover"
                  />

                  <div className="p-4 flex flex-col grow">
                    <div className="mb-3">
                      <span className="bg-black text-white text-xs px-3 py-1 rounded">
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-semibold text-left">
                      {post.title}
                    </h2>

                    <div className="flex gap-6 mt-4 text-sm text-white">
                      <div className="flex items-center gap-2">
                        <FaUser />
                        <span>{post.author}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <FaClock />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    {post.youtube && (
                      <div className="mt-5">
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
                      <p className="mt-4 text-sm leading-7 whitespace-pre-line text-white">
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
          className="absolute right-0 top-1/2 -translate-y-1/2 text-5xl text-white z-20 bg-black/20 hover:bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
        >
          &#10095;
        </button>

      </section>
    </div>
  );
};

export default RecentPosts;