"use client"
import useSocket from "@/tools/useSocket"

export default function Page(){
    const { message, isConnected } = useSocket()

    return <div className="flex flex-col items-center justify-center w-screen h-screen">
        <p>Connected: {isConnected.toString()}</p>
        <textarea disabled value={message} className="w-1/2 h-1/3 border border-black"></textarea>
    </div>
}