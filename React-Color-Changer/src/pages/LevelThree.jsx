import React from "react";
import { useTheme } from "../ThemeContext/themeContextProvider";
import { HexColorPicker } from "react-colorful";
import BackButton from "../components/BackButton";

function LevelThree() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      
   
      <BackButton className="absolute top-6 left-6" />
      <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
         Level Three: Color Picker
      </h1>

     {/* Color Picker */}
      <div className="mb-6">
        <HexColorPicker color={theme} onChange={setTheme} />
      </div>

      {/* Preview Box */}
      <div
        className="w-64 h-32 flex items-center justify-center rounded-2xl shadow-lg border"
        style={{ backgroundColor: theme }}
      >
        <span className="text-white font-medium drop-shadow-lg">
          Box of everything cool
        </span>
      </div>

        {/* Explanation */}
         <p className="mt-10 max-w-xl text-center text-gray-700 leading-relaxed">
                    In this level, you can{" "}
                    <span className="font-semibold text-green-600">pick any color</span>{" "}
                    using a full interactive{" "}
                    <span className="font-semibold text-blue-600">color picker</span>.
                    <br />
                    <br />
                    As you drag around the palette, the{" "}
                    <span className="font-semibold text-indigo-600">global theme</span>{" "}
                    updates in real-time, instantly changing the box color below.
                    <br />
                    <br />
                    This demonstrates how to{" "}
                    <span className="font-semibold text-purple-600">
                        integrate external libraries
                    </span>{" "}
                    with your own{" "}
                    <span className="font-semibold text-pink-600">global state</span>,
                    keeping the UI reactive and dynamic.
        </p>

                    {/* Tech Insight */}
         <div className="mt-8 max-w-lg rounded-2xl bg-gray-100 p-4 text-sm text-gray-600 shadow-sm">
            <p className="text-center leading-relaxed">
                        <span className="font-semibold text-gray-800">Tech insight:</span>{" "}
                        Every tiny movement of your mouse inside the picker calls{" "}
                        <code className="rounded bg-gray-200 px-1 py-0.5">setTheme</code>.  
                        This means React keeps <span className="font-medium text-indigo-600">re-rendering</span> 
                        the box with a new color on every micro-step.  
                        Because these updates are so fast, it feels{" "}
                        <span className="italic">fluid and almost instant</span>, 
                        showing off React’s ability to handle rapid state changes smoothly.
             </p>
        </div>
    </div>
    </div>
  );
}

export default LevelThree;
