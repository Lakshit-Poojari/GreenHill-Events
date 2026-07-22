"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { useRef, useState } from "react";

type FormData = {
  title: string;
  image: File | null;
  description: string;
  youtube_url: string;
  status: "ACTIVE" | "INACTIVE";
};

const Page = () => {
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    image: null,
    description: "",
    youtube_url: "",
    status: "ACTIVE",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("youtube_url", formData.youtube_url);
      data.append("status", formData.status);

      if (formData.image) {
        data.append("image", formData.image);
      }

      const response = await fetch("/api/caseStudy", {
        method: "POST",
        credentials: "include",
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Failed to create case study");
        return;
      }

      alert("Case study created successfully!");

      setFormData({
        title: "",
        image: null,
        description: "",
        youtube_url: "",
        status: "ACTIVE",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Create Case Study</h1>
          <p className="mt-1 text-gray-400">
            Add a new case study to the website.
          </p>
        </div>

        <Link
          href="/controlpanel/case-studies"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-white 
            transition hover:border-[rgba(201,172,140,1)]"
        >
          <ArrowLeft size={18} />
          Back
        </Link>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-xl border border-gray-700 bg-[#181616] p-8 shadow-lg"
      >
        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Title
          </label>

          <input
            type="text"
            required
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter case study title"
            className="w-full rounded-lg border border-gray-700 bg-[#111] px-4 py-3 text-white outline-none 
              focus:border-[rgba(201,172,140,1)]"
          />
        </div>

        {/* Featured Image */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Featured Image
          </label>

          <input
            ref={fileInputRef}
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            required
            className="w-full rounded-lg border border-gray-700 bg-[#111] p-3 text-gray-300 file:mr-4 file:rounded-lg 
              file:border-0 file:bg-[rgba(201,172,140,1)] file:px-4 file:py-2 file:text-black"
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Description
          </label>

          <textarea
            rows={8}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write the case study..."
            required
            className="w-full rounded-lg border border-gray-700 bg-[#111] px-4 py-3 text-white outline-none 
              focus:border-[rgba(201,172,140,1)]"
          />
        </div>

        {/* YouTube URL */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            YouTube URL
            <span className="ml-2 text-xs text-gray-500">(Optional)</span>
          </label>

          <input
            type="url"
            name="youtube_url"
            value={formData.youtube_url}
            onChange={handleChange}
            placeholder="https://www.youtube.com/watch?v=..."
            className="w-full rounded-lg border border-gray-700 bg-[#111] px-4 py-3 text-white outline-none 
              focus:border-[rgba(201,172,140,1)]"
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
            className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white outline-none 
              focus:border-[#C9AC8C]"
          >
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <Link
            href="/controlpanel/case-studies"
            className="rounded-lg border border-gray-700 px-6 py-3 text-white transition hover:border-red-500"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg bg-[rgba(201,172,140,1)] px-6 py-3 font-semibold text-black 
              transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Save size={18} />
            {loading ? "Saving..." : "Save Case Study"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
