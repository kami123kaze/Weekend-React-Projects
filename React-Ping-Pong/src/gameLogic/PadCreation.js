export default function PadCreation(ctx, canvas, paddles) {
  const { Player: left, Enemy: right } = paddles;

  // left paddle 
  left.x = 10; 
  ctx.fillStyle = left.color;
  ctx.fillRect(left.x, left.y, left.width, left.height);

  // right paddle
  right.x = canvas.width - right.width - 10;
  right.y = (canvas.height - right.height) / 2; 
  ctx.fillStyle = right.color;
  ctx.fillRect(right.x, right.y, right.width, right.height);
}
