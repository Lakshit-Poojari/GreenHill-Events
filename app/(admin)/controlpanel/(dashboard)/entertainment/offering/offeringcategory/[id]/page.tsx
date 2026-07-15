"use client";

import Link from "next/link";
import { ArrowLeft, Edit } from "lucide-react";

const category = {
  id: 1,
  name: "Singing Waiters",
  entertainmentCategory: "Singers",
  slug: "singing-waiters",
  displayOrder: 1,
  status: "ACTIVE",
  updatedBy: "Super Admin",
  updatedAt: "15 Jul 2026, 10:30 AM",
};

const Page = () => {
  return (
    <div className="space-y-6">
      {/* Back */}
      <Link
        href="/controlpanel/entertainment/offering/categories"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm font-medium text-white transition hover:border-[#C9AC8C] hover:text-[#C9AC8C]"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-4 rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Offering Category Details
          </h1>

          <p className="mt-2 text-gray-400">
            View the complete details of this offering category.
          </p>
        </div>

        <Link
          href={`/controlpanel/entertainment/offering/offeringcategory/${category.id}/edit`}
          className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-5 py-3 font-medium text-black transition hover:bg-[#b89470]"
        >
          <Edit size={18} />
          Edit Category
        </Link>
      </div>

      {/* Details */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-gray-400">Name</p>
            <p className="mt-1 text-lg font-medium text-white">
              {category.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">
              Entertainment Category
            </p>
            <p className="mt-1 text-lg font-medium text-white">
              {category.entertainmentCategory}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Slug</p>
            <p className="mt-1 text-lg font-medium text-white">
              {category.slug}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Display Order</p>
            <p className="mt-1 text-lg font-medium text-white">
              {category.displayOrder}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Status</p>

            <span
              className={`mt-2 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
                category.status === "ACTIVE"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {category.status}
            </span>
          </div>

          <div>
            <p className="text-sm text-gray-400">Updated By</p>
            <p className="mt-1 text-lg font-medium text-white">
              {category.updatedBy}
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-sm text-gray-400">Last Updated</p>
            <p className="mt-1 text-lg font-medium text-white">
              {category.updatedAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;