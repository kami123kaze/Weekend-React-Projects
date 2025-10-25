

export default function enemyUpdation(enemies: Enemy1[], canvas: HTMLCanvasElement): Enemy1[] {
  return enemies.map(enemy => {

    const speed = enemy.speed ?? 5; 
    const newX = (enemy.x ?? canvas.width / 2) - speed; 


 
    const resetX = newX + (enemy.w ?? 50) < 0 ? canvas.width : newX;

    return {
      ...enemy,
      x: resetX,
    };
  });
}
