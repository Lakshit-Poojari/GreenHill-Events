import {
  getSingleCommentController,
  updateCommentController,
} from "@/backend/controllers/commentsController";
import { verifyToken } from "@/backend/middleware/authMiddleware";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const comment = await getSingleCommentController(Number(id));

    return NextResponse.json(
      {
        success: true,
        message: "Comments fetched successfully.",
        comment,
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
          error instanceof Error
            ? error.message
            : "Failed to fetch the comment.",
      },
      {
        status: 500,
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

    await updateCommentController({
      ...body,
      id: Number(id),
      updated_by: user.id,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Comment updated successfully.",
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
          error instanceof Error
            ? error.message
            : "Failed to update the comment.",
      },
      {
        status: 500,
      },
    );
  }
}
