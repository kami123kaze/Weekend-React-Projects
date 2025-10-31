export default function floatingPlatformCreation(
    ctx: CanvasRenderingContext2D,
    platforms: platform[] 
):void{
    platforms.forEach(platform=>{
        const platformWidth = platform.width;
        const platformLength = platform.length;

        const x = platform.x;
        const y = platform.y;

        ctx.fillStyle = "#b22222"; 
        ctx.strokeStyle = "#000";  
        ctx.lineWidth = 2;

        ctx.fillRect(x,y,platformWidth,platformLength)
              ctx.strokeRect(x, y, platformWidth, platformLength);


    })
}