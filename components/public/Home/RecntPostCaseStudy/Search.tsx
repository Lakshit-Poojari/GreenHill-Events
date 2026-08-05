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
      item.title.toLowerCase().includes(search.toLowerCase().trim())
    );

    if (post) {
      router.push(`/${post.slug}`);
    } else {
      router.push("/not-found");
    }
  };

  return (
    <div>
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
        className="w-full border p-2"
      />
    </div>
  );
}