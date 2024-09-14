import { NextResponse } from "next/server"

export function GET() {
    console.log("GET /api/config ---")

    return new NextResponse(JSON.stringify({
        url: "https://uk24freenew.listen2myradio.com/live.mp3?typeportmount=s1_31668_stream_49719824"
    }),{
        headers: {
            origin: "*"
        }
    })
}