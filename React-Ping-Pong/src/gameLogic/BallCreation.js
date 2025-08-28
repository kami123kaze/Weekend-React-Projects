export default function BallCreation(ctx,canvas){
    const canvasHeight = canvas.height
    const canvasWidth = canvas.width

    const ball = {
    x: canvasWidth / 2,             
    y: canvasHeight / 2,           
    radius: 8,                     
    color: 'orange',
    dx: 4,                          
    dy: 4,
    scored: false,
    
  };

  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();

  return ball;
}