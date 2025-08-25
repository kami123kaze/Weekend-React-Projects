
import BallCreation from "./BallCreation"
import PadCreation from "./PadCreation"

export default function RenderAll(ctx,canvas,paddleRef,ballRef){
  
   PadCreation(ctx,canvas,paddleRef.current)
   ballRef.current = BallCreation(ctx,canvas)
}