import {
  createOfferingModel,
  deleteOfferingModel,
  getAllOfferingModel,
  getOfferingBySlugModel,
  getSingleOfferingModel,
  updateOfferingModel,
  updateOfferingStatusModel,
} from "../models/offeringModel";
import {
  CreateOffering,
  OfferingStatus,
  UpdateOffering,
} from "../types/offeringType";
import fs from "fs/promises";
import path from "path";

import { uploadImage } from "../lib/uploadImage";

export async function createOfferingService(
  offering: CreateOffering,
  createdBy: number,
) {
  try {
    const slug = offering.performer_name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

    if (
      !offering.performer_name ||
      !offering.small_description ||
      !offering.large_description ||
      !offering.page_url ||
      !offering.status ||
      !offering.offering_category_id ||
      !offering.image_path
    ) {
      throw new Error("All fields are required.");
    }

    const existingOffering = await getOfferingBySlugModel(slug);

    if (existingOffering) {
      throw new Error("Offering already exists.");
    }

    const imagePath = await uploadImage(offering.image_path, "offerings");

    return await createOfferingModel({
      ...offering,
      slug,
      created_by: createdBy,
      image_path: imagePath,
    });
  } catch (error) {
    console.error("Error in Create Offering Service", error);
    throw error;
  }
}

export async function updateOfferingService(
  id: number,
  offering: UpdateOffering,
  updatedBy: number,
) {
  try {
    if (
      !id ||
      !offering.offering_category_id ||
      !offering.performer_name ||
      !offering.small_description ||
      !offering.large_description ||
      !offering.page_url ||
      !offering.soundcloud_link ||
      !offering.status
    ) {
      throw new Error("All fields are required.");
    }

    const slug = offering.performer_name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

    const existingOffering = await getSingleOfferingModel(id);

    if (existingOffering.length === 0) {
      throw new Error("Offering not found.");
    }

    const duplicateOffering = await getOfferingBySlugModel(slug);

    if (duplicateOffering?.length && duplicateOffering[0].id !== id) {
      throw new Error("Offering already exists.");
    }

    // Keep existing image by default
    let imagePath = existingOffering[0].image_path;

    // Upload new image if provided
    if (offering.image_path instanceof File && offering.image_path.size > 0) {
      imagePath = await uploadImage(offering.image_path, "offerings");

      // Delete old image
      if (existingOffering[0].image_path) {
        const oldImagePath = path.join(
          process.cwd(),
          "uploads",
          existingOffering[0].image_path,
        );

        try {
          await fs.unlink(oldImagePath);
        } catch (error) {
          console.warn("Old image not found:", error);
        }
      }
    }

    return await updateOfferingModel(
      id,
      {
        ...offering,
        slug,
        image_path: imagePath,
      },
      updatedBy,
    );
  } catch (error) {
    console.error("Error in Update Offering Service", error);
    throw error;
  }
}

export async function getAllOfferingService() {
  try {
    const result = await getAllOfferingModel();
    return result;
  } catch (error) {
    console.error("Error in Get All Offering Service", error);
    throw error;
  }
}

export async function getSingleOfferingService(id: number) {
  try {
    const result = await getSingleOfferingModel(id);
    return result;
  } catch (error) {
    console.error("Error in Get Single Offering Service", error);
    throw error;
  }
}

export async function deleteOfferingService(id: number) {
  try {
    const result = await deleteOfferingModel(id);
    return result;
  } catch (error) {
    console.error("Error in Delete Offering Service", error);
    throw error;
  }
}

export async function updateOfferingStatusService(
  id: number,
  status: OfferingStatus,
) {
  try {
    if (!id || !status) {
      throw new Error("Offering ID and status are required");
    }

    const existingOffering = await getSingleOfferingModel(id);

    if (!existingOffering) {
      throw new Error("Offering not found");
    }

    return await updateOfferingStatusModel(id, status);
  } catch (error) {
    console.error("Update Offering Status Service Error:", error);
    throw error;
  }
}
