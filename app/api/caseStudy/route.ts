import { getAllCaseStudiesController } from "@/backend/controllers/caseStudyController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){
    try {
        const caseStudy = await getAllCaseStudiesController()
        return NextResponse.json(
            {
                success:true,
                caseStudy
            },
            {
                status:200
            }
        )
    } catch (error) {
        return NextResponse.json(
            {
                success:false,
                message:error instanceof Error ?
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
        
        return NextResponse.json(
            {},
            {}
        )
    } catch (error) {
        return NextResponse.json(
            {
                success:false,
                message:error instanceof Error ?
                error.message : "Internal server error"
            },
            {
                status:500
            }
        )
    }    
    
} 