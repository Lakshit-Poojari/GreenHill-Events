import { verifyToken } from "@/backend/middleware/authMiddleware";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookiesStore = await cookies();

  const token = cookiesStore.get("token")?.value;

  if (!token) {
    return NextResponse.json({ message: "Unauthorised" }, { status: 401 });
  }
  try {
    const user = verifyToken(token);

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Invalid token" },
      { status: 401 },
    );
  }
}
