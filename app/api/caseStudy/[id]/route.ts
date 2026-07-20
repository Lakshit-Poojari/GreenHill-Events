import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest, id:number){
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

export async function PUT(request:NextRequest, id:number){
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

export async function DELETE(request:NextRequest, id:number){
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