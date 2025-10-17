export default function charUpdation(char:React.RefObject<Character>){
    const player = char.current

    if(player.isJumping && player.velocityY>=-11){
        player.y -= player.velocityY
        player.velocityY --;

        //jump finished
          if(player.velocityY == -11){
          player.velocityY = 0;
           player.isJumping = false;
          }
    }
    
}
