import { createUserType, loginUserType, UpdateUserType, UserStatus } from "../types/userTypes";
import { createUserModel, deleteUserModel, getAllUserModel, getUserByIdModel, getUserModel, updateUserModel, updateUserStatusModel } from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const SECRET_KEY = process.env.JWT_SECRET!;

export async function createUserService(user: createUserType){
    try {
        // check all fied are present
        if(!user.full_name || !user.email || !user.password || !user.status){
            throw new Error("All Field Required")
        }

        // check if Admin exist
        const existingUser = await getUserModel(user.email)

        if (existingUser && existingUser.length > 0) {
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
            throw new Error("User Doesn't Exist")
        }

        const admin = existingAdmin[0]

        if (admin.status !== "ACTIVE") {
            throw new Error("Account is inactive");
        }

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

export async function getAllUserService() {
    try {
        return await getAllUserModel();
    } catch (error) {
        console.error("Get Users Service Error:", error);
        throw error;
    }
}

export async function getUserByIdService(id: number) {
    try {
        if (!id) {
            throw new Error("User ID is required");
        }

        const user = await getUserByIdModel(id);

        if (!user || user.length === 0) {
            throw new Error("User not found");
        }

        return user[0];
    } catch (error) {
        console.error("Get User By ID Service Error:", error);
        throw error;
    }
}

export async function updateUserService(id: number, user: UpdateUserType) {
    try {
        if (!id) {
            throw new Error("User ID is required");
        }

        if (!user.full_name || !user.email || !user.status) {
            throw new Error("All fields are required");
        }

        const existingUser = await getUserByIdModel(id);

        if (!existingUser || existingUser.length === 0) {
            throw new Error("User not found");
        }

        return await updateUserModel(id, user);
    } catch (error) {
        console.error("Update User Service Error:", error);
        throw error;
    }
}

export async function deleteUserService(id: number) {
    try {
        if (!id) {
            throw new Error("User ID is required");
        }

        const existingUser = await getUserByIdModel(id);

        if (!existingUser || existingUser.length === 0) {
            throw new Error("User not found");
        }

        return await deleteUserModel(id);
    } catch (error) {
        console.error("Delete User Service Error:", error);
        throw error;
    }
}

export async function updateUserStatusService(id: number, status: UserStatus) {
    try {
        if (!id || !status) {
            throw new Error("User ID and status are required");
        }

        const existingUser = await getUserByIdModel(id);

        if (!existingUser || existingUser.length === 0) {
            throw new Error("User not found");
        }

        return await updateUserStatusModel(id, status);
    } catch (error) {
        console.error("Update User Status Service Error:", error);
        throw error;
    }
}