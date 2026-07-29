"use client";

import { Edit, Eye } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Comment {
  id: number;
  case_study_id: number;
  parent_comment_id: number | null;
  name: string | null;
  email: string | null;
  website: string | null;
  comment: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  created_at: string;
  updated_at: string;
  created_by: number | null;
  updated_by: number | null;
  approved_by: number | null;
  approved_at: string | null;
  case_study_title: string;
  created_by_name: string | null;
  updated_by_name: string | null;
  approved_by_name: string | null;
}

const statusColor = {
  APPROVED:
    "border border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14] shadow-[0_0_8px_#39FF14]",
  PENDING:
    "border border-[#FFD60A] bg-[#FFD60A]/10 text-[#FFD60A] shadow-[0_0_8px_#FFD60A]",
  REJECTED:
    "border border-[#FF3131] bg-[#FF3131]/10 text-[#FF3131] shadow-[0_0_8px_#FF3131]",
};

export default function CommentsPage() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<
    "ALL" | "APPROVED" | "PENDING" | "REJECTED"
  >("ALL");
  const [typeFilter, setTypeFilter] = useState<
    "ALL" | "VISITOR_COMMENT" | "VISITOR_REPLY" | "ADMIN_REPLY"
  >("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchComments();
  }, []);

  const filteredComments = comments.filter((comment) => {
    const statusMatch =
      statusFilter === "ALL" || comment.status === statusFilter;

    const typeMatch =
      typeFilter === "ALL" ||
      (typeFilter === "VISITOR_COMMENT" &&
        comment.created_by === null &&
        comment.parent_comment_id === null) ||
      (typeFilter === "VISITOR_REPLY" &&
        comment.created_by === null &&
        comment.parent_comment_id !== null) ||
      (typeFilter === "ADMIN_REPLY" && comment.created_by !== null);

    const searchMatch = comment.case_study_title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return statusMatch && typeMatch && searchMatch;
  });
  const fetchComments = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/comment", {
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        setComments(data.comments);
      } else {
        setComments([]);
      }
    } catch (error) {
      console.error("Fetch Comments Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20 text-white">
        Loading comments...
      </div>
    );
  }
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-white">Comments</h1>

        <p className="mt-2 text-[#C9AC8C]">Manage and moderate blog comments.</p>
      </div>

      <div className="mb-6 flex flex-wrap justify-end gap-4">
        <input
          type="text"
          placeholder="Search by post title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-gray-700 bg-[#202020] px-4 py-2 text-white placeholder-gray-500 outline-none focus:border-[#C9AC8C] md:w-80"
        />
        <select
          value={typeFilter}
          onChange={(e) =>
            setTypeFilter(
              e.target.value as
                | "ALL"
                | "VISITOR_COMMENT"
                | "VISITOR_REPLY"
                | "ADMIN_REPLY",
            )
          }
          className="rounded-lg border border-gray-700 bg-[#202020] px-4 py-2 text-white outline-none focus:border-[#C9AC8C]"
        >
          <option value="ALL">All Types</option>
          <option value="VISITOR_COMMENT">Visitor Comments</option>
          <option value="VISITOR_REPLY">Visitor Replies</option>
          <option value="ADMIN_REPLY">Admin Replies</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(
              e.target.value as "ALL" | "APPROVED" | "PENDING" | "REJECTED",
            )
          }
          className="rounded-lg border border-gray-700 bg-[#202020] px-4 py-2 text-white outline-none focus:border-[#C9AC8C]"
        >
          <option value="ALL">All Status</option>
          <option value="APPROVED">Approved</option>
          <option value="PENDING">Pending</option>
          <option value="REJECTED">Rejected</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-700 bg-[#181616] shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b border-gray-700 bg-[#202020]">
              <tr className="text-left text-sm uppercase tracking-wider text-gray-400">
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Post</th>
                <th className="px-6 py-4">Comment</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredComments.map((comment) => (
                <tr
                  key={comment.id}
                  className="border-b border-gray-700 hover:bg-[#202020]"
                >
                  <td className="px-6 py-5">
                    <div className="font-medium text-white">
                      {comment.name ?? comment.created_by_name ?? "Admin"}
                    </div>

                    <div className="text-sm text-gray-400">
                      {comment.email ?? "🛡️ Admin"}
                    </div>
                  </td>

                  <td className="px-6 py-5 text-gray-300">
                    {comment.case_study_title}
                  </td>

                  <td className="max-w-sm px-6 py-5 text-gray-300">
                    <p className="line-clamp-2">{comment.comment}</p>
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase ${statusColor[comment.status]}`}
                    >
                      {comment.status}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-gray-400">
                    {new Date(comment.created_at).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-2">
                      <Link
                        href={`/controlpanel/comments/${comment.id}`}
                        className="rounded-lg border border-[#A855F7] bg-[#A855F7]/10 p-2 text-[#A855F7] 
                            shadow-[0_0_8px_#A855F7] transition-all duration-300 hover:scale-105 hover:bg-[#A855F7]/20 
                            hover:shadow-[0_0_12px_#A855F7]"
                      >
                        <Eye size={18} />
                      </Link>

                      <Link
                        href={`/controlpanel/comments/${comment.id}/edit`}
                        className="rounded-lg border border-[#00BFFF] bg-[#00BFFF]/10 p-2 text-[#00BFFF] 
                            shadow-[0_0_8px_#00BFFF] transition-all duration-300 hover:bg-[#00BFFF]/20 
                            hover:shadow-[0_0_12px_#00BFFF]"
                      >
                        <Edit size={18} />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredComments.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-gray-400">
                    No comments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
