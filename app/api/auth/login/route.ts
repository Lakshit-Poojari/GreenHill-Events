import { loginUserController } from "@/backend/controllers/userController";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try {
        const body = await request.json() 
        const result = await loginUserController(body)

        const response = NextResponse.json(
            { 
                success:true, 
                message:"Login successful!", 
                user:result.user
            },
            {
                status:200
            }
        )

        response.cookies.set("token", result.token,{
            httpOnly:true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24,
        })

        return response
    } catch (error) {
        return NextResponse.json(
            {
                success:false, 
                message:error instanceof Error?
                 error.message:"Server Error"
            },
            {
                status:400
            }
        )
    }
}