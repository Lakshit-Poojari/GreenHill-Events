import { createOfferingModel, deleteOfferingModel, getAllOfferingModel, getOfferingBySlugModel, getSingleOfferingModel, updateOfferingModel } from "../models/offeringModel";
import { CreateOffering, UpdateOffering } from "../types/offeringType";

export async function createOfferingService(offering:CreateOffering){
    try {
        const slug = offering.performer_name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
        
        if (!offering.performer_name || !offering.small_description || !offering.image_path ||
            !offering.large_description || !offering.status || !offering.offering_category_id
        ) {
            throw new Error("All Field Required")
        }

        const existingOffering = await getOfferingBySlugModel(slug)

        if (existingOffering) {
            throw new Error("Offering already exists.");
        }
        const result = await createOfferingModel({...offering, slug})

        return result
    } catch (error) {
        console.error("Error in Create Offering Service", error);
        throw error;
    }
}

export async function updateOfferingService(id:number, offering:UpdateOffering, slug:string){
    try {
        if (!id || !offering.offering_category_id || !offering.performer_name || !offering.slug ||
            !offering.image_path || !offering.small_description || !offering.large_description || !offering.status) {
            throw new Error("All Field Required")
        }

        const existingOffering = await getSingleOfferingModel(id)

        if(!existingOffering){
            throw new Error("Offering not found.")
        }

        const duplicateOffering = await getOfferingBySlugModel(offering.slug)
        if(duplicateOffering && duplicateOffering.id !== id) {
            throw new Error("Offering already exists.");
        }

        const result = await updateOfferingModel(id, offering)
        return result
    } catch (error) {
        console.error("Error in Update Offering Service", error);
        throw error;
    }
}

export async function getAllOfferingService(){
    try {
        const result = await getAllOfferingModel()
        return result
    } catch (error) {
        console.error("Error in Get All Offering Service", error);
        throw error;
    }
}

export async function getSingleOfferingService(id:number){
    try {
        const result = await getSingleOfferingModel(id)
    } catch (error) {
        console.error("Error in Get Single Offering Service", error);
        throw error;
    }
}

export async function deleteOfferingService(id:number){
    try {
        const result = await deleteOfferingModel(id)
        return result
    } catch (error) {
        console.error("Error in Delete Offering Service", error);
        throw error;
    }
}