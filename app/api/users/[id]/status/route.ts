import { updateUserStatusModel } from "@/backend/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request:NextRequest, { params }: { params: Promise<{ id: string }>}){
    try {
        const {id} = await params
        const body = await request.json()

        await updateUserStatusModel(Number(id), body)
        return NextResponse.json(
            {
                success: true,
                message: "User status updated successfully",
            },
            {
                status: 200,
            }
        )
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Internal Server Error",
            },
            {
                status: 400,
            }   
        )     
    }
}