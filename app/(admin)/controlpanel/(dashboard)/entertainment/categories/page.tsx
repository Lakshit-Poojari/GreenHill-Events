"use client";

import Link from "next/link";
import { ArrowLeft, Eye, Pencil, Plus, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Category {
  id: number;
  category_name: string;
  slug: string;
  status: "ACTIVE" | "INACTIVE";
}

const Page = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    try {
      const response = await fetch("/api/categories");
      const result = await response.json();
      // console.log('====================================');
      // console.log(result);
      // console.log('====================================');
      if (result.success) {
        setCategories(result.category);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

    const handleDelete = async (id: number) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this categories?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/categories/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        getAllCategory(); // refresh list
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
            Entertainment Categories
          </h1>
          <p className="mt-2 text-gray-400">
            Manage all entertainment categories available on the website.
          </p>
        </div>

        <Link
          href="/controlpanel/entertainment/categories/create"
          className="flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 font-medium text-black transition hover:bg-amber-400"
        >
          <Plus size={18} />
          Add Category
        </Link>
      </div>

      {/* Search */}
      <div className="flex items-center rounded-xl border border-gray-700 bg-[#181616] px-4 py-3">
        <Search className="mr-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search category..."
          className="w-full bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
        />
      </div>

      {/* Categories Table */}
      <div className="overflow-hidden rounded-xl border border-gray-700 bg-[#181616] shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#242222]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Category
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Slug
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
              {loading ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-8 text-center text-gray-400"
                  >
                    Loading...
                  </td>
                </tr>
              ) : categories.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-8 text-center text-gray-400"
                  >
                    No categories found.
                  </td>
                </tr>
              ) : (
                categories.map((category) => (
                  <tr
                    key={category.id}
                    className="border-t border-gray-700 hover:bg-[#222020]"
                  >
                    <td className="px-6 py-4 text-white">
                      {category.category_name}
                    </td>

                    <td className="px-6 py-4 text-gray-300">
                      {category.slug}
                    </td>

                    <td className="px-6 py-4">
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
    href={`/controlpanel/entertainment/categories/${category.id}`}
    className="rounded-lg border border-[#39FF14] bg-[#39FF14]/10 p-2 text-[#39FF14] shadow-[0_0_8px_#39FF14] transition-all duration-300 hover:scale-105 hover:bg-[#39FF14]/20 hover:shadow-[0_0_12px_#39FF14]"
    title="View"
  >
    <Eye size={18} />
  </Link>

  <Link
    href={`/controlpanel/entertainment/categories/${category.id}/edit`}
    className="rounded-lg border border-[#00E5FF] bg-[#00E5FF]/10 p-2 text-[#00E5FF] shadow-[0_0_8px_#00E5FF] transition-all duration-300 hover:bg-[#00E5FF]/20 hover:shadow-[0_0_12px_#00E5FF]"
    title="Edit"
  >
    <Pencil size={18} />
  </Link>

  <button
    type="button"
    onClick={() => handleDelete(category.id)}
    className="rounded-lg border border-[#FF3131] bg-[#FF3131]/10 p-2 text-[#FF3131] shadow-[0_0_8px_#FF3131] transition-all duration-300 hover:bg-[#FF3131]/20 hover:shadow-[0_0_12px_#FF3131]"
    title="Delete"
  >
    <Trash2 size={18} />
  </button>
</div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;