import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Calculator from "./pages/Calculator.jsx";
import Equipment from "./pages/Equipment.jsx";
import Graphs from "./pages/Graphs.jsx";
import Timer from "./pages/Timer.jsx";
import Settings from "./pages/Settings.jsx";
import NotFoundSection from "./pages/NotFoundSection.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Calculator />, errorElement: <NotFoundSection /> },
  { path: "/equipment", element: <Equipment /> },
  { path: "/graphs", element: <Graphs /> },
  { path: "/timer", element: <Timer /> },
  { path: "/settings", element: <Settings /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
