import React, { useRef,useEffect } from 'react'
import RenderAll from '../gameLogic/RenderAll';
import { getPaddles } from './Paddles';

import startGame from '../gameLogic/startGame';

function Canvas({start}) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const paddleRef = useRef(getPaddles());
  const ballRef = useRef(null);
  const stopRef = useRef(null);

 
   

    useEffect(() => {
      const canvas = canvasRef.current;
      ctxRef.current = canvas.getContext("2d");

      RenderAll(ctxRef.current, canvas, paddleRef, ballRef);
    }, []);

    useEffect(()=>{
        if (!start) {
          
        if (stopRef.current  !== null) {
            cancelAnimationFrame(stopRef.current);
            stopRef.current = null;
          }
          return;
        }

        if (!ballRef.current) return;
        startGame(ctxRef.current,canvasRef.current,paddleRef.current,ballRef.current,stopRef)
    },[start])



  return (
    <div>
        <canvas ref={canvasRef} className='min-w-50 min-h-50 border-2 rounded-2xl'>
        </canvas>
        
    </div>    
  )
}

export default Canvas