import { createCategoryModel, deleteCategoryModel, getAllCategoryModel, getCategoryBySlug, getSingleCategoryModel, updateCategoryModel, } from "../models/categoryModel";
import { CreateCategoryType, UpdateCategoryType } from "../types/categoryType";

export async function createCategoryService(category:CreateCategoryType ){
    try {
        const slug = category.category_name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

        if (!category.category_name || !category.menu_name ||
            !category.image || !category.description || 
            !category.status || !category.created_by) {
            throw new Error("All Field Required")
        }

        const existingCategory = await getCategoryBySlug(slug) 

        if (existingCategory.length > 0 ) {
            throw new Error("Category already exists.");
        }

        const result = await createCategoryModel({...category, slug})

        return result
    } catch (error) {
        console.error("Create Category Service Error", error);
        throw error;
    }
}

export async function updateCategoryService(id: number, slug:string, category:UpdateCategoryType){
    try {
        if (!category.category_name || !category.menu_name ||
            !category.image || !category.description || 
            !category.status ) {
            throw new Error("All Field Required")
        }

        const existingCategory = await getSingleCategoryModel(id)

        if (existingCategory.length === 0 ) {
            throw new Error("Category not found.");
        }

        const duplicateCategory = await getCategoryBySlug(slug)

        if (duplicateCategory.length >= 0 && duplicateCategory[0].id !== id) {
            throw new Error("Category already exists.");
        }

        const result = await updateCategoryModel(id, category, slug)

        return result
    } catch (error) {
        console.error("Update Category Service Error", error);
        throw error;
    }
}

export async function getAllCategoryService(){
    try {
        const [result] = await getAllCategoryModel()
        return result
    } catch (error) {
        console.error("Get All Category Service Error", error);
        throw error;
    }
}

export async function getSingleCategoryService(id:number){
    try {
        const [result] = await getSingleCategoryModel(id) 
        return result
    } catch (error) {
        console.error("Get All Category Service Error", error);
        throw error;
    }
}

export async function deleteCategoryService(id:number){
    try {
        const result = await deleteCategoryModel(id)

        return result
    } catch (error) {
        console.error("Delete Category Service Error", error);
        throw error;
    }
}