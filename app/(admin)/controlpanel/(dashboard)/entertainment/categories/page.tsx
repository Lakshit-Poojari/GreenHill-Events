"use client";

import Link from "next/link";
import { ArrowLeft, Plus, Search } from "lucide-react";
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
      console.log('====================================');
      console.log(result);
      console.log('====================================');
      if (result.success) {
        setCategories(result.category);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {category.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3">
                        <Link
                          href={`/controlpanel/entertainment/categories/edit/${category.id}`}
                          className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
                        >
                          Edit
                        </Link>

                        <button className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600">
                          Delete
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