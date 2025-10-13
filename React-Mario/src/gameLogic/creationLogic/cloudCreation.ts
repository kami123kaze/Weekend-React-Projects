export default function cloudCreation(ctx: CanvasRenderingContext2D, cloudsRef: React.RefObject<Cloud[]>) {
  console.log(cloudsRef.current)
  cloudsRef.current.forEach(cloud => {
    const { x, y, scale } = cloud;

    ctx.fillStyle = "rgba(225,225,225)"; 
    ctx.beginPath();
    ctx.ellipse(x, y, 20 * scale, 12 * scale, 0, 0, 2 * Math.PI);
    ctx.ellipse(x + 15 * scale, y - 5 * scale, 18 * scale, 10 * scale, 0, 0, 2 * Math.PI);
    ctx.ellipse(x + 30 * scale, y + 5 * scale, 22 * scale, 14 * scale, 0, 0, 2 * Math.PI);
    ctx.fill();
  });
}
