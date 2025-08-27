import resetBall from "./ResetBallOnScore";

export default function ScoreLogic(paddles, ball, canvas, setScore, setCountdown) {
  // don't score repeatedly for the same exit
  if (ball.scored) return;

  const { Player: left, Enemy: right } = paddles;
  const r = ball.radius;
  const EPS = 0.5; // small tolerance for float/step issues

  // inner faces of the paddles
  const leftFace = left.x + left.width; // right edge of left paddle
  const rightFace = right.x;            // left edge of right paddle

  // Ball has passed the left paddle face (Enemy scores)
  if (ball.x + r <= leftFace - EPS) {
    setScore(prev => ({ ...prev, Enemy: prev.Enemy + 1 }));
    resetBall(ball, canvas);
    setCountdown(3);
    ball.scored = true;
    console.log("score R (passed left paddle face)");
    return;
  }

  // Ball has passed the right paddle face (Player scores)
  if (ball.x - r >= rightFace + EPS) {
    setScore(prev => ({ ...prev, Player: prev.Player + 1 }));
    resetBall(ball, canvas);
    setCountdown(3);
    ball.scored = true;
    console.log("score L (passed right paddle face)");
    return;
  }

  // Fallback: if the ball somehow went past the canvas edges directly
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
