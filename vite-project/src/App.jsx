import React, { useState } from 'react'

function App() {
  const [theme, setTheme] = useState("black")
  const colors = ["black", "red", "pink", "white", "orange", "yellow"]

  return (
    <div className="min-h-screen flex flex-col items-center bg-fuchsia-100">
      {/* Heading at the top */}
      <h1 className="font-extrabold text-5xl mt-10 mb-10">
         COLOR SELECTOR : LVL 1
      </h1>

      {/* Color selector box stays centered */}
      <div
        className="flex flex-col items-center p-14 rounded-2xl"
        style={{ background: theme }}
      >
        <p className="text-purple-700 text-2xl p-5 font-bold underline">
          Current color : {theme}
        </p>
        <div>
          {colors.map((color, idx) => (
            <button
              className="bg-green-100 border border-green-400 rounded p-1 m-1"
              key={idx}
              onClick={() => {
                setTheme(color)
              }}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
