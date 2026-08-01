import { NextRequest, NextResponse } from "next/server";
import { getOfferingsByCategorySlugController } from "@/backend/controllers/offeringController";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const result = await getOfferingsByCategorySlugController(slug);

  return NextResponse.json(result);
}