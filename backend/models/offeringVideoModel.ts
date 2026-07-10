import { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../lib/db";
import { CreateOfferingVideo, OfferingVideo, UpdateOfferingVideo } from "../types/offeringVideoType";

export async function createOfferingVideoModel(video:CreateOfferingVideo){
    try {
        const [result] = await db.query<ResultSetHeader>(
            `INSERT INTO offering_videos (offering_id, youtube_url,  display_order, updated_by) VALUES(?, ?, ?, ?)`,
            [
                video.offering_id,
                video.youtube_url,
                video.display_order,
                video.updated_by,
            ]
        )
        return result
    } catch (error) {
        console.error("Create Offering Video Model Error:", error);
        throw new Error;
    }
}


export async function updateOfferingVideoModel(id:number, video:UpdateOfferingVideo){
    try {
        const[result] = await db.query<ResultSetHeader>(`
            UPDATE offering_videos SET offering_id = ?, youtube_url = ?, display_order = ?, updated_by = ?
            WHERE id = ?`,
            [
                video.offering_id,
                video.youtube_url,
                video.display_order,
                video.updated_by,
                id
            ])
        return result
    } catch (error) {
        console.error("Update Offering Video Model Error:", error);
        throw new Error;
    }
}

type VideoRow = OfferingVideo & RowDataPacket;
export async function getAllOfferingVideoModel(){
    try {
        const result = await db.query<VideoRow[]>(`SELECT * FROM offering_videos`)
    } catch (error) {
        console.error("Get All Offering Video Model Error:", error);
        throw new Error;
    }
}

export async function getSingleOfferingVideoModel(id:number){
    try {
        const result = db.query<RowDataPacket[]>(`SELECT * FROM offering_videos WHERE id=?`, [id])
        return result
    } catch (error) {
        console.error("Get Single Offering Video Model Error:", error);
        throw new Error;
    }
}

export async function deleteOfferingVideoModel(id:number){
    try {
        const result = db.query<RowDataPacket[]>(`DELETE * FROM offering_videos WHERE id=?`, [id])
    } catch (error) {
        console.error("Delete Offering Video Model Error:", error);
        throw new Error;
    }
}