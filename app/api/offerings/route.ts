import {
  createOfferingController,
  getAllOfferingController,
} from "@/backend/controllers/offeringController";
import { verifyToken } from "@/backend/middleware/authMiddleware";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const offering = await getAllOfferingController();
    return NextResponse.json({
      success: true,
      offering,
    });
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
        },
      );
    }

    const formData = await request.formData();

    const user = verifyToken(token);

    const image = formData.get("image") as File | null;

    if (!image) {
      return NextResponse.json(
        {
          success: false,
          message: "Image is required",
        },
        { status: 400 },
      );
    }

    const offering = {
      offering_category_id: Number(formData.get("offering_category_id")),
      performer_name: String(formData.get("performer_name")),
      small_description: String(formData.get("small_description")),
      large_description: String(formData.get("large_description")),
      page_url: String(formData.get("page_url")),
      soundcloud_link: String(formData.get("soundcloud_link")),
      status: String(formData.get("status")) as "ACTIVE" | "INACTIVE",
      image_path: image, // Pass the File object
      created_by: user.id,
    };

    await createOfferingController(offering, user.id);

    return NextResponse.json({
      success: true,
      message: "Offering created successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Internal server error",
      },
      { status: 400 },
    );
  }
}
