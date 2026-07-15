"use client";

import Link from "next/link";
import { ArrowLeft, Edit } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface OfferingCategory {
  id: number;
  category_id: number;
  name: string;
  slug: string;
  display_order: number;
  status: "ACTIVE" | "INACTIVE";
  updated_by: number;
  updated_at: string;
}

const Page = () => {
    const { id } = useParams()
    
const [offeringcategory, setOfferingCategory] = useState<OfferingCategory | null>(null);
const [loading, setLoading] = useState(true);
    
  const getOfferingCategory = async () => {
  try {
    const response = await fetch(`/api/offeringCategories/${id}`);
    const result = await response.json();

    if (result.success) {
      setOfferingCategory(result.offeringCategory[0]);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  getOfferingCategory();
}, [id]);
if (loading) {
  return <div className="text-white">Loading...</div>;
}

if (!offeringcategory) {
  return <div className="text-white">Category not found.</div>;
}
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
          href={`/controlpanel/entertainment/offering/offeringcategory/${offeringcategory.id}/edit`}
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
              {offeringcategory.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">
              Entertainment Category
            </p>
            <p className="mt-1 text-lg font-medium text-white">
              {offeringcategory.category_id}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Slug</p>
            <p className="mt-1 text-lg font-medium text-white">
              {offeringcategory.slug}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Display Order</p>
            <p className="mt-1 text-lg font-medium text-white">
              {offeringcategory.display_order}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Status</p>

            <span
              className={`mt-2 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
                offeringcategory.status === "ACTIVE"
                        ? "border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14] shadow-[0_0_8px_#39FF14]"
      : "border-[#FF3131] bg-[#FF3131]/10 text-[#FF3131] shadow-[0_0_8px_#FF3131]"
              }`}
            >
              {offeringcategory.status}
            </span>
          </div>

          {/* <div>
            <p className="text-sm text-gray-400">Updated By</p>
            <p className="mt-1 text-lg font-medium text-white">
              {offeringCategories.}
            </p>
          </div> */}

          <div className="md:col-span-2">
            <p className="text-sm text-gray-400">Last Updated</p>
            <p className="mt-1 text-lg font-medium text-white">
              {new Date(offeringcategory.updated_at).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;