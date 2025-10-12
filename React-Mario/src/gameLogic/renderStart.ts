
export default function renderStart(ctx: CanvasRenderingContext2D,canvas:HTMLCanvasElement,char:React.RefObject<Character>):void{

   console.log(char)
   // loading mario sprite 
   const img = char.current.img ;
    img.src = "../../public/assets/MarioSide.png";

   img.onload = () => {
  const maxWidth = canvas.width * 0.3;
  const maxHeight = canvas.height * 0.3;

  char.current.scale = Math.min(maxWidth / img.width, maxHeight / img.height);

  char.current.imgWidth = img.width * char.current.scale;
  char.current.imgHeight = img.height * char.current.scale;

  char.current.x = 2;
  char.current.y = canvas.height - char.current.imgHeight - 10 ;

  // clear previous frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(img, char.current.x, char.current.y, char.current.imgWidth, char.current.imgHeight);
};

}