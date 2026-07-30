import { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../lib/db";
import { Contact, CreateContactType } from "../types/contactType";

export async function createContactModel(contactEmail: CreateContactType) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      `
      INSERT INTO contacts (
        name,
        email,
        phone,
        message
      ) VALUES (?, ?, ?, ?)
      `,
      [
        contactEmail.name,
        contactEmail.email,
        contactEmail.phone || null,
        contactEmail.message,
      ],
    );

    return result;
  } catch (error) {
    console.error("Create Contact Model Error:", error);
    throw error;
  }
}

type ContactRow = Contact & RowDataPacket;
export async function getAllContactModel(page: number, limit: number) {
  try {
    const offset = (page - 1) * limit;

    const [result] = await db.query<ContactRow[]>(
      `
      SELECT *
      FROM contacts
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
      `,
      [limit, offset],
    );

    return result;
  } catch (error) {
    console.error("Get All Contact Model Error:", error);
    throw error;
  }
}

export async function getSingleContactModel(id: number) {
  try {
    const [result] = await db.query<ContactRow[]>(
      `
      SELECT *
      FROM contacts
      WHERE id = ?
      LIMIT 1
      `,
      [id],
    );

    return result[0];
  } catch (error) {
    console.error("Get Single Contact Model Error:", error);
    throw error;
  }
}
