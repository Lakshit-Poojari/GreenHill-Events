"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
    const [categories, setCategories] = useState<{ id: number; category_name: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    category_id: "",
    name: "",
    display_order: 1,
    status: "ACTIVE",
  });

  useEffect(() => {
  fetchEntertainmentCategories();
}, []);

const fetchEntertainmentCategories = async () => {
  try {
    const response = await fetch("/api/categories", {
      credentials: "include",
    });

    const result = await response.json();
    console.log(JSON.stringify(result, null, 2));
    console.log(result.category.category_name);
    
    

    

if (result.success) {
  setCategories(result.category);
}
  } catch (error) {
    console.error("Failed to fetch entertainment categories", error);
  }
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "category_id" || name === "display_order"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.category_id || !formData.name.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/offeringCategories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          ...formData,
          updated_by: 1, // Replace with logged-in user's id
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      alert(result.message);

      router.push("/controlpanel/entertainment/offering/offeringcategory");
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

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
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Entertainment Category */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Entertainment Category
            </label>

            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white outline-none focus:border-[#C9AC8C]"
            >
               <option value="">Select Entertainment Category</option>

  {categories.map((category) => (
    <option key={category.id} value={category.id}>
      {category.category_name}
    </option>
  ))}
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              name="display_order"
              value={formData.display_order}
              onChange={handleChange}
              min={1}
              className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-[#C9AC8C]"
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
              href="/controlpanel/entertainment/offering/offeringcategory"
              className="rounded-lg border border-gray-600 px-6 py-3 text-white transition hover:border-red-500 hover:text-red-400"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-6 py-3 font-medium text-black transition hover:bg-[#b89470] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Save size={18} />
              {loading ? "Saving..." : "Save Category"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;