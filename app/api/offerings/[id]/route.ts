import {
  deleteOfferingController,
  getSingleOfferingController,
  updateOfferingController,
  updateOfferingStatusController,
} from "@/backend/controllers/offeringController";
import { verifyToken } from "@/backend/middleware/authMiddleware";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const offering = await getSingleOfferingController(Number(id));
    return NextResponse.json(
      {
        success: true,
        offering,
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

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
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

    const user = verifyToken(token);
    const { id } = await params;
    const formData = await request.formData();

    const image = formData.get("image") as File | null;

    const offering = {
      offering_category_id: Number(formData.get("offering_category_id")),
      performer_name: String(formData.get("performer_name")),
      small_description: String(formData.get("small_description")),
      large_description: String(formData.get("large_description")),
      page_url: String(formData.get("page_url")),
      soundcloud_link: String(formData.get("soundcloud_link")),
      status: String(formData.get("status")) as "ACTIVE" | "INACTIVE",
      image_path: image, // Pass the File object
    };

    await updateOfferingController(Number(id), offering, user.id);
    return NextResponse.json(
      {
        success: true,
        message: "Offering updated successfully",
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    await deleteOfferingController(Number(id));

    return NextResponse.json(
      {
        success: true,
        message: "Offering deleted successfully",
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

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();

    await updateOfferingStatusController(Number(id), body);
    return NextResponse.json(
      {
        success: true,
        message: "Offering status updated successfully",
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
