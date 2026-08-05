import { CommentType } from "@/backend/types/commentsType";
import Link from "next/link";

interface RecentCommentProps {
  recentComments: CommentType[];
}

export default function RecentComment({ recentComments }: RecentCommentProps) {
  return (
    <div className="mt-20">
      <h2 className="font-playfair text-5xl lg:text-6xl">Recent Comments</h2>

      <ul className="mt-8 space-y-6">
        {recentComments.slice(0, 5).map((comment) => (
          <li key={comment.id} className="flex gap-4">
            <span className="text-[#7C7670]">—</span>

            <div className="leading-8">
              <span className="uppercase text-[#C9AC8C]">
                {comment.name?.trim() || "ADMIN"}
              </span>

              <span className="text-white"> on </span>

              <Link
                href={`/${comment.case_study_slug}#comment-${comment.id}`}
                className="transition hover:text-[#C9AC8C]"
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
