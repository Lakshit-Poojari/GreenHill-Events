import { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../lib/db";
import { CaseStudy, CreateCaseStudy, UpdateCaseStudy } from "../types/caseStudies";

export async function createCaseStudyModel(caseStudies:CreateCaseStudy){
    try {
        const [result] = await db.query<ResultSetHeader>(
            `INSERT INTO case_study (title, image, description, youtube_url, created_by, status, slug)
            VALUES(?,?,?,?,?,?,?)`,
            [
                caseStudies.title,
                caseStudies.image,
                caseStudies.description,
                caseStudies.youtube_url,
                caseStudies.created_by,
                caseStudies.status,
                caseStudies.slug,
            ]
        )

        return result
    } catch (error) {
        console.error("Create case study model error", error);
        throw error;
    }
}

export async function updateCaseStudyModel(id: number, caseStudies:UpdateCaseStudy){
    try {
        const [result] = await db.query<ResultSetHeader>(
            `ALTER case_study SET title=?, image=?, description=?, youtube_url=?, status=?, slug=?, updated_by=? WHERE id=?`,
            [
                caseStudies.title,
                caseStudies.image,
                caseStudies.description,
                caseStudies.youtube_url,
                caseStudies.status,
                caseStudies.slug,
                caseStudies.updated_by,
                id
            ]
        )

        return result
    } catch (error) {
        console.error("Update case study model error", error);
        throw error;
    }
}

type CaseStudyRow = CaseStudy & RowDataPacket;
export async function getAllCaseStudyModel(){
    try {
        const [row] = await db.query<CaseStudyRow[]>(
            ` SELECT
                cs.id,
                cs.title,
                cs.image,
                cs.description,
                cs.youtube_url,
                cs.status,
                cs.slug,
                cs.created_at,
                cs.updated_at,
                cs.created_by,
                creator.full_name AS created_by_name,
                cs.updated_by,
                updater.full_name AS updated_by_name
            FROM case_study cs
            LEFT JOIN users creator
                ON cs.created_by = creator.id
            LEFT JOIN users updater
                ON cs.updated_by = updater.id
            ORDER BY cs.created_at DESC`
        )
        return row
    } catch (error) {
        console.error("Get all case study model error", error);
        throw error;
    }
}

export async function getSingleCaseStudyModel(id:number){
    try {
        const [row] = await db.query<CaseStudyRow[]>(
            `SELECT
                cs.id,
                cs.title,
                cs.image,
                cs.description,
                cs.youtube_url,
                cs.status,
                cs.slug,
                cs.created_at,
                cs.updated_at,
                cs.created_by,
                creator.full_name AS created_by_name,
                cs.updated_by,
                updater.full_name AS updated_by_name
            FROM case_study cs
            LEFT JOIN users creator
                ON cs.created_by = creator.id
            LEFT JOIN users updater
                ON cs.updated_by = updater.id
            WHERE cs.id = ?`,
            [
                id
            ]
        ) 
        return row
    } catch (error) {
        console.error("Get single case study model error", error);
        throw error;
    }
}

export async function deleteCaseStudyModel(id:number){
    try {
        const [result] = await db.query<ResultSetHeader>(
            `DELETE from case_study WHERE id=?`,
            [
                id
            ]
        )
        return result
    } catch (error) {
        console.error("Delete case study model error", error);
        throw error;
    }
}

export async function getCaseStudiesBySlug(slug:string){
    try {
        const [result] = await db.query<RowDataPacket[]>(
            `SELECT * FROM case_study WHERE slug=?`,
            [slug]
        )

        return result
    } catch (error) {
        console.error("get case study by slug model error", error);
        throw error;        
    }
}