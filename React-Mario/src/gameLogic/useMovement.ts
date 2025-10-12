import { useEffect } from "react";
export function useMovement(char:React.RefObject<Character>):void {
  useEffect(() => {

    const handleKey = (e: KeyboardEvent) => {
      if(e.key.toLocaleLowerCase()==='w' || e.key ==="ArrowUp"){
        char.current.velocityY = 10;
      }
    };

    window.addEventListener("keydown", handleKey);

  
    return () => window.removeEventListener("keydown", handleKey);
  }, []); 
}
