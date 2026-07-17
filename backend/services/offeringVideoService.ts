import { getSingleOfferingModel } from "../models/offeringModel";
import { createOfferingVideoModel, deleteOfferingVideoModel, getAllOfferingVideoModel, getSingleOfferingVideoModel, updateOfferingVideoModel } from "../models/offeringVideoModel";
import { CreateOfferingVideo, UpdateOfferingVideo } from "../types/offeringVideoType";

export async function createOfferingVideoService(video: CreateOfferingVideo) {
    try {
        if (
            !video.offering_id ||
            !video.youtube_url.trim() ||
            video.display_order === undefined ||
            !video.status ||
            !video.created_by
        ) {
            throw new Error("All fields are required.");
        }

        const existingOffering = await getSingleOfferingModel(video.offering_id);

        if (!existingOffering) {
            throw new Error("Offering not found.");
        }

        const result = await createOfferingVideoModel(video);

        return result;
    } catch (error) {
        console.error("Create Offering Video Service Error", error);
        throw error;
    }
}

export async function updateOfferingVideoService(
    id: number,
    video: UpdateOfferingVideo
) {
    try {
        if (
            !id ||
            !video.offering_id ||
            !video.youtube_url?.trim() ||
            video.display_order === undefined ||
            !video.status
        ) {
            throw new Error("All fields are required.");
        }

        const existingVideo = await getSingleOfferingVideoModel(id);

        if (!existingVideo) {
            throw new Error("Offering video not found.");
        }

        const existingOffering = await getSingleOfferingModel(video.offering_id);

        if (!existingOffering) {
            throw new Error("Offering not found.");
        }

        const result = await updateOfferingVideoModel(id, video);

        return result;
    } catch (error) {
        console.error("Update Offering Video Service Error:", error);
        throw error;
    }
}

export async function getAllOfferingVideoService(){
    try {
        const result = await getAllOfferingVideoModel()
        return result
    } catch (error) {
        console.error("Get All Offering Video Service Error", error);
        throw  error;
    }
}

export async function getSingleOfferingVideoService(id:number){
    try {
        const result = await getSingleOfferingVideoModel(id)
        return result
    } catch (error) {
        console.error("Get Single Offering Video Service Error", error);
        throw  error;
    }
}

export async function deleteOfferingVideoService(id:number){
    try {
        const result = await deleteOfferingVideoModel(id)
        return result
    } catch (error) {
        console.error("Delete Offering Video Service Error", error);
        throw error;
    }
}