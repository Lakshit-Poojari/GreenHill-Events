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
                caseStudies.status,
                caseStudies.slug,
                caseStudies.created_by
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
            `SELECT * FROM case_study`
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
            `SELECT * FROM case_study WHERE id=?`,
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