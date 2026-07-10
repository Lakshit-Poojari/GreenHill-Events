import { createOfferingService, deleteOfferingService, getAllOfferingService, getSingleOfferingService, updateOfferingService } from "../services/offeringService";
import { CreateOffering, Offering, UpdateOffering } from "../types/offeringType";

export async function createOfferingController(offering:CreateOffering){
    try {
        const result = await createOfferingService(offering)
        return result
    } catch (error) {
        console.error("Create Offering Controller Error", error);
        throw new Error
    }
}

export async function updateOfferingController(id:number, offering:UpdateOffering, slug:string){
    try {
        const result = await updateOfferingService(id, offering, slug)
        return result
    } catch (error) {
        console.error("Update Offering Controller Error", error);
        throw new Error
    }
}

export async function getAllOfferingController(){
    try {
        const result = await getAllOfferingService()
        return result
    } catch (error) {
        console.error("Get All Offering Controller Error", error);
        throw new Error
    }
}

export async function getSingleOfferingController(id:number){
    try {
        const result = await getSingleOfferingService(id)
        return result
    } catch (error) {
        console.error("Get Single Offering Controller Error", error);
        throw new Error
    }
}

export async function deleteOfferingController(id:number){
    try {
        const result = await deleteOfferingService(id)
        return result
    } catch (error) {
        console.error("Delete Offering Controller Error", error);
        throw new Error
    }
}