import { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../lib/db";
import { createOfferingCategory, OfferingCategory, updateOfferingCategory } from "../types/offeringCategoryType";

export async function createOfferingCategoryModel(category:createOfferingCategory,){
    try {
        const [result] = await db.query<ResultSetHeader>(
            `INSERT INTO offering_categories (category_id, name, slug, display_order, status, updated_by) 
            VALUES ( ?, ?, ?, ?, ?, ?)`,
            [
                category.category_id, 
                category.name, 
                category.slug, 
                category.display_order, 
                category.status, 
                category.updated_by
            ]
        )
        return result
    } catch (error) {
        console.error("Error in Create Offering Category Model", error);
        throw error;
    }
}

type OfferingCategoryRow = OfferingCategory & RowDataPacket;
export async function getAllOfferingCategoryModel(){
    try {
        const [result] = await db.query<OfferingCategoryRow[]>("SELECT * FROM offering_categories",)
        return result  
    } catch (error) {
        console.error("Error in Get all Offering Category Model", error);
        throw error;
    }
}

export async function getSIngleOfferingCategoryModel(id:number){
    try {
        const [result] = await db.query<RowDataPacket[]>("SELECT * FROM offering_categories WHERE id=?",[id])
        return result       
    } catch (error) {
        console.error("Error in Get Single Offering Category Model", error);
        throw error;
    }
}

export async function UpdateOfferingCategoryModel(id:number, category:updateOfferingCategory){
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
                category.updated_by,
                id
            ]
        );
        return result       
    } catch (error) {
        console.error("Error in Update Offering Category Model", error);
        throw error;
    }
}
export async function deleteOfferingCategoryModel(id:number){
    try {
        const [result] = await db.query<ResultSetHeader>("DELETE FROM offering_categories WHERE id=?",[id])
        return result        
    } catch (error) {
        console.error("Error in Delete Offering Category Model", error);
        throw error;
    }
}

export async function getOfferingCategoryBySlugModel(slug: string): Promise<OfferingCategory | null> {
    try {
        const [rows] = await db.query<(OfferingCategory & RowDataPacket)[]>(
            `SELECT *
             FROM offering_categories
             WHERE slug = ?
             LIMIT 1`,
            [slug]
        );

        return rows.length > 0 ? rows[0] : null;
    } catch (error) {
        console.error("Error in get Category By Slug Model:", error);
        throw error;
    }
}