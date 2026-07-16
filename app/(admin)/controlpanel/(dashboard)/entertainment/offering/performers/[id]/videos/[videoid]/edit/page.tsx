"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { useState } from "react";

const performer = {
  id: 1,
  performer_name: "West End Waiters",
};

const Page = () => {
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    youtube_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    display_order: 1,
    status: "ACTIVE",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "display_order"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSaving(true);

    console.log(formData);

    setTimeout(() => {
      setSaving(false);
      alert("Video updated successfully.");
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Back */}
      <Link
        href={`/controlpanel/entertainment/offering/performers/${performer.id}/videos`}
        className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm font-medium text-white transition hover:border-[#C9AC8C] hover:text-[#C9AC8C]"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Header */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-white">
          Edit Offering Video
        </h1>

        <p className="mt-2 text-gray-400">
          Update video details for{" "}
          <span className="font-semibold text-white">
            {performer.performer_name}
          </span>
        </p>
      </div>

      {/* Form */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Performer */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Performer
            </label>

            <input
              type="text"
              value={performer.performer_name}
              disabled
              className="w-full rounded-lg border border-gray-600 bg-[#2a2a2a] px-4 py-3 text-gray-400"
            />
          </div>

          {/* Video Preview */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Video Preview
            </label>

            <div className="overflow-hidden rounded-lg border border-gray-700">
              <iframe
                src={formData.youtube_url}
                title="YouTube Preview"
                className="aspect-video w-full"
                allowFullScreen
              />
            </div>
          </div>

          {/* YouTube Link */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              YouTube Link
            </label>

            <input
              type="url"
              name="youtube_url"
              value={formData.youtube_url}
              onChange={handleChange}
              placeholder="Paste YouTube link"
              className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white outline-none focus:border-[#C9AC8C]"
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
              name="display_order"
              value={formData.display_order}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white outline-none focus:border-[#C9AC8C]"
            />
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white outline-none focus:border-[#C9AC8C]"
            >
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
            </select>
          </div>

          {/* Audit Information */}
          <div className="rounded-lg border border-gray-700 bg-[#222] p-5">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Audit Information
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-gray-400">Created By</p>
                <p className="mt-1 text-white">Simon Greenhill</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Created At</p>
                <p className="mt-1 text-white">
                  16 Jul 2026, 10:30 AM
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Updated By</p>
                <p className="mt-1 text-white">Lakshit Poojari</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Updated At</p>
                <p className="mt-1 text-white">
                  17 Jul 2026, 03:45 PM
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <Link
              href={`/controlpanel/entertainment/offering/performers/${performer.id}/videos`}
              className="rounded-lg border border-gray-600 px-6 py-3 text-white transition hover:border-red-500 hover:text-red-400"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-6 py-3 font-medium text-black transition hover:bg-[#b89470] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Save size={18} />
              {saving ? "Updating..." : "Update Video"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;