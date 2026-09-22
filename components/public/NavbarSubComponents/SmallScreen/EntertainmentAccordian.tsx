"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Category {
  id: number | string;
  menu_name: string;
  slug: string;
}

interface EntertainmentAccordianProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EntertainmentAccordian = ({ setOpen }: EntertainmentAccordianProps) => {
  const [entertainmentOpen, setEntertainmentOpen] = useState(false);
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
                menu_name: item.menu_name.toUpperCase(),
                slug: item.slug,
              })),
            {
              id: "bespoke",
              menu_name: "BESPOKE",
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

  return (
    <>
      {/* ENTERTAINMENT */}
      <div className="w-full flex justify-between items-center px-6 py-4">
        {/* ENTERTAINMENT → OPEN PAGE */}
        <Link
          href="/entertainment"
          onClick={() => {
            setEntertainmentOpen(false);
            setOpen(false);
          }}
        >
          ENTERTAINMENT
        </Link>

        {/* ARROW → OPEN/CLOSE OPTIONS */}
        <button
          onClick={() => setEntertainmentOpen(!entertainmentOpen)}
          className="px-2"
          aria-label="Toggle Entertainment menu"
        >
          <span className="text-2xl">{entertainmentOpen ? "̭" : "̬"}</span>
        </button>
      </div>

      {/* ENTERTAINMENT DROPDOWN */}
      {entertainmentOpen && (
        <ul className="bg-[#111] pl-8">
          {categories.map((item) => (
            <li key={item.id}>
              <Link
                href={
                  item.slug === "bespoke"
                    ? "/bespoke"
                    : `/entertainment/${item.slug}`
                }
                onClick={() => {
                  setEntertainmentOpen(false);
                  setOpen(false);
                }}
                className="block py-3"
              >
                {item.menu_name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default EntertainmentAccordian;
