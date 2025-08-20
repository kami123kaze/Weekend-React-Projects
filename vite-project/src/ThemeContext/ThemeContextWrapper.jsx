import { useState } from "react";
import {ThemeContext } from "./themeContextProvider";

function ThemeProvider  ({children}){
    const [theme,setTheme] = useState("white");

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
          {children}
        </ThemeContext.Provider>
    )
}



export { ThemeProvider }