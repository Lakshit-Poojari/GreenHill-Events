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

export async function createOfferingService(
  offering: CreateOffering,
  createdby: number,
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
      !offering.image_path ||
      !offering.large_description ||
      !offering.status ||
      !offering.offering_category_id ||
      !offering.created_by
    ) {
      throw new Error("All Field Required");
    }

    const existingOffering = await getOfferingBySlugModel(slug);

    if (existingOffering) {
      throw new Error("Offering already exists.");
    }
    const result = await createOfferingModel({
      ...offering,
      slug,
      created_by: createdby,
    });

    return result;
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
    console.log("Offering received:", offering);

    console.log({
      offering_category_id: offering.offering_category_id,
      performer_name: offering.performer_name,
      image_path: offering.image_path,
      small_description: offering.small_description,
      large_description: offering.large_description,
      status: offering.status,
    });

    if (
      !id ||
      !offering.offering_category_id ||
      !offering.performer_name ||
      !offering.image_path ||
      !offering.small_description ||
      !offering.large_description ||
      !offering.status
    ) {
      throw new Error("All Field Required");
    }

    offering.slug = offering.performer_name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
    const existingOffering = await getSingleOfferingModel(id);

    if (!existingOffering) {
      throw new Error("Offering not found.");
    }

    const duplicateOffering = await getOfferingBySlugModel(offering.slug);

    if (duplicateOffering && duplicateOffering.id !== id) {
      throw new Error("Offering already exists.");
    }

    return await updateOfferingModel(id, offering, updatedBy);
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
