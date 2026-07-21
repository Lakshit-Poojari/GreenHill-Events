import { deleteCaseStudiesController, getSingleCaseStudiesController, updateCaseStudiesController } from "@/backend/controllers/caseStudyController";
import { CaseStudyStatus } from "@/backend/types/caseStudies";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest, {params}:{params:Promise<{id:string}>}){
    try {
        const {id} = await params

        const caseStudy = await getSingleCaseStudiesController(Number(id))
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

export async function PUT(request:NextRequest, {params}:{params:Promise<{id:string}>}){
    try {
        const {id} = await params
        const formData = await request.formData()

        const body = {
            title: formData.get("title") as string,
            image: (formData.get("image") as File),
            description: formData.get("description") as string,
            youtube_url: (formData.get("youtube_url") as string) || undefined,
            status: formData.get("status") as CaseStudyStatus
        }
        
        await updateCaseStudiesController(Number(id), body)
        return NextResponse.json(
            {
                success: true,
                message: "Case study updated successfully"
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

export async function DELETE(request:NextRequest, {params}:{params:Promise<{id:string}>}){
    try {
        const {id} = await params
        await deleteCaseStudiesController(Number(id))
        return NextResponse.json(
            {
                success:true,
                message:"Case study deleted successfully"
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