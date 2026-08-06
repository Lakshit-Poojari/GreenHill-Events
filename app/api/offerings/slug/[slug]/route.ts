import { NextRequest, NextResponse } from "next/server";
import { getOfferingBySlugController } from "@/backend/controllers/offeringController";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;

    const result = await getOfferingBySlugController(slug);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Get Offering By Slug Route Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      { status: 500 },
    );
  }
}
