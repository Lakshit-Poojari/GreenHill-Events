"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Pencil } from "lucide-react";

interface Comment {
  id: number;
  case_study_id: number;
  parent_comment_id: number | null;
  name: string | null;
  email: string | null;
  website: string | null;
  comment: string;
  status: "APPROVED" | "PENDING" | "REJECTED";
  created_at: string;
  updated_at: string;
  approved_at: string | null;
  case_study_title: string;
  approved_by_name: string | null;
  created_by_name: string | null;
}

const statusColor = {
  APPROVED:
    "border border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14] shadow-[0_0_8px_#39FF14]",
  PENDING:
    "border border-[#FFD60A] bg-[#FFD60A]/10 text-[#FFD60A] shadow-[0_0_8px_#FFD60A]",
  REJECTED:
    "border border-[#FF3131] bg-[#FF3131]/10 text-[#FF3131] shadow-[0_0_8px_#FF3131]",
};

const page = () => {
  const { id } = useParams();

  const [comment, setComment] = useState<Comment | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchComment();
    }
  }, [id]);

  const fetchComment = async () => {
    try {
      setLoading(true);

      const response = await fetch(`/api/comment/${id}`, {
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        setComment(data.comment);
      }
    } catch (error) {
      console.error("Fetch Comment Error:", error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="flex justify-center py-20 text-white">Loading...</div>
    );
  }
  if (!comment) {
    return (
      <div className="flex justify-center py-20 text-red-500">
        Comment not found.
      </div>
    );
  }

  const isAdminComment = comment.created_by_name !== null;
  const isVisitorComment = comment.created_by_name === null;
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between rounded-xl border border-gray-700 bg-[#181616] p-8 shadow-lg">
        <div>
          <h1 className="text-3xl font-bold text-white">View Comment</h1>
          <p className="mt-2 text-gray-400">
            View comment details and moderation information.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href="/controlpanel/comments"
            className="flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-gray-300 transition hover:bg-gray-700"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <Link
            href={`/controlpanel/comments/${comment.id}/edit`}
            className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-4 py-2 font-medium text-black transition hover:opacity-90"
          >
            <Pencil size={18} />
            Edit
          </Link>
        </div>
      </div>

      {/* Details */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-8 shadow-lg">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="mb-1 text-sm text-gray-400">Comment Type</p>
            <span
              className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold shadow-lg ${
                isVisitorComment
                  ? "border-[#3B82F6] bg-[#3B82F6]/10 text-[#3B82F6] shadow-[0_0_8px_#3B82F6]"
                  : "border-[#C9AC8C] bg-[#C9AC8C]/10 text-[#C9AC8C] shadow-[0_0_8px_#C9AC8C]"
              }`}
            >
              {isVisitorComment ? "👤 Visitor Comment" : "🛡️ Admin Reply"}
            </span>
          </div>

          {isVisitorComment ? (
            <>
              <div>
                <p className="mb-1 text-sm text-gray-400">Name</p>
                <p className="text-white">{comment.name ?? "-"}</p>
              </div>

              <div>
                <p className="mb-1 text-sm text-gray-400">Email</p>
                <p className="text-white">{comment.email ?? "-"}</p>
              </div>

              <div>
                <p className="mb-1 text-sm text-gray-400">Website</p>
                <p className="text-white">{comment.website ?? "-"}</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <p className="mb-1 text-sm text-gray-400">Admin</p>
                <p className="text-white">{comment.created_by_name}</p>
              </div>
            </>
          )}

          <div>
            <p className="mb-1 text-sm text-gray-400">Status</p>

            <span className="inline-flex rounded-full border border-[#39FF14] bg-[#39FF14]/10 px-3 py-1 text-sm font-semibold text-[#39FF14] shadow-[0_0_8px_#39FF14]">
              APPROVED
            </span>
          </div>

          <div className="md:col-span-2">
            <p className="mb-1 text-sm text-gray-400">Case Study</p>
            <p className="text-white">{comment.case_study_title}</p>
          </div>

          <div className="md:col-span-2">
            <p className="mb-2 text-sm text-gray-400">Comment</p>

            <div className="rounded-lg border border-gray-700 bg-[#202020] p-4 text-gray-200">
              {comment.comment}
            </div>
          </div>

          <div>
            <p className="mb-1 text-sm text-gray-400">Created At</p>
            <p className="text-white">
              {new Date(comment.created_at).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>

          <div>
            <p className="mb-1 text-sm text-gray-400">Approved By</p>
            <p className="text-white">{comment.approved_by_name ?? "-"}</p>
          </div>

          <div>
            <p className="mb-1 text-sm text-gray-400">Approved At</p>
            <p className="text-white">
              {comment.approved_at
                ? new Date(comment.approved_at).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                : "-"}
            </p>
          </div>

          <div>
            <p className="mb-1 text-sm text-gray-400">Parent Comment</p>
            <p className="text-white">
              {comment.parent_comment_id ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
