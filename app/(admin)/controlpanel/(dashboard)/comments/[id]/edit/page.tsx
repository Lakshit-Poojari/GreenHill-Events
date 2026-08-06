"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

const statusOptions = ["APPROVED", "PENDING", "REJECTED"] as const;

type Status = (typeof statusOptions)[number];

interface Comment {
  id: number;
  case_study_id: number;
  parent_comment_id: number | null;
  case_study_title: string;
  comment: string;
  status: Status;
  created_by: number | null;
}

export default function Page() {
  const { id } = useParams();
  const router = useRouter();

  const [comment, setComment] = useState<Comment | null>(null);
  const [loading, setLoading] = useState(true);
  const [reply, setReply] = useState("");
  const [status, setStatus] = useState<Status>("PENDING");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (id) {
      fetchComment();
    }
  }, [id]);

  const fetchComment = async () => {
    try {
      const res = await fetch(`/api/comment/${id}`, {
        credentials: "include",
      });

      const data = await res.json();

      if (data.success) {
        setComment(data.comment);
        setReply(data.comment.comment);
        setStatus(data.comment.status);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!comment) return;

    try {
      setSaving(true);

      const res = await fetch(`/api/comment/${comment.id}/status`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Status updated successfully.");
        router.push(`/controlpanel/comments/${comment.id}`);
      } else {
        alert(data.message);
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="py-20 text-center text-white">Loading...</div>;
  }

  if (!comment) {
    return (
      <div className="py-20 text-center text-red-500">Comment not found.</div>
    );
  }

  const isVisitorComment = comment.created_by === null;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex items-center justify-between rounded-xl border border-gray-700 bg-[#181616] p-8">
        <div>
          <h1 className="text-3xl font-bold text-white">
            {isVisitorComment ? "Edit Comment" : "Edit Reply"}
          </h1>

          <p className="mt-2 text-gray-400">
            {isVisitorComment
              ? "Update the comment status."
              : "Update the reply and status."}
          </p>
        </div>

        <Link
          href={`/controlpanel/comments/${comment.id}`}
          className="flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-gray-300 hover:bg-gray-700"
        >
          <ArrowLeft size={18} />
          Back
        </Link>
      </div>

      <div className="rounded-xl border border-gray-700 bg-[#181616] p-8">
        <label className="mb-2 block text-sm text-gray-400">
          {isVisitorComment ? "Comment" : "Reply"}
        </label>

        <textarea
          rows={8}
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          readOnly={isVisitorComment}
          className={`w-full rounded-lg border p-4 ${
            isVisitorComment
              ? "cursor-not-allowed border-gray-700 bg-[#2A2A2A] text-gray-400"
              : "border-gray-700 bg-[#202020] text-white"
          }`}
        />

        <div className="mt-6">
          <label className="mb-2 block text-sm text-gray-400">Status</label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Status)}
            className="w-full rounded-lg border border-gray-700 bg-[#202020] px-4 py-3 text-white"
          >
            {statusOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-6 py-3 font-semibold text-black hover:opacity-90"
          >
            <Save size={18} />
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </form>
  );
}
