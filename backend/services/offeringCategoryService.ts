import { createOfferingCategoryModel, deleteOfferingCategoryModel, getAllOfferingCategoryModel, getOfferingCategoryBySlugModel, getSIngleOfferingCategoryModel, UpdateOfferingCategoryModel, updateOfferingCategoryStatusModel } from "../models/offeringCategoryModel";
import { createOfferingCategory, offeringCategoryStatus, updateOfferingCategory } from "../types/offeringCategoryType";


export async function createOfferingCategoryService(category: createOfferingCategory) {
    try {

        const slug = category.name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

        if (!category.category_id || !category.name || 
            category.display_order === undefined || !category.status
        ) {
            throw new Error("All required fields are mandatory.");
        }

        const existingCategory = await getOfferingCategoryBySlugModel(slug) 
        
            if (existingCategory) {
                throw new Error("Category already exists.");
            } 
        category.slug = slug;
        const result = await createOfferingCategoryModel(category);

        return result;
    } catch (error) {
        console.error("Error in Create Offering Category Model", error);
        throw error;
    }
}


export async function updateOfferingCategoryService(id:number, category:updateOfferingCategory){
    try {
        
        if (!id) {
    throw new Error("Offering category ID is required.");
}

if (!category.category_id) {
    throw new Error("Entertainment category is required.");
}

if (!category.name?.trim()) {
    throw new Error("Offering category name is required.");
}

if (category.display_order === undefined || category.display_order === null) {
    throw new Error("Display order is required.");
}

if (!category.status) {
    throw new Error("Status is required.");
}
        const existingCategory = await getSIngleOfferingCategoryModel(id)

        if (existingCategory.length === 0 ) {
            throw new Error("Category not found.");
        }

        const slug = category.name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

category.slug = slug;

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
        console.error("Error in Delete Offering Category Model", error);
        throw error;
    }
}

export async function updateOfferingCategoryStatusService(id: number, status: offeringCategoryStatus) {
    try {
        if (!id || !status) {
            throw new Error("Offering Category ID and status are required");
        }

        const existingOfferingCategory = await getSIngleOfferingCategoryModel(id);

        if (!existingOfferingCategory || existingOfferingCategory.length === 0) {
            throw new Error("Offering Category not found");
        }

        return await updateOfferingCategoryStatusModel(id, status);
    } catch (error) {
        console.error("Update Offering Category Status Service Error:", error);
        throw error;
    }
}