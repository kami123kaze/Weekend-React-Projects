import floorCreation from "./floorCreation";
import skyCreation from "./skyCreation";
import cloudCreation from "./cloudCreation";


export default function worldCreation(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement,cloudsRef: React.RefObject<Cloud[]>) {
  skyCreation(ctx,canvas)
    floorCreation(ctx,canvas)
      cloudCreation(ctx,cloudsRef);

  
}
