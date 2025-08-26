import BallMovement from "./Ballmovement";
import CollosionLogic from "./CollisionLogic";
import PaddleMovement from "./PaddleMovement";
import RedrawBall from "./RedrawBall";
import PadCreation from "./PadCreation";
import ScoreLogic from "./ScoringLogic";

export default function startGame(ctx,canvas,paddles,ball,stopRef,setScore,setCountdown,countdown){
    const cleanup = PaddleMovement(canvas,paddles)

    
    const gameLoop = () => {
  

         if (countdown !== null) {
            stopRef.current = requestAnimationFrame(gameLoop);
            return;              
          }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ScoreLogic(paddles, ball, canvas, setScore,setCountdown);
  CollosionLogic(paddles, ball);
  BallMovement(canvas, ball);
  PadCreation(ctx, canvas, paddles);
  RedrawBall(ctx, ball);

  stopRef.current = requestAnimationFrame(gameLoop);
};

    gameLoop()
    return cleanup
}