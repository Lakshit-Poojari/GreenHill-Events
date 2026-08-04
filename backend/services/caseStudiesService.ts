import { uploadImage } from "../lib/uploadImage";
import {
  createCaseStudyModel,
  deleteCaseStudyModel,
  getAllCaseStudyModel,
  getCaseStudiesBySlug,
  getSingleCaseStudyModel,
  updateCaseStudyModel,
} from "../models/caseStudiesModel";
import {
  CreateCaseStudy,
  UpdateCaseStudy,
  UpdateCaseStudyDB,
} from "../types/caseStudies";
import fs from "fs/promises";
import path from "path";

export async function createCaseStudiesService(caseStudies: CreateCaseStudy) {
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
    const slug = caseStudies.title
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    const CaseStudyExist = await getCaseStudiesBySlug(slug);

    if (CaseStudyExist.length > 0) {
      throw new Error("Case study already exist.");
    }
    const imagePath = await uploadImage(caseStudies.image, "caseStudies");

    const result = await createCaseStudyModel({
      ...caseStudies,
      slug,
      image: imagePath,
    });

    return result;
  } catch (error) {
    console.error("Create case Study service error", error);
    throw error;
  }
}

export async function updateCaseStudiesService(
  id: number,
  caseStudies: UpdateCaseStudy,
) {
  try {
    if (!id) {
      throw new Error("Case study ID is required.");
    }

    if (!caseStudies.title) {
      throw new Error("Title is required.");
    }

    if (!caseStudies.description) {
      throw new Error("Description is required.");
    }

    if (!caseStudies.status) {
      throw new Error("Status is required.");
    }

    if (caseStudies.updated_by == null) {
      throw new Error("Updated by is required.");
    }

    const existingCaseStudy = await getSingleCaseStudyModel(id);

    if (existingCaseStudy.length === 0) {
      throw new Error("Case study not found.");
    }

    const slug = caseStudies.title
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    const duplicateCaseStudy = await getCaseStudiesBySlug(slug);

    if (duplicateCaseStudy.length > 0 && duplicateCaseStudy[0].id !== id) {
      throw new Error("Case study already exists.");
    }

    // Keep existing image
    let imagePath = existingCaseStudy[0].image;

    // Upload new image if provided
    if (caseStudies.image instanceof File && caseStudies.image.size > 0) {
      imagePath = await uploadImage(caseStudies.image, "caseStudies");

      // Delete old image
      if (existingCaseStudy[0].image) {
        const oldImagePath = path.join(
          process.cwd(),
          "uploads",
          existingCaseStudy[0].image,
        );

        try {
          await fs.unlink(oldImagePath);
        } catch (error) {
          console.warn("Old image not found:", error);
        }
      }
    }

    const data: UpdateCaseStudyDB = {
      title: caseStudies.title,
      slug,
      image: imagePath,
      description: caseStudies.description,
      youtube_url: caseStudies.youtube_url,
      status: caseStudies.status,
      updated_by: caseStudies.updated_by,
    };

    const result = await updateCaseStudyModel(id, data);

    return result;
  } catch (error) {
    console.error("Update Case Study Service Error", error);
    throw error;
  }
}

export async function getAllCaseStudiesService() {
  try {
    const result = await getAllCaseStudyModel();
    return result;
  } catch (error) {
    console.error("Get all case Study service error", error);
    throw error;
  }
}

export async function getSingleCaseStudiesService(id: number) {
  try {
    const result = await getSingleCaseStudyModel(id);

    return result;
  } catch (error) {
    console.error("Get single case Study service error", error);
    throw error;
  }
}

export async function deleteCaseStudiesService(id: number) {
  try {
    const result = await deleteCaseStudyModel(id);
    return result;
  } catch (error) {
    console.error("Delete case Study service error", error);
    throw error;
  }
}


export async function getCaseStudyBySlugService(slug: string) {
  const result = await getCaseStudiesBySlug(slug);

  if (!result || result.length === 0) {
    return null;
  }

  return result[0];
}