import React, { useEffect, useState } from 'react'
import Canvas from './components/Canvas'
function App() {
  const [start,setStart] = useState(false)
  const [score,setScore] = useState({Player:0,Enemy:0})
  const [countdown,setCountdown] = useState(null)
    
  //countdown tracker
    useEffect(() => {

    if (countdown === null) return;
    if (countdown === 0) {
      setCountdown(null);   
      return;
    }

    const id = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(id);
  }, [countdown]);

  // mouse movement tracker
    useEffect(() => {
      function onButtonDown(e) {
        if (e.key === "p" || e.key === " ") {
          setStart(prev => !prev);
        }
      }
      window.addEventListener("keydown", onButtonDown);
      return () => {
        window.removeEventListener("keydown", onButtonDown);
      };
    }, []);

  return (
    <div className='min-h-screen min-w-screen flex items-center justify-center flex-col'>

      <div className='p-2'>Player : {score.Player}  Enemy : {score.Enemy}</div>
     <div>

        <Canvas start={start} setScore={setScore} setCountdown={setCountdown} countdown={countdown}/>
         {countdown !== null && (
          <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white bg-black/50">
            {countdown}
          </div>
  )}
     </div>
     <div>
        <button onClick={()=>{setStart(prev=>!prev)}}>{start ? "Stop" : "Start"}</button>
     </div>
    </div>
  )
}

export default App