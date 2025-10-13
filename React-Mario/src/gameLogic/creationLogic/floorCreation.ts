export default function floorCreation(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
    const floorImg = new Image();
  floorImg.src = "assets/Brick.png";

  floorImg.onload = () => {
    const maxHeight = 70;
    const scale = maxHeight / floorImg.height;
    const imgWidth = Math.round(floorImg.width * scale);
    const imgHeight = Math.round(floorImg.height * scale);


    const y = canvas.height - imgHeight; 
  // using temperory overlay for bricks remember to recalc dynamically if anything changes 
    for (let x = 0; x < canvas.width; x += imgWidth-12.8) {
      ctx.drawImage(floorImg, x, y, imgWidth, imgHeight);
      console.log(x)
    }
}
}