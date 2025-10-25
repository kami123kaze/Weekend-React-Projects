import enemyCreation from "../creationLogic/enemyCreation";
import renderStart from "../renderStart";
import charUpdation from "../updationLogic/charUpdation";
import cloudUpdation from "../updationLogic/cloudUpdation";
import enemyUpdation from "../updationLogic/enemyUpdation";

let animationId: number | null = null;
let enemies: Enemy1[] = [
  { x: 600, y: 283, w: 50, h: 50, speed: 5 },
  { x: 900, y: 283, w: 50, h: 50, speed: 5 },
];

export default function startGameLoop(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  char: React.RefObject<Character>,
  clouds: React.RefObject<Cloud[]>,
  start: boolean,
): void {

  

  function gameLoop() {
    if (!start) {
    if (animationId) cancelAnimationFrame(animationId);
    return;
  }
    // updates
    cloudUpdation(clouds, canvas);
    charUpdation(char,canvas)
    enemies = enemyUpdation(enemies, canvas);
    //collisions
    
    // renders
    renderStart(ctx, canvas, char, clouds);
    enemyCreation(ctx,canvas,enemies)

    // next frame
    animationId = requestAnimationFrame(gameLoop);
  }

  // cancel any existing loop before starting a new one
  if (animationId) cancelAnimationFrame(animationId);
  animationId = requestAnimationFrame(gameLoop);
}
