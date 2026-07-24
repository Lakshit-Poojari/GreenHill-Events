import { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../lib/db";
import {
  CreateOffering,
  Offering,
  UpdateOffering,
} from "../types/offeringType";

export async function createOfferingModel(offering: CreateOffering) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      `INSERT INTO offerings (
                offering_category_id, performer_name, slug, image_path, small_description, large_description, status, created_by
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        offering.offering_category_id,
        offering.performer_name,
        offering.slug,
        offering.image_path,
        offering.small_description,
        offering.large_description,
        offering.status,
        offering.created_by,
      ],
    );
    return result;
  } catch (error) {
    console.error("Error in Create Offering Model", error);
    throw error;
  }
}

export async function updateOfferingModel(
  id: number,
  offering: UpdateOffering,
  updatedBy: number,
) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      `UPDATE offerings SET 
                offering_category_id = ?, performer_name = ?, slug = ?, image_path = ?,
                small_description = ?,large_description = ?, status = ?, updated_by = ?
            WHERE id = ?`,
      [
        offering.offering_category_id,
        offering.performer_name,
        offering.slug,
        offering.image_path,
        offering.small_description,
        offering.large_description,
        offering.status,
        updatedBy,
        id,
      ],
    );
    return result;
  } catch (error) {
    console.error("Error in update Offering Model", error);
    throw error;
  }
}

type OfferingRow = Offering & RowDataPacket;
export async function getAllOfferingModel() {
  try {
    const [result] = await db.query<OfferingRow[]>(`
      SELECT
        o.id,
        o.offering_category_id,
        oc.name AS offering_category_name,
        o.performer_name,
        o.slug,
        o.image_path,
        o.small_description,
        o.large_description,
        o.status,
        cu.full_name AS created_by,
        o.created_at,
        uu.full_name AS updated_by,
        o.updated_at
      FROM offerings o
      LEFT JOIN offering_categories oc
        ON o.offering_category_id = oc.id
      LEFT JOIN users cu
        ON o.created_by = cu.id
      LEFT JOIN users uu
        ON o.updated_by = uu.id
    `);
    return result;
  } catch (error) {
    console.error("Error in get all Offering Model", error);
    throw error;
  }
}

export async function getSingleOfferingModel(id: number) {
  try {
    const [result] = await db.query<RowDataPacket[]>(
      `
        SELECT
          o.id,
          o.offering_category_id,
          oc.name AS offering_category_name,
          o.performer_name,
          o.slug,
          o.image_path,
          o.small_description,
          o.large_description,
          o.status,
          cu.full_name AS created_by,
          o.created_at,
          uu.full_name AS updated_by,
          o.updated_at
        FROM offerings o
        LEFT JOIN offering_categories oc
          ON o.offering_category_id = oc.id
        LEFT JOIN users cu
          ON o.created_by = cu.id
        LEFT JOIN users uu
          ON o.updated_by = uu.id
        WHERE o.id = ?
      `,
      [id],
    );
    return result;
  } catch (error) {
    console.error("Error in get singleOffering Model", error);
    throw error;
  }
}

export async function deleteOfferingModel(id: number) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      `DELETE FROM offerings WHERE id=?`,
      [id],
    );
    return result;
  } catch (error) {
    console.error("Error in delete Offering Model", error);
    throw error;
  }
}

export async function getOfferingBySlugModel(slug: string) {
  try {
    const [rows] = await db.query<(Offering & RowDataPacket)[]>(
      `SELECT *
             FROM offerings
             WHERE slug = ?
             LIMIT 1`,
      [slug],
    );

    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error in get Offering by Slug Model", error);
    throw error;
  }
}

export async function updateOfferingStatusModel(id: number, status: string) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      "UPDATE offerings SET status = ? WHERE id = ?",
      [status, id],
    );

    return result;
  } catch (error) {
    console.error("Update Offering Status Model Error:", error);
    throw error;
  }
}
