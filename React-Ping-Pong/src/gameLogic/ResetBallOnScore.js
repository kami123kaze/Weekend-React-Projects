export default function resetBall(ball, canvas) {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  
  const speed = 6;
  let dx = Math.random() > 0.5 ? speed : -speed;
  let dy = (Math.random() * 4 - 2);
  

  if (Math.abs(dy) < 1.5) {
    dy = dy < 0 ? -2 :2 ;
  }

  ball.dx = dx;
  ball.dy = dy;
}
