import { useEffect, useRef } from "react";
import {renderStart} from "../gameLogic"
import { useMovement } from "../gameLogic/customHooks/useMovement";
import startGameLoop from "../gameLogic/gameLoop/gameLoop";
import usePreload from "../gameLogic/customHooks/usePreload";
import enemyCreation from "../gameLogic/creationLogic/enemyCreation";
import enemies from "../gameLogic/startPoints/enemies";
// eslint-disable-next-line prefer-const
let enemy = enemies;

function Canvas({ start }: { start: boolean }) {
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const initialClouds: Cloud[] = [
    { x: 50, y: 70, scale: 1, speed: 1},
    { x: 150, y: 50, scale: 1.2, speed: 3 },
    { x: 250, y: 90, scale: 0.8, speed: 2 }
  ];
  const cloudsRef = useRef<Cloud[]>(initialClouds);
  const charRef   = useRef<Character>({
    x:0,
    y:0,
    scale:0,
    imgHeight:0,
    imgWidth:0,
    velocityY:0,
    isJumping:false,
    isDoubleJumping:false,
    img:new Image()
  })
  useMovement(charRef)
  
  const { loaded: imagesLoaded, images } = usePreload([
  "/assets/MarioSide.png",
]);

 
useEffect(() => {

  if (!imagesLoaded) return;
   if (images["/assets/MarioSide.png"]) {
    charRef.current.img = images["/assets/MarioSide.png"];
  }
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  renderStart(ctx, canvas, charRef, cloudsRef);

    if(!start) {
      // render eveything for the last frame when stopping to keep immersion
      renderStart(ctx, canvas, charRef, cloudsRef);
        enemyCreation(ctx, canvas, enemy);
        console.log("we innit")
        return;
    }
   const loop = startGameLoop(ctx, canvas, charRef, cloudsRef, start,enemy);
  console.log("Under StartLoop")
  return loop
}, [start, imagesLoaded]);


  return (
    <div className="flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={900}
        height={400}
        className="border-2 rounded-2xl bg-white"
      ></canvas>
    </div>
  );
}

export default Canvas;
