import { useState } from "react";
import useEventListener from "../CustomHooks/useEventListener";

interface ButtonProps {
  word:string
}
function Board({word}: ButtonProps) {
  
  const [guesses,setGuesses] = useState<string[]>([])
  const [currentGuess,setCurrentGuess] = useState<string>("")
  useEventListener({setGuesses,setCurrentGuess,})
  
  return (
    <div className="flex flex-col gap-2 p-6 border-2 m-2">
       {/* trying to create board */}

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
              console.log(word)
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