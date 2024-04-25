import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root.jsx";
import NotFoundSection from "./pages/NotFoundSection.jsx";
import Calculator from "./pages/Calculator.jsx";
import Equipment from "./pages/Equipment.jsx";
import Graphs from "./pages/Graphs.jsx";
import Timer from "./pages/Timer.jsx";
import Settings from "./pages/Settings.jsx";
// import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundSection />,
    children: [
      {
        path: "/",
        element: <Calculator />,
      },
      {
        path: "/equipment",
        element: <Equipment />,
      },
      {
        path: "/graphs",
        element: <Graphs />,
      },
      {
        path: "/timer",
        element: <Timer />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  // { path: "/", element: <Calculator />, errorElement: <NotFoundSection /> },
]);

// const [unit, setUnit] = useState("Kg");

// const switchUnit = () => {
//   if (unit === "Kg") {
//     setUnit("Lb");
//   } else {
//     setUnit("Kg");
//   }
// };

// const [decimal, setDecimal] = useState(",");

// const switchDecimal = () => {
//   if (decimal === ",") {
//     setDecimal(".");
//   } else {
//     setDecimal(",");
//   }
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
