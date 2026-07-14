"use client";

import Link from "next/link";
import {  Save } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    category_name: "",
    menu_name: "",
    description: "",
    long_description: "",
    status: "ACTIVE",
  });

  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      data.append("category_name", formData.category_name);
      data.append("menu_name", formData.menu_name);
      data.append("description", formData.description);
      data.append("long_description", formData.long_description);
      data.append("status", formData.status);
      

      if (image) {
        data.append("image", image);
      }

      const response = await fetch(
        "/api/categories",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      alert("Category created successfully.");
      router.push("/controlpanel/entertainment/categories");
    } catch (error: any) {
      alert(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl border border-gray-700 bg-[#181616] p-6">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Category Name & Menu Name */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Category Name *
            </label>

            <input
              type="text"
              name="category_name"
              value={formData.category_name}
              onChange={handleChange}
              placeholder="e.g. Musicians"
              required
              className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none transition focus:border-[#C9AC8C]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Menu Name *
            </label>

            <input
              type="text"
              name="menu_name"
              value={formData.menu_name}
              onChange={handleChange}
              placeholder="e.g. Live Music"
              required
              className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none transition focus:border-[#C9AC8C]"
            />
          </div>
        </div>

        {/* Image */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Category Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="block w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-sm text-gray-300 file:mr-4 file:rounded-md file:border-0 file:bg-[#C9AC8C] file:px-4 file:py-2 file:text-black"
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Description
          </label>

          <textarea
            rows={4}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter short description..."
            className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none transition focus:border-[#C9AC8C]"
          />
        </div>

        {/* Long Description */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Long Description
          </label>

          <textarea
            rows={8}
            name="long_description"
            value={formData.long_description}
            onChange={handleChange}
            placeholder="Enter detailed description..."
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
            href="/controlpanel/entertainment/categories"
            className="rounded-lg border border-gray-700 px-5 py-3 text-white transition hover:border-red-500 hover:text-red-500"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-6 py-3 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Save size={18} />
            {loading ? "Saving..." : "Save Category"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;