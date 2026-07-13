import { createOfferingVideoController, getAllOfferingVideoController } from "@/backend/controllers/offeringVideoController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const video = await getAllOfferingVideoController();

    return NextResponse.json(
      {
        success: true,
        video,
      },
      { status: 200 }
    );
  } catch (error) {
        return NextResponse.json(
            {
                success:false,
                message:error instanceof Error?
                        error.message : "Internal server error"
            },
            {
                status:400
            }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const video = await createOfferingVideoController(body);

    return NextResponse.json(
      {
        success: true,
        message: "Offering video created successfully",
        video,
      },
      { status: 201 }
    );
  } catch (error: any) {
        return NextResponse.json(
            {
                success:false,
                message:error instanceof Error?
                        error.message : "Internal server error"
            },
            {
                status:400
            }
    );
  }
}