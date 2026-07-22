import { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../lib/db";
import { createUserType, UpdateUserType } from "../types/userTypes";

export async function createUserModel(user: createUserType) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      "INSERT INTO users (full_name, email, password, status, created_by)  VALUES (?, ?, ?, ?, ?)",
      [
        user.full_name,
        user.email,
        user.password,
        user.status,
        user.created_by ?? null,
      ],
    );
    return result;
  } catch (error) {
    console.error("Create Admin Model Error:", error);
    throw error;
  }
}

export async function getUserModel(email: string) {
  try {
    const [row] = await db.query<RowDataPacket[]>(
      "SELECT * FROM users WHERE email = ?",
      [email],
    );
    return row;
  } catch (error) {
    console.error("Get User Model Error:", error);
    throw error;
  }
}

export async function getUserByIdModel(id: number) {
  try {
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT * FROM users WHERE id = ?",
      [id],
    );

    return rows;
  } catch (error) {
    console.error("Get User By ID Model Error:", error);
    throw error;
  }
}

export async function getAllUserModel() {
  try {
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT * FROM users ORDER BY id DESC",
    );

    return rows;
  } catch (error) {
    console.error("Get Users Model Error:", error);
    throw error;
  }
}

export async function updateUserModel(id: number, user: UpdateUserType) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      `UPDATE users
             SET full_name = ?, email = ?, status = ?
             WHERE id = ?`,
      [user.full_name, user.email, user.status, id],
    );

    return result;
  } catch (error) {
    console.error("Update User Model Error:", error);
    throw error;
  }
}

export async function deleteUserModel(id: number) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      "DELETE FROM users WHERE id = ?",
      [id],
    );

    return result;
  } catch (error) {
    console.error("Delete User Model Error:", error);
    throw error;
  }
}

export async function updateUserStatusModel(id: number, status: string) {
  try {
    const [result] = await db.query<ResultSetHeader>(
      "UPDATE users SET status = ? WHERE id = ?",
      [status, id],
    );

    return result;
  } catch (error) {
    console.error("Update User Status Model Error:", error);
    throw error;
  }
}

export async function updateLastLoginModel(id: number) {
  await db.query("UPDATE users SET last_login_at = NOW() WHERE id = ?", [id]);
}

export async function updateUserRoleModel(
  id: number,
  role: "SUPER_ADMIN" | "ADMIN",
) {
  const query = `
    UPDATE users
    SET role = ?
    WHERE id = ?
  `;

  return await db.query(query, [role, id]);
}
