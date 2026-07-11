import { createUserController, getAllUserController } from "@/backend/controllers/userController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const users = await getAllUserController()
        return NextResponse.json({success:true, users}, {status:200})
    } catch (error) {
        return NextResponse.json(
            {
                success:false, 
                message:error instanceof Error
                        ? error.message
                        : "Internal Server Error",
            },
            {
                status: 500,
            }
        )
    }
}

export async function POST(request:NextRequest){
    try {
        const body = await request.json()

        const result = await createUserController(body)

        return NextResponse.json(
            {
                success:true,
                message:"User created successfull",
            },
            {
                status:201
            }
        )
    } catch (error) {
        return NextResponse.json(
            {
                success:false,
                message: error instanceof Error? error.message : "Internal Error"
            },
            {status:400}
        )
    }
}