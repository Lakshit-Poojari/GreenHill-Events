import { NextResponse } from "next/server";
import { createUserType, loginUserType } from "../types/userTypes";
import { createUserModel, getUserModel } from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const SECRET_KEY = process.env.JWT_SECRET!;

export async function createUserService(user: createUserType){
    try {
        // check all fied are present
        if(!user.full_name || !user.email || !user.password || !user.status || !user.created_by){
            throw new Error("All Field Required")
        }

        // check if Admin exist
        const existingAdmin = await getUserModel(user.email) as any[]

        if (existingAdmin && existingAdmin.length > 0) {
            throw new Error("User Already Exist Please Login")
        }

        // convert password in hash
        const hashedPassword = await bcrypt.hash(user.password, 10)

        // create Admin
        const result = await createUserModel({...user, password : hashedPassword})

        return result
    } catch (error) {
        console.error("Create Admin Service Error:", error);
        throw error;
    }
}

export async function loginUserService(loginUser: loginUserType){
    try {
        // check all fied are present
        if(!loginUser.email || !loginUser.password){
            throw new Error("All Field Required")
        }
        // check if Admin exist
        const existingAdmin = await getUserModel(loginUser.email) as any[]

        if (!existingAdmin || existingAdmin.length === 0) {
            throw new Error("User Does't Exist Please Register")
        }

        const admin = existingAdmin[0]

        // check password
        const isPasswordValid = await bcrypt.compare(loginUser.password, admin.password)
        
        if (!isPasswordValid) {
            throw new Error("Invalid Credentials")
        }

        // create token
        const token = jwt.sign({ id: admin.id, email: admin.email, role: admin.role }, SECRET_KEY, { expiresIn: "1d" });

        return { success: true, token, user: { id: admin.id, full_name: admin.full_name, email: admin.email, role: admin.role }};
    } catch (error) {
        console.error("Login Admin Service Error:", error);
        throw error;
    }
}