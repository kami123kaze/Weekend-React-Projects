export default function floorCreation(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  images: Record<string, HTMLImageElement>
) {
  // Load only once
  const src = "/assets/Brick.png"; // use leading slash for public assets
  const floorImg = images[src];

  // Skip drawing until image is ready
  if (!floorImg || !floorImg.complete) return;

  const maxHeight = 70;
  const scale = maxHeight / floorImg.height;
  const imgWidth = Math.round(floorImg.width * scale);
  const imgHeight = Math.round(floorImg.height * scale);
  const y = canvas.height - imgHeight;

  // Draw floor tiles across the bottom of the canvas
  for (let x = 0; x < canvas.width; x += imgWidth - 12.8) {
    ctx.drawImage(floorImg, x, y, imgWidth, imgHeight);
  }
}
