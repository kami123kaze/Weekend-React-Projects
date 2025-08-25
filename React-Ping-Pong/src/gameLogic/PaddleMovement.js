export default function PaddleMovement(canvas, paddles) {
  const {Player:left} = paddles
  function handleMouseMove(e) {

    const rect = canvas.getBoundingClientRect();
    const mouseY = e.clientY - rect.top; 

    
    left.y = mouseY - left.height / 2; 

  
    if (left.y < 0) left.y = 0;
    if (left.y + left.height > canvas.height) {
      left.y = canvas.height - left.height;
    }
  }

  canvas.addEventListener("mousemove", handleMouseMove);

  return () => {
    canvas.removeEventListener("mousemove", handleMouseMove);
  };
}
