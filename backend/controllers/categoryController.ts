import { createCategoryService, deleteCategoryService, getAllCategoryService, getSingleCategoryService, updateCategoryService } from "../services/categoryService";
import { CreateCategoryType, UpdateCategoryType } from "../types/categoryType";

export async function createCategoryController(category:CreateCategoryType){
    try {
        const result = await createCategoryService(category)

        return result
    } catch (error) {
        console.error("Create Category Controller Error", error);
        throw error;
    }
}

export async function updateCategoryController(id: number,  slug: string, category:UpdateCategoryType,) {
    try {
        const result = await updateCategoryService(id,  slug, category,) 

        return result
    } catch (error) {
        console.error("Create Category Controller Error", error);
        throw error;
    }
}

export async function getAllCategoryController(){
    try {
        const result = await getAllCategoryService() 

        return result
    } catch (error) {
        console.error("Get All Category Controller Error", error);
        throw error;
    }
}

export async function getSingleCategoryController(id:number){
    try {
        const result = await getSingleCategoryService(id) 

        return result
    } catch (error) {
        console.error("Get Single Category Controller Error", error);
        throw error;
    }
}

export async function deleteCategoryController(id:number){
    try {
        const result = await deleteCategoryService(id) 

        return result
    } catch (error) {
        console.error("Delete Category Controller Error", error);
        throw error;
    }
}