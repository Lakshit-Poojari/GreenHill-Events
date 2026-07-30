import { ResultSetHeader } from "mysql2";
import db from "../lib/db";
import { CreateContactType } from "../types/contactType";

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
      ]
    );

    return result;
  } catch (error) {
    console.error("Create Contact Model Error:", error);
    throw error;
  }
}