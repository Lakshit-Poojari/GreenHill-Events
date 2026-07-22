import { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../lib/db";
import {
  CreateOfferingVideo,
  OfferingVideo,
  UpdateOfferingVideo,
} from "../types/offeringVideoType";

export async function createOfferingVideoModel(video: CreateOfferingVideo) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      `INSERT INTO offering_videos
            (
                offering_id,
                youtube_url,
                display_order,
                status,
                created_by,
                updated_by
            )
            VALUES (?, ?, ?, ?, ?, ?)`,
      [
        video.offering_id,
        video.youtube_url,
        video.display_order,
        video.status,
        video.created_by,
        video.updated_by ?? null,
      ],
    );

    return result;
  } catch (error) {
    console.error("Create Offering Video Model Error:", error);
    throw error;
  }
}

export async function updateOfferingVideoModel( id: number, video: UpdateOfferingVideo,) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      `
            UPDATE offering_videos SET offering_id = ?, youtube_url = ?, display_order = ?, updated_by = ?
            WHERE id = ?`,
      [
        video.offering_id,
        video.youtube_url,
        video.display_order,
        video.updated_by,
        id,
      ],
    );
    return result;
  } catch (error) {
    console.error("Update Offering Video Model Error:", error);
    throw error;
  }
}

type VideoRow = OfferingVideo & RowDataPacket;

export async function getAllOfferingVideoModel() {
  try {
    const [result] = await db.query<VideoRow[]>(
      `
            SELECT
        ov.id,
        ov.offering_id,
        o.performer_name,
        ov.youtube_url,
        ov.display_order,
        ov.status,
        ov.created_at,
        ov.updated_at,
        uc.full_name AS created_by_name,
        uu.full_name AS updated_by_name
    FROM offering_videos ov
    INNER JOIN offerings o
        ON ov.offering_id = o.id
    INNER JOIN users uc
        ON ov.created_by = uc.id
    LEFT JOIN users uu
        ON ov.updated_by = uu.id
    ORDER BY
        o.performer_name ASC,
        ov.display_order ASC
            `,
    );

    return result;
  } catch (error) {
    console.error("Get All Offering Video Model Error:", error);
    throw error;
  }
}

export async function getSingleOfferingVideoModel(id: number) {
  try {
    const [result] = await db.query<VideoRow[]>(
      `
    SELECT
        ov.id,
        ov.offering_id,
        o.performer_name,
        ov.youtube_url,
        ov.display_order,
        ov.status,
        ov.created_at,
        ov.updated_at,
        uc.full_name AS created_by_name,
        uu.full_name AS updated_by_name
    FROM offering_videos ov
    INNER JOIN offerings o
        ON ov.offering_id = o.id
    INNER JOIN users uc
        ON ov.created_by = uc.id
    LEFT JOIN users uu
        ON ov.updated_by = uu.id
    WHERE ov.id = ?
    `,
      [id],
    );

    return result[0];
  } catch (error) {
    console.error("Get Single Offering Video Model Error:", error);
    throw error;
  }
}

export async function deleteOfferingVideoModel(id: number) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      `DELETE FROM offering_videos WHERE id=?`,
      [id],
    );
    return result;
  } catch (error) {
    console.error("Delete Offering Video Model Error:", error);
    throw error;
  }
}
