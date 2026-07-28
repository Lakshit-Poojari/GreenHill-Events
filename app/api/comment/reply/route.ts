import { createAdminReplyController } from "@/backend/controllers/commentsController";
import { verifyToken } from "@/backend/middleware/authMiddleware";
import { NextRequest, NextResponse } from "next/server";

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
    await createAdminReplyController({...body, created_by:user.id});

    return NextResponse.json(
      {
        success: true,
        message: "Reply posted successfully.",
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
            : "Failed to submit your comment.",
      },
      {
        status: 500,
      },
    );
  }
}
