import SectionHeading from "@/components/public/SectionHeading";
import Image from "next/image";
import React from "react";
import { FaComment, FaUser } from "react-icons/fa";

const blogs = [
  {
    image: "/About/Case-studies/ICA.jpg",
    title: "ICA – Bespoke entertainment",
    description:
      "The Brief The International Cotton Association would like suggestions for entertainment for their gala dinner to cel ...",
  },
  {
    image: "/About/Case-studies/kia.jpg",
    title: "Kia Oval – Bar/entertainment",
    description:
      "Brief The Kia Oval, Surrey Cricket & Jolly Hog came to Greenhill Events as they were looking to create a food an ...",
  },
  {
    image: "/About/Case-studies/birthday.jpg",
    title: "Surprise Birthday – Event Management",
    description:
      "Like with many of our event management clients, we were charged with organising a surprise 40th summer birthday party f ...",
  },
  {
    image: "/About/Case-studies/costa.jpg",
    title: "Costa Smeralda event – Entertainment",
    description:
      "Hosted on June 26-27 2015 by one of Golf’s current superstars, Justin Rose, The Costa Smeralda Invitational prove ...",
  },
];

const page = () => {
  return (
    <>
      <div className="pt-26 mx-16.25 px-6.75">
        <SectionHeading title="Case Studies" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-15">
          {blogs.map((blog, index) => (
            <div className="relative" key={index}>
              {/* Image */}
              <div className="overflow-hidden relative w-full h-56 md:h-72 lg:h-81">
                <Image
                  src={blog.image}
                  alt="birthday"
                  width={700}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                />
              </div>

              {/* Content Box */}
              <div className="bg-white w-[90%] mx-auto -mt-8 relative text-black  z-10 px-5 pb-5 justify-items-stretch shadow-lg">
                <p className="text-black text-center">—— Case Studies ——</p>
                <h2 className="text-[15px] md:text-[20px] text-center lg:text-[15px] tracking-[4px] uppercase text-black">
                  {blog.title}
                </h2>

                <p className="text-gray-500 text-center mt-2.5 text-[10px] md:text-[9px] lg:text-[13px] leading-4">
                  {blog.description}
                </p>

                <div className="flex justify-between">
                  <div className="flex items-center gap-3 ">
                    <FaUser className="" />
                    <span className="ml-3.5">theatrewp</span>
                  </div>
                  <div className="flex items-center gap-3 ">
                    <FaComment className="text-right" />
                    <p>0</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
