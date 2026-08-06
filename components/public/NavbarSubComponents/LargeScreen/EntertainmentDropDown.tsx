"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface Category {
  id: number | string;
  category_name: string;
  slug: string;
}

const EntertainmentDropDown = () => {
  const pathname = usePathname();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();

        if (data.success) {
          setCategories([
            ...data.category
              .filter(
                (item: any) =>
                  item.status === "ACTIVE" && item.has_details !== 0,
              )
              .map((item: any) => ({
                id: item.id,
                category_name: item.category_name,
                slug: item.slug,
              })),
            {
              id: "bespoke",
              category_name: "BESPOKE",
              slug: "bespoke",
            },
          ]);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);
  const navClass = (path: string) =>
    pathname === path
      ? "text-[rgba(201,172,140,1)]"
      : "hover:text-gray-400 transition";

  return (
    <>
      <Link
        href="/entertainment"
        className={`flex items-center gap-2 ${navClass("/entertainment")}`}
      >
        ENTERTAINMENT
        <span className="text-3xl mb-7.5">ˬ</span>
      </Link>

      <ul
        className=" absolute top-full left-0 invisible
                group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-[#111111d0] min-w-50 z-50 "
      >
        {categories.map((item) => (
          <li key={item.id}>
            <Link
              href={
                item.slug === "bespoke"
                  ? "/bespoke"
                  : `/entertainment/${item.slug}`
              }
              className=" block px-5 pb-3 pt-1 hover:text-[#C9AC8C] "
            >
              {item.category_name.toUpperCase()}
              <hr className="border-[#88868466]" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EntertainmentDropDown;
