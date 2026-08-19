"use client";

import { useEffect, useState } from "react";
import SectionHeading from "@/components/public/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { FaComment, FaUser } from "react-icons/fa";

interface BlogCaseStudy {
  id: number;
  title: string;
  image: string;
  description: string;
  slug: string;
  created_at: string;
  author: string;
  comment_count?: number | string;
}

export default function Page() {
  const [blogs, setBlogs] = useState<BlogCaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const res = await fetch("/api/caseStudy/casestudiespage");

      const result = await res.json();

      console.log(result, "casestudies");
      // console.log(typeof result.blog.comment_count, result.blog.comment_count);

      if (res.ok) {
        console.log(typeof result.caseStudies[2].comment_count);
        setBlogs(result.caseStudies);
      }
    } catch (error) {
      console.error("Failed to fetch case studies:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-5 rounded-full border-4 border-[#C9AC8C]/30 border-t-[#C9AC8C] animate-spin" />

          <p className="text-[#C9AC8C] text-xl italic font-['Old_Standard_TT']">
            Loading case studies...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-26 mx-12.25 px-4.75">
      <SectionHeading title="Case Studies" />

      <div className="grid grid-cols-1 gap-10 py-15 md:grid-cols-2">
        {blogs.map((blog) => (
          <div
            className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            key={blog.id}
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
              <p className="text-center text-xs font-semibold uppercase tracking-[5px] text-[#C9AC8C]">
                Case Studies
              </p>

              <h2 className="mt-3 text-center text-[15.5px] font-semibold uppercase tracking-[3px] text-white transition-colors duration-300 group-hover:text-[#C9AC8C] md:text-[22px] lg:text-[18px]">
                {blog.title}
              </h2>

              <p className="mt-4 line-clamp-2 text-center text-[14px] leading-7 text-white">
                {blog.description}
              </p>

              <div className="p-3 mt-3 flex items-center justify-between text-white">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <FaUser className="text-[#C9AC8C]" />
                  <span className="ml-3.5">GreenHill</span>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium">
                  <FaComment className="text-[#C9AC8C]" />
                  <span>{blog.comment_count}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {!loading && blogs.length === 0 && (
          <div className="col-span-full py-10 text-center text-gray-400">
            No case studies found.
          </div>
        )}
      </div>
    </div>
  );
}
