"use client";

import Link from "next/link";
import { ArrowLeft, Edit } from "lucide-react";

const performer = {
  id: 1,
  performer_name: "West End Waiters",
  offering_category: "Harmony Groups",
  image: "/images/no-image.png",
  short_description:
    "A talented group of performers providing unforgettable entertainment.",
  long_description:
    "West End Waiters are professional singing waiters who surprise guests with outstanding live performances. They perform at weddings, corporate events, private parties and other special occasions, creating memorable experiences for everyone.",
  status: "ACTIVE",
};

const Page = () => {
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
          <h1 className="text-3xl font-bold text-white">
            View Performer
          </h1>

          <p className="mt-2 text-gray-400">
            View performer information.
          </p>
        </div>

        <Link
            href={`/controlpanel/entertainment/offering/performers/${performer.id}/videos`}
            className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-5 py-3 font-medium text-black transition hover:bg-[#b89470]"
            >
            Manage Videos
        </Link>

        <Link
          href={`/controlpanel/entertainment/offering/performers/${performer.id}/edit`}
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
              src={performer.image}
              alt={performer.performer_name}
              className="h-72 w-full rounded-lg border border-gray-700 object-cover"
            />
          </div>

          {/* Information */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-400">
                Performer Name
              </p>

              <p className="mt-1 text-lg font-medium text-white">
                {performer.performer_name}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">
                Offering Category
              </p>

              <p className="mt-1 text-white">
                {performer.offering_category}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">
                Status
              </p>

              <span
                className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                  performer.status === "ACTIVE"
                    ? "border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14] shadow-[0_0_8px_#39FF14]"
                    : "border-[#FF3131] bg-[#FF3131]/10 text-[#FF3131] shadow-[0_0_8px_#FF3131]"
                }`}
              >
                {performer.status}
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
            {performer.short_description}
          </div>
        </div>

        {/* Long Description */}
        <div className="mt-6">
          <h3 className="mb-3 text-sm font-medium text-gray-400">
            Long Description
          </h3>

          <div className="rounded-lg border border-gray-700 bg-[#222] p-4 leading-7 text-gray-300">
            {performer.long_description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;