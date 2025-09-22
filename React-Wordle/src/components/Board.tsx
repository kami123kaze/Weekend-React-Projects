import { useEffect, useState } from "react";
import useEventListener from "../CustomHooks/useEventListener";

interface ButtonProps {
  word:string
}
function Board({word}: ButtonProps) {
  
  const [guesses,setGuesses] = useState<string[]>([])
  const [currentGuess,setCurrentGuess] = useState<string>("")
  const [gameComplete,setGameComplete] = useState<boolean>(false)
  const [gameResult,setGameResult]     = useState<boolean>(false)
  useEventListener({setGuesses,setCurrentGuess,})
  
console.log("<-- Render count")
 /// checking if game complete
  useEffect(()=>{
      const lastGuess = guesses[guesses.length - 1];
      if(lastGuess === word) {
        setGameComplete(true);
        setGameResult(true);
      } 
  },[guesses,word])

  // when game completes
   useEffect(()=>{
    if(guesses.length === 6 && !gameComplete){
      setGameResult(false)
      setGameComplete(true)
    }
   },[gameComplete,guesses])

  return (
    <div className="flex flex-col gap-2 p-6 border-2 m-2">
       {/* trying to create board */}
      { gameComplete && (
       <div className="fixed inset-0 bg-gray-500/40 flex items-center justify-center z-50">
          <div className="bg-amber-50 p-6 rounded shadow-lg flex flex-col items-center justify-center">
            Game Complete !!!! Your Result
            <span className={`underline ${gameResult ? "text-green-600" : "text-red-300"}`}>{
              gameResult? " YOU WIN !!!" : " YOU LOST !!!"
              } </span>
              <div>
                <button className="rounded-2xl border bg-indigo-500 p-2 m-2" onClick={()=>{window.location.reload()}}>Play Again</button>
              </div>
          </div>
       </div>
        ) }
     {Array.from({ length: 6 }).map((_, rowIdx) => {
        const row: string = guesses[rowIdx] ?? (rowIdx === guesses.length ? currentGuess : "");
        return (
          <div key={rowIdx} className="grid grid-cols-5 gap-2 ">
            {Array.from({ length: 5 }).map((_, colIdx) =>{ 
              const char = row[colIdx] || "";
              let colorClass = "bg-amber-100";

              if (rowIdx < guesses.length) {
                if (char === word[colIdx]) colorClass = "bg-green-500";
                else if (word.includes(char)) colorClass = "bg-orange-400";
              }

              return (
              <div
                key={colIdx}
                className={`w-12 h-12 border-2 flex items-center justify-center text-xl font-bold uppercase rounded ${colorClass}`}
              >
                {char|| ""}
              </div>
            )})}
          </div>
  );
})}
    </div>
  )
}

export default Board