"use client";

import Link from "next/link";
import { ArrowLeft, Save, Upload } from "lucide-react";
import { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    offering_category_id: "",
    performer_name: "",
    short_description: "",
    long_description: "",
    status: "ACTIVE",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
  };

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
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-white">
          Create Performer
        </h1>

        <p className="mt-2 text-gray-400">
          Add a new performer to the system.
        </p>
      </div>

      {/* Form */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Offering Category */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Offering Category
            </label>

            <select
              name="offering_category_id"
              value={formData.offering_category_id}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white outline-none focus:border-[#C9AC8C]"
            >
              <option value="">Select Offering Category</option>
              <option value="1">Harmony Groups</option>
              <option value="2">Choirs</option>
            </select>
          </div>

          {/* Performer Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Performer Name
            </label>

            <input
              type="text"
              name="performer_name"
              value={formData.performer_name}
              onChange={handleChange}
              placeholder="Enter performer name"
              className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white outline-none focus:border-[#C9AC8C]"
            />
          </div>

          {/* Image */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Performer Image
            </label>

            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-600 bg-[#222] px-4 py-8 text-gray-400 transition hover:border-[#C9AC8C] hover:text-[#C9AC8C]">
              <Upload size={20} />
              <span>Choose Image</span>

              <input
                type="file"
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>

          {/* Short Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Short Description
            </label>

            <textarea
              name="short_description"
              rows={3}
              value={formData.short_description}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white outline-none focus:border-[#C9AC8C]"
            />
          </div>

          {/* Long Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Long Description
            </label>

            <textarea
              name="long_description"
              rows={8}
              value={formData.long_description}
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

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <Link
              href="/controlpanel/entertainment/offering/performers"
              className="rounded-lg border border-gray-600 px-6 py-3 text-white transition hover:border-red-500 hover:text-red-400"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-6 py-3 font-medium text-black transition hover:bg-[#b89470]"
            >
              <Save size={18} />
              Save Performer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;