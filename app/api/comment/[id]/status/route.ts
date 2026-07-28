import { updateCommentStatusController } from "@/backend/controllers/commentsController";
import { verifyToken } from "@/backend/middleware/authMiddleware";
import { NextRequest, NextResponse } from "next/server";

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

    const result = await updateCommentStatusController(Number(id), {
      ...body,
      approved_by: user.id,
    });
    return NextResponse.json(
      {
        success: true,
        message: "Comment status updated successfully.",
        data: result,
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
            : "Failed to update the status of comment.",
      },
      {
        status: 500,
      },
    );
  }
}
