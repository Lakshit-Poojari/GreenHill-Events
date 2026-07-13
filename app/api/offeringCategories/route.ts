import { createofferingCategoryController, getAllofferingCategoryController } from "@/backend/controllers/offeringCategoryController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const offeringCategory = await getAllofferingCategoryController()

        return NextResponse.json(
            {
                success:true,
                offeringCategory
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

        await createofferingCategoryController(body)

        return NextResponse.json(
            {
                success:true,
                message:"Offering category created successfully"
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