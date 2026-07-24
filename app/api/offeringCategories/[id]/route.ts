import {
  deleteofferingCategoryController,
  getSingleofferingCategoryController,
  updateofferingCategoryController,
  updateofferingCategoryStatusController,
} from "@/backend/controllers/offeringCategoryController";
import { verifyToken } from "@/backend/middleware/authMiddleware";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const offeringCategory = await getSingleofferingCategoryController(
      Number(id),
    );

    console.log(offeringCategory[0], "result");

    return NextResponse.json(
      {
        success: true,
        offeringCategory,
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

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; slug: string }> },
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
    const { id, slug } = await params;
    const body = await request.json();
    console.log(body);

    await updateofferingCategoryController(Number(id), body, user.id);
    return NextResponse.json(
      {
        success: true,
        message: "Offering Category detail updated successfully",
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
    const body = await request.json();

    await updateofferingCategoryController(Number(id), body, user.id);
    return NextResponse.json(
      {
        success: true,
        message: "Offering category status updated successfully",
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    await deleteofferingCategoryController(Number(id));

    return NextResponse.json(
      {
        success: true,
        message: "Offering Category deleted successfully",
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
