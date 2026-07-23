"use client";

import Link from "next/link";
import { CalendarX, Home, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#111111] px-6">
      <div className="w-full max-w-2xl rounded-2xl border border-[#C9AC8C]/30 bg-[#181616] p-10 text-center shadow-xl">
        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#C9AC8C]/30 bg-[#C9AC8C]/10">
          <CalendarX className="h-12 w-12 text-[#C9AC8C]" />
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-4xl font-bold text-white">
          Oops! The Event Hit a Snag
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg leading-8 text-gray-400">
          It looks like something unexpected happened while preparing this
          experience. Our team is already working behind the scenes to get
          everything back on track.
        </p>

        <p className="mt-2 text-gray-500">
          Please refresh the page or return to the homepage to continue
          exploring our events and entertainment services.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C9AC8C] px-6 py-3 font-medium text-black transition hover:opacity-90"
          >
            <RefreshCw size={18} />
            Retry
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#C9AC8C] px-6 py-3 font-medium text-[#C9AC8C] transition hover:bg-[#C9AC8C] hover:text-black"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
