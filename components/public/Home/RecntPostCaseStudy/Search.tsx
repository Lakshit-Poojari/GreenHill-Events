"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CaseStudyDB } from "@/backend/types/caseStudies";

interface Props {
  recentPosts: CaseStudyDB[];
}

export default function Search({ recentPosts }: Props) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const post = recentPosts.find((item) =>
      item.title.toLowerCase().includes(search.toLowerCase().trim()),
    );

    if (post) {
      router.push(`/${post.slug}`);
    } else {
      router.push("/not-found");
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search case study..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="w-full rounded-full border border-[#57514C] bg-[#2A2626] px-5 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#C9AC8C] focus:ring-1 focus:ring-[#C9AC8C]"
      />
    </div>
  );
}
