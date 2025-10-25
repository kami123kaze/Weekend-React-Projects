export default function charUpdation(char: React.RefObject<Character>, canvas: HTMLCanvasElement) {
    const player = char.current;
    const groundY = canvas.height - 53- player.imgHeight; 

    if (player.isJumping) {
        player.y -= player.velocityY;
        player.velocityY--;

        
        if (player.y >= groundY) {
            player.y = groundY; 
            player.velocityY = 0;
            player.isJumping = false;
            player.isDoubleJumping = false;
        }
    }
}
