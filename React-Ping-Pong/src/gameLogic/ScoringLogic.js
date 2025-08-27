import resetBall from "./ResetBallOnScore";

export default function ScoreLogic(paddles, ball, canvas, setScore, setCountdown) {

  if (ball.scored) return;

  const { Player: left, Enemy: right } = paddles;
  const r = ball.radius;
  const EPS = 0.5; 


  const leftFace = left.x + left.width; 
  const rightFace = right.x;            

 
  if (ball.x + r <= leftFace - EPS) {
    setScore(prev => ({ ...prev, Enemy: prev.Enemy + 1 }));
    resetBall(ball, canvas);
    setCountdown(3);
    ball.scored = true;
    console.log("score R (passed left paddle face)");
    return;
  }


  if (ball.x - r >= rightFace + EPS) {
    setScore(prev => ({ ...prev, Player: prev.Player + 1 }));
    resetBall(ball, canvas);
    setCountdown(3);
    ball.scored = true;
    console.log("score L (passed right paddle face)");
    return;
  }


  if (ball.x + r < 0) {
    setScore(prev => ({ ...prev, Enemy: prev.Enemy + 1 }));
    resetBall(ball, canvas);
    setCountdown(3);
    ball.scored = true;
    console.log("score R (canvas left edge fallback)");
    return;
  }

  if (ball.x - r > canvas.width) {
    setScore(prev => ({ ...prev, Player: prev.Player + 1 }));
    resetBall(ball, canvas);
    setCountdown(3);
    ball.scored = true;
    console.log("score L (canvas right edge fallback)");
    return;
  }
}
