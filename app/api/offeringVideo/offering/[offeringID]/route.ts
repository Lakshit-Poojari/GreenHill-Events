import { getOfferingVideosByOfferingIdController } from "@/backend/controllers/offeringVideoController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ offeringID: string }> },
) {
  try {
    const { offeringID } = await params;

    const video = await getOfferingVideosByOfferingIdController(
      Number(offeringID),
    );

    return NextResponse.json(
      {
        success: true,
        data: video,
      },
      { status: 200 },
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
