/* eslint-disable no-unused-vars */
export default function CollosionLogic(paddles,ball){
  const { Player: left, Enemy: right } = paddles;

  //collison with PLAYER PAD {}
   if(
       ((ball.x-ball.radius) <= (left.x + left.width)) 
        &&
       ((ball.y > left.y) && (ball.y < (left.y + left.height)))
   ){
    ball.dx = -ball.dx
   }


  //collision with ENEMY  PAD{}
}