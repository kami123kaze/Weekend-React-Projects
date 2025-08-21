import React, { useRef, useState } from "react";
import { useTheme } from "../ThemeContext/themeContextProvider";
import BackButton from "../components/BackButton";

function LevelTwo() {
  const { theme, setTheme } = useTheme();
  const [debouncedTheme, setDebouncedTheme] = useState("");
  const debounceTimer = useRef();

  function debounceSearch(e) {
    setDebouncedTheme(e.target.value);
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setTheme(e.target.value);
    }, 500);
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      
   
      <BackButton className="absolute top-6 left-6" />

 
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-indigo-800 mb-8">Level 2</h1>

        <div className="w-full max-w-md rounded-2xl shadow-lg p-6 border bg-white">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Enter a Theme Color:
          </h2>

          <input
            type="text"
            value={debouncedTheme}
            onChange={debounceSearch}
            placeholder="e.g. red, blue, green, #f0f, etc."
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          {/* The box */}
          <div
            className="mt-6 h-32 flex items-center justify-center rounded-lg shadow-md border text-white font-semibold"
            style={{ backgroundColor: theme }}
          >
            BOX OF COLOR
          </div>
        </div>

        {/* Explanation */}
        <p className="mt-10 max-w-lg text-center text-gray-700 leading-relaxed space-y-2">
          In this level, instead of choosing from a fixed{" "}
          <span className="font-semibold text-blue-600">array of colors</span>, 
          you can <span className="font-semibold text-green-600">type your own color</span> 
          into the input box above. <br /><br />
          React uses a{" "}
          <span className="font-semibold text-purple-600">debounce function</span>, 
          which means it waits for{" "}
          <span className="font-semibold text-pink-600">500 milliseconds</span> after you stop typing 
          before updating the box color. <br /><br />
          This demonstrates how to handle{" "}
          <span className="font-semibold text-indigo-600">rapid user input efficiently</span> 
          without updating the UI too often — a{" "}
          <span className="italic">performance optimization</span>. 
          By waiting briefly before applying changes, we avoid unnecessary re-renders while still 
          providing a smooth, responsive experience. <br /><br />
          Also, notice that the{" "}
          <span className="font-semibold text-orange-600">theme is global</span> — it comes from a 
          <span className="font-semibold"> React Context</span>.  
          That means any component or page in your app can access and update this theme consistently, 
          ensuring a unified look across the entire application.
        </p>
      </div>
    </div>
  );
}

export default LevelTwo;
