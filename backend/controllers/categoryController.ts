import {
  createCategoryService,
  deleteCategoryService,
  getAllCategoryService,
  getSingleCategoryService,
  updateCategoryService,
  updateCategoryStatusService,
} from "../services/categoryService";
import {
  CategoryStatus,
  CreateCategoryType,
  UpdateCategoryType,
} from "../types/categoryType";

export async function createCategoryController(category: CreateCategoryType) {
  try {
    const result = await createCategoryService(category);

    return result;
  } catch (error) {
    console.error("Create Category Controller Error", error);
    throw error;
  }
}

export async function updateCategoryController(
  id: number,
  category: UpdateCategoryType,
  updatedBy: number,
) {
  try {
    const result = await updateCategoryService(id, category, updatedBy);

    return result;
  } catch (error) {
    console.error("Create Category Controller Error", error);
    throw error;
  }
}

export async function getAllCategoryController() {
  try {
    const result = await getAllCategoryService();

    return result;
  } catch (error) {
    console.error("Get All Category Controller Error", error);
    throw error;
  }
}

export async function getSingleCategoryController(id: number) {
  try {
    const result = await getSingleCategoryService(id);

    return result;
  } catch (error) {
    console.error("Get Single Category Controller Error", error);
    throw error;
  }
}

export async function deleteCategoryController(id: number) {
  try {
    const result = await deleteCategoryService(id);

    return result;
  } catch (error) {
    console.error("Delete Category Controller Error", error);
    throw error;
  }
}

export async function updateCategoryStatusController(
  id: number,
  status: CategoryStatus,
) {
  try {
    return await updateCategoryStatusService(id, status);
  } catch (error) {
    console.error("Update Category Status Controller Error:", error);
    throw error;
  }
}
