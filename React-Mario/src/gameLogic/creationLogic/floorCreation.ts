export default function floorCreation(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  const brickWidth = 50;    
  const brickHeight = 22;   
  const rows = 3;           
  const yStart = canvas.height - brickHeight; 

  ctx.fillStyle = "#b22222"; 
  ctx.strokeStyle = "#000";  
  ctx.lineWidth = 2;

  for (let row = 0; row < rows; row++) {
    
    const offset = (row % 2) * brickWidth / 2;

    for (let x = -offset; x < canvas.width; x += brickWidth) {
      const y = yStart - row * brickHeight;
      

      ctx.fillRect(x, y, brickWidth, brickHeight);
      
      ctx.strokeRect(x, y, brickWidth, brickHeight);
    }
  }
}
