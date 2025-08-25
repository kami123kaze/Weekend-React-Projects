import BallMovement from "./Ballmovement";
import CollosionLogic from "./CollisionLogic";
import PaddleMovement from "./PaddleMovement";
import RedrawBall from "./RedrawBall";
import PadCreation from "./PadCreation";

export default function startGame(ctx,canvas,paddles,ball){
    const cleanup = PaddleMovement(canvas,paddles)
    
    const gameLoop = ()=>{

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            CollosionLogic(paddles,ball)
            BallMovement(canvas,ball)


            PadCreation(ctx, canvas, paddles);
            RedrawBall(ctx,ball)

            requestAnimationFrame(gameLoop);
    }
    gameLoop()
    return cleanup;
}