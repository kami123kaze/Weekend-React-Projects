export default function enemyCollision(
  char: React.RefObject<Character>,
  enemies: Enemy1[]
): boolean {
  const player = char.current;
  const margin = 10;

  for (const enemy of enemies) {
    const enemyWidth = enemy.w ?? 50;
    const enemyHeight = enemy.h ?? 50;

    const playerLeft = player.x + margin;
    const playerRight = player.x + player.imgWidth - margin;
    const playerTop = player.y + margin;
    const playerBottom = player.y + player.imgHeight - margin;

    const enemyLeft = enemy.x;
    const enemyRight = enemy.x + enemyWidth;
    const enemyTop = enemy.y;
    const enemyBottom = enemy.y + enemyHeight;

    const isColliding =
      playerRight > enemyLeft &&
      playerLeft < enemyRight &&
      playerBottom > enemyTop &&
      playerTop < enemyBottom;

    if (isColliding) {
      console.log("Game Over!");
      return true;
    }
  }

  return false;
}
