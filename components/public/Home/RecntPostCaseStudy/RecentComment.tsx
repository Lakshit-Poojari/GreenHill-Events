import { CommentType } from "@/backend/types/commentsType";
import Link from "next/link";

interface RecentCommentProps {
  recentComments: CommentType[];
}

export default function RecentComment({ recentComments }: RecentCommentProps) {
  return (
    <div className="mt-20">
      <h2 className="font-playfair text-4xl text-[#C9AC8C] lg:text-5xl">
        Recent Comments
      </h2>

      <ul className="mt-10 space-y-5">
        {recentComments.slice(0, 5).map((comment) => (
          <li
            key={comment.id}
            className="group flex gap-4 rounded-2xl border border-[#3D3935] bg-[#2A2626] p-5 transition-all duration-300 hover:border-[#C9AC8C]/40 hover:bg-[#302B2B]"
          >
            <span className="mt-1 text-lg text-[#C9AC8C]">✦</span>

            <div className="leading-7">
              <span className="font-medium uppercase tracking-wider text-[#C9AC8C]">
                {comment.name?.trim() || "ADMIN"}
              </span>

              <span className="mx-1 text-[#8A8179]"> on </span>

              <Link
                href={`/${comment.case_study_slug}#comment-${comment.id}`}
                className="text-white transition-colors duration-300 group-hover:text-[#C9AC8C]"
              >
                {comment.case_study_title}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
