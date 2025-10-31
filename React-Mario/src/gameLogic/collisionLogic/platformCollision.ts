import type React from "react";

export default function platformCollision(
  platforms: platform[],
  character: React.RefObject<Character>
) {
  if (!character.current) return;
  const char = character.current;

  const charBottom = char.y + char.imgHeight;
  const charTop = char.y;
  const charLeft = char.x;
  const charRight = char.x + char.imgWidth;

  for (const platform of platforms) {
    const platTop = platform.y;
    const platBottom = platform.y + platform.length; // assuming length = height
    const platLeft = platform.x;
    const platRight = platform.x + platform.width;

    const withinX = charRight > platLeft && charLeft < platRight;

    // Landing on top
    const landingOnTop =
      char.velocityY < 0 && // falling down
      charBottom >= platTop &&
      charBottom + char.velocityY <= platTop;

    // Hitting head from below
    const hittingFromBelow =
      char.velocityY > 0 && // going upward
      charTop <= platBottom &&
      charTop + char.velocityY >= platBottom;

    if (withinX && landingOnTop) {
      // Land on top
      char.y = platTop - char.imgHeight;
      char.velocityY = 0;
      char.isJumping = false;
      char.isDoubleJumping = false;
      return;
    }

    if (withinX && hittingFromBelow) {
      // Stop upward movement when bumping head
      char.y = platBottom;
      char.velocityY = 0;
      return;
    }
  }
}
