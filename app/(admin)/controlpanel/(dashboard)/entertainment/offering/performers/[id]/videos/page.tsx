"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Performer {
  id: number;
  performer_name: string;
}

interface OfferingVideo {
  id: number;
  offering_id: number;
  youtube_url: string;
  display_order: number;
  status: "ACTIVE" | "INACTIVE";
}



const Page = () => {

  const params = useParams();

const performerId = Number(params.id);

const [performer, setPerformer] = useState<Performer | null>(null);

const [videos, setVideos] = useState<OfferingVideo[]>([]);

const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  try {
    const [performerRes, videoRes] = await Promise.all([
      fetch(`/api/offerings/${performerId}`, {
        credentials: "include",
      }),
      fetch(`/api/offeringVideo`, {
        credentials: "include",
      }),
    ]);

    const performerData = await performerRes.json();
    const videoData = await videoRes.json();

    if (performerData.success) {
      setPerformer(performerData.data);
    }

    if (videoData.success) {
      setVideos(
        videoData.video.filter(
          (video: OfferingVideo) =>
            video.offering_id === performerId
        )
      );
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const handleDelete = async (id: number) => {
  if (!confirm("Delete this video?")) return;

  try {
    const res = await fetch(`/api/offeringVideo/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    setVideos((prev) => prev.filter((video) => video.id !== id));
  } catch (error) {
    alert(error instanceof Error ? error.message : "Delete failed");
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
        href={`/controlpanel/entertainment/offering/performers/${performerId}`}
        className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm font-medium text-white transition hover:border-[#C9AC8C] hover:text-[#C9AC8C]"
      >
        <ArrowLeft size={18} />
        Back to Performer
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-4 rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Offering Videos
          </h1>

          <p className="mt-2 text-gray-400">
            Manage videos for{" "}
            <span className="font-semibold text-white">
              {performer?.performer_name}
            </span>
          </p>
        </div>

        <Link
          href={`/controlpanel/entertainment/offering/performers/${performerId}/videos/create`}
          className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-5 py-3 font-medium text-black transition hover:bg-[#b89470]"
        >
          <Plus size={18} />
          Add Video
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-700 bg-[#181616] shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#242222]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  YouTube Embed Link
                </th>

                                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
                Status
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
                  Display Order
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {videos.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="py-8 text-center text-gray-400"
                  >
                    No videos found.
                  </td>
                </tr>
              ) : (
                videos.map((video) => (
                  <tr
                    key={video.id}
                    className="border-t border-gray-700 hover:bg-[#222020]"
                  >
                    <td className="px-6 py-4 text-[#C9AC8C]">
                      {video.youtube_url}
                    </td>

                                                <td className="px-6 py-4 text-center">
                                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                        video.status === "ACTIVE"
                                        ? "border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14] shadow-[0_0_8px_#39FF14]"
                                        : "border-[#FF3131] bg-[#FF3131]/10 text-[#FF3131] shadow-[0_0_8px_#FF3131]"
                                }`}
                                >
                                {video.status}
                                </span>
                            </td>

                    <td className="px-6 py-4 text-center text-white">
                      {video.display_order}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3">
                        <Link
                          href={`/controlpanel/entertainment/offering/performers/${performerId}/videos/${video.id}`}
                          className="rounded-lg border border-[#39FF14] bg-[#39FF14]/10 p-2 text-[#39FF14] shadow-[0_0_8px_#39FF14] transition hover:bg-[#39FF14]/20"
                        >
                          <Eye size={18} />
                        </Link>

                        <Link
                          href={`/controlpanel/entertainment/offering/performers/${performerId}/videos/${video.id}/edit`}
                          className="rounded-lg border border-[#00E5FF] bg-[#00E5FF]/10 p-2 text-[#00E5FF] shadow-[0_0_8px_#00E5FF] transition hover:bg-[#00E5FF]/20"
                        >
                          <Edit size={18} />
                        </Link>

                        <button onClick={() => handleDelete(video.id)}
                          className="rounded-lg border border-[#FF3131] bg-[#FF3131]/10 p-2 text-[#FF3131] shadow-[0_0_8px_#FF3131] transition hover:bg-[#FF3131]/20"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;