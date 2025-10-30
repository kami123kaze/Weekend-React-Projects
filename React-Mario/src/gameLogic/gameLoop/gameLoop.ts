import enemyCollision from "../collisionLogic/enemyCollision";
import enemyCreation from "../creationLogic/enemyCreation";
import renderStart from "../renderStart";
import charUpdation from "../updationLogic/charUpdation";
import cloudUpdation from "../updationLogic/cloudUpdation";
import enemyUpdation from "../updationLogic/enemyUpdation";
import enemy from "../startPoints/enemies";
let animationId: number | null = null;


export default function startGameLoop(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  char: React.RefObject<Character>,
  clouds: React.RefObject<Cloud[]>,
  start: boolean
) {

  let enemies = enemy;
  if (animationId) cancelAnimationFrame(animationId);
  
  function gameLoop() {
    if ( start === false) {
      if (animationId) cancelAnimationFrame(animationId);
      animationId = null;
        return;
     
    }

    // update
    cloudUpdation(clouds, canvas);
    charUpdation(char, canvas);
    enemies = enemyUpdation(enemies, canvas);

    // collision
    enemyCollision(char, enemies);

    // render
    renderStart(ctx, canvas, char, clouds);
    enemyCreation(ctx, canvas, enemies);

    // next frame
    animationId = requestAnimationFrame(gameLoop);
  }

  // start first frame (only once)
  gameLoop();
  //cleanup added to stop loop when UE unmounts
  return () => {
    if (animationId) cancelAnimationFrame(animationId);
  };
}
