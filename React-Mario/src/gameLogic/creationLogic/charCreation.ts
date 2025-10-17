export default function charCreation(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  char: React.RefObject<Character>
) {
  const img = char.current.img;
  if (!img.complete) return; // safety check in case it isn’t loaded yet

  const maxWidth = canvas.width * 0.3;
  const maxHeight = canvas.height * 0.3;

  // only calculate once after preload
  if (!char.current.scale) {
    char.current.scale = Math.min(maxWidth / img.width, maxHeight / img.height);

    char.current.imgWidth = img.width * char.current.scale;
    char.current.imgHeight = img.height * char.current.scale;

    char.current.x = 2;
    // hardcoded value to start off{mario abv ground} will neef floorh to cal dynamically
    char.current.y = canvas.height - char.current.imgHeight - 48;
  }

  // finally draw mario
  ctx.drawImage(img, char.current.x, char.current.y, char.current.imgWidth, char.current.imgHeight);
}
