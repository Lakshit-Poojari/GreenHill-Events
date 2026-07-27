export type CommentStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface Comment {
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
}

export interface CreateCommentType {
  case_study_id: number;
  parent_comment_id?: number | null;

  name: string;
  email: string;
  website?: string;
  comment: string;
}

export interface UpdateCommentType {
  parent_comment_id?: number | null;

  name?: string;
  email?: string;
  website?: string;
  comment?: string;

  status?: CommentStatus;

  updated_by?: number;
}

export interface UpdateCommentStatusType {
  status: CommentStatus;
  approved_by: number;
}

export interface CommentWithReplies extends Comment {
  replies: CommentWithReplies[];
}