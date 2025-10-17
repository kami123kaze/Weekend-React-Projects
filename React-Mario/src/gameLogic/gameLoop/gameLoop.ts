import renderStart from "../renderStart";
import charUpdation from "../updationLogic/charUpdation";
import cloudUpdation from "../updationLogic/cloudUpdation";

let animationId: number | null = null;

export default function startGameLoop(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  char: React.RefObject<Character>,
  clouds: React.RefObject<Cloud[]>,
  start: boolean,
  images: Record<string, HTMLImageElement>
): void {

  if (!start) {
    if (animationId) cancelAnimationFrame(animationId);
    return;
  }

  function gameLoop() {
    // updates
    cloudUpdation(clouds, canvas);
    charUpdation(char)

    // renders
    renderStart(ctx, canvas, char, clouds, images);

    // next frame
    animationId = requestAnimationFrame(gameLoop);
  }

  // cancel any existing loop before starting a new one
  if (animationId) cancelAnimationFrame(animationId);
  animationId = requestAnimationFrame(gameLoop);
}
