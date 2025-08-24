import React, { useState } from 'react'
import SearchBox from './components/SearchBox'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <div className="min-w-screen min-h-screen bg-black flex flex-col items-center relative overflow-hidden">
     
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-pink-500 rounded-full blur-[160px] opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-400 rounded-full blur-[160px] opacity-40"></div>

      
      <div className="font-extrabold text-4xl py-8 text-pink-400 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] tracking-widest">
        REACT WEATHER APP
      </div>

      {/* Card Container */}
      <div className="flex flex-grow items-center min-h-full">
        <div className="border border-pink-500/40 rounded-2xl p-6 w-11/12 max-w-lg flex justify-center 
                        bg-black/40 backdrop-blur-md shadow-lg shadow-pink-500/20">
          <div className="flex-col flex gap-y-4 w-full">
            
            {/* Search */}
            <SearchBox setData={setData} setLoading={setLoading} />

            {/* Data Container */}
            <div className="border border-pink-500/30 bg-black/50 p-4 rounded-2xl text-pink-100 font-mono 
                            shadow-md shadow-pink-500/20">
              {data !== null ? (
                loading ? (
                  <div className="flex animate-pulse text-yellow-400 text-lg">LOADING...</div>
                ) : (
                  <ul key={data.location?.name} className="space-y-1">
                    <li><span className="text-pink-400">Name:</span> {data.location?.name}</li>
                    <li><span className="text-pink-400">Region:</span> {data.location?.region}</li>
                    <li><span className="text-pink-400">Country:</span> {data.location?.country}</li>
                    <li><span className="text-pink-400">Condition:</span> {data.current?.condition?.text}</li>
                    <li><span className="text-pink-400">Wind mph:</span> {data.current?.wind_mph}</li>
                    <li><span className="text-pink-400">Feels like:</span> {data.current?.feelslike_f}</li>
                  </ul>
                )
              ) : (
                <div className="flex justify-center items-center text-center text-gray-400 italic">
                  NO DATA YET / EMPTY BOX
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
