"use client";

import Link from "next/link";
import { ArrowLeft, FolderTree, Users } from "lucide-react";

const Page = () => {
  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Link
        href="/controlpanel/entertainment"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm font-medium 
          text-white transition hover:border-[#C9AC8C] hover:text-[#C9AC8C]"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Header */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-white">
          Entertainment Offerings
        </h1>

        <p className="mt-2 text-gray-400">
          Manage offering categories and performers displayed on the website.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Offering Categories */}
        <Link
          href="/controlpanel/entertainment/offering/offeringcategory"
          className="group rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-sm transition hover:-translate-y-1 
            hover:border-[#C9AC8C] hover:shadow-[0_12px_35px_rgba(201,172,140,0.25)]"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#C9AC8C]/15 text-[#C9AC8C]">
            <FolderTree size={28} />
          </div>

          <h2 className="text-xl font-semibold text-white transition group-hover:text-[#C9AC8C]">
            Offering Categories
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Create, edit, and organize offering categories such as Singing
            Waiters, DJs, Live Bands, Magicians, and more.
          </p>

          <div className="mt-6 text-sm font-medium text-[#C9AC8C]">
            Manage Categories →
          </div>
        </Link>

        {/* Performers */}
        <Link
          href="/controlpanel/entertainment/offering/performers"
          className="group rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-sm transition hover:-translate-y-1 
            hover:border-[#C9AC8C] hover:shadow-[0_12px_35px_rgba(201,172,140,0.25)]"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#C9AC8C]/15 text-[#C9AC8C]">
            <Users size={28} />
          </div>

          <h2 className="text-xl font-semibold text-white transition group-hover:text-[#C9AC8C]">
            Performers
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Manage performers, assign them to offering categories, upload
            images, descriptions, and YouTube videos.
          </p>

          <div className="mt-6 text-sm font-medium text-[#C9AC8C]">
            Manage Performers →
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
