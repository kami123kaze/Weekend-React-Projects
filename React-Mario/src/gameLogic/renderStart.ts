import charCreation from "./creationLogic/charCreation";
import worldCreation from "./creationLogic/worldCreation";


export default function renderStart(ctx: CanvasRenderingContext2D,canvas:HTMLCanvasElement,char:React.RefObject<Character>,clouds:React.RefObject<Cloud[]>
):void{

      ctx.clearRect(0, 0, canvas.width, canvas.height);
            worldCreation(ctx,canvas,clouds,)
                  charCreation(ctx,canvas,char)

      
   
}