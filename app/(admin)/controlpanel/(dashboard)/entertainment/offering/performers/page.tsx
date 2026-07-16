"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Search,
  Eye,
  Edit,
  Trash2
} from "lucide-react";
import { useEffect, useState } from "react";

interface Performer {
  id: number;
  performer_name: string;
  offering_category_id: string;
  image: string;
  status: "ACTIVE" | "INACTIVE";
}



const Page = () => {

    const [offering, setoffering] = useState<Performer[]>([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOffering();
  }, []);

    const fetchOffering = async() =>{
        try{
      const response = await fetch("/api/offerings");
      const result = await response.json();
      console.log(result.offering);
      if (result.success) {
        setoffering(result.offering);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
        className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm font-medium text-white transition hover:border-[#C9AC8C] hover:text-[#C9AC8C]"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-4 rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Performers
          </h1>

          <p className="mt-2 text-gray-400">
            Create, edit and manage performers.
          </p>
        </div>

        <Link
          href="/controlpanel/entertainment/offering/performers/create"
          className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-5 py-3 font-medium text-black transition hover:bg-[#b89470]"
        >
          <Plus size={18} />
          Add Performer
        </Link>
      </div>

      {/* Search */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-4">
        <div className="flex items-center rounded-lg border border-gray-600 px-3 py-2">
          <Search size={18} className="mr-2 text-gray-400" />

          <input
            type="text"
            placeholder="Search performer..."
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
  {offering.length === 0 ? (
    <tr>
      <td colSpan={4} className="py-8 text-center text-gray-400">
        No performers found.
      </td>
    </tr>
  ) : (
    offering.map((performer) => (
      <tr
        key={performer.id}
        className="border-t border-gray-700 hover:bg-[#222020]"
      >
        <td className="px-6 py-4 text-white">
          {performer.performer_name}
        </td>

        <td className="px-6 py-4 text-gray-300">
          {performer.offering_category_id}
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
    className="rounded-lg border border-[#39FF14] bg-[#39FF14]/10 p-2 text-[#39FF14] shadow-[0_0_8px_#39FF14] transition-all duration-300 hover:scale-105 hover:bg-[#39FF14]/20 hover:shadow-[0_0_12px_#39FF14]"
    title="View"
  >
    <Eye size={18} />
  </Link>

  <Link
    href={`/controlpanel/entertainment/offering/performers/${performer.id}/edit`}
    className="rounded-lg border border-[#00E5FF] bg-[#00E5FF]/10 p-2 text-[#00E5FF] shadow-[0_0_8px_#00E5FF] transition-all duration-300 hover:bg-[#00E5FF]/20 hover:shadow-[0_0_12px_#00E5FF]"
    title="Edit"
  >
    <Edit size={18} />
  </Link>

  <button
    type="button"
    // onClick={() => handleDelete(category.id)}
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