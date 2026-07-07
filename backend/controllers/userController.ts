import { createUserService, loginUserService } from "../services/userService";
import { createUserType, loginUserType } from "../types/userTypes";

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