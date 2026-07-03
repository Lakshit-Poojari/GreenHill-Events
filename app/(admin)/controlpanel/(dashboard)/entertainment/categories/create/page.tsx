"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

const page = () => {
  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Link
        href="/controlpanel/entertainment/categories"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm font-medium text-white transition hover:border-[#C9AC8C] hover:text-[#C9AC8C]"
      >
        <ArrowLeft size={18} />
        Back to Categories
      </Link>

      {/* Header */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6">
        <h1 className="text-3xl font-bold text-white">
          Create Category
        </h1>

        <p className="mt-2 text-gray-400">
          Add a new entertainment category.
        </p>
      </div>

      {/* Form */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6">
        <form className="space-y-6">
          {/* Name & Slug */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Category Name *
              </label>

              <input
                type="text"
                placeholder="e.g. Musicians"
                className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none transition focus:border-[#C9AC8C]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Slug *
              </label>

              <input
                type="text"
                placeholder="musicians"
                className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none transition focus:border-[#C9AC8C]"
              />
            </div>
          </div>

          {/* Parent Category */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Parent Category
            </label>

            <select className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none focus:border-[#C9AC8C]">
              <option>None</option>
              <option>Entertainment</option>
              <option>Corporate Events</option>
              <option>Wedding Entertainment</option>
            </select>
          </div>

          {/* Image */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Category Image
            </label>

            <input
              type="file"
              className="block w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-sm text-gray-300 file:mr-4 file:rounded-md file:border-0 file:bg-[#C9AC8C] file:px-4 file:py-2 file:text-black"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Description
            </label>

            <textarea
              rows={5}
              placeholder="Write a short description..."
              className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none transition focus:border-[#C9AC8C]"
            />
          </div>

          {/* SEO */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Meta Title
              </label>

              <input
                type="text"
                className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none transition focus:border-[#C9AC8C]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Meta Keywords
              </label>

              <input
                type="text"
                placeholder="Comma separated"
                className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none transition focus:border-[#C9AC8C]"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Meta Description
            </label>

            <textarea
              rows={3}
              className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none transition focus:border-[#C9AC8C]"
            />
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Status
            </label>

            <select className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none focus:border-[#C9AC8C]">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <Link
              href="/controlpanel/entertainment/categories"
              className="rounded-lg border border-gray-700 px-5 py-3 text-white transition hover:border-red-500 hover:text-red-500"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-6 py-3 font-semibold text-black transition hover:opacity-90"
            >
              <Save size={18} />
              Save Category
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page