"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Search,
  Edit,
  Trash2,
} from "lucide-react";

const offerings = [
  {
    id: 1,
    image: "/placeholder.jpg",
    title: "Singer 1",
    category: "Singing",
    status: "Published",
  },
  {
    id: 2,
    image: "/placeholder.jpg",
    title: "DJ 1",
    category: "DJ",
    status: "Draft",
  },
  {
    id: 3,
    image: "/placeholder.jpg",
    title: "Magic Show",
    category: "Magic",
    status: "Published",
  },
];

const page = () => {
  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Link
        href="/controlpanel/entertainment"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm font-medium text-white transition hover:border-amber-500 hover:text-amber-400"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Header */}
      <div className="flex items-center justify-between rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Entertainment Offerings
          </h1>
          <p className="mt-2 text-gray-400">
            Manage all entertainment offerings available on the website.
          </p>
        </div>

        <Link
          href="/controlpanel/entertainment/offering/create"
          className="flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 font-medium text-black transition hover:bg-amber-400"
        >
          <Plus size={18} />
          Add Offering
        </Link>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col gap-4 rounded-xl border border-gray-700 bg-[#181616] p-4 lg:flex-row lg:items-center">
        {/* Search */}
        <div className="flex flex-1 items-center rounded-lg border border-gray-600 px-3 py-2">
          <Search size={18} className="mr-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search offering..."
            className="w-full bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
          />
        </div>

        {/* Category Filter */}
        <select className="rounded-lg border border-gray-600 bg-[#222] px-4 py-2 text-white focus:outline-none">
          <option>All Categories</option>
          <option>Singing</option>
          <option>DJ</option>
          <option>Magic</option>
          <option>Birthday Party</option>
        </select>

        {/* Status Filter */}
        <select className="rounded-lg border border-gray-600 bg-[#222] px-4 py-2 text-white focus:outline-none">
          <option>All Status</option>
          <option>Published</option>
          <option>Draft</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-700 bg-[#181616] shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#242222]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Image
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Status
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {offerings.map((offering) => (
                <tr
                  key={offering.id}
                  className="border-t border-gray-700 hover:bg-[#222020]"
                >
                  <td className="px-6 py-4">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                  </td>

                  <td className="px-6 py-4 text-white">
                    {offering.title}
                  </td>

                  <td className="px-6 py-4 text-gray-300">
                    {offering.category}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        offering.status === "Published"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {offering.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      <Link
                        href={`/controlpanel/entertainment/offering/edit/${offering.id}`}
                        className="rounded-lg bg-blue-500 p-2 text-white transition hover:bg-blue-600"
                      >
                        <Edit size={18} />
                      </Link>

                      <button className="rounded-lg bg-red-500 p-2 text-white transition hover:bg-red-600">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {offerings.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="py-12 text-center text-gray-500"
                  >
                    No offerings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;