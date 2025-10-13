
export default function skyCreation(ctx: CanvasRenderingContext2D,canvas: HTMLCanvasElement){
    const bgImg = new Image();
        bgImg.src = "/assets/sky.jpg";

        bgImg.onload = () => {
        ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
        
        };
    }