export default function skyCreation(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  //  sky gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "#87CEEB"); 
  gradient.addColorStop(1, "#E0F6FF"); 
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //sun
  const sunX = canvas.width ; 
  const sunY = 40; 
  const sunRadius = 50;

  // sun glow effect
  const sunGradient = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius * 2);
  sunGradient.addColorStop(0, "#FFD700"); 
  sunGradient.addColorStop(0.5, "rgba(255, 223, 0, 0.6)");
  sunGradient.addColorStop(1, "rgba(255, 223, 0, 0)");

  ctx.fillStyle = sunGradient;
  ctx.beginPath();
  ctx.arc(sunX, sunY, sunRadius * 2, 0, Math.PI * 2);
  ctx.fill();

  // Solid sun core
  ctx.beginPath();
  ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#FFD700";
  ctx.fill();
}
