/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import Canvas from './components/Canvas'
function App() {
  const [start,setStart] = useState(false)

  return (
    <div className='min-h-screen min-w-screen flex items-center justify-center flex-col'>
     <div>
        <Canvas start={start}/>
     </div>
     <div>
        <button onClick={()=>{setStart(prev=>!prev)}}>{start ? "Stop" : "Start"}</button>
     </div>
    </div>
  )
}

export default App