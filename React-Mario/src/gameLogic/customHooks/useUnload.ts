import { useEffect } from "react";

export default function useUnload():void{
   useEffect(() => {
  const handleUnload = () => {
    localStorage.setItem("start", JSON.stringify(false));
  };

  window.addEventListener("beforeunload", handleUnload);
  return () => window.removeEventListener("beforeunload", handleUnload);
}, []);

}