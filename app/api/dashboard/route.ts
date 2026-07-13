import { NextResponse } from "next/server";
import { getDashboardStatsController } from "@/backend/controllers/dashboardController";

export async function GET() {
  try {
    const data = await getDashboardStatsController();

    return NextResponse.json(
        {
            success: true,
            data,
        }
    );
  } catch (error) {
    console.error("Dashboard API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch dashboard statistics",
      },
      { status: 500 }
    );
  }
}