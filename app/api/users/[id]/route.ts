import {
  deleteUserController,
  getUserByIdController,
  updateUserController,
  updateUserStatusController,
} from "@/backend/controllers/userController";
import { NextRequest, NextResponse } from "next/server";

export async function GET( request: NextRequest, { params }: { params: Promise<{ id: string }> },) {
  try {
    const { id } = await params;
    const result = await getUserByIdController(Number(id));
    return NextResponse.json(
      {
        success: true,
        user: result,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
}

export async function PUT( request: NextRequest, { params }: { params: Promise<{ id: string }> },) {
  try {
    const { id } = await params;
    const body = await request.json();

    await updateUserController(Number(id), body);
    return NextResponse.json(
      {
        success: true,
        message: "User detail updated successfully",
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
        status: 400,
      },
    );
  }
}

export async function PATCH( request: NextRequest, { params }: { params: Promise<{ id: string }> },) {
  try {
    const { id } = await params;
    const body = await request.json();

    await updateUserStatusController(Number(id), body);
    return NextResponse.json(
      {
        success: true,
        message: "User status updated successfully",
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
          error instanceof Error ? error.message : "Internal Server Error",
      },
      {
        status: 400,
      },
    );
  }
}

export async function DELETE( request: NextRequest, { params }: { params: Promise<{ id: string }> },) {
  try {
    const { id } = await params;
    await deleteUserController(Number(id));

    return NextResponse.json(
      {
        success: true,
        message: "User deleted successfully",
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
        status: 400,
      },
    );
  }
}
