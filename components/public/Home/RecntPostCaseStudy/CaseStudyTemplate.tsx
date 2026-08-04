"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

import CommentForm from "@/components/public/CommentForm";

import { CaseStudyDB } from "@/backend/types/caseStudies";
import Comments from "../../Comments";

interface Props {
  data: CaseStudyDB;
}

export default function CaseStudyTemplate({ data }: Props) {
  return (
    <section className="mx-auto max-w-7xl pt-36  px-6.75 py-30">
      <div className="grid lg:grid-cols-[2fr_1fr] gap-20">
        {/* LEFT */}

        <div>
          <h1 className="font-playfair text-6xl leading-tight">{data.title}</h1>

          <div className="flex gap-6 mt-4 text-sm text-[#C9AC8C]">
            <span>
  {new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(new Date(data.created_at))}
</span>
          </div>

          <Image
            src={`/api/uploads/${data.image}`}
            alt={data.title}
            width={900}
            height={600}
            className="mt-8 w-full"
          />

          <div className="space-y-5 mt-8">
            <p className="whitespace-pre-line">{data.description}</p>
          </div>
        </div>

        {/* SIDEBAR */}

        <aside>
          {/* Search */}

          <div>
            <input placeholder="Search" className="border w-full p-2" />
          </div>

          {/* Recent Posts */}
        </aside>

        <section className="mt-20">
          {/* Share */}

          <div>
            <h3 className="uppercase tracking-[4px] text-[#5B524B] text-[28px] font-light">
              Did You Like This? Share It!
            </h3>

            <div className="flex gap-4 mt-6">
              {[
                {
                  icon: <FaFacebookF />,
                  bg: "#D3B28B",
                },
                {
                  icon: <FaTwitter />,
                  bg: "#3B82F6",
                },
                {
                  icon: <FaLinkedinIn />,
                  bg: "#2D8CDB",
                },
                {
                  icon: <FaEnvelope />,
                  bg: "#D3B28B",
                },
              ].map((item, index) => (
                <button
                  key={index}
                  className="w-15 h-15 rounded-full text-black text-xl flex items-center justify-center transition-transform duration-300 hover:scale-110"
                  style={{ backgroundColor: item.bg }}
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Comments */}

<Comments caseStudyId={data.id} />


          <CommentForm caseStudyId={data.id} />
        </section>
      </div>
    </section>
  );
}
