"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

const Page = () => {
  return (
    <div className="space-y-6">
      {/* Back */}
      <Link
        href="/controlpanel/entertainment/offering/offeringcategory"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm font-medium text-white transition hover:border-[#C9AC8C] hover:text-[#C9AC8C]"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Header */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-white">
          Add Offering Category
        </h1>

        <p className="mt-2 text-gray-400">
          Create a new offering category for the entertainment section.
        </p>
      </div>

      {/* Form */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg">
        <form className="space-y-6">
          {/* Entertainment Category */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Entertainment Category
            </label>

            <select className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white outline-none focus:border-[#C9AC8C]">
              <option value="">Select Entertainment Category</option>
              <option value="1">Singers</option>
              <option value="2">Musicians</option>
              <option value="3">Dancers</option>
              <option value="4">Magicians</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Name
            </label>

            <input
              type="text"
              placeholder="e.g. Singing Waiters"
              className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-[#C9AC8C]"
            />
          </div>

          {/* Display Order */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Display Order
            </label>

            <input
              type="number"
              min={1}
              placeholder="1"
              className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-[#C9AC8C]"
            />
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Status
            </label>

            <select className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white outline-none focus:border-[#C9AC8C]">
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <Link
              href="/controlpanel/entertainment/offering/offeringcategory"
              className="rounded-lg border border-gray-600 px-6 py-3 text-white transition hover:border-red-500 hover:text-red-400"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-6 py-3 font-medium text-black transition hover:bg-[#b89470]"
            >
              <Save size={18} />
              Save Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;