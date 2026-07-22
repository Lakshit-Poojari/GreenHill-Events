"use client";

import Link from "next/link";
import { ArrowLeft, Edit } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Performer {
  id: number;
  performer_name: string;
}

interface OfferingVideo {
  id: number;
  offering_id: number;
  performer_name: string;
  youtube_url: string;
  display_order: number;
  status: "ACTIVE" | "INACTIVE";
  created_by_name: string;
  created_at: string;
  updated_by_name: string | null;
  updated_at: string;
}

const Page = () => {
  const params = useParams();

  const performerId = Number(params.id);
  const videoId = Number(params.videoid);

  const [performer, setPerformer] = useState<Performer | null>(null);
  const [video, setVideo] = useState<OfferingVideo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    try {
      const res = await fetch(`/api/offeringVideo/${videoId}`, {
        credentials: "include",
      });

      const data = await res.json();

      if (data.success) {
        setVideo(data.data);
        console.log(data);

        setPerformer({
          id: data.data.offering_id,
          performer_name: data.data.performer_name,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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
      <div className="flex flex-col gap-4 rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg md:flex-row 
        md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">View Offering Video</h1>

          <p className="mt-2 text-gray-400">View video information.</p>
        </div>

        <Link
          href={`/controlpanel/entertainment/offering/performers/${performerId}/videos/${videoId}/edit`}
          className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-5 py-3 font-medium text-black transition 
            hover:bg-[#b89470]"
        >
          <Edit size={18} />
          Edit Video
        </Link>
      </div>

      {/* Details */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-lg space-y-8">
        {/* Performer */}
        <div>
          <p className="text-sm text-gray-400">Performer</p>

          <p className="mt-1 text-lg font-medium text-white">
            {performer?.performer_name}
          </p>
        </div>

        {/* YouTube Preview */}
        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-400">
            Video Preview
          </h3>

          <div className="overflow-hidden rounded-lg border border-gray-700">
            <iframe
              src={video?.youtube_url}
              title="YouTube Video"
              className="aspect-video w-full"
              allowFullScreen
            />
          </div>
        </div>

        {/* YouTube Link */}
        <div>
          <p className="text-sm text-gray-400">YouTube Embed Link</p>

          <a
            href={video?.youtube_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block break-all text-[#C9AC8C] hover:underline"
          >
            {video?.youtube_url}
          </a>
        </div>

        {/* Display Order */}
        <div>
          <p className="text-sm text-gray-400">Display Order</p>

          <p className="mt-1 text-white">{video?.display_order}</p>
        </div>

        {/* Status */}
        <div>
          <p className="text-sm text-gray-400">Status</p>

          <span
            className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
              video?.status === "ACTIVE"
                ? "border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14] shadow-[0_0_8px_#39FF14]"
                : "border-[#FF3131] bg-[#FF3131]/10 text-[#FF3131] shadow-[0_0_8px_#FF3131]"
            }`}
          >
            {video?.status}
          </span>
        </div>

        {/* Audit Information */}
        <div className="rounded-lg border border-gray-700 bg-[#222] p-5">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Audit Information
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-400">Created By</p>

              <p className="mt-1 text-white">{video?.created_by_name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Created At</p>

              <p className="mt-1 text-white">
                {video?.created_at
                  ? new Date(video.created_at).toLocaleString("en-IN")
                  : "-"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Updated By</p>

              <p className="mt-1 text-white">{video?.updated_by_name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Updated At</p>

              <p className="mt-1 text-white">
                {video?.updated_at
                  ? new Date(video.updated_at).toLocaleString("en-IN")
                  : "-"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
