import {
  createUserController,
  getAllUserController,
} from "@/backend/controllers/userController";
import { verifyToken } from "@/backend/middleware/authMiddleware";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await getAllUserController();
    return NextResponse.json({ success: true, users }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Internal Server Error",
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
        { status: 401 },
      );
    }

    const decode = verifyToken(token);

    console.log(decode);

    if (decode.role !== "SUPER_ADMIN") {
      return NextResponse.json(
        {
          success: false,
          message: "Only SUPER_ADMIN can create users.",
        },
        { status: 403 },
      );
    }
    const body = await request.json();

    const result = await createUserController({
      ...body,
      created_by: decode.id,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User created successfull",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Internal Error",
      },
      { status: 400 },
    );
  }
}
