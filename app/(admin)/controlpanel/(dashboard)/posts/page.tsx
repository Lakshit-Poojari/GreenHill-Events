"use client";

import Link from "next/link";
import { Edit, Eye, Plus, Search, Trash2 } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Top Wedding Entertainment Ideas",
    category: "Wedding",
    author: "Green Hill Admin",
    status: "Published",
    date: "03 Jul 2026",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Live Band",
    category: "Entertainment",
    author: "John Doe",
    status: "Draft",
    date: "01 Jul 2026",
  },
  {
    id: 3,
    title: "Corporate Event Planning Checklist",
    category: "Corporate",
    author: "Emma Watson",
    status: "Published",
    date: "28 Jun 2026",
  },
];


function page() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-8 shadow-lg">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Posts</h1>
            <p className="mt-2 text-gray-400">
              Manage all blog posts for the website.
            </p>
          </div>

          <Link
            href="/controlpanel/posts/create"
            className="inline-flex items-center gap-2 rounded-lg bg-[rgba(201,172,140,1)] px-5 py-3 font-semibold text-black transition hover:opacity-90"
          >
            <Plus size={18} />
            Create Post
          </Link>
        </div>
      </div>

      {/* Search */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg">
        <div className="relative max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search posts..."
            className="w-full rounded-lg border border-gray-700 bg-[#111] py-3 pl-10 pr-4 text-white outline-none focus:border-[rgba(201,172,140,1)]"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-700 bg-[#181616] shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-700 bg-[#111]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Title
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Category
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Author
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Status
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Date
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="border-b border-gray-700 transition hover:bg-[#222]"
                >
                  <td className="px-6 py-4 font-medium text-white">
                    {post.title}
                  </td>

                  <td className="px-6 py-4 text-gray-300">
                    {post.category}
                  </td>

                  <td className="px-6 py-4 text-gray-300">
                    {post.author}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        post.status === "Published"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-gray-300">
                    {post.date}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <Link
                        href={`/blog/${post.id}`}
                        className="rounded-lg bg-blue-500/20 p-2 text-blue-400 transition hover:bg-blue-500/30"
                      >
                        <Eye size={18} />
                      </Link>

                      <Link
                        href={`/controlpanel/posts/edit/${post.id}`}
                        className="rounded-lg bg-yellow-500/20 p-2 text-yellow-400 transition hover:bg-yellow-500/30"
                      >
                        <Edit size={18} />
                      </Link>

                      <button className="rounded-lg bg-red-500/20 p-2 text-red-400 transition hover:bg-red-500/30">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {posts.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-gray-400"
                  >
                    No posts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default page