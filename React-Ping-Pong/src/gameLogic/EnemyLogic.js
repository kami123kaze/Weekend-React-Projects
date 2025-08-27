
 let errMargin = 0.1
export default function EnemyLogic(difficulty,paddles,ball){
  const {Enemy: pad} = paddles
  const paddleCenter = pad.y + pad.height / 2
  const margin = 2;

  if (ball.scored) {
    ball.errMargin = 0; 
    return;
  }

 if(difficulty == "Easy"){
    console.log(difficulty)
    const paddleSpeed = 2
   
     if(paddleCenter == ball.y + margin || paddleCenter == ball.y - margin){
      return
     }
            
            if(errMargin >= 20){
                errMargin = 0;

                ball.dy > 0 ? ball.dy+= 0.1 : ball.dy -=0.1
                ball.dx > 0 ? ball.dx+= 0.1 : ball.dx -=0.1
                return
            }
            else{
                    if (paddleCenter > ball.y) {
                    pad.y -= paddleSpeed
                    console.log(pad.y)
                    errMargin+=0.2
                    }

                    else if (paddleCenter < ball.y) {
                    pad.y += paddleSpeed
                    errMargin+=0.2
                    }
                }

  } 
  if(difficulty == "Medium"){

    const paddleSpeed = 3
   
   if(paddleCenter == ball.y + margin || paddleCenter == ball.y - margin){
      return
     }
            
            if(errMargin >= 20){
                errMargin = 0;

                ball.dy > 0 ? ball.dy+= 0.5 : ball.dy -=0.5
                ball.dx > 0 ? ball.dx+= 0.5 : ball.dx -=0.5
                return
            }
            else{
                    if (paddleCenter > ball.y) {
                    pad.y -= paddleSpeed
                    console.log(pad.y)
                    errMargin+=0.1
                    }

                    else if (paddleCenter < ball.y) {
                    pad.y += paddleSpeed
                    errMargin+=0.1
                    }
                }

  }
  if(difficulty == "Hard"){
    console.log(difficulty)
    const paddleSpeed = 4
    
   
     if(paddleCenter == ball.y + margin || paddleCenter == ball.y - margin){
      return
     }
            
            if(errMargin >= 20){
                errMargin = 0;

                
                ball.dy > 0 ? ball.dy+= 1 : ball.dy -=1
                ball.dx > 0 ? ball.dx+= 1 : ball.dx -=1
                 
                console.log(ball.dy,ball.dx)
                
                return
            }
            else{
                    if (paddleCenter > ball.y) {
                    pad.y -= paddleSpeed
                    console.log(pad.y)
                    errMargin+=0.25
                    
                    }

                    else if (paddleCenter < ball.y) {
                    pad.y += paddleSpeed
                    errMargin+=0.25
                    }
                }

  }
  if(difficulty == "Impossible"){
    console.log(difficulty)
    const paddleSpeed = 6
   

    if(paddleCenter == ball.y + margin || paddleCenter == ball.y - margin){
      return
     }
    if(errMargin >= 20){
                errMargin = 0;

                ball.dy > 0 ? ball.dy+= 1.5 : ball.dy -=1.5
                ball.dx > 0 ? ball.dx+= 1.5 : ball.dx -=1.5
                
                return}
            
           else{
                    if (paddleCenter > ball.y) {
                    pad.y -= paddleSpeed
                    console.log(pad.y)
                    errMargin += 0.25
                       
                    }

                    else if (paddleCenter < ball.y) {
                    pad.y += paddleSpeed
                    errMargin += 0.25

                    }
                }
                

  }

}