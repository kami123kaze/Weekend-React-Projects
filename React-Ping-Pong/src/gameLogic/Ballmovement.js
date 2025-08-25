export default function BallMovement(canvas, ball) {
  // Bounce off top
  if (ball.y - ball.radius <= 0) {
    ball.dy = -ball.dy;
  }
  
  // Bounce off bottom
  if (ball.y + ball.radius >= canvas.height) {
    ball.dy = -ball.dy;
  }
   //temp bouncing off left and right will remove afer scoring is added 
   if(ball.x -ball.radius == 0) ball.dx = -ball.dx
   if(ball.x + ball.radius == canvas.width) ball.dx = -ball.dx
  // Update position
  ball.x += ball.dx;
  ball.y += ball.dy;
}
