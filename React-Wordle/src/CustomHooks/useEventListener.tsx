import {useEffect} from "react";
import type { Dispatch, SetStateAction } from "react";
interface HookProps {
  setGuesses: Dispatch<SetStateAction<string[]>>;
  setCurrentGuess: Dispatch<SetStateAction<string>>;
}
export default function useEventListener({setGuesses,setCurrentGuess}:HookProps):void{

    

  useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Backspace") {
            setCurrentGuess(prev => prev.slice(0, -1));
            return;
        }

        if (e.key.length === 1 && e.key.match(/[a-z]/i)) {
            setCurrentGuess(prev => (prev + e.key).slice(0, 5));
            return;
        }

        if (e.key === "Enter") {
    setCurrentGuess(prev => {
      if (prev.length === 5) {
        const wordToAdd = prev;        
        setGuesses(old => [...old, wordToAdd]); 
        return "";                  
      } else {
        alert("Word must be 5 letters");
        return prev;
      }
            return prev;
            });
            return;
        }
};
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setCurrentGuess,setGuesses]); 
}
     