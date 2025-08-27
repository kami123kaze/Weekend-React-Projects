
 let errMargin = 0.1
export default function EnemyLogic(difficulty,paddles,ball){
  const {Enemy: pad} = paddles
  const paddleCenter = pad.y + pad.height / 2

 if(difficulty == "Easy"){
    console.log(difficulty)
    const paddleSpeed = 2
   
   
            
            if(errMargin >= 20){
                errMargin = 0;
                console.log("Margin")
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
    console.log(difficulty)
    const paddleSpeed = 3
   
   
            
            if(errMargin >= 20){
                errMargin = 0;
                console.log("Margin")
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
   
   
            
            if(errMargin >= 20){
                errMargin = 0;
                console.log("Margin")
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
   
   
            
           
                    if (paddleCenter > ball.y) {
                    pad.y -= paddleSpeed
                    console.log(pad.y)
 
                    }

                    else if (paddleCenter < ball.y) {
                    pad.y += paddleSpeed

                    }
                

  }

}