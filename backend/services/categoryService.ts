import { uploadImage } from "../lib/uploadImage";
import fs from "fs/promises";
import path from "path";
import {
  createCategoryModel,
  deleteCategoryModel,
  getAllCategoryModel,
  getCategoryBySlug,
  getSingleCategoryModel,
  updateCategoryModel,
  updateCategoryStatusModel,
} from "../models/categoryModel";
import {
  CategoryStatus,
  CreateCategoryType,
  UpdateCategoryType,
} from "../types/categoryType";

export async function createCategoryService(category: CreateCategoryType) {
  try {
    const slug = category.category_name
      .toLowerCase()
      .trim()
      .replace(/&/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    if (
      !category.category_name ||
      !category.image ||
      !category.description ||
      !category.status ||
      !category.created_by
    ) {
      if (!category.category_name) throw new Error("Category Name Required");
      if (!category.image) throw new Error("Image Required");
      if (!category.description) throw new Error("Description Required");
      if (!category.status) throw new Error("Status Required");
      if (!category.created_by) throw new Error("Created By Required");
    }

    if (category.has_details) {
      if (!category.menu_name) {
        throw new Error("Menu Name Required");
      }

      if (!category.long_description) {
        throw new Error("Long Description Required");
      }
    }

    const existingCategory = await getCategoryBySlug(slug);

    if (existingCategory.length > 0) {
      throw new Error("Category already exists.");
    }

    const imagePath = await uploadImage(category.image, "categories");

    const result = await createCategoryModel({
      ...category,
      slug,
      image: imagePath as any,
    });

    return result;
  } catch (error) {
    console.error("Create Category Service Error", error);
    throw error;
  }
}

export async function updateCategoryService(
  id: number,
  category: UpdateCategoryType,
  updatedBy: number,
) {
  try {
    const slug = category.category_name
      .toLowerCase()
      .trim()
      .replace(/&/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    if (!category.category_name || !category.description || !category.status) {
      throw new Error("Category Name, Description and Status are required.");
    }

    if (category.has_details) {
      if (!category.menu_name) {
        throw new Error("Menu Name is required.");
      }

      if (!category.long_description) {
        throw new Error("Long Description is required.");
      }
    }

    // Rest of your code...
    const existingCategory = await getSingleCategoryModel(id);

    if (existingCategory.length === 0) {
      throw new Error("Category not found.");
    }

    const duplicateCategory = await getCategoryBySlug(slug);

    if (duplicateCategory.length > 0 && duplicateCategory[0].id !== id) {
      throw new Error("Category already exists.");
    }

    // Keep existing image by default
    let imagePath = existingCategory[0].image;

    // Upload new image if provided
    if (category.image instanceof File && category.image.size > 0) {
      imagePath = await uploadImage(category.image, "categories");

      // Delete old image
      if (existingCategory[0].image) {
        const oldImagePath = path.join(
          process.cwd(),
          "uploads",
          existingCategory[0].image,
        );

        try {
          await fs.unlink(oldImagePath);
        } catch (error) {
          console.warn("Old image not found:", error);
        }
      }
    }

    const result = await updateCategoryModel(
      id,
      {
        ...category,
        image: imagePath,
      },
      slug,
      updatedBy,
    );

    return result;
  } catch (error) {
    console.error("Update Category Service Error", error);
    throw error;
  }
}

export async function getAllCategoryService() {
  try {
    const result = await getAllCategoryModel();
    return result;
  } catch (error) {
    console.error("Get All Category Service Error", error);
    throw error;
  }
}

export async function getSingleCategoryService(id: number) {
  try {
    const [result] = await getSingleCategoryModel(id);
    return result;
  } catch (error) {
    console.error("Get All Category Service Error", error);
    throw error;
  }
}

export async function deleteCategoryService(id: number) {
  try {
    const result = await deleteCategoryModel(id);

    return result;
  } catch (error) {
    console.error("Delete Category Service Error", error);
    throw error;
  }
}

export async function updateCategoryStatusService(
  id: number,
  status: CategoryStatus,
) {
  try {
    if (!id || !status) {
      throw new Error("Category ID and status are required");
    }

    const existingCategory = await getSingleCategoryModel(id);

    if (!existingCategory || existingCategory.length === 0) {
      throw new Error("Category not found");
    }

    return await updateCategoryStatusModel(id, status);
  } catch (error) {
    console.error("Update Category Status Service Error:", error);
    throw error;
  }
}
