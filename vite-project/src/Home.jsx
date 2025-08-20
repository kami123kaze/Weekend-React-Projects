import React, {  } from 'react'
import { Link } from "react-router";

function Home() {

  
  return (
 <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 via-fuchsia-100 to-blue-100">
  <h1 className="p-4 font-bold text-3xl text-orange-600 underline">
    React Project #01
  </h1>

  <p className="mb-6 text-center p-4 text-gray-700 max-w-lg leading-relaxed bg-white/80 rounded-xl shadow">
    This project changes the color of the box dynamically with React using
    different methods. Explore each level to see state updates in action.
  </p>

  

  <div className="border rounded-lg p-6 flex flex-col gap-4 items-center bg-white/70 shadow-lg">
    <Link
      to="/LevelOne"
      
      className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
    >
      LEVEL 1
    </Link>
    <Link
      to="/LevelTwo"
      className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
    >
      LEVEL 2
    </Link>
  </div>
</div>


  )
}

export default Home