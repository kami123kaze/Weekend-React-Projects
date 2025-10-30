import { useRef,useState } from "react"
import Canvas from "./components/Canvas"
import useUnload from "./gameLogic/customHooks/useUnload";

function Landing() {

  const start = useRef((()=>{

    const value = localStorage.getItem("start");
    return value ? JSON.parse(value) : false;

  })()
)
const [, forceRender] = useState({});
  
  // imp  note, since the browser finishes the loading of images on diffrent times i have decided to keep a game state that refreshes the page when we first ensuring the correct loading of all assests. The hook under is to set state to false when the user navigates or leaves page.

  // {this was a workaround to converting all loading options to async !}

  useUnload();


  const handleStart = ()=>{

        start.current = !start.current
        localStorage.setItem("start",JSON.stringify(start.current))
        forceRender({});
        console.log(start.current)
  }
  return (

  <div className="min-h-screen min-w-screen bg-yellow-200 flex flex-col">
    {/*opaque overlay*/} 
    {!start.current &&(
      <div className="absolute inset-0 bg-black/85 bg-opacity-70 flex items-center justify-center z-10">
            <button
              onClick={handleStart}
              className="bg-white text-black px-6 py-3 rounded-3xl text-lg font-semibold hover:scale-105 transition-transform"
            >
              Start Game
            </button>
          </div>
)}
    {/* Header */}
      <header className="h-16 flex items-center justify-center bg-yellow-300 shadow-md">
        <h1 className="text-xl font-semibold">Mario In React</h1>
      </header>

    {/* Canvas */}
      <div className="flex-1 flex items-center justify-center">
        <Canvas  start ={start.current}/>
      </div>
      
      {/*Footer*/}
      <div className="bg-amber-100 flex min-w-fit items justify-center  ">
        <button onClick={handleStart} className="px-3 border-2 rounded-3xl mx-4">{start.current ? "Stop" : "Start"}</button>
        <button className="px-3 border-2 rounded-3xl mx-4">Reset</button>
      </div>
</div>

  )
}

export default Landing