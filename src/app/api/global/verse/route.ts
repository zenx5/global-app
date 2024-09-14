import { NextResponse } from "next/server";
import bible from "./../../../../tools/es_rvr.json"

export async function GET() {

    const capther = Math.floor( Math.random()*bible[19].chapters.length )
    const verse = Math.floor( Math.random()*bible[19].chapters[capther].length )

    return NextResponse.json({
        status: 200,
        message: 'Verse fetched successfully',
        data: {
            quote: bible[19].chapters[capther][verse],
            reference: `Proverbios ${capther + 1}:${verse + 1}`
        },
    });
}