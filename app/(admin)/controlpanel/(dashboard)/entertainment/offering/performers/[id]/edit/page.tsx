"use client";

import Link from "next/link";
import { ArrowLeft, Save, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Page = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    [],
  );

  const [image, setImage] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    offering_category_id: 0,
    performer_name: "",
    image_path: "",
    small_description: "",
    large_description: "",
    status: "ACTIVE" as "ACTIVE" | "INACTIVE",
  });

  useEffect(() => {
    getPerformer();
    fetchOfferingCategories();
  }, [id]);

  const getPerformer = async () => {
    try {
      const response = await fetch(`/api/offerings/${id}`);

      const result = await response.json();

      if (result.success) {
        const performer = result.offering[0];

        setFormData({
          offering_category_id: performer.offering_category_id,
          performer_name: performer.performer_name,
          image_path: performer.image_path,
          small_description: performer.short_description,
          large_description: performer.long_description,
          status: performer.status,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchOfferingCategories = async () => {
    try {
      const response = await fetch("/api/offeringCategories");

      const result = await response.json();

      if (result.success) {
        setCategories(result.offeringCategory);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >,) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "offering_category_id" ? Number(value) : value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setSaving(true);

      const response = await fetch(`/api/offerings/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          offering_category_id: formData.offering_category_id,
          performer_name: formData.performer_name,
          image_path: formData.image_path,
          small_description: formData.small_description,
          large_description: formData.large_description,
          status: formData.status,
          updated_by: 1,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      alert(result.message);

      router.push("/controlpanel/entertainment/offering/performers");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back */}
      <Link
        href="/controlpanel/entertainment/offering/performers"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm font-medium 
          text-white transition hover:border-[#C9AC8C] hover:text-[#C9AC8C]"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Header */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-white">Edit Performer</h1>

        <p className="mt-2 text-gray-400">Update performer details.</p>
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
              className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white outline-none 
                focus:border-[#C9AC8C]"
            >
              <option value="">Select Offering Category</option>

              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
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
              className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white outline-none 
                focus:border-[#C9AC8C]"
            />
          </div>

          {/* Current Image */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Current Image
            </label>

            <img
              src={image ? URL.createObjectURL(image) : formData.image_path}
              alt="Performer"
              className="h-48 w-48 rounded-lg border border-gray-700 object-cover"
            />
          </div>

          {/* Upload New Image */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Upload New Image
            </label>

            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed 
              border-gray-600 bg-[#222] px-4 py-8 text-gray-400 transition hover:border-[#C9AC8C] hover:text-[#C9AC8C]">
              <Upload size={20} />
              <span>Choose Image</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Short Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Short Description
            </label>

            <textarea
              rows={3}
              name="small_description"
              value={formData.small_description}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white outline-none 
                focus:border-[#C9AC8C]"
            />
          </div>

          {/* Long Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Long Description
            </label>

            <textarea
              rows={8}
              name="large_description"
              value={formData.large_description}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white outline-none 
                focus:border-[#C9AC8C]"
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
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <Link
              href="/controlpanel/entertainment/offering/performers"
              className="rounded-lg border border-gray-600 px-6 py-3 text-white transition hover:border-red-500 
                hover:text-red-400"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-6 py-3 font-medium text-black transition 
                hover:bg-[#b89470] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Save size={18} />
              {saving ? "Updating..." : "Update Performer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
