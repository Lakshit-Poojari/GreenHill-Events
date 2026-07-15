import { deleteofferingCategoryController, getSingleofferingCategoryController, updateofferingCategoryController, updateofferingCategoryStatusController } from "@/backend/controllers/offeringCategoryController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}:{params:Promise<{id:string}>}){
    try {
        const {id} = await params;
        const offeringCategory = await getSingleofferingCategoryController(Number(id))

        return NextResponse.json(
            {
                success:true,
                offeringCategory
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
                        error.message :
                        "Internal Server Error"
            }
        )
    }
}

export async function PUT(request:NextRequest, {params}:{params:Promise<{id:string, slug:string}>}){
    try {
        const {id, slug} = await params;
        const body = await request.json()

        await updateofferingCategoryController(Number(id), body, String(slug) )
        return NextResponse.json(
            {
                success:true,
                message:"Offering Category detail updated successfully"
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

export async function PATCH(request:NextRequest, { params }: { params: Promise<{ id: string }>}){
    try {
        const {id} = await params
        const body = await request.json()

        await updateofferingCategoryStatusController(Number(id), body)
        return NextResponse.json(
            {
                success: true,
                message: "Offering category status updated successfully",
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

export async function DELETE({params}:{params:Promise<{id:string}>}){
    try {
        const {id} = await params;
        await deleteofferingCategoryController(Number(id))

        return NextResponse.json(
            {
                success:true,
                message:"Offering Category deleted successfully"
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