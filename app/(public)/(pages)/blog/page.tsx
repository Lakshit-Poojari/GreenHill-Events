"use client";

import { useEffect, useState } from "react";
import SectionHeading from "@/components/public/SectionHeading";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaComment, FaUser } from "react-icons/fa";

interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
  slug: string;
  comment_count: number;
}

export default function Page() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/caseStudy/blogcasestudy");

      const result = await res.json();

      if (res.ok) {
        setBlogs(result.caseStudies);
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="py-20 text-center text-white">Loading blogs...</div>;
  }

  return (
    <div className="mx-12.25 px-4.75 pt-26 text-center">
      <SectionHeading title="Blog" />

      <p className="mt-10 text-center font-['Old_Standard_TT'] text-[1.2rem] italic text-[#C9AC8C]">
        Explore some of the lovely events that we have organised and find out
        about some of our clients’ experiences with us:
      </p>

      <div className="grid grid-cols-1 gap-10 py-15 md:grid-cols-2">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <Link href={`/${blog.slug}`}>
              <div className="relative h-56 w-full overflow-hidden rounded-t-2xl md:h-72 lg:h-81">
                <Image
                  src={`/api/uploads/${blog.image}`}
                  alt={blog.title}
                  width={700}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            </Link>

            <div className="relative z-10 mx-auto -mt-8 w-full rounded-2xl border border-[#C9AC8C] bg-[#2A2626] px-4 pb-6 pt-5 shadow-xl transition-all duration-300 group-hover:shadow-2xl">
              <h2 className="mt-3 text-center text-[18px] font-semibold uppercase tracking-[3px] text-white transition-colors duration-300 group-hover:text-[#C9AC8C] md:text-[22px] lg:text-[18px]">
                {blog.title}
              </h2>

              <p className="mt-4 line-clamp-2 text-center text-[14px] leading-7 text-white">
                {blog.description}
              </p>

              <div className="p-3 mt-3 flex items-center justify-between ">
                <div className="flex items-center gap-2">
                  <FaUser className="text-[#C9AC8C]" />
                  <span>GreenHill</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaComment className="text-[#C9AC8C]" />
                  <span>{blog.comment_count}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {!loading && blogs.length === 0 && (
          <div className="col-span-full py-10 text-center text-gray-400">
            No blogs found.
          </div>
        )}
      </div>
    </div>
  );
}
