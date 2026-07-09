import { deleteOfferingModel, getAllOfferingModel, getSingleOfferingModel } from "../models/offeringModel";

export async function createOfferingService(){
    try {
        
    } catch (error) {
        console.error("Error in Create Offering Service", error);
        throw error;
    }
}

export async function UpdateOfferingService(){
    try {
        
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