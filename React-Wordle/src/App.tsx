import React, { useEffect, useState } from 'react'
import Board from './components/Board'
import { fiveLetterWords } from './assets/words'
import Button from './components/Button'


function App() {
  const [start,setStart]    = useState<boolean>(false)
  const totalWords:String[] = fiveLetterWords;



  useEffect(()=>{
   
  },[])


  return (
    <div className='min-h-screen min-w-screen flex flex-col justify-center items-center'>
      <h1>REACT WORDLE GAME</h1>
      {/* Board Div*/}
            <div >
                <Board/>
            </div>
      {/* Button Div*/}
            <div>
                <Button onClick={()=>{setStart(prev=>!prev)}} className="bg-amber-400 rounded-2xl border" />
            </div>
    </div>
  )
}

export default App