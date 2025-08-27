import BallMovement from "./Ballmovement";
import CollosionLogic from "./CollisionLogic";
import PaddleMovement from "./PaddleMovement";
import RedrawBall from "./RedrawBall";
import PadCreation from "./PadCreation";
import ScoreLogic from "./ScoringLogic";
import EnemyLogic from "./EnemyLogic";

export default function startGame(ctx,canvas,paddles,ball,stopRef,setScore,setCountdown,countdown,difficulty){
    const cleanup = PaddleMovement(canvas,paddles)
 
    
    const gameLoop = () => {
         
       

         if (countdown !== null) {
            stopRef.current = requestAnimationFrame(gameLoop);
            return;              
          }
         if(ball.scored == true) ball.scored = false;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    BallMovement(canvas, ball);
    ScoreLogic(paddles, ball, canvas, setScore, setCountdown);
    EnemyLogic(difficulty, paddles, ball);
    CollosionLogic(paddles, ball);
    PadCreation(ctx, canvas, paddles);
    RedrawBall(ctx, ball);


  stopRef.current = requestAnimationFrame(gameLoop);
};

    gameLoop()
    return cleanup
}