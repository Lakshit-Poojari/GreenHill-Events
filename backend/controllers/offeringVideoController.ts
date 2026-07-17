import { createOfferingVideoService, deleteOfferingVideoService, getAllOfferingVideoService, getSingleOfferingVideoService, updateOfferingVideoService } from "../services/offeringVideoService";
import { CreateOfferingVideo, UpdateOfferingVideo } from "../types/offeringVideoType";

export async function createOfferingVideoController(video:CreateOfferingVideo){
    try {
        const result = await createOfferingVideoService(video)
        return result
    } catch (error) {
        console.error("Create Offering Video Controller", error);
        throw error;
    }
}

export async function updateOfferingVideoController(video:UpdateOfferingVideo, id:number,){
    try {
        const result = await updateOfferingVideoService(id, video)
        return result
    } catch (error) {
        console.error("Update Offering Video Controller", error);
        throw error;
    }
}

export async function getAllOfferingVideoController(){
    try {
        const result = await getAllOfferingVideoService()
        return result
    } catch (error) {
        console.error("Get All Offering Video Controller", error);
        throw error;
    }
}

export async function getSingleOfferingVideoController(id:number){
    try {
        const result = await getSingleOfferingVideoService(id)
        return result
    } catch (error) {
        console.error("Get Single Offering Video Controller", error);
        throw error;
    }
}

export async function deleteOfferingVideoController(id:number){
    try {
        const result = await deleteOfferingVideoService(id)
        return result
    } catch (error) {
        console.error("Delete Offering Video Controller", error);
        throw error;
    }
}