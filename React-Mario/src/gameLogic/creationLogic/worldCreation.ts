import floorCreation from "./floorCreation";
import skyCreation from "./skyCreation";

export default function worldCreation(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  skyCreation(ctx,canvas)
  floorCreation(ctx,canvas)
  
}
