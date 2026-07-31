"use client";

import Link from "next/link";
import { ArrowLeft, Edit } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export interface Offering {
  id: number;
  offering_category_id: number;
  offering_category_name: string;
  performer_name: string;
  slug: string;
  image_path: string;
  small_description: string;
  large_description: string;
  page_url: string | null;
  soundcloud_link: string | null;
  status: "ACTIVE" | "INACTIVE";
  created_at: string;
  updated_at: string | null;
  updated_by: string | null;
  created_by: string | null;
}

const Page = () => {
  const { id } = useParams();

  const [offering, setOffering] = useState<Offering | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOffering();
  }, []);

  const fetchOffering = async () => {
    try {
      const response = await fetch(`/api/offerings/${id}`);
      const result = await response.json();
      console.log(result);

      if (!response.ok) {
        throw new Error(result.message);
      }

      setOffering(result.offering[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-8 text-center text-white">
        Loading...
      </div>
    );
  }

  if (!offering) {
    return (
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-8 text-center text-red-400">
        Offering not found.
      </div>
    );
  }
  return (
    <div className="space-y-6">
      {/* Back */}
      <Link
        href="/controlpanel/entertainment/offering/performers"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm font-medium text-white transition hover:border-[#C9AC8C] hover:text-[#C9AC8C]"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-4 rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">View Performer</h1>

          <p className="mt-2 text-gray-400">View performer information.</p>
        </div>

        <Link
          href={`/controlpanel/entertainment/offering/performers/${offering.id}/videos`}
          className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-5 py-3 font-medium text-black transition hover:bg-[#b89470]"
        >
          Manage Videos
        </Link>

        <Link
          href={`/controlpanel/entertainment/offering/performers/${offering.id}/edit`}
          className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-5 py-3 font-medium text-black transition hover:bg-[#b89470]"
        >
          <Edit size={18} />
          Edit Performer
        </Link>
      </div>

      {/* Details */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Image */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-400">
              Performer Image
            </h3>

            <img
              src={`/api/uploads/${offering.image_path}`}
              alt={offering.performer_name}
              className="h-72 w-full rounded-lg border border-gray-700 object-cover"
            />
          </div>

          {/* Information */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-400">Performer Name</p>

              <p className="mt-1 text-lg font-medium text-white">
                {offering.performer_name}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Offering Category</p>

              <p className="mt-1 text-white">
                {offering.offering_category_name}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Page URL</p>

              {offering.page_url ? (
                <a
                  href={offering.page_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block break-all text-[#C9AC8C] hover:underline"
                >
                  {offering.page_url}
                </a>
              ) : (
                <p className="mt-1 text-white">-</p>
              )}
            </div>

            <div>
              <p className="text-sm text-gray-400">SoundCloud</p>

              {offering.soundcloud_link ? (
                <a
                  href={offering.soundcloud_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block break-all text-[#C9AC8C] hover:underline"
                >
                  Open SoundCloud
                </a>
              ) : (
                <p className="mt-1 text-white">-</p>
              )}
            </div>

            <div>
              <p className="text-sm text-gray-400">Status</p>

              <span
                className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                  offering.status === "ACTIVE"
                    ? "border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14] shadow-[0_0_8px_#39FF14]"
                    : "border-[#FF3131] bg-[#FF3131]/10 text-[#FF3131] shadow-[0_0_8px_#FF3131]"
                }`}
              >
                {offering.status}
              </span>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <div className="mt-8">
          <h3 className="mb-3 text-sm font-medium text-gray-400">
            Short Description
          </h3>

          <div className="rounded-lg border border-gray-700 bg-[#222] p-4 text-gray-300">
            {offering.small_description}
          </div>
        </div>

        {/* Long Description */}
        <div className="mt-6">
          <h3 className="mb-3 text-sm font-medium text-gray-400">
            Long Description
          </h3>

          <div className="rounded-lg border border-gray-700 bg-[#222] p-4 leading-7 text-gray-300">
            {offering.large_description}
          </div>
        </div>
        {/* Audit Information */}
        <div className="mt-8">
          <h3 className="mb-4 text-sm font-medium text-gray-400">
            Audit Information
          </h3>

          <div className="grid gap-6 rounded-lg border border-gray-700 bg-[#222] p-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-400">Created By</p>
              <p className="mt-1 text-white">{offering.created_by ?? "-"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Created At</p>
              <p className="mt-1 text-white">
                {new Date(offering.created_at).toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Updated By</p>
              <p className="mt-1 text-white">{offering.updated_by ?? "-"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Updated At</p>
              <p className="mt-1 text-white">
                {offering.updated_at
                  ? new Date(offering.updated_at).toLocaleString()
                  : "-"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
