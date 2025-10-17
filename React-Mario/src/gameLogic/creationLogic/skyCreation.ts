export default function skyCreation(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "#87CEEB"); 
  gradient.addColorStop(1, "#E0F6FF"); 
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
