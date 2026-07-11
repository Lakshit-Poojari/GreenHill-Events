import { createCategoryController, getAllCategoryController } from "@/backend/controllers/categoryController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const category = await getAllCategoryController()

        return NextResponse.json(
            {
                success:true,
                category
            },
            {
                status:201
            }
        )
    } catch (error) {
        return NextResponse.json(
            {
                success:false,
                message:error instanceof Error? 
                        error.message : "Internal server error"
            },
            {
                status:500
            }
        )
    }
}


export async function POST(request:NextRequest){
    try {
        const body = await request.json()

        await createCategoryController(body)

        return NextResponse.json(
            {
                success:true,
                message:"Category created successfully"
            },
            {
                status:201
            }
        )
    } catch (error) {
        return NextResponse.json(
            {
                success:false,
                message:error instanceof Error? 
                        error.message : "Internal server error"
            },
            {
                status:500
            }
        )        
    }
}