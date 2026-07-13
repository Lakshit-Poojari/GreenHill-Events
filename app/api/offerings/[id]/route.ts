import { deleteOfferingController, getSingleOfferingController, updateOfferingController, updateOfferingStatusController } from "@/backend/controllers/offeringController";
import { NextRequest, NextResponse } from "next/server";

export async function GET({params}:{params : Promise<{id:string}>}){
    try {
        const {id} = await params

        const offering = await getSingleOfferingController(Number(id))
        return NextResponse.json(
            {
                success:true,
                offering
            },
            {
                status:200
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

export async function PUT(request:NextRequest, {params}:{params : Promise<{id:string, slug:string}>}){
    try {
        const {id, slug} = await params;
        const body = await request.json()

        await updateOfferingController(Number(id), body, String(slug))
        return NextResponse.json(
            {
                success:true,
                message:"Offering updated successfully"
            },
            {
                status:200
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

export async function DELETE({params}:{params : Promise<{id:string}>}){
    try {
        const {id} = await params;
        await deleteOfferingController(Number(id))

        return NextResponse.json(
            {
                success:true,
                message:"Offering deleted successfully"
            },
            {
                status:200
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

export async function PATCH(request:NextRequest, {params}:{params : Promise<{id:string}>}){
    try {
        const {id} = await params
        const body = await request.json()

        await updateOfferingStatusController(Number(id), body)
        return NextResponse.json(
            {
                success: true,
                message: "Offering status updated successfully",
            },
            {
                status: 200,
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