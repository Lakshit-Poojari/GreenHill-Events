import db from "../lib/db";
import { Category, CreateCategoryType, UpdateCategoryType } from "../types/categoryType";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export async function createCategoryModel(category:CreateCategoryType, ) {
    try {
        const [result] = await db.query<ResultSetHeader>(
            `INSERT INTO categories (category_name, menu_name, slug, image, description, long_description, status, created_by)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                category.category_name,
                category.menu_name,
                category.slug,
                category.image,
                category.description,
                category.long_description,
                category.status,
                category.created_by
            ]
        )
        return result
    } catch (error) {
        console.error("Create Catgory Model Error:", error);
        throw error;      
    }
}

type CategoryRow = Category & RowDataPacket;
export async function getAllCategoryModel(){
    try {
        const [result] = await db.query<CategoryRow[]>(`SELECT * FROM categories`)

        return result
    } catch (error) {
        console.error("Get All Catgory Model Error:", error);
        throw error
    }
}

export async function getSingleCategoryModel(id:number){
    try {
        const [row] = await db.query<RowDataPacket[]>(`SELECT * FROM categories WHERE id= ?`,
            [id]
        )
        return row
    } catch (error) {
        console.error("Get Single Catgory Model Error:", error);
        throw error
    }
}


export async function updateCategoryModel(
  id: number,
  category: UpdateCategoryType,
  slug: string
) {
  try {
    let row: ResultSetHeader;

    if (category.image) {
      // Update including image
      const [result] = await db.query<ResultSetHeader>(
        `UPDATE categories
         SET category_name = ?,
             menu_name = ?,
             slug = ?,
             image = ?,
             description = ?,
             long_description = ?,
             status = ?
         WHERE id = ?`,
        [
          category.category_name,
          category.menu_name,
          slug,
          category.image,
          category.description,
          category.long_description,
          category.status,
          id,
        ]
      );

      row = result;
    } else {
      // Keep existing image
      const [result] = await db.query<ResultSetHeader>(
        `UPDATE categories
         SET category_name = ?,
             menu_name = ?,
             slug = ?,
             description = ?,
             long_description = ?,
             status = ?
         WHERE id = ?`,
        [
          category.category_name,
          category.menu_name,
          slug,
          category.description,
          category.long_description,
          category.status,
          id,
        ]
      );

      row = result;
    }

    return row;
  } catch (error) {
    console.error("Update Category Model Error:", error);
    throw error;
  }
}

export async function deleteCategoryModel(id:number){
    try {
        const [row] = await db.query<ResultSetHeader>(
            `DELETE FROM categories WHERE id=?`,[id]
        )
        return row
    } catch (error) {
        console.error("Delete Category Model Error:", error);
        throw error; 
    }
}

export async function getCategoryBySlug(slug:string){
    try {
        const [result] = await db.query<RowDataPacket[]>(`SELECT * FROM categories WHERE slug=?`,[slug])
        return result
    } catch (error) {
        console.error("Get Category Model By Slug Error:",error);
        throw error;
    }
}

export async function updateCategoryStatusModel(id: number, status: string) {
    try {
        const [result] = await db.query<ResultSetHeader>(
            "UPDATE categories SET status = ? WHERE id = ?",
            [status, id]
        );

        return result;
    } catch (error) {
        console.error("Update Category Status Model Error:", error);
        throw error;
    }
}