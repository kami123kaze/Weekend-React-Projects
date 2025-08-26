import resetBall from "./ResetBallOnScore";

export default function ScoreLogic(paddles,ball,canvas,setScore,setCountdown){
    
    const { Player: left, Enemy:right} = paddles
    const margin = 1;

   if(ball.x + ball.radius + margin < left.x - margin) {
     setScore(prev => ({ ...prev, Enemy: prev.Enemy + 1 }));
     resetBall(ball,canvas)
     setCountdown(3)
     ball.scored = true;
     console.log("score R")
   }
   if(ball.x - ball.radius - margin > right.x +margin  ){
    setScore(prev=>({...prev,Player:prev.Player +1}))
      resetBall(ball,canvas)
      ball.scored = true;
      setCountdown(3)
           console.log("score L")
   }
}