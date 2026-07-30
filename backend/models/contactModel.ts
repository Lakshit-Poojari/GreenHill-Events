import { ResultSetHeader } from "mysql2";
import db from "../lib/db";
import { CreateContactType } from "../types/contactType";

export async function createContactModel(data: CreateContactType) {
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
        data.name,
        data.email,
        data.phone || null,
        data.message,
      ]
    );

    return result;
  } catch (error) {
    console.error("Create Contact Model Error:", error);
    throw error;
  }
}