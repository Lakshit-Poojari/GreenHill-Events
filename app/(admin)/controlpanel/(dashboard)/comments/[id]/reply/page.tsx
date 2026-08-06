"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageSquareReply } from "lucide-react";

interface Comment {
  id: number;
  case_study_id: number;
  name: string | null;
  email: string | null;
  comment: string;
}

const Page = () => {
  const { id } = useParams();
  const router = useRouter();

  const [comment, setComment] = useState<Comment | null>(null);
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

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
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!reply.trim() || !comment) return;

    try {
      setSubmitting(true);

      const res = await fetch("/api/comment/reply", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          case_study_id: comment.case_study_id,
          parent_comment_id: comment.id,
          comment: reply,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Reply posted successfully.");
        router.push(`/controlpanel/comments/${comment.id}`);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setSubmitting(false);
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

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between rounded-xl border border-gray-700 bg-[#181616] p-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Reply to Comment</h1>
          <p className="mt-2 text-gray-400">Write an official admin reply.</p>
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
        <h2 className="mb-4 text-lg font-semibold text-[#C9AC8C]">
          Original Comment
        </h2>

        <div className="rounded-lg border border-gray-700 bg-[#202020] p-4">
          <p className="font-semibold text-white">
            {comment.name ?? "Visitor"}
          </p>

          {comment.email && (
            <p className="mb-3 text-sm text-gray-400">{comment.email}</p>
          )}

          <p className="text-gray-200">{comment.comment}</p>
        </div>
      </div>

      <form
        onSubmit={handleReply}
        className="rounded-xl border border-gray-700 bg-[#181616] p-8"
      >
        <label className="mb-3 block text-lg font-semibold text-[#C9AC8C]">
          Admin Reply
        </label>

        <textarea
          rows={8}
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Write your reply..."
          className="w-full rounded-lg border border-gray-700 bg-[#202020] p-4 text-white outline-none focus:border-[#C9AC8C]"
        />

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            disabled={submitting}
            className="flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-6 py-3 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <MessageSquareReply size={18} />
            {submitting ? "Posting..." : "Post Reply"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
