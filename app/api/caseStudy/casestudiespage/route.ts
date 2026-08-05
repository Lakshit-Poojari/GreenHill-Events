import { NextResponse } from "next/server";
import { getCaseStudyController, } from "@/backend/controllers/caseStudyController";

export async function GET() {
  try {
    const result = await getCaseStudyController();

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