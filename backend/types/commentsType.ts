export type CommentStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface CommentType {
  id: number;
  case_study_id: number;
  parent_comment_id: number | null;

  name: string;
  email: string;
  website: string | null;
  comment: string;

  status: CommentStatus;

  created_at: string;
  updated_at: string;

  created_by: number | null;
  updated_by: number | null;

  approved_by: number | null;
  approved_at: string | null;

  // Joined fields
  case_study_title?: string;
  case_study_slug?: string;

  created_by_name?: string;
  updated_by_name?: string;
  approved_by_name?: string;
}

export interface CreateCommentType {
  case_study_id: number;
  parent_comment_id?: number | null;

  name: string;
  email: string;
  website?: string;
  comment: string;

  status: CommentStatus;
  created_by?: number | null;
}

export interface UpdateCommentType {
  id: number;
  comment: string;
  updated_by: number;
}

export interface UpdateCommentStatusType {
  status: CommentStatus;
  approved_by: number;
}

export interface CommentWithReplies extends CommentType {
  replies: CommentWithReplies[];
}
