import charCreation from "./creationLogic/charCreation";
import worldCreation from "./creationLogic/worldCreation";


export default function renderStart(ctx: CanvasRenderingContext2D,canvas:HTMLCanvasElement,char:React.RefObject<Character>,clouds:React.RefObject<Cloud[]>):void{

  // clear previous frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //  creating world {bg/floor}
        worldCreation(ctx,canvas,clouds)


  // creating character     
         charCreation(ctx,canvas,char)

        console.log(char)
      
   
}