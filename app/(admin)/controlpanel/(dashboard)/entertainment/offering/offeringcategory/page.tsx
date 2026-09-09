"use client";

import Link from "next/link";
import { ArrowLeft, Plus, Search, Eye, Edit, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

interface OfferingCategories {
  id: number;
  category_id: number;
  category_name: string;
  name: string;
  slug: string;
  display_order: number;
  status: "ACTIVE" | "INACTIVE";
}

const Page = () => {
  const [offeringCategories, setOfferingCategories] = useState<
    OfferingCategories[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedStatus, setSelectedStatus] = useState("ALL");

  const entertainmentCategories = [
    "ALL",
    ...new Set(offeringCategories.map((item) => item.category_name)),
  ];

  const filteredOfferingCategories = offeringCategories.filter((category) => {
    const matchesSearch =
      category.name.toLowerCase().includes(search.toLowerCase()) ||
      category.slug.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "ALL" || category.category_name === selectedCategory;

    const matchesStatus =
      selectedStatus === "ALL" || category.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  useEffect(() => {
    getAllOfferingCategories();
  }, []);

  const getAllOfferingCategories = async () => {
    try {
      const response = await fetch("/api/offeringCategories");
      const result = await response.json();

      if (result.success) {
        setOfferingCategories(result.offeringCategory);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this category?",
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/offeringCategories/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      alert(result.message);

      // Remove deleted category from state
      setOfferingCategories((prev) =>
        prev.filter((category) => category.id !== id),
      );
    } catch (error) {
      alert(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }
  return (
    <div className="space-y-6">
      {/* Back */}
      <Link
        href="/controlpanel/entertainment/offering"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm font-medium 
          text-white transition hover:border-[#C9AC8C] hover:text-[#C9AC8C]"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Header */}
      <div
        className="flex flex-col gap-4 rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg md:flex-row 
        md:items-center md:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white">Offering Categories</h1>

          <p className="mt-2 text-[#C9AC8C]">
            Create, edit and manage entertainment offering categories.
          </p>
        </div>

        <Link
          href="/controlpanel/entertainment/offering/offeringcategory/create"
          className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-5 py-3 font-medium text-black transition 
            hover:bg-[#b89470]"
        >
          <Plus size={18} />
          Add Category
        </Link>
      </div>

      {/* Search */}
      {/* Search & Filters */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-4">
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex flex-1 items-center rounded-lg border border-gray-600 px-3 py-2">
            <Search size={18} className="mr-2 text-gray-400" />

            <input
              type="text"
              placeholder="Search by name or slug..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
            />
          </div>

          {/* Entertainment Category */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-64 rounded-lg border border-gray-600 bg-[#232121] px-4 py-2 text-white outline-none focus:border-[#C9AC8C]"
          >
            {entertainmentCategories.map((category) => (
              <option key={category} value={category}>
                {category === "ALL" ? "All Entertainment Categories" : category}
              </option>
            ))}
          </select>

          {/* Status */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-44 rounded-lg border border-gray-600 bg-[#232121] px-4 py-2 text-white outline-none focus:border-[#C9AC8C]"
          >
            <option value="ALL">All Status</option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </select>
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
                  Display Order
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
              {filteredOfferingCategories.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-400">
                    No offering categories found.
                  </td>
                </tr>
              ) : (
                filteredOfferingCategories.map((category) => (
                  <tr
                    key={category.id}
                    className="border-t border-gray-700 hover:bg-[#222020]"
                  >
                    <td className="px-6 py-4 text-white">{category.name}</td>

                    <td className="px-6 py-4 text-gray-300">
                      {category.category_name}
                    </td>

                    <td className="px-6 py-4 text-center text-gray-300">
                      {category.display_order}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          category.status === "ACTIVE"
                            ? "border-green-700/50 bg-green-500/10 text-green-400"
                            : "border-red-700/50 bg-red-500/10 text-red-400"
                        }`}
                      >
                        {category.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3">
                        <Link
                          href={`/controlpanel/entertainment/offering/offeringcategory/${category.id}`}
                          className="rounded-lg border border-gray-700 bg-[#232121] p-2 text-gray-400
             transition-all duration-300
             hover:border-[#A855F7]/70 hover:bg-[#A855F7]/10 hover:text-[#A855F7]"
                        >
                          <Eye size={18} />
                        </Link>

                        <Link
                          href={`/controlpanel/entertainment/offering/offeringcategory/${category.id}/edit`}
                          className="rounded-lg border border-gray-700 bg-[#232121] p-2 text-gray-400
             transition-all duration-300
            hover:border-[#00BFFF]/70 hover:bg-[#00BFFF]/10 hover:text-[#00BFFF]"
                        >
                          <Edit size={18} />
                        </Link>

                        <button
                          type="button"
                          onClick={() => handleDelete(category.id)}
                          className="rounded-lg border border-gray-700 bg-[#232121] p-2 text-gray-400
             transition-all duration-300
             hover:border-red-500/70 hover:bg-red-500/10 hover:text-red-400"
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
