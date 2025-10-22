
export default function enemyCreation(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  enemies: Enemy1[] 
) {
  enemies.forEach(enemy => {
    const enemyWidth = enemy.w ?? 50;
    const enemyHeight = enemy.h ?? 50;

    const x = enemy.x ?? canvas.width / 2 - enemyWidth / 2;
    const y = enemy.y ?? canvas.height / 2 - enemyHeight / 2;

    ctx.fillStyle = "#ff4d4f";
    ctx.fillRect(x, y, enemyWidth, enemyHeight);

    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(x + 15, y + 15, 5, 0, Math.PI * 2);
    ctx.arc(x + 35, y + 15, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 35);
    ctx.lineTo(x + 35, y + 35);
    ctx.stroke();
  });
}
