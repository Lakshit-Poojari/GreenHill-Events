"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil } from "lucide-react";

interface Category {
  id: number;
  category_name: string;
  menu_name: string;
  slug: string;
  image: string;
  description: string;
  long_description: string;
  status: "ACTIVE" | "INACTIVE";
  created_at: string;
  updated_at: string;
}

const Page = () => {
  const { id } = useParams();

  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const response = await fetch(`/api/categories/${id}`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setCategory(result.category);
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

  if (!category) {
    return (
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-8 text-center text-red-400">
        Category not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back */}
      <Link
        href="/controlpanel/entertainment/categories"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm font-medium text-white transition hover:border-[#C9AC8C] hover:text-[#C9AC8C]"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Header */}
      <div className="flex items-center justify-between rounded-xl border border-gray-700 bg-[#181616] p-6">
        <div>
          <h1 className="text-3xl font-bold text-white">
            View Category
          </h1>
          <p className="mt-2 text-gray-400">
            View entertainment category details.
          </p>
        </div>

        <Link
          href={`/controlpanel/entertainment/categories/${category.id}/edit`}
          className="inline-flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-5 py-3 font-medium text-black transition hover:opacity-90"
        >
          <Pencil size={18} />
          Edit
        </Link>
      </div>

      {/* Details */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm text-gray-400">Category Name</p>
            <p className="text-white">{category.category_name}</p>
          </div>

          <div>
            <p className="mb-2 text-sm text-gray-400">Menu Name</p>
            <p className="text-white">{category.menu_name}</p>
          </div>

          <div>
            <p className="mb-2 text-sm text-gray-400">Slug</p>
            <p className="text-white">{category.slug}</p>
          </div>

          <div>
            <p className="mb-2 text-sm text-gray-400">Status</p>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                category.status === "ACTIVE"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {category.status}
            </span>
          </div>

          <div className="md:col-span-2">
            <p className="mb-2 text-sm text-gray-400">
              Description
            </p>

            <p className="text-white">{category.description}</p>
          </div>

          <div className="md:col-span-2">
            <p className="mb-2 text-sm text-gray-400">
              Long Description
            </p>

            <p className="whitespace-pre-line text-white">
              {category.long_description}
            </p>
          </div>

          <div>
            <p className="mb-2 text-sm text-gray-400">
              Created At
            </p>

            <p className="text-white">
              {new Date(category.created_at).toLocaleString()}
            </p>
          </div>

          <div>
            <p className="mb-2 text-sm text-gray-400">
              Updated At
            </p>

            <p className="text-white">
              {new Date(category.updated_at).toLocaleString()}
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Page;