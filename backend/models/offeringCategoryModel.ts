import { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../lib/db";
import {
  createOfferingCategory,
  OfferingCategory,
  updateOfferingCategory,
} from "../types/offeringCategoryType";

export async function createOfferingCategoryModel(
  category: createOfferingCategory,
  createdby: number,
) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      `INSERT INTO offering_categories (category_id, name, slug, display_order, status, created_by) 
            VALUES ( ?, ?, ?, ?, ?, ?)`,
      [
        category.category_id,
        category.name,
        category.slug,
        category.display_order,
        category.status,
        createdby,
      ],
    );
    return result;
  } catch (error) {
    console.error("Error in Create Offering Category Model", error);
    throw error;
  }
}

type OfferingCategoryRow = OfferingCategory & RowDataPacket;
export async function getAllOfferingCategoryModel() {
  try {
    const [result] = await db.query<OfferingCategoryRow[]>(
      `
        SELECT
          oc.id,
          oc.category_id,
          c.category_name,
          oc.name,
          oc.slug,
          oc.display_order,
          oc.status,
          cu.full_name AS created_by,
          oc.created_at,
          uu.full_name AS updated_by,
          oc.updated_at
      FROM offering_categories oc
      LEFT JOIN categories c ON oc.category_id = c.id
      LEFT JOIN users cu ON oc.created_by = cu.id
      LEFT JOIN users uu ON oc.updated_by = uu.id;
    `,
    );
    return result;
  } catch (error) {
    console.error("Error in Get all Offering Category Model", error);
    throw error;
  }
}

export async function getSIngleOfferingCategoryModel(id: number) {
  try {
    const [result] = await db.query<RowDataPacket[]>(
      `
        SELECT
            oc.id,
            oc.category_id,
            c.category_name,
            oc.name,
            oc.slug,
            oc.display_order,
            oc.status,
            cu.full_name AS created_by,
            oc.created_at,
            uu.full_name AS updated_by,
            oc.updated_at
        FROM offering_categories oc
        LEFT JOIN categories c ON oc.category_id = c.id
        LEFT JOIN users cu ON oc.created_by = cu.id
        LEFT JOIN users uu ON oc.updated_by = uu.id
        WHERE oc.id = ?
      `,
      [id],
    );
    return result;
  } catch (error) {
    console.error("Error in Get Single Offering Category Model", error);
    throw error;
  }
}

export async function UpdateOfferingCategoryModel(
  id: number,
  category: updateOfferingCategory,
  updatedBy: number,
) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      `UPDATE offering_categories SET category_id = ?, name = ?, slug = ?, display_order = ?, status = ?, updated_by = ?
             WHERE id = ?`,
      [
        category.category_id,
        category.name,
        category.slug,
        category.display_order,
        category.status,
        updatedBy,
        id,
      ],
    );
    return result;
  } catch (error) {
    console.error("Error in Update Offering Category Model", error);
    throw error;
  }
}

export async function deleteOfferingCategoryModel(id: number) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      "DELETE FROM offering_categories WHERE id=?",
      [id],
    );
    return result;
  } catch (error) {
    console.error("Error in Delete Offering Category Model", error);
    throw error;
  }
}

export async function getOfferingCategoryBySlugModel(
  slug: string,
): Promise<OfferingCategory | null> {
  try {
    const [rows] = await db.query<(OfferingCategory & RowDataPacket)[]>(
      `SELECT *
             FROM offering_categories
             WHERE slug = ?
             LIMIT 1`,
      [slug],
    );

    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error in get Category By Slug Model:", error);
    throw error;
  }
}

export async function updateOfferingCategoryStatusModel(
  id: number,
  status: string,
) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      "UPDATE offering_categories SET status = ? WHERE id = ?",
      [status, id],
    );

    return result;
  } catch (error) {
    console.error("Update offering categories Status Model Error:", error);
    throw error;
  }
}
