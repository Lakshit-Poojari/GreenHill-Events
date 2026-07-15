"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Plus,
  Search,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";

const offeringCategories = [
  {
    id: 1,
    image: "/placeholder.jpg",
    category_name: "Singing Waiters",
    entertainment_category: "Singers",
    menu_name: "Singing Waiters",
    display_order: 1,
    status: "ACTIVE",
    updated_by: "Super Admin",
  },
  {
    id: 2,
    image: "/placeholder.jpg",
    category_name: "Live Bands",
    entertainment_category: "Musicians",
    menu_name: "Live Bands",
    display_order: 2,
    status: "ACTIVE",
    updated_by: "Admin",
  },
  {
    id: 3,
    image: "/placeholder.jpg",
    category_name: "Magicians",
    entertainment_category: "Entertainment",
    menu_name: "Magicians",
    display_order: 3,
    status: "INACTIVE",
    updated_by: "Super Admin",
  },
];

const Page = () => {
  return (
    <div className="space-y-6">
      {/* Back */}
      <Link
        href="/controlpanel/entertainment/offering"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm font-medium text-white transition hover:border-[#C9AC8C] hover:text-[#C9AC8C]"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-4 rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Offering Categories
          </h1>

          <p className="mt-2 text-gray-400">
            Create, edit and manage entertainment offering categories.
          </p>
        </div>

        <Link
          href="/controlpanel/entertainment/offering/offeringcategory/create"
          className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-5 py-3 font-medium text-black transition hover:bg-[#b89470]"
        >
          <Plus size={18} />
          Add Category
        </Link>
      </div>

      {/* Search */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-4">
        <div className="flex items-center rounded-lg border border-gray-600 px-3 py-2">
          <Search size={18} className="mr-2 text-gray-400" />

          <input
            type="text"
            placeholder="Search category..."
            className="w-full bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-700 bg-[#181616] shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full">
<thead className="bg-[#242222]">
  <tr>
    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
      Name
    </th>

    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
      Entertainment Category
    </th>

    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
      Status
    </th>

    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
      Actions
    </th>
  </tr>
</thead>

<tbody>
  {offeringCategories.map((category) => (
    <tr
      key={category.id}
      className="border-t border-gray-700 hover:bg-[#222020]"
    >
      <td className="px-6 py-4 text-white">
        {category.category_name}
      </td>

      <td className="px-6 py-4 text-gray-300">
        {category.entertainment_category}
      </td>

      <td className="px-6 py-4 text-center">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            category.status === "ACTIVE"
? "border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14] shadow-[0_0_8px_#39FF14]"
      : "border-[#FF3131] bg-[#FF3131]/10 text-[#FF3131] shadow-[0_0_8px_#FF3131]"
          }`}
        >
          {category.status}
        </span>
      </td>

      <td className="px-6 py-4">
        <div className="flex justify-center gap-3">
          <Link
            href={`/controlpanel/entertainment/offering/offeringcategory/${category.id}/`}
            className="rounded-lg border border-[#39FF14] bg-[#39FF14]/10 p-2 text-[#39FF14] shadow-[0_0_8px_#39FF14] transition-all duration-300 hover:scale-105 hover:bg-[#39FF14]/20 hover:shadow-[0_0_12px_#39FF14]"
          >
            <Eye size={18} />
          </Link>

          <Link
            href={`/controlpanel/entertainment/offering/offeringcategory/${category.id}/edit/`}
            className="rounded-lg border border-[#00E5FF] bg-[#00E5FF]/10 p-2 text-[#00E5FF] shadow-[0_0_8px_#00E5FF] transition-all duration-300 hover:bg-[#00E5FF]/20 hover:shadow-[0_0_12px_#00E5FF]"
          >
            <Edit size={18} />
          </Link>

          <button className="rounded-lg border border-[#FF3131] bg-[#FF3131]/10 p-2 text-[#FF3131] shadow-[0_0_8px_#FF3131] transition-all duration-300 hover:bg-[#FF3131]/20 hover:shadow-[0_0_12px_#FF3131]">
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;