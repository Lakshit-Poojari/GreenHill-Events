import {
  createCaseStudiesController,
  getAllCaseStudiesController,
} from "@/backend/controllers/caseStudyController";
import { verifyToken } from "@/backend/middleware/authMiddleware";
import { CaseStudyStatus } from "@/backend/types/caseStudies";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const caseStudy = await getAllCaseStudiesController();
    return NextResponse.json(
      {
        success: true,
        caseStudy,
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
          error instanceof Error ? error.message : "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}

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
    const formData = await request.formData();

    const body = {
      title: formData.get("title") as string,
      image: formData.get("image") as File,
      description: formData.get("description") as string,
      youtube_url: (formData.get("youtube_url") as string) || undefined,
      status: formData.get("status") as CaseStudyStatus,
      created_by: user.id,
    };

    await createCaseStudiesController(body);

    return NextResponse.json(
      {
        success: true,
        message: "Case study created successfully",
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
          error instanceof Error ? error.message : "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}
