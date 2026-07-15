import { createUserService, deleteUserService, getAllUserService, getUserByIdService, loginUserService, updateUserRoleService, updateUserService, updateUserStatusService } from "../services/userService";
import { createUserType, loginUserType, UpdateUserType, UserStatus } from "../types/userTypes";

export async function createUserController(user: createUserType) {
    try {
        const result = await createUserService(user)
        return result
    } catch (error) {
        console.error("Create Admin Controller Error:", error);
        throw error;        
    }
}

export async function loginUserController(user: loginUserType){
    try {
        const row = await loginUserService(user)
        return row
    } catch (error) {
        console.error("login Admin Controller Error:", error);
        throw error;        
    }
}

export async function getAllUserController() {
    try {
        const result = await getAllUserService()
        return result
    } catch (error) {
        console.error("Create Admin Controller Error:", error);
        throw error;        
    }
}

export async function getUserByIdController(id: number){
    try {
        const row = await getUserByIdService(id)
        return row
    } catch (error) {
        console.error("login Admin Controller Error:", error);
        throw error;        
    }
}

export async function updateUserController(id:number, user: UpdateUserType) {
    try {
        const result = await updateUserService(id, user)
        return result
    } catch (error) {
        console.error("Create Admin Controller Error:", error);
        throw error;        
    }
}

export async function deleteUserController(id:number){
    try {
        const row = await deleteUserService(id)
        return row
    } catch (error) {
        console.error("login Admin Controller Error:", error);
        throw error;        
    }
}

export async function updateUserStatusController(id: number, status: UserStatus) {
    try {
        const result = await updateUserStatusService(id, status)
        return result
    } catch (error) {
        console.error("Create Admin Controller Error:", error);
        throw error;        
    }
}

export async function updateUserRoleController(id: number, role: "SUPER_ADMIN" | "ADMIN") {
  return await updateUserRoleService(id, role);
}