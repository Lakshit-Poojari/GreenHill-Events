import { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../lib/db";
import { CreateOffering, Offering, UpdateOffering } from "../types/offeringType";

export async function createOfferingModel(offering:CreateOffering){
    try {
        const [result] = await db.query<ResultSetHeader>(
            `INSERT INTO offerings (
                offering_category_id, performer_name, slug, image_path, small_description, large_description, status, updated_by
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
                offering.updated_by
            ]
        )
        return result
    } catch (error) {
        console.error("Error in Create Offering Model", error);
        throw error;
    }
}

export async function updateOfferingModel(id:number, offering:UpdateOffering){
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
                offering.updated_by,
                id
            ]
        )
        return result
    } catch (error) {
        console.error("Error in Create Offering Model", error);
        throw error;
    }
}

type OfferingRow = Offering & RowDataPacket;
export async function getAllOfferingModel(){
    try {
        const [result] = await db.query<OfferingRow[]>(`SELECT * FROM offerings`)
        return result
    } catch (error) {
        console.error("Error in Create Offering Model", error);
        throw error;
    }
}

export async function getSingleOfferingModel(id:number){
    try {
        const result = await db.query<RowDataPacket[]>(`SELECT * FROM offerings WHERE id=?`, [id])
        return result
    } catch (error) {
        console.error("Error in Create Offering Model", error);
        throw error;
    }
}

export async function deleteOfferingModel(id:number){
    try {
        const result = await db.query<RowDataPacket[]>(`DELETE * FROM offerings WHERE id=?`, [id])
        return result
    } catch (error) {
        console.error("Error in Create Offering Model", error);
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
            [slug]
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
            "UPDATE offering SET status = ? WHERE id = ?",
            [status, id]
        );

        return result;
    } catch (error) {
        console.error("Update Offering Status Model Error:", error);
        throw error;
    }
}