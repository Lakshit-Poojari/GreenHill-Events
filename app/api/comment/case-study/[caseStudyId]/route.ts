import { getCommentsByCaseStudyController } from "@/backend/controllers/commentsController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest, {params}:{params:Promise<{id:string}>}) {
  try {
    const {id} = await params
    const caseStudyComment = await getCommentsByCaseStudyController(Number(id))

    return NextResponse.json(
        {
            success:true,
            message:"Fetched case study comments successfully",
            caseStudyComment
        },
        {
            status:200
        }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to fetch case study comments.",
      },
      {
        status: 500,
      },
    );
  }
}
