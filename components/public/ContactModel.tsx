"use client";

import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-md bg-[#1D1919] p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-white"
        >
          <X />
        </button>

        <section className="bg-[#171414] py-7">
        <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-md bg-[#1D1919] p-7 md:p-9">
            {/* Heading */}
            <div className="mb-5`">
                <p className="text-lg text-white">Contact Me</p>
                <p className="mt-1 text-gray-300">
                Fields marked with an
                <span className="ml-1 text-red-500">*</span>
                {" "}are required
                </p>
            </div>

            <form className="space-y-5">
                {/* Name */}
                <div>
                <label className=" block text-lg font-bold text-white">
                    Name <span className="text-red-500">*</span>
                </label>

                <input
                    type="text"
                    className="h-10 w-full rounded-sm border border-gray-300 bg-white px-4 text-black outline-none focus:border-[rgba(201,172,140,1)]"
                />
                </div>

                {/* Email */}
                <div>
                <label className=" block text-lg font-bold text-white">
                    Email <span className="text-red-500">*</span>
                </label>

                <input
                    type="email"
                    className="h-10 w-full rounded-sm border border-gray-300 bg-white px-4 text-black outline-none focus:border-[rgba(201,172,140,1)]"
                />
                </div>

                {/* Message */}
                <div>
                <label className=" block text-lg font-bold text-white">
                    Message <span className="text-red-500">*</span>
                </label>

                <textarea
                    rows={5}
                    className="w-full rounded-sm border border-gray-300 bg-white p-4 text-black outline-none focus:border-[rgba(201,172,140,1)]"
                />
                </div>

                {/* Recaptcha */}
                <div>
                <h3 className=" text-v font-bold text-white">
                    Recaptcha
                </h3>

                {/* Placeholder */}
                <div className="flex h-20 w-[304px] items-center justify-between rounded bg-white px-4 shadow">
                    <div className="flex items-center gap-4">
                    <div className="h-7 w-7 border-2 border-gray-500"></div>
                    <span className="text-lg text-gray-800">
                        I'm not a robot
                    </span>
                    </div>

                    <div className="text-right">
                    <div className="text-lg">🔄</div>
                    <p className="text-xs text-gray-500">
                        reCAPTCHA
                    </p>
                    </div>
                </div>
                </div>

                {/* Submit */}
                <button
                type="submit"
                className="rounded-full bg-[#343434] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[rgba(201,172,140,1)] hover:text-black"
                >
                Submit
                </button>
            </form>
            </div>
        </div>
        </section>
      </div>
    </div>
  );
}