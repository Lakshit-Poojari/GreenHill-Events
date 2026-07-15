import { updateUserRoleController } from "@/backend/controllers/userController";
import { verifyToken } from "@/backend/middleware/authMiddleware";
import { NextRequest, NextResponse } from "next/server";

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
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);

    if (decoded.role !== "SUPER_ADMIN") {
      return NextResponse.json(
        {
          success: false,
          message: "Only SUPER_ADMIN can change user roles.",
        },
        { status: 403 }
      );
    }

    const { id } = await params;
    const { role } = await request.json();

    await updateUserRoleController(Number(id), role);

    return NextResponse.json(
      {
        success: true,
        message: "User role updated successfully.",
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
            : "Internal Server Error",
      },
      { status: 400 }
    );
  }
}