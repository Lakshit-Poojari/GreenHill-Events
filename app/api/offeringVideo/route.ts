import {
  createOfferingVideoController,
  getAllOfferingVideoController,
} from "@/backend/controllers/offeringVideoController";
import { verifyToken } from "@/backend/middleware/authMiddleware";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const video = await getAllOfferingVideoController();

    return NextResponse.json(
      {
        success: true,
        data: video,
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
        status: 500,
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

    const user = verifyToken(token);
    const body = await request.json();

    const video = await createOfferingVideoController({
      ...body,
      status: body.status ?? "ACTIVE",
      created_by: user.id,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Offering video created successfully",
        video,
      },
      {
        status: 201,
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
