import { createCommentController } from "@/backend/controllers/commentsController";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    await createCommentController(body);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your response.",
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

export async function GET(request: NextRequest) {
  try {
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
