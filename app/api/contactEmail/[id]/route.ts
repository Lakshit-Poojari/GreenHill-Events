import { getSingleContactController } from "@/backend/controllers/contactController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const contact = await getSingleContactController(Number(id));

    return NextResponse.json(
      {
        success: true,
        contact,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("GET Contact By ID API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      { status: 500 },
    );
  }
}
