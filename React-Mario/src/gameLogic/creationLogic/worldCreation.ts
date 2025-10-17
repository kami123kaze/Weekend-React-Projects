import floorCreation from "./floorCreation";
import skyCreation from "./skyCreation";
import cloudCreation from "./cloudCreation";


export default function worldCreation(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement,cloudsRef: React.RefObject<Cloud[]>,  images: Record<string, HTMLImageElement>
) {
  skyCreation(ctx,canvas)
    floorCreation(ctx,canvas, images)
      cloudCreation(ctx,cloudsRef);

  
}
