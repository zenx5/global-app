"use client"
import useSocket from "@/tools/useSocket"
import { useState } from "react"

export default function Page(){
    const [content, setContent] = useState("")
    const { isConnected, send } = useSocket()

    const handlerChange = (ev:any) => {
        setContent(ev.target.value)
        send(ev.target.value)
    }


    return <div className="flex flex-col items-center justify-center w-screen h-screen">
        {/* <Link href={`/receive/${encodeURIComponent(offer) }`} target="_blank">Ir</Link> */}
        <p>Connected: {isConnected.toString()}</p>
        <textarea onChange={handlerChange} value={content} className="w-1/2 h-1/3 border border-black"></textarea>
    </div>
}