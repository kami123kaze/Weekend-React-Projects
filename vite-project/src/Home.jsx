import React, { useState } from 'react'
import { Link } from "react-router";

function Home() {
  const [loading,setLoading] =useState(false);
  
  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-fuchsia-100">
          <h1 className="p-4 font-bold underline text-3xl">
            React Project #01
          </h1>
          
          <p className="mb-6 text-center p-2 ">
            This is a project that changes the color of the box dynamically with ReactJs using diffrent methods 
          </p>
            
              {loading && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>)} 
      
          <div className="border rounded-lg p-6 flex  items-center hover:bg-fuchsia-200">
            <div className="mb-2 p-1 hover:underline " > <Link to="/LevelOne" onClick={()=>{setLoading(true)}}>LEVEL 1</Link></div>
            <div className='mb-2 p-1 hover:underline'>   <Link to="/LevelOne">LEVEL 1</Link></div>
          </div>
     </div>

  )
}

export default Home