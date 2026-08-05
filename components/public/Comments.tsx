"use client";

import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";

interface Comment {
  id: number;
  parent_comment_id: number | null;
  name: string;
  comment: string;
  created_at: string;
  replies?: Comment[];
}

interface Props {
  caseStudyId: number;
}

interface CommentItemProps {
  comment: Comment;
  caseStudyId: number;
  replyingTo: number | null;
  setReplyingTo: React.Dispatch<React.SetStateAction<number | null>>;
  refreshComments: () => void;
  depth?: number;
}

// Turns a flat list (each item carrying parent_comment_id) into a nested
// tree of comments with a `replies` array, sorted oldest -> newest.
function buildCommentTree(flat: Comment[]): Comment[] {
  const byId = new Map<number, Comment>();
  const roots: Comment[] = [];

  // Clone so we don't mutate incoming data, and reset replies.
  flat.forEach((c) => byId.set(c.id, { ...c, replies: [] }));

  byId.forEach((comment) => {
    if (
      comment.parent_comment_id != null &&
      byId.has(comment.parent_comment_id)
    ) {
      byId.get(comment.parent_comment_id)!.replies!.push(comment);
    } else {
      roots.push(comment);
    }
  });

  const byDate = (a: Comment, b: Comment) =>
    new Date(a.created_at).getTime() - new Date(b.created_at).getTime();

  const sortTree = (nodes: Comment[]) => {
    nodes.sort(byDate);
    nodes.forEach((n) => n.replies && sortTree(n.replies));
  };
  sortTree(roots);

  return roots;
}

export default function Comments({ caseStudyId }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comment/case-study/${caseStudyId}`);
      const result = await res.json();

      if (res.ok) {
        const flat: Comment[] = result.caseStudyComment || [];
        setComments(buildCommentTree(flat));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [caseStudyId]);

  if (loading) {
    return <p>Loading comments...</p>;
  }

  // Count every comment, including nested replies, for the header.
  const countAll = (nodes: Comment[]): number =>
    nodes.reduce(
      (sum, n) => sum + 1 + (n.replies ? countAll(n.replies) : 0),
      0,
    );
  const total = countAll(comments);

  return (
    <div className="mt-12">
      <h2 className="mb-10 font-playfair text-4xl md:text-5xl text-[#C9AC8C] tracking-wide">
        {total} Comment{total !== 1 ? "s" : ""}
      </h2>

      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          caseStudyId={caseStudyId}
          replyingTo={replyingTo}
          setReplyingTo={setReplyingTo}
          refreshComments={fetchComments}
          depth={0}
        />
      ))}
    </div>
  );
}

const INDENT_STEP = 70;
const MAX_DEPTH_INDENT = 4;

function CommentItem({
  comment,
  caseStudyId,
  replyingTo,
  setReplyingTo,
  refreshComments,
  depth = 0,
}: CommentItemProps) {
  const indent = Math.min(depth, MAX_DEPTH_INDENT) * INDENT_STEP;
  const avatarSize = depth === 0 ? "h-14 w-14" : "h-10 w-10";

  return (
    <div style={{ marginLeft: indent }}>
      <div className="border-b border-[#C9AC8C] border-opacity-30 py-8">
        <div className="flex items-start justify-between gap-6">
          <div className="flex flex-1 gap-5">
            <div
              className={`${avatarSize} shrink-0 overflow-hidden rounded-full border border-[#57514C] bg-linear-to-br shadow-md flex items-center justify-center`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-3/5 w-3/5 text-[#3D3935]"
              >
                <circle cx="12" cy="8" r="4" fill="currentColor" />
                <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" fill="currentColor" />
              </svg>
            </div>

            <div className="flex-1">
              <h3 className="flex items-center gap-2 text-lg font-medium uppercase tracking-[3px] text-[#C9AC8C]">
                {comment.name?.trim() || "GreenHill"}

                {!comment.name?.trim() && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4 text-[#C9AC8C]"
                    aria-label="GreenHill"
                  >
                    <path
                      d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z"
                      fill="currentColor"
                    />
                    <path
                      d="m9 12 2 2 4-4"
                      stroke="#1a1613"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[2px] text-[#8A8179]">
                {new Date(comment.created_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

              <div className="mt-5 leading-8 text-gray-200">
                {comment.comment}
              </div>
            </div>
          </div>

          <button
            onClick={() =>
              setReplyingTo(replyingTo === comment.id ? null : comment.id)
            }
            className="ml-6 shrink-0 flex items-center gap-2 rounded-full border border-[#C9AC8C] bg-transparent px-6 py-2.5 text-sm font-medium uppercase tracking-[2px] text-[#C9AC8C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9AC8C] hover:text-black hover:shadow-lg hover:shadow-[#C9AC8C]/20 active:scale-95"
          >
            Reply
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </button>
        </div>

        {replyingTo === comment.id && (
          <div className="mt-8 rounded-2xl border border-[#3D3935] bg-[#242020] p-6">
            <CommentForm
              caseStudyId={caseStudyId}
              parentCommentId={comment.id}
              onSuccess={() => {
                setReplyingTo(null);
                refreshComments();
              }}
            />
          </div>
        )}
      </div>

      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-2">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              caseStudyId={caseStudyId}
              replyingTo={replyingTo}
              setReplyingTo={setReplyingTo}
              refreshComments={refreshComments}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
