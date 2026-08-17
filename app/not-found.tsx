"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, RefreshCw } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1A1919] px-6">
      {/* Background decoration */}
      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#C9AC8C]/10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#C9AC8C]/10 blur-3xl animate-pulse" />

      <div className="relative z-10 text-center">
        {/* 404 */}
        <div className="relative">
          <h1 className="select-none text-[9rem] font-bold leading-none tracking-tight text-[#C9AC8C]/15 sm:text-[12rem]">
            404
          </h1>

          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C9AC8C]/25 bg-[#211F1F] shadow-lg shadow-black/30 transition-all duration-500 hover:scale-110 hover:rotate-3">
              <Home size={28} strokeWidth={1.7} className="text-[#C9AC8C]" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="-mt-8 sm:-mt-10">
          <h2 className="text-3xl font-semibold text-[#F5F1EB] sm:text-4xl">
            Page Not Found
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#A9A29A] sm:text-base">
            The page you are looking for doesn't exist or may have been moved.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {/* Back to Home */}
            <Link
              href="/"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#C9AC8C] px-7 text-sm font-medium text-[#1A1919] shadow-md shadow-[#C9AC8C]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4BB9E] hover:shadow-lg"
            >
              <Home
                size={17}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              Back to Home
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </Link>

            {/* Go Back */}
            <button
              type="button"
              onClick={() => window.history.back()}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#C9AC8C]/30 bg-[#211F1F] px-7 text-sm font-medium text-[#C9AC8C] transition-all duration-300 hover:-translate-y-1 hover:border-[#C9AC8C]/60 hover:bg-[#C9AC8C]/10 hover:shadow-lg hover:shadow-black/20"
            >
              <ArrowLeft
                size={17}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
