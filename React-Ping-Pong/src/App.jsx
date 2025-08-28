import React, { useEffect, useState } from 'react'
import Canvas from './components/Canvas'

function App() {
  const [start, setStart] = useState(false)
  const [score, setScore] = useState({ Player: 0, Enemy: 0 })
  const [difficulty, setDifficulty] = useState("Easy")
  const [countdown, setCountdown] = useState(null)

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value)
    setCountdown(3);
  }

  // countdown tracker
  useEffect(() => {
    if (countdown === null) return
    if (countdown === 0) {
      setCountdown(null)
      return
    }
    const id = setTimeout(() => setCountdown(c => c - 1), 1000)
    return () => clearTimeout(id)
  }, [countdown])

  // key press tracker
  useEffect(() => {
    function onButtonDown(e) {
      if (e.key === "p" || e.key === " ") {
        setStart(prev => !prev)
      }
    }
    window.addEventListener("keydown", onButtonDown)
    return () => {
      window.removeEventListener("keydown", onButtonDown)
    }
  }, [])

  return (
    <div className="relative min-h-screen min-w-screen flex items-center justify-center flex-col bg-black text-pink-400 font-mono">
      {/* Neon glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-40"></div>

      {/* Score */}
      <div className="p-2 text-xl font-bold tracking-wider">
        <span className="text-pink-400">Player: {score.Player}</span>{" "}
        <span className="text-yellow-300">Enemy: {score.Enemy}</span>
      </div>
      <div>
        <span className='className="text-pink-400"'>Current Difficulty : {difficulty}</span>
      </div>

      {/* Game */}
      <div className="relative">
        <Canvas
          start={start}
          setScore={setScore}
          setCountdown={setCountdown}
          countdown={countdown}
          difficulty={difficulty}
        />

        {countdown !== null && (
          <div className="absolute inset-0 flex items-center justify-center text-8xl font-extrabold text-yellow-300 drop-shadow-[0_0_10px_#facc15] bg-black/70">
            {countdown}
          </div>
        )}
      </div>

      {/* Start / Stop button */}
      <div className="mt-4 gap-x-3 flex">
        <button
          onClick={() => setStart(prev => !prev)}
          className="px-6 py-2 rounded-2xl bg-gray-900 bg-opacity-70 text-yellow-300 font-bold border border-gray-600 hover:bg-gray-700 transition duration-200 shadow-[0_0_15px_rgba(250,204,21,0.6)]"
        >
          {start ? "Stop" : "Start"}
        </button>
        <button
          className="px-6 py-2 rounded-2xl bg-gray-900 bg-opacity-70 text-pink-300 font-bold border border-gray-600 hover:bg-gray-700 transition duration-200 shadow-[0_0_15px_rgba(250,204,21,0.6)]"
          onClick={()=>{window.location.reload();}}
        >
          Reset
        </button>
      </div>

      {/* Difficulty buttons */}
      <div className="flex gap-4 mt-6">
        <button
          value="Easy"
          onClick={handleDifficultyChange}
          className="px-4 py-2 rounded-2xl bg-gray-900 bg-opacity-70 text-pink-400 border border-gray-600 hover:bg-gray-700 transition duration-200 shadow-[0_0_15px_rgba(236,72,153,0.6)]"
        >
          Easy
        </button>
        <button
          value="Medium"
          onClick={handleDifficultyChange}
          className="px-4 py-2 rounded-2xl bg-gray-900 bg-opacity-70 text-yellow-300 border border-gray-600 hover:bg-gray-700 transition duration-200 shadow-[0_0_15px_rgba(250,204,21,0.6)]"
        >
          Medium
        </button>
        <button
          value="Hard"
          onClick={handleDifficultyChange}
          className="px-4 py-2 rounded-2xl bg-gray-900 bg-opacity-70 text-pink-400 border border-gray-600 hover:bg-gray-700 transition duration-200 shadow-[0_0_15px_rgba(236,72,153,0.6)]"
        >
          Hard
        </button>
        <button
          value="Impossible"
          onClick={handleDifficultyChange}
          className="px-4 py-2 rounded-2xl bg-gray-900 bg-opacity-70 text-yellow-300 border border-gray-600 hover:bg-gray-700 transition duration-200 shadow-[0_0_15px_rgba(250,204,21,0.6)]"
        >
          Impossible
        </button>
      </div>
    </div>
  )
}

export default App
