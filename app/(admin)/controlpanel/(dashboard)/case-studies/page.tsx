"use client";

import Link from "next/link";
import { Edit, Eye, Plus, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export interface CaseStudy {
  id: number;
  title: string;
  youtube_url?: string;
  status: "ACTIVE" | "INACTIVE";
}

const Page = () => {
  const [caseStudies, setcaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAllCaseStudies();
  }, []);

  const fetchAllCaseStudies = async () => {
    try {
      const response = await fetch("/api/caseStudy");
      const result = await response.json();
      if (result.success) {
        setcaseStudies(result.caseStudy);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCaseStudies = caseStudies.filter((caseStudy) =>
    caseStudy.title.toLowerCase().includes(search.toLowerCase()),
  );

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this case Study?",
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/caseStudy/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        fetchAllCaseStudies(); // refresh list
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20 text-white">
        Loading case studies...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-8 shadow-lg">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Case Studies</h1>
            <p className="mt-2 text-gray-400">Manage all case studies.</p>
          </div>

          <Link
            href="/controlpanel/case-studies/create"
            className="inline-flex items-center gap-2 rounded-lg bg-[rgba(201,172,140,1)] px-5 py-3 font-semibold text-black transition hover:opacity-90"
          >
            <Plus size={18} />
            Create Case Study
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
            placeholder="Search case studies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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

                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
                  Status
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
                  Video
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredCaseStudies.map((caseStudy) => (
                <tr
                  key={caseStudy.id}
                  className="border-b border-gray-700 transition hover:bg-[#222]"
                >
                  <td className="px-6 py-4 font-medium text-white">
                    {caseStudy.title}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        caseStudy.status === "ACTIVE"
                          ? "border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14] shadow-[0_0_8px_#39FF14]"
                          : "border-[#FF3131] bg-[#FF3131]/10 text-[#FF3131] shadow-[0_0_8px_#FF3131]"
                      }`}
                    >
                      {caseStudy.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center">
                    {caseStudy.youtube_url ? (
                      <span className="text-green-400 ">Available</span>
                    ) : (
                      <span className="text-gray-500">—</span>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <Link
                        href={`/controlpanel/case-studies/${caseStudy.id}`}
                        className="rounded-lg border border-[#39FF14] bg-[#39FF14]/10 p-2 text-[#39FF14] shadow-[0_0_8px_#39FF14] transition-all duration-300 hover:scale-105 hover:bg-[#39FF14]/20 hover:shadow-[0_0_12px_#39FF14]"
                      >
                        <Eye size={18} />
                      </Link>

                      <Link
                        href={`/controlpanel/case-studies/edit/${caseStudy.id}`}
                        className="rounded-lg border border-[#00E5FF] bg-[#00E5FF]/10 p-2 text-[#00E5FF] shadow-[0_0_8px_#00E5FF] transition-all duration-300 hover:bg-[#00E5FF]/20 hover:shadow-[0_0_12px_#00E5FF]"
                      >
                        <Edit size={18} />
                      </Link>

                      <button
                        onClick={() => handleDelete(caseStudy.id)}
                        className="rounded-lg border border-[#FF3131] bg-[#FF3131]/10 p-2 text-[#FF3131] shadow-[0_0_8px_#FF3131] transition-all duration-300 hover:bg-[#FF3131]/20 hover:shadow-[0_0_12px_#FF3131]"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredCaseStudies.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-12 text-center text-gray-400"
                  >
                    No case studies found.
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

export default Page;
