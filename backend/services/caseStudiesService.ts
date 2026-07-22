import { createCaseStudyModel, deleteCaseStudyModel, getAllCaseStudyModel, getCaseStudiesBySlug, getSingleCaseStudyModel, updateCaseStudyModel } from "../models/caseStudiesModel";
import { CreateCaseStudy, UpdateCaseStudy } from "../types/caseStudies";

export async function createCaseStudiesService(caseStudies:CreateCaseStudy){
    try {
        
        if (!caseStudies.title) {
            throw new Error("Title is required.");
        }

        if (!caseStudies.image) {
            throw new Error("Image is required.");
        }

        if (!caseStudies.description) {
            throw new Error("Description is required.");
        }

        if (!caseStudies.status) {
            throw new Error("Status is required.");
        }

        if (caseStudies.created_by == null) {
            throw new Error("Created by is required.");
        }
        const slug = caseStudies.title.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

        const CaseStudyExist = await getCaseStudiesBySlug(slug)

        if (CaseStudyExist.length > 0) {
            throw new Error("Case study already exist.");
        }

        const result = await createCaseStudyModel({...caseStudies,slug})

        return result
    } catch (error) {
        console.error("Create case Study service error", error);
        throw error;
    }
}

export async function updateCaseStudiesService(id:number, caseStudies:UpdateCaseStudy){
    try {
        
        if (!id) {
            throw new Error("Case study ID is required")
        }
        const fields = [
            ["Title", caseStudies.title],
            ["Image", caseStudies.image],
            ["Description", caseStudies.description],
            ["Status", caseStudies.status],
        ];

        for (const [name, value] of fields) {
            if (!value) throw new Error(`${name} is required.`);
        }

        if (caseStudies.updated_by == null) {
            throw new Error("Updated by is required.");
        }

        const existCaseStudy = await getSingleCaseStudyModel(id)

        if (existCaseStudy.length === 0) {
            throw new Error(`Case Study does not exist`)
        }

        const slug = caseStudies.title!.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

        const duplicateCaseStudy = await getCaseStudiesBySlug(slug)

        if (duplicateCaseStudy.length > 0 && duplicateCaseStudy[0].id !== id) {
            throw new Error("Duplicate case study exist")
        }

        const result = await updateCaseStudyModel(id, caseStudies)
        return result

    } catch (error) {
        console.error("Update case Study service error", error);
        throw error;
    }
}

export async function getAllCaseStudiesService(){
    try {
        const result = await getAllCaseStudyModel()
        return result
    } catch (error) {
        console.error("Get all case Study service error", error);
        throw error;
    }
}

export async function getSingleCaseStudiesService(id:number){
    try {
        const result = await getSingleCaseStudyModel(id)

        return result
    } catch (error) {
        console.error("Get single case Study service error", error);
        throw error;
    }
}

export async function deleteCaseStudiesService(id:number){
    try {
        const result = await deleteCaseStudyModel(id)
        return result 
    } catch (error) {
        console.error("Delete case Study service error", error);
        throw error;
    }
}