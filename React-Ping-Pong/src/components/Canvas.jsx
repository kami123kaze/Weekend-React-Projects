import React, { useRef,useEffect } from 'react'
import RenderAll from '../gameLogic/RenderAll';
import { getPaddles } from './Paddles';

import startGame from '../gameLogic/startGame';

function Canvas({start}) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const paddleRef = useRef(getPaddles());
  const ballRef = useRef(null);

    
useEffect(() => {
  const canvas = canvasRef.current;
  ctxRef.current = canvas.getContext("2d");

  RenderAll(ctxRef.current, canvas, paddleRef, ballRef);
}, []);

 useEffect(()=>{
    if(!start) return
    startGame(ctxRef.current,canvasRef.current,paddleRef,ballRef)
 },[start])

  return (
        <canvas ref={canvasRef} className='min-w-50 min-h-50 border-2 rounded-2xl'>

        </canvas>
  )
}

export default Canvas