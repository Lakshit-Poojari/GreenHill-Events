import {
  createOfferingCategoryService,
  deleteOfferingCategoryService,
  getAllOfferingCategoryService,
  getSingleOfferingCategoryService,
  updateOfferingCategoryService,
  updateOfferingCategoryStatusService,
} from "../services/offeringCategoryService";
import {
  createOfferingCategory,
  offeringCategoryStatus,
  updateOfferingCategory,
} from "../types/offeringCategoryType";

export async function createofferingCategoryController(
  category: createOfferingCategory,
  createdby: number,
) {
  try {
    const result = await createOfferingCategoryService(category, createdby);
    return result;
  } catch (error) {
    console.error("Create offering Category Controller Error:", error);
    throw error;
  }
}

export async function updateofferingCategoryController(
  id: number,
  category: updateOfferingCategory,
  updatedBy: number,
) {
  try {
    const result = await updateOfferingCategoryService(id, category, updatedBy);
    return result;
  } catch (error) {
    console.error("Update offering Category  Controller Error:", error);
    throw error;
  }
}

export async function getAllofferingCategoryController() {
  try {
    const result = await getAllOfferingCategoryService();
    return result;
  } catch (error) {
    console.error("Get all offering Category Controller Error:", error);
    throw error;
  }
}

export async function getSingleofferingCategoryController(id: number) {
  try {
    const result = await getSingleOfferingCategoryService(id);
    return result;
  } catch (error) {
    console.error("Get single offering Category Controller Error:", error);
    throw error;
  }
}

export async function deleteofferingCategoryController(id: number) {
  try {
    const result = await deleteOfferingCategoryService(id);
    return result;
  } catch (error) {
    console.error("Delete offering Category Controller Error:", error);
    throw error;
  }
}

export async function updateofferingCategoryStatusController(
  id: number,
  status: offeringCategoryStatus,
) {
  try {
    return await updateOfferingCategoryStatusService(id, status);
  } catch (error) {
    console.error("Update offering Category Status Controller Error:", error);
    throw error;
  }
}
