import { useEffect, useState } from "react"
import { socket } from "@/socket"

export default function useSocket() {
    const [id, setId] = useState("")
    const [isConnected, setIsConnected] = useState(false)
    const [content, setContent] = useState("")

    useEffect(()=>{
        const onConnect = () => {
            setIsConnected(true)
            socket.io.engine.on("upgrade", (transport)=>{
                setId(socket.id as string)
                socket.on("message", (msg:string)=>{
                    setContent(msg)
                })
                socket.emit("list", [socket.id])
            })
        }

        const onDisconnect = () => {
            setIsConnected(false)
        }
        socket.on("disconnect", onDisconnect)

        if( socket.connected ) {
            onConnect()
        }
        return () => {
            socket.off("connect", onConnect)
            socket.off("disconnect", onDisconnect)
        }
    },[isConnected])

    const send = (msg:string) => {
        socket.emit("message", msg)
    }

    return { id, isConnected, message:content, send }
}