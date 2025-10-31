import enemyCollision from "../collisionLogic/enemyCollision";
import platformCollision from "../collisionLogic/platformCollision";
import enemyCreation from "../creationLogic/enemyCreation";
import floatingPlatformCreation from "../creationLogic/floatingPlatformCreation";
import renderStart from "../renderStart";
import charUpdation from "../updationLogic/charUpdation";
import cloudUpdation from "../updationLogic/cloudUpdation";
import enemyUpdation from "../updationLogic/enemyUpdation";
import platformUpdation from "../updationLogic/platformUpdation";
let animationId: number | null = null;

//temp platform values for testing
const platfoms :platform[] = [
  {x:1000,y:100,length:50, width:500,speed:4},
  {x:5000,y:70,length:50,width:600, speed:9},
]

export default function startGameLoop(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  char: React.RefObject<Character>,
  clouds: React.RefObject<Cloud[]>,
  start: boolean,
  enemies : Enemy1[]
) {

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
    platformUpdation(platfoms)

    // collision
    enemyCollision(char, enemies);
    platformCollision(platfoms,char)
    // render // creation
    renderStart(ctx, canvas, char, clouds);
    enemyCreation(ctx, canvas, enemies);
    floatingPlatformCreation(ctx,platfoms)

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
