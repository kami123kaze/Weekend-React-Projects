import { useEffect } from "react";
export function useMovement(char:React.RefObject<Character>):void {
  useEffect(() => {

    const handleKey = (e: KeyboardEvent) => {
      if((e.key.toLocaleLowerCase()==='w' || e.key ==="ArrowUp") && char.current.velocityY === 0 && char.current.isJumping === false){
        char.current.velocityY = 13;
        char.current.isJumping = true;
        console.log(char)
      }
    };

    window.addEventListener("keydown", handleKey);

  
    return () => window.removeEventListener("keydown", handleKey);
  }, [char]); 
}
