import { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../lib/db";
import {
  CommentType ,
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

type commentsRow = CommentType  & RowDataPacket;
export async function getAllCommentModel() {
  try {
    const [result] = await db.query<commentsRow[]>(
      `
        SELECT
        c.*,
        cs.title AS case_study_title,
        cs.slug AS case_study_slug,
        creator.full_name  AS created_by_name,
        updater.full_name  AS updated_by_name,
        approver.full_name  AS approved_by_name
      FROM comments c
      INNER JOIN case_study cs
        ON c.case_study_id = cs.id
      LEFT JOIN users creator
        ON c.created_by = creator.id
      LEFT JOIN users updater
        ON c.updated_by = updater.id
      LEFT JOIN users approver
        ON c.approved_by = approver.id
      ORDER BY c.created_at DESC
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
            SELECT
        c.*,
        cs.title AS case_study_title,
        cs.slug AS case_study_slug,
        creator.full_name  AS created_by_name,
        updater.full_name  AS updated_by_name,
        approver.full_name  AS approved_by_name
      FROM comments c
      INNER JOIN case_study cs
        ON c.case_study_id = cs.id
      LEFT JOIN users creator
        ON c.created_by = creator.id
      LEFT JOIN users updater
        ON c.updated_by = updater.id
      LEFT JOIN users approver
        ON c.approved_by = approver.id
      WHERE c.id = ?
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
        SELECT
        c.*,
        creator.full_name  AS created_by_name
      FROM comments c
      LEFT JOIN users creator
        ON c.created_by = creator.id
      WHERE c.case_study_id = ?
        AND c.status = 'APPROVED'
      ORDER BY c.created_at DESC
        `,
      [case_study_id],
    );
    return result;
  } catch (error) {
    console.error("Get Comment by Case Study Model Error:", error);
    throw error;
  }
}

export async function getContactCountModel() {
  try {
    const [[result]] = await db.query<RowDataPacket[]>(
      `
      SELECT COUNT(*) AS total
      FROM contacts
      `
    );

    return result.total;
  } catch (error) {
    console.error("Get Contact Count Model Error:", error);
    throw error;
  }
}