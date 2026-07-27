import { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../lib/db";
import {
  Comment,
  CommentStatus,
  CreateCommentType,
  UpdateCommentType,
} from "../types/commentsType";
import { PoolConnection } from "mysql2/promise";

export async function createCommentModel(
  comment: CreateCommentType,
  connection?: PoolConnection,
) {
  try {
    const executor = connection ?? db;

    const [result] = await executor.query<ResultSetHeader>(
      `
      INSERT INTO comments (
        case_study_id,
        parent_comment_id,
        name,
        email,
        website,
        comment,
        status,
        created_by
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        comment.case_study_id,
        comment.parent_comment_id,
        comment.name,
        comment.email,
        comment.website,
        comment.comment,
        comment.status,
        comment.created_by,
      ],
    );

    return result;
  } catch (error) {
    console.error("Create Comment Model Error:", error);
    throw error;
  }
}

export async function updateCommentModel(data: UpdateCommentType) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      `
        UPDATE comments
            SET
                comment = ?,
                updated_by = ?,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `,
      [data.comment, data.updated_by, data.id],
    );
    return result;
  } catch (error) {
    console.error("Update Comment Model Error:", error);
    throw error;
  }
}

export async function updateCommentStatusModel(
  id: number,
  status: CommentStatus,
  approved_by: number,
  connection?: PoolConnection,
) {
  try {
    const executor = connection ?? db;

    const [result] = await executor.query<ResultSetHeader>(
      `
      UPDATE comments
      SET
        status = ?,
        approved_by = ?,
        approved_at = CURRENT_TIMESTAMP,
        updated_by = ?,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
      `,
      [status, approved_by, approved_by, id],
    );

    return result;
  } catch (error) {
    console.error("Update Comment Status Model Error:", error);
    throw error;
  }
}

type commentsRow = Comment & RowDataPacket;
export async function getAllCommentModel() {
  try {
    const [result] = await db.query<commentsRow[]>(
      `
        SELECT * FROM comments
        ORDER BY created_at DESC;
        `,
    );
    return result;
  } catch (error) {
    console.error("Get All Comment Model Error:", error);
    throw error;
  }
}

export async function getSingleCommentModel(id: number) {
  try {
    const [result] = await db.query<commentsRow[]>(
      `
            SELECT * FROM comments WHERE id=?
        `,
      [id],
    );
    return result[0] ?? null;
  } catch (error) {
    console.error("Get Single Comment Model Error:", error);
    throw error;
  }
}

export async function getCommentsByCaseStudyModel(case_study_id: number) {
  try {
    const [result] = await db.query<commentsRow[]>(
      `
        SELECT * FROM comments
        WHERE case_study_id = ?
            AND status = 'APPROVED'
        ORDER BY created_at ASC
        `,
      [case_study_id],
    );
    return result;
  } catch (error) {
    console.error("Get Comment by Case Study Model Error:", error);
    throw error;
  }
}
