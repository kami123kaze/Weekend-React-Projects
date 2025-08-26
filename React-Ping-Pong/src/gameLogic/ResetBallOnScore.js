export default function resetBall(ball, canvas,) {

  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.dx = Math.random() > 0.5 ? 4 : -4;
  ball.dy = (Math.random() - 0.5) * 4; 

}
