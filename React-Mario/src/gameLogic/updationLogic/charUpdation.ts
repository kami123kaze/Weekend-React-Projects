export default function charUpdation(
  char: React.RefObject<Character>,
  canvas: HTMLCanvasElement
) {
  const player = char.current;
  if (!player) return;

  const groundY = canvas.height - 53 - player.imgHeight;

  // Apply gravity
  if (player.isJumping) {
    player.y -= player.velocityY;
    player.velocityY--;
  } else {
    // If not jumping, still apply small gravity if above platform/ground
    player.y -= player.velocityY;
    player.velocityY--;
  }

  // Prevent falling through the ground
  if (player.y >= groundY) {
    player.y = groundY;
    player.velocityY = 0;
    player.isJumping = false;
    player.isDoubleJumping = false;
  }
}
