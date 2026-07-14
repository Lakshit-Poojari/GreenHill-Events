import { createCategoryController, getAllCategoryController } from "@/backend/controllers/categoryController";
import { verifyToken } from "@/backend/middleware/authMiddleware";
import { CategoryStatus } from "@/backend/types/categoryType";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const category = await getAllCategoryController()

        return NextResponse.json(
            {
                success:true,
                category
            },
            {
                status:201
            }
        )
    } catch (error) {
        return NextResponse.json(
            {
                success:false,
                message:error instanceof Error? 
                        error.message : "Internal server error"
            },
            {
                status:500
            }
        )
    }
}


export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;

    if (!token) {
    return NextResponse.json(
        {
        success: false,
        message: "Unauthorized",
        },
        {
        status: 401,
        }
    );
    }
    const user = verifyToken(token);
    console.log("Decoded Token:", user);
    const formData = await request.formData();

    const image = formData.get("image") as File;

    const body = {
      category_name: formData.get("category_name") as string,
      menu_name: formData.get("menu_name") as string,
      description: formData.get("description") as string,
      long_description: formData.get("long_description") as string,
      status: formData.get("status") as CategoryStatus,
      created_by: user.id,
      image,
      
    };

    console.log(body);

    await createCategoryController(body);

    return NextResponse.json(
      {
        success: true,
        message: "Category created successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}