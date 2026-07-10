import { createOfferingCategoryModel, deleteOfferingCategoryModel, getAllOfferingCategoryModel, getOfferingCategoryBySlugModel, getSIngleOfferingCategoryModel, UpdateOfferingCategoryModel } from "../models/offeringCategoryModel";
import { createOfferingCategory, updateOfferingCategory } from "../types/offeringCategoryType";


export async function createOfferingCategoryService(category: createOfferingCategory) {
    try {

        const slug = category.name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

        if (!category.category_id || !category.name || !category.slug || 
            category.display_order === undefined || !category.status
        ) {
            throw new Error("All required fields are mandatory.");
        }

        const existingCategory = await getOfferingCategoryBySlugModel(slug) 
        
            if (existingCategory) {
                throw new Error("Category already exists.");
            } 

        const result = await createOfferingCategoryModel(category);

        return result;
    } catch (error) {
        console.error("Error in Create Offering Category Model", error);
        throw error;
    }
}
export async function updateOfferingCategoryService(id:number, category:updateOfferingCategory, slug:string){
    try {
        if(!id || !category.category_id || !category.name?.trim() ||
            !category.slug?.trim() || category.display_order === undefined || !category.status){
            throw new Error("All Field Required")
        }
        const existingCategory = await getSIngleOfferingCategoryModel(id)

        if (existingCategory.length === 0 ) {
            throw new Error("Category not found.");
        }

        const duplicateCategory = await getOfferingCategoryBySlugModel(category.slug)

        if (duplicateCategory && duplicateCategory.id !== id) {
            throw new Error("Category already exists.");
        }
        const result = await UpdateOfferingCategoryModel(id, category)

        return result
    } catch (error) {
        console.error("Error in Update Offering Category Model", error);
        throw error;
    }
}

export async function getAllOfferingCategoryService(){
    try {
        const result = await getAllOfferingCategoryModel()
        return result
    } catch (error) {
        console.error("Error in Get All Offering Category Model", error);
        throw error;
    }
}

export async function getSingleOfferingCategoryService(id:number){
    try {
        const result = await getSIngleOfferingCategoryModel(id)
        return result
    } catch (error) {
        console.error("Error in Get Single Offering Category Model", error);
        throw error;
    }
}

export async function deleteOfferingCategoryService(id:number){
    try {
        const result = await deleteOfferingCategoryModel(id)
        return result
    } catch (error) {
        console.error("Error in Delet Offering Category Model", error);
        throw error;
    }
}