import { useEffect, useRef } from "react";
import {renderStart} from "../gameLogic"
import { useMovement } from "../gameLogic/customHooks/useMovement";

function Canvas() {
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const charRef   = useRef<Character>({
    x:0,
    y:0,
    scale:0,
    imgHeight:0,
    imgWidth:0,
    velocityY:0,
    isJumping:false,
    img:new Image()
  })
  useMovement(charRef)



  useEffect(()=>{
    const canvas = canvasRef.current;
    if(!canvas) return

    const ctx = canvas.getContext("2d");
    if(!ctx) return

    renderStart(ctx,canvas,charRef)
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
