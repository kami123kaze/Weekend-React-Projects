import React, { useEffect, useState } from 'react'
import Board from './components/Board'
import { fiveLetterWords } from './assets/words'
import Button from './components/Button'


function App() {
  const [start,setStart]    = useState<boolean>(false)
  const [word,setWord]      = useState<string>('')


 //getting the winning word
  useEffect(()=>{
  function startGame(){
      const totalWords:string[] = fiveLetterWords;
      setWord(totalWords[Math.floor(Math.random() * totalWords.length)]);
  }
  startGame()
  },[start])
 console.log(word)

  return (
    <div className='min-h-screen min-w-screen flex flex-col justify-center items-center bg-fuchsia-200'>
      <h1 className='text-2xl font-bold underline text-fuchsia-600'>REACT WORDLE GAME</h1>
      {/* Board Div*/}
            <div >
                <Board word={word}/>
            </div>
      {/* Button Div*/}
            <div>
                <Button onClick={()=>{setStart(prev=>!prev)}} className="bg-amber-400 rounded-2xl border" />
            </div>
    </div>
  )
}

export default App