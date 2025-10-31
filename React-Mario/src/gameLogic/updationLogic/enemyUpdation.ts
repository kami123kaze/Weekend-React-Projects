export default function enemyUpdation(enemies: Enemy1[], canvas: HTMLCanvasElement): Enemy1[] {
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    const speed = enemy.speed ?? 5;
    const newX = (enemy.x ?? canvas.width / 2) - speed;
    const resetX = newX + (enemy.w ?? 50) < 0 ? canvas.width : newX;
    enemies[i] = { ...enemy, x: resetX };
  }
  return enemies;
}
