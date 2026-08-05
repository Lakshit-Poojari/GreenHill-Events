import { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../lib/db";
import {
  CaseStudy,
  CaseStudyDB,
  CreateCaseStudy,
  CreateCaseStudyDB,
  UpdateCaseStudy,
  UpdateCaseStudyDB,
} from "../types/caseStudies";

export async function createCaseStudyModel(caseStudies: CreateCaseStudyDB) {
  try {
    console.log(caseStudies);
    const [result] = await db.query<ResultSetHeader>(
      `INSERT INTO case_study (
          title,
          image,
          description,
          youtube_url,
          created_by,
          status,
          slug,
          show_home,
          show_blog,
          show_case_study
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        caseStudies.title,
        caseStudies.image,
        caseStudies.description,
        caseStudies.youtube_url,
        caseStudies.created_by,
        caseStudies.status,
        caseStudies.slug,
        caseStudies.show_home,
        caseStudies.show_blog,
        caseStudies.show_case_study,
      ],
    );

    return result;
  } catch (error) {
    console.error("Create case study model error", error);
    throw error;
  }
}

export async function updateCaseStudyModel(
  id: number,
  caseStudies: UpdateCaseStudyDB,
) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      `UPDATE case_study
        SET
            title = ?,
            image = ?,
            description = ?,
            youtube_url = ?,
            status = ?,
            slug = ?,
            show_home = ?,
            show_blog = ?,
            show_case_study = ?,
            updated_by = ?
        WHERE id = ?`,
      [
        caseStudies.title,
        caseStudies.image,
        caseStudies.description,
        caseStudies.youtube_url,
        caseStudies.status,
        caseStudies.slug,
        caseStudies.show_home,
        caseStudies.show_blog,
        caseStudies.show_case_study,
        caseStudies.updated_by,
        id,
      ],
    );

    return result;
  } catch (error) {
    console.error("Update case study model error", error);
    throw error;
  }
}

type CaseStudyRow = CaseStudyDB & RowDataPacket;
export async function getAllCaseStudyModel() {
  try {
    const [row] = await db.query<CaseStudyRow[]>(
      ` SELECT
                cs.id,
                cs.title,
                cs.image,
                cs.description,
                cs.youtube_url,
                cs.show_home,
                cs.show_blog,
                cs.show_case_study,
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
            ORDER BY cs.created_at DESC`,
    );
    return row;
  } catch (error) {
    console.error("Get all case study model error", error);
    throw error;
  }
}

export async function getSingleCaseStudyModel(id: number) {
  try {
    const [row] = await db.query<CaseStudyRow[]>(
      `SELECT
                cs.id,
                cs.title,
                cs.image,
                cs.description,
                cs.youtube_url,
                cs.show_home,
                cs.show_blog,
                cs.show_case_study,
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
      [id],
    );
    return row;
  } catch (error) {
    console.error("Get single case study model error", error);
    throw error;
  }
}

export async function deleteCaseStudyModel(id: number) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      `DELETE from case_study WHERE id=?`,
      [id],
    );
    return result;
  } catch (error) {
    console.error("Delete case study model error", error);
    throw error;
  }
}

type CaseStudydb = CaseStudyDB & RowDataPacket;
export async function getCaseStudiesBySlug(slug: string) {
  try {
    const [rows] = await db.query<CaseStudydb[]>(
      "SELECT * FROM case_study WHERE slug=?",
      [slug],
    );

    return rows;
  } catch (error) {
    console.error("get case study by slug model error", error);
    throw error;
  }
}

export async function getHomeCaseStudiesModel() {
  try {
    const [rows] = await db.query<CaseStudyRow[]>(
      `SELECT
          cs.id,
          cs.title,
          cs.slug,
          cs.image,
          cs.description,
          cs.youtube_url,
          cs.created_at,
          creator.full_name AS author
      FROM case_study cs
      LEFT JOIN users creator
        ON cs.created_by = creator.id
      WHERE cs.status = 'ACTIVE'
        AND cs.show_home = TRUE
      ORDER BY cs.created_at DESC`,
    );

    return rows;
  } catch (error) {
    console.error("Get home case studies model error", error);
    throw error;
  }
}

export async function getCaseStudyPageModel() {
  try {
    const [rows] = await db.query<CaseStudyRow[]>(
      `SELECT
          cs.id,
          cs.title,
          cs.slug,
          cs.image,
          cs.description,
          cs.youtube_url,
          cs.created_at,
          creator.full_name AS author
      FROM case_study cs
      LEFT JOIN users creator
        ON cs.created_by = creator.id
      WHERE cs.status = 'ACTIVE'
        AND cs.show_case_study = TRUE
      ORDER BY cs.created_at DESC`,
    );

    return rows;
  } catch (error) {
    console.error("Get home case studies model error", error);
    throw error;
  }
}

export async function getBlogCaseStudiesModel() {
  try {
    const [rows] = await db.query<CaseStudyRow[]>(
      `SELECT
          cs.id,
          cs.title,
          cs.slug,
          cs.image,
          cs.description,
          cs.youtube_url,
          cs.created_at,
          creator.full_name AS author
      FROM case_study cs
      LEFT JOIN users creator
        ON cs.created_by = creator.id
        WHERE cs.status = 'ACTIVE'
          AND cs.show_blog = TRUE
      ORDER BY cs.created_at DESC`,
    );

    return rows;
  } catch (error) {
    console.error("Get home case studies model error", error);
    throw error;
  }
}
