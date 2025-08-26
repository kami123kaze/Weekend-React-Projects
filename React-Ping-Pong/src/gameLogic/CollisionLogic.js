
export default function CollosionLogic(paddles,ball){
  const { Player: left, Enemy: right } = paddles;
  const tolerance = 2;
   


  //collison with PLAYER PAD {}
   if(
       ((ball.x-ball.radius) <= (left.x + left.width)) 
        &&
       ((ball.y > left.y) && (ball.y < (left.y + left.height)))
   ){
    ball.dx = -ball.dx
   }


  //collision with ENEMY  PAD{}
  if(
    ((ball.x + ball.radius) >= (right.x))
    &&
    (ball.y > right.y) && (ball.y <(right.y+right.height))
  ){
     ball.dx = -ball.dx
  }


  //Edge case where balls hits the bottom of the right pad 
      if (
    ball.x + ball.radius >= right.x - right.width &&
    ball.x - ball.radius <= right.x &&

    ball.y - ball.radius <= right.y + right.height + tolerance &&
    ball.y - ball.radius >= right.y + right.height - tolerance
) {
    console.log("bottom hit");
    ball.dy = -ball.dy;
    ball.dx = -ball.dx
}


    //Edge case where balls hits the top of the right pad    
      if (
      ball.x + ball.radius >= right.x - right.width &&
      ball.x - ball.radius <= right.x &&
      ball.y - ball.radius >= right.y -right.width  - tolerance &&
      ball.y - ball.radius <= right.y -right.width + tolerance
    ) {
      console.log("top right hit");
      ball.dy = -ball.dy;
      ball.dx = -ball.dx
      }

      //Edge case where balls hits the top of the left pad 
      if (
          ball.x + ball.radius > left.x &&
          ball.x - ball.radius < left.x + left.width &&
          ball.y + ball.radius >= left.y &&
          ball.y - ball.radius <= left.y + tolerance 
        ) {
          console.log("top hit");
          ball.dy = -ball.dy;
          ball.dx = -ball.dx
       }

       //Edge case where balls hits the bottom of the left pad

        if (
          ball.x + ball.radius >= left.x &&                     
          ball.x - ball.radius <= left.x + left.width &&        

          ball.y - ball.radius <= left.y + left.height + tolerance &&  
          ball.y - ball.radius >= left.y + left.height - tolerance
        ) {
          console.log("bottom left hit");
          ball.dy = -ball.dy;
          ball.dx = -ball.dx;
        }


}