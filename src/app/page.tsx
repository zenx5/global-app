"use client";
import { useState } from "react";

export default function Page(){
  const [listening, setListening] = useState(false);

  const handlerListent = () => {
    setListening(!listening);
    // get sound of computer
    
  }

  return <div>

    <button onClick={handlerListent}>{listening ? 'Listening':'Listen'}</button>
  </div>
}