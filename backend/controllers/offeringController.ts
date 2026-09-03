import {
  createOfferingService,
  deleteOfferingService,
  getAllOfferingService,
  getOfferingBySlugService,
  getOfferingsByCategorySlugService,
  getSingleOfferingService,
  updateOfferingService,
  updateOfferingStatusService,
} from "../services/offeringService";
import {
  CreateOffering,
  Offering,
  OfferingStatus,
  UpdateOffering,
} from "../types/offeringType";

export async function createOfferingController(
  offering: CreateOffering,
  createdby: number,
) {
  try {
    const result = await createOfferingService(offering, createdby);
    return result;
  } catch (error) {
    console.error("Create Offering Controller Error", error);
    throw error;
  }
}

export async function updateOfferingController(
  id: number,
  offering: UpdateOffering,
  updatedBy: number,
) {
  try {
    const result = await updateOfferingService(id, offering, updatedBy);
    return result;
  } catch (error) {
    console.error("Update Offering Controller Error", error);
    throw error;
  }
}

export async function getAllOfferingController() {
  try {
    const result = await getAllOfferingService();
    return result;
  } catch (error) {
    console.error("Get All Offering Controller Error", error);
    throw error;
  }
}

export async function getSingleOfferingController(id: number) {
  try {
    const result = await getSingleOfferingService(id);
    return result;
  } catch (error) {
    console.error("Get Single Offering Controller Error", error);
    throw error;
  }
}

export async function deleteOfferingController(id: number) {
  try {
    const result = await deleteOfferingService(id);
    return result;
  } catch (error) {
    console.error("Delete Offering Controller Error", error);
    throw error;
  }
}

export async function updateOfferingStatusController(
  id: number,
  status: OfferingStatus,
) {
  try {
    return await updateOfferingStatusService(id, status);
  } catch (error) {
    console.error("Update Category Status Controller Error:", error);
    throw error;
  }
}

export async function getOfferingsByCategorySlugController(slug: string) {
  try {
    return await getOfferingsByCategorySlugService(slug);
  } catch (error) {
    console.error("Get Offerings By Category Slug Controller Error:", error);

    return {
      success: false,
      message: "Internal server error.",
    };
  }
}

export async function getOfferingBySlugController(slug: string) {
  try {
    return await getOfferingBySlugService(slug);
  } catch (error) {
    console.error("Get Offering By Slug Controller Error:", error);

    return {
      success: false,
      message: "Internal server error.",
    };
  }
}
