import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import {LevelOne,LevelTwo,LevelThree} from "./pages/index.js"
import { ThemeProvider } from "./ThemeContext/ThemeContextWrapper.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/LevelOne",
    element: <LevelOne/>
  },
   {
    path:"/LevelTwo",
    element: <LevelTwo/>
  },
    {
    path:"/LevelThree",
    element: <LevelThree/>
  },
]);

createRoot(document.getElementById("root")).render(

  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
