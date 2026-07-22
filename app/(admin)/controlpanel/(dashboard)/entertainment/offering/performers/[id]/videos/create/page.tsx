"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Page = () => {
  const params = useParams();
  const router = useRouter();

  const performerId = Number(params.id);
  const [formData, setFormData] = useState({
    youtube_url: "",
    display_order: 1,
  });

  const [saving, setSaving] = useState(false);
  const [performer, setPerformer] = useState<{
    id: number;
    performer_name: string;
  } | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPerformer();
  }, []);

  const fetchPerformer = async () => {
    try {
      const res = await fetch(`/api/offerings/${performerId}`, {
        credentials: "include",
      });

      const data = await res.json();

      if (data.success) {
        setPerformer(data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "display_order" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.youtube_url.trim()) {
      alert("Please enter a YouTube URL.");
      return;
    }

    setSaving(true);

    try {
      const res = await fetch(`/api/offeringVideo`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          offering_id: performerId,
          youtube_url: formData.youtube_url,
          display_order: formData.display_order,
        }),
      });

      const data = await res.json();
      console.log("Status:", res.status);
      console.log("Response:", data);

      if (!res.ok) {
        throw new Error(data.message || "Failed to create video");
      }

      alert("Video added successfully.");

      router.push(
        `/controlpanel/entertainment/offering/performers/${performerId}/videos`,
      );
    } catch (error) {
      console.error(error);

      alert(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back */}
      <Link
        href={`/controlpanel/entertainment/offering/performers/${performerId}/videos`}
        className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm font-medium 
          text-white transition hover:border-[#C9AC8C] hover:text-[#C9AC8C]"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Header */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-white">Add Offering Video</h1>

        <p className="mt-2 text-gray-400">
          Add a YouTube video for{" "}
          <span className="font-semibold text-white">
            {performer?.performer_name}
          </span>
        </p>
      </div>

      {/* Form */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* YouTube Embed Link */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              YouTube Embed Link
            </label>

            <input
              type="url"
              name="youtube_url"
              value={formData.youtube_url}
              onChange={handleChange}
              placeholder="https://www.youtube.com/embed/..."
              className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white outline-none 
                focus:border-[#C9AC8C]"
            />

            <p className="mt-2 text-xs text-gray-500">
              Paste the YouTube embed URL.
            </p>
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
              className="w-full rounded-lg border border-gray-600 bg-[#222] px-4 py-3 text-white outline-none 
                focus:border-[#C9AC8C]"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <Link
              href={`/controlpanel/entertainment/offering/performers/${performerId}/videos`}
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
              {saving ? "Saving..." : "Save Video"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
