import renderStart from "../renderStart"
import cloudUpdation from "../updationLogic/cloudUpdation"

export default function startGameLoop(ctx: CanvasRenderingContext2D,canvas:HTMLCanvasElement,char:React.RefObject<Character>,clouds:React.RefObject<Cloud[]>,start:boolean):void{
  if(!start) return
   function startGame(){
      //looping   
      requestAnimationFrame(startGame)

        //changes 
        cloudUpdation(clouds,canvas)
        console.log(clouds)

        //recreation
        renderStart(ctx,canvas,char,clouds)
   }

   requestAnimationFrame(startGame)
}