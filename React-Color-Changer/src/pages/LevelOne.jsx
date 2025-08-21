import React, { useState } from "react";
import BackButton from "../components/BackButton";
function LevelOne() {
  const [theme, setTheme] = useState("white");
  const colors = ["white", "black", "red", "yellow", "brown", "blue"];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      
   
      <BackButton className="absolute top-6 left-6" />
        <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Level 1</h1>

     
      <div
        className="w-full max-w-md rounded-2xl shadow-lg p-6 border"
        style={{ background: theme }}
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Choose a Theme Color:
        </h2>

        <div className="flex flex-wrap gap-3">
          {colors.map((color, idx) => (
            <button
              key={idx}
              onClick={() => setTheme(color)}
                    className={`px-4 py-2 rounded-lg shadow-md font-medium border transition-transform transform hover:scale-105  border-amber-50 ${
                    color === "white"
                        ? "bg-white text-gray-700 border-gray-300"
                        : color === "black"
                        ? "bg-black text-white border-gray-700"
                        : color === "brown"
                        ? "bg-amber-900 text-white border-amber-900"
                        : color === "yellow"
                        ? "bg-yellow-300 text-black border-yellow-400"
                        : color === "gray"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      
      <p className="mt-10 max-w-lg text-center text-gray-700 leading-relaxed space-y-2">
            In this level, we have an 
            <span className="font-semibold text-blue-600"> array of colors </span> 
            like 
            <span className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono text-gray-800">
                ["white", "black", "brown", "orange", "blue"]
            </span>.
             React uses this array to create a 
            <span className="font-semibold text-green-600">  button for each color</span>.
            <br /><br />

             When you 
            <span className="font-semibold text-purple-600" > click a button</span>, it runs the function 
            <span className="bg-gray-100 px-1 rounded font-mono text-gray-800"> setTheme(color)</span>. 
            This updates a special React variable called 
            <span className="font-semibold text-pink-600"> state</span> 
            (<span className="font-mono text-gray-800"> theme</span>) with the color you clicked.
            <br /><br />

            Whenever the 
            <span className="font-semibold text-pink-600"> state changes</span>, React 
            <span className="font-semibold text-indigo-600"> automatically re-renders </span> 
            the component, which means it redraws the box with the 
            <span className="font-semibold text-orange-600"> new background color</span>.
            <br /><br />

            So, by clicking different buttons, you can see how 
            <span className="font-semibold text-purple-600"> changing state</span> in React 
            instantly changes what you see on the screen.
     </p>
      </div>
    </div>
  );
}

export default LevelOne;
