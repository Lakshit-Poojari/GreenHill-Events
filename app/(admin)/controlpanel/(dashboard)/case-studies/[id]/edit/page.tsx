"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useParams, useRouter } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();

  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    image: null as File | null,
    currentImage: "",
    description: "",
    youtube_url: "",
    status: "ACTIVE",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,) => {
    const { name, value } = e.target;

    if (name === "image") {
      const file = (e.target as HTMLInputElement).files?.[0] || null;

      setFormData((prev) => ({
        ...prev,
        image: file,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSaving(true);

    try {
      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("youtube_url", formData.youtube_url);
      data.append("status", formData.status);

      if (formData.image) {
        data.append("image", formData.image);
      }

      const response = await fetch(`/api/caseStudy/${id}`, {
        method: "PUT",
        credentials: "include",
        body: data,
      });

      const result = await response.json();

      console.log(result);

      if (!response.ok) {
        console.error(result);
        throw new Error(result.message);
      }

      alert("Case Study updated successfully.");
      router.push("/controlpanel/case-studies");
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Link
        href="/controlpanel/case-studies"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm font-medium text-white transition hover:border-amber-500 hover:text-amber-400"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Header */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6">
        <h1 className="text-3xl font-bold text-white">Edit Case Study</h1>

        <p className="mt-2 text-gray-400">Update case study details.</p>
      </div>

      {/* Form */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Title *
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter case study title"
              required
              className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none transition focus:border-[#C9AC8C]"
            />
          </div>

          {/* Image */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Case Study Image
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-sm text-gray-300 file:mr-4 file:rounded-md file:border-0 file:bg-[#C9AC8C] file:px-4 file:py-2 file:text-black"
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
              placeholder="Enter case study description..."
              className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none transition focus:border-[#C9AC8C]"
            />
          </div>

          {/* YouTube URL */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              YouTube URL (Optional)
            </label>

            <input
              type="text"
              name="youtube_url"
              value={formData.youtube_url}
              onChange={handleChange}
              placeholder="https://www.youtube.com/embed/..."
              className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none transition focus:border-[#C9AC8C]"
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
              className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none focus:border-[#C9AC8C]"
            >
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <Link
              href="/controlpanel/case-studies"
              className="rounded-lg border border-gray-700 px-5 py-3 text-white transition hover:border-red-500 
                hover:text-red-500"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-6 py-3 font-semibold text-black transition 
                hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Save size={18} />
              {saving ? "Updating..." : "Update Case Study"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
