import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const { name, phone, setPrayer } = await request.json();
    
    return NextResponse.json({
        status: 201,
        title: 'Prayer Request',
        message: 'Prayer request sent successfully',
    });

}

export async function GET(request:NextRequest) {

    return NextResponse.json({
        status: 200,
        message: 'Prayer request fetched successfully',
    });
}