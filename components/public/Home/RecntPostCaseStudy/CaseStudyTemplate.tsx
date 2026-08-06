"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import CommentForm from "@/components/public/CommentForm";

import { CaseStudyDB } from "@/backend/types/caseStudies";
import Comments from "../../Comments";
import RecentPost from "./RecentPost";
import RecentComment from "./RecentComment";
import { CommentType } from "@/backend/types/commentsType";
import Search from "./Search";

interface RecentPost {
  id: number;
  title: string;
  slug: string;
}

interface RecentCommentItem {
  id: number;
  name: string | null;
  caseStudySlug: string;
  caseStudyTitle: string;
}

interface Props {
  data: CaseStudyDB;
  recentPosts: CaseStudyDB[];
  recentComments: CommentType[];
}

export default function CaseStudyTemplate({
  data,
  recentPosts,
  recentComments,
}: Props) {
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/case-studies/${data.slug}`;
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
          <div className="mt-10 overflow-hidden rounded-3xl border border-[#C9AC8C]/20 bg-[#2A2626] shadow-xl">
            <Image
              src={`/api/uploads/${data.image}`}
              alt={data.title}
              width={900}
              height={600}
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105 shadow-[0_20px_50px_rgba(201,172,140,0.18)]"
            />
          </div>

          <div className="mt-10">
            <p className="whitespace-pre-line text-lg leading-9 text-gray-200 tracking-wide">
              {data.description}
            </p>
          </div>

          {/* SIDEBAR */}

          <section className="mt-20">
            {/* Share */}
            <div className="mt-8">
              <p className="mb-5 font-playfair text-xl font-semibold uppercase tracking-[0.2em] text-[#C9AC8C]">
                DID YOU LIKE THIS? SHARE IT!
              </p>

              <div className="flex items-center gap-4">
                {/* X */}
                <Link
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    pageUrl,
                  )}&text=${encodeURIComponent(data.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/60 p-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/20"
                >
                  <FaXTwitter size={20} />
                </Link>

                {/* Facebook */}
                <Link
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    pageUrl,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#1877F2]/60 p-3 text-[#1877F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:shadow-lg hover:shadow-[#1877F2]/20"
                >
                  <FaFacebookF size={20} />
                </Link>

                {/* LinkedIn */}
                <Link
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    pageUrl,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#0A66C2]/60 p-3 text-[#0A66C2] transition-all duration-300 hover:-translate-y-1 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:shadow-lg hover:shadow-[#0A66C2]/20"
                >
                  <FaLinkedinIn size={20} />
                </Link>

                {/* Email */}
                <Link
                  href={`mailto:?subject=${encodeURIComponent(
                    data.title,
                  )}&body=${encodeURIComponent(`${data.title}\n\n${pageUrl}`)}`}
                  className="rounded-full border border-[#EA4335]/60 p-3 text-[#EA4335] transition-all duration-300 hover:-translate-y-1 hover:border-[#EA4335] hover:bg-[#EA4335] hover:text-white hover:shadow-lg hover:shadow-[#EA4335]/20"
                >
                  <MdEmail size={20} />
                </Link>
              </div>
            </div>

            {/* Comments */}

            <Comments caseStudyId={data.id} />

            <CommentForm caseStudyId={data.id} />
          </section>
        </div>

        <aside>
          {/* Search */}
          <Search recentPosts={recentPosts} />

          {/* Recent Posts */}

          <RecentPost recentPosts={recentPosts} />

          {/* Recent Comments */}

          <RecentComment recentComments={recentComments} />
        </aside>
      </div>
    </section>
  );
}
