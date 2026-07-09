import { createOfferingCategoryService, deleteOfferingCategoryService, getAllOfferingCategoryService, getSingleOfferingCategoryService, updateOfferingCategoryService } from "../services/offeringCategoryService";
import { createOfferingCategory, updateOfferingCategory } from "../types/offeringCategoryType";

export async function createofferingCategoryController(category: createOfferingCategory){
    try {
        const result = await createOfferingCategoryService(category)
        return result
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function updateofferingCategoryController(id:number, category:updateOfferingCategory, slug:string){
    try {
        const result = await updateOfferingCategoryService(id, category, slug)
        return result
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getAllofferingCategoryController(){
    try {
        const result = await getAllOfferingCategoryService()
        return result
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getSingleofferingCategoryController(id:number){
    try {
        const result = await getSingleOfferingCategoryService(id)
        return result
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function deleteofferingCategoryController(id:number){
    try {
        const result = await deleteOfferingCategoryService(id)
        return result
    } catch (error) {
        console.error(error);
        throw error;
    }
}