import {
  deleteCategoryController,
  getSingleCategoryController,
  updateCategoryController,
  updateCategoryStatusController,
} from "@/backend/controllers/categoryController";
import { CategoryStatus } from "@/backend/types/categoryType";
import { NextRequest, NextResponse } from "next/server";

export async function GET( request: NextRequest, { params }: { params: Promise<{ id: string }> },) {
  try {
    const { id } = await params;
    const category = await getSingleCategoryController(Number(id));

    return NextResponse.json(
      {
        success: true,
        category,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
}

export async function PUT( request: NextRequest, { params }: { params: Promise<{ id: string }> },) {
  try {
    const { id } = await params;
    const formData = await request.formData();

    const body = {
      category_name: formData.get("category_name") as string,
      menu_name: formData.get("menu_name") as string,
      description: formData.get("description") as string,
      long_description: formData.get("long_description") as string,
      status: formData.get("status") as CategoryStatus,
      image: formData.get("image") as File | null,
    };

    console.log({
      id,
      category_name: formData.get("category_name"),
      menu_name: formData.get("menu_name"),
      description: formData.get("description"),
      long_description: formData.get("long_description"),
      status: formData.get("status"),
      image: formData.get("image"),
    });

    await updateCategoryController(Number(id), body);
    return NextResponse.json(
      {
        success: true,
        message: "Category  updated successfully",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Internal server error",
      },
      {
        status: 400,
      },
    );
  }
}

export async function PATCH( request: NextRequest, { params }: { params: Promise<{ id: string }> },) {
  try {
    const { id } = await params;

    const body = await request.json();
    await updateCategoryStatusController(Number(id), body);
    return NextResponse.json(
      {
        success: true,
        message: "Category updated successfully",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Internal Server Error",
      },
      {
        status: 400,
      },
    );
  }
}

export async function DELETE( request: NextRequest, { params }: { params: Promise<{ id: string }> },) {
  try {
    const { id } = await params;
    await deleteCategoryController(Number(id));

    return NextResponse.json(
      {
        success: true,
        message: "Category deleted successfully",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Internal server error",
      },
      {
        status: 400,
      },
    );
  }
}
