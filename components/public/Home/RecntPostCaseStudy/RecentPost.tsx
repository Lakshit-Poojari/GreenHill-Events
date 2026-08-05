import Link from "next/link";
import { useState } from "react";

interface RecentPost {
  id: number;
  title: string;
  slug: string;
}

interface RecentPostProps {
  recentPosts: RecentPost[];
}

export default function RecentPost({ recentPosts }: RecentPostProps) {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="mt-16">
      <h2 className="font-playfair text-4xl text-[#C9AC8C] lg:text-5xl">
        Recent Posts
      </h2>

      <ul className="mt-10 space-y-5">
        {(showAll ? recentPosts : recentPosts.slice(0, 4)).map((post) => (
          <li
            key={post.id}
            className="group rounded-2xl border border-[#3D3935] bg-[#2A2626] p-5 transition-all duration-300 hover:border-[#C9AC8C]/40 hover:bg-[#302B2B]"
          >
            <Link href={`/${post.slug}`} className="flex items-center gap-4">
              <span className="text-lg text-[#C9AC8C] transition-transform duration-300 group-hover:translate-x-1">
                ✦
              </span>

              <span className="leading-7 text-white transition-colors duration-300 group-hover:text-[#C9AC8C]">
                {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {recentPosts.length > 4 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-full border border-[#C9AC8C] px-5 py-2 text-sm font-medium uppercase tracking-[2px] text-[#C9AC8C] transition-all duration-300 hover:bg-[#C9AC8C] hover:text-black"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </div>
  );
}
