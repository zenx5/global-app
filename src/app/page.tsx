"use client";
import { useState } from "react";

export default function Page(){
  const [listening, setListening] = useState(false);

  const handlerListent = () => {
    setListening(!listening);
    // get sound of computer
    
  }

  return <div className="flex items-center justify-center w-screen h-screen">
    <audio src="https://uk24freenew.listen2myradio.com/live.mp3?typeportmount=s1_31668_stream_49719824" controls></audio>

    
  </div>
}