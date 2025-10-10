import { useEffect, useRef } from "react";
import {renderStart} from "../gameLogic/index.ts"

function Canvas() {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);


  useEffect(()=>{
    const canvas = canvasRef.current;
    if(!canvas) return

    const ctx = canvas.getContext("2d");
    if(!ctx) return

    renderStart(ctx)
  },[])

  return (
    <div className="flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={900}
        height={400}
        className="border-2 rounded-2xl bg-white"
      ></canvas>
    </div>
  );
}

export default Canvas;
