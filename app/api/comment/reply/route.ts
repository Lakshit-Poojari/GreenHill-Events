import { createAdminReplyController } from "@/backend/controllers/commentsController";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await createAdminReplyController(body);

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
