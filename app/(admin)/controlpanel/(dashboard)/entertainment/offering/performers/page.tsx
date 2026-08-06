"use client";

import Link from "next/link";
import { ArrowLeft, Plus, Search, Eye, Edit, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Performer {
  id: number;
  performer_name: string;
  offering_category_id: string;
  offering_category_name: string;
  image: string;
  page_url: string | null;
  soundcloud_link: string | null;
  status: "ACTIVE" | "INACTIVE";
}

const Page = () => {
  const [performers, setPerformers] = useState<Performer[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedStatus, setSelectedStatus] = useState("ALL");

  useEffect(() => {
    fetchOffering();
  }, []);

  const fetchOffering = async () => {
    try {
      const response = await fetch("/api/offerings");
      const result = await response.json();
      console.log(result.offering);
      if (result.success) {
        setPerformers(result.offering);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPerformers = performers.filter((performer) => {
    const matchesSearch = performer.performer_name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "ALL" ||
      performer.offering_category_name === selectedCategory;

    const matchesStatus =
      selectedStatus === "ALL" || performer.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this performer?",
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/offerings/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        fetchOffering(); // refresh list
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const categories = [
    "ALL",
    ...new Set(performers.map((item) => item.offering_category_name)),
  ];

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center text-white">
        Loading performers...
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
          <h1 className="text-3xl font-bold text-white">Performers</h1>

          <p className="mt-2 text-[#C9AC8C]">
            Create, edit and manage performers.
          </p>
        </div>

        <Link
          href="/controlpanel/entertainment/offering/performers/create"
          className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-5 py-3 font-medium text-black transition 
            hover:bg-[#b89470]"
        >
          <Plus size={18} />
          Add Performer
        </Link>
      </div>

      {/* Search */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-4">
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex flex-1 items-center rounded-lg border border-gray-600 px-3 py-2">
            <Search size={18} className="mr-2 text-gray-400" />

            <input
              type="text"
              placeholder="Search performer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
            />
          </div>

          {/* Category */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-56 rounded-lg border border-gray-600 bg-[#181616] px-3 py-2 text-white focus:outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Status */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-44 rounded-lg border border-gray-600 bg-[#181616] px-3 py-2 text-white focus:outline-none"
          >
            <option value="ALL">All Status</option>
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
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
                  Performer Name
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Offering Category
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
              {filteredPerformers.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-gray-400">
                    No performers found.
                  </td>
                </tr>
              ) : (
                filteredPerformers.map((performer) => (
                  <tr
                    key={performer.id}
                    className="border-t border-gray-700 hover:bg-[#222020]"
                  >
                    <td className="px-6 py-4 text-white">
                      {performer.performer_name}
                    </td>

                    <td className="px-6 py-4 text-gray-300">
                      {performer.offering_category_name}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          performer.status === "ACTIVE"
                            ? "border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14] shadow-[0_0_8px_#39FF14]"
                            : "border-[#FF3131] bg-[#FF3131]/10 text-[#FF3131] shadow-[0_0_8px_#FF3131]"
                        }`}
                      >
                        {performer.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3">
                        <Link
                          href={`/controlpanel/entertainment/offering/performers/${performer.id}`}
                          className="rounded-lg border border-[#A855F7] bg-[#A855F7]/10 p-2 text-[#A855F7] 
                            shadow-[0_0_8px_#A855F7] transition-all duration-300 hover:scale-105 hover:bg-[#A855F7]/20 
                            hover:shadow-[0_0_12px_#A855F7]"
                        >
                          <Eye size={18} />
                        </Link>

                        <Link
                          href={`/controlpanel/entertainment/offering/performers/${performer.id}/edit`}
                          className="rounded-lg border border-[#00BFFF] bg-[#00E5FF]/10 p-2 text-[#00BFFF] 
                            shadow-[0_0_8px_#00BFFF] transition-all duration-300 hover:bg-[#00BFFF]/20 
                            hover:shadow-[0_0_12px_#00BFFF]"
                        >
                          <Edit size={18} />
                        </Link>

                        <button
                          type="button"
                          onClick={() => handleDelete(performer.id)}
                          className="rounded-lg border border-[#FF3131] bg-[#FF3131]/10 p-2 text-[#FF3131] 
                            shadow-[0_0_8px_#FF3131] transition-all duration-300 hover:bg-[#FF3131]/20 
                            hover:shadow-[0_0_12px_#FF3131]"
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
