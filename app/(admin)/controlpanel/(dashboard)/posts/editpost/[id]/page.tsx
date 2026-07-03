"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

const page = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Edit Post</h1>
          <p className="mt-1 text-gray-400">
            Update the blog post details.
          </p>
        </div>

        <Link
          href="/controlpanel/posts"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-white transition hover:border-[rgba(201,172,140,1)]"
        >
          <ArrowLeft size={18} />
          Back
        </Link>
      </div>

      {/* Form */}
      <form className="space-y-6 rounded-xl border border-gray-700 bg-[#181616] p-8 shadow-lg">
        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Post Title
          </label>

          <input
            type="text"
            defaultValue="Top Wedding Entertainment Ideas"
            className="w-full rounded-lg border border-gray-700 bg-[#111] px-4 py-3 text-white outline-none focus:border-[rgba(201,172,140,1)]"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Slug
          </label>

          <input
            type="text"
            defaultValue="top-wedding-entertainment-ideas"
            className="w-full rounded-lg border border-gray-700 bg-[#111] px-4 py-3 text-white outline-none focus:border-[rgba(201,172,140,1)]"
          />
        </div>

        {/* Featured Image */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Featured Image
          </label>

          <div className="mb-4 overflow-hidden rounded-lg border border-gray-700">
            <img
              src="https://placehold.co/1200x600"
              alt="Featured"
              className="h-56 w-full object-cover"
            />
          </div>

          <input
            type="file"
            className="w-full rounded-lg border border-gray-700 bg-[#111] p-3 text-gray-300 file:mr-4 file:rounded-lg file:border-0 file:bg-[rgba(201,172,140,1)] file:px-4 file:py-2 file:text-black"
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Excerpt
          </label>

          <textarea
            rows={3}
            defaultValue="Discover the best entertainment ideas to make your wedding unforgettable."
            className="w-full rounded-lg border border-gray-700 bg-[#111] px-4 py-3 text-white outline-none focus:border-[rgba(201,172,140,1)]"
          />
        </div>

        {/* Content */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Content
          </label>

          <textarea
            rows={12}
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is the existing blog content..."
            className="w-full rounded-lg border border-gray-700 bg-[#111] px-4 py-3 text-white outline-none focus:border-[rgba(201,172,140,1)]"
          />
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Category
          </label>

          <select className="w-full rounded-lg border border-gray-700 bg-[#111] px-4 py-3 text-white outline-none focus:border-[rgba(201,172,140,1)]">
            <option>Wedding</option>
            <option>Entertainment</option>
            <option>Corporate</option>
            <option>Events</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Status
          </label>

          <select className="w-full rounded-lg border border-gray-700 bg-[#111] px-4 py-3 text-white outline-none focus:border-[rgba(201,172,140,1)]">
            <option>Published</option>
            <option>Draft</option>
          </select>
        </div>

        {/* SEO */}
        <div className="space-y-4 rounded-lg border border-gray-700 p-5">
          <h2 className="text-lg font-semibold text-white">SEO Settings</h2>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Meta Title
            </label>

            <input
              type="text"
              defaultValue="Top Wedding Entertainment Ideas | Green Hill Events"
              className="w-full rounded-lg border border-gray-700 bg-[#111] px-4 py-3 text-white outline-none focus:border-[rgba(201,172,140,1)]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Meta Description
            </label>

            <textarea
              rows={3}
              defaultValue="Explore amazing wedding entertainment ideas from Green Hill Events."
              className="w-full rounded-lg border border-gray-700 bg-[#111] px-4 py-3 text-white outline-none focus:border-[rgba(201,172,140,1)]"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <Link
            href="/controlpanel/posts"
            className="rounded-lg border border-gray-700 px-6 py-3 text-white transition hover:border-red-500"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-[rgba(201,172,140,1)] px-6 py-3 font-semibold text-black transition hover:opacity-90"
          >
            <Save size={18} />
            Update Post
          </button>
        </div>
      </form>
    </div>
  )
}

export default page