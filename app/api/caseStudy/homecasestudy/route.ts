import { NextResponse } from "next/server";
import { getHomeCaseStudiesController } from "@/backend/controllers/caseStudyController";

export async function GET() {
  try {
    const result = await getHomeCaseStudiesController();

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to fetch home case studies.",
      },
      { status: 500 }
    );
  }
}