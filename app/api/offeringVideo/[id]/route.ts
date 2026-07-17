import { NextRequest, NextResponse } from "next/server";
import {deleteOfferingVideoController, getSingleOfferingVideoController, updateOfferingVideoController,} from "@/backend/controllers/offeringVideoController";
import { verifyToken } from "@/backend/middleware/authMiddleware";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    const result = await getSingleOfferingVideoController(Number(id));

    return NextResponse.json(
      {
        success: true,
        data: result,
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

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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
        }
      );
    }

    const user = verifyToken(token);

    const { id } = await params;
    const body = await request.json();

    const result = await updateOfferingVideoController(
      {
        ...body,
        updated_by: user.id,
      },
      Number(id)
    );

    return NextResponse.json(
      {
        success: true,
        message: "Offering video updated successfully",
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Internal server error",
      },
      { status: 400 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    await deleteOfferingVideoController(Number(id));

    return NextResponse.json(
      {
        success: true,
        message: "Offering video deleted successfully",
      },
      { status: 200 }
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