import { ResultSetHeader } from "mysql2";
import db from "../lib/db";
import { createUserType } from "../types/userTypes";

export async function createUserModel(user: createUserType){
    try {
        const [result] = await db.query<ResultSetHeader>(
            "INSERT INTO users (full_name, email, password, status, created_by)  VALUES (?, ?, ?, ?, ?)", 
            [   
                user.full_name,
                user.email,
                user.password,
                user.status,
                user.created_by ?? null,
            ]
        )
        return result;
    } catch (error) {
        console.error("Create Admin Model Error:", error);
        throw error;
    }
}

export async function getUserModel(email:string){
    try {
        const [row] = await db.query(
            "SELECT * FROM users WHERE email = ?", [email]
        )
        return row;
    } catch (error) {
        console.error();
        throw error;
    }
}