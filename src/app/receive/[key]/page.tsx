"use client"

import { useEffect, useRef } from "react"

export default function Page({ params }:{ params:{ key:string } }){
    const key = decodeURIComponent(params.key)
    console.log( key )
    const refAudio = useRef<HTMLAudioElement>(null)

    useEffect(()=>{
        const p2p = new RTCPeerConnection()
        p2p.ontrack = (ev) => {
            const [stream] = ev.streams
            console.log(stream)
            if( refAudio.current ){
                refAudio.current.srcObject = stream
                refAudio.current!.play()
            }
        }
        p2p.onicecandidate = (ev) => {
            if(ev.candidate){
                console.log(ev.candidate )
            }
        }
        p2p.setRemoteDescription(new RTCSessionDescription({type:'offer', sdp:key}))
        .then(()=>{
            console.log("here")
            return p2p.createAnswer()
        })
        .then(answer => {
            console.log(answer)
            return p2p.setLocalDescription(answer)
        })
        return () => {
            p2p.close()
        }
    },[key])


    return <div>
        <audio ref={refAudio} controls autoPlay />
    </div>
}