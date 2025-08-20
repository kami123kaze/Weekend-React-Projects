import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import {LevelOne} from "./pages/index.js"

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/LevelOne",
    element: <LevelOne/>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
