import { createOfferingController, getAllOfferingController } from "@/backend/controllers/offeringController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const offering = await getAllOfferingController()
        return NextResponse.json(
            {
                success:true,
                offering
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
                status:400
            }
        )        
    }
}

export async function POST(request:NextRequest){
    try {
        const body = await request.json()
        const result = await createOfferingController(body)
        return NextResponse.json(
            {
                success:true,
                message:"Offering created successfully",
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
                status:400
            }
        )        
    }
}