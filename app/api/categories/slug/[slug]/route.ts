import { NextRequest, NextResponse } from "next/server";
import { getCategoryBySlugController } from "@/backend/controllers/categoryController";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const result = await getCategoryBySlugController(slug);

  return NextResponse.json(result);
}