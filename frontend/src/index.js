import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import "./index.css";
import AboutPage from "./pages/about/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/home/Home";
import LetterPage from "./pages/letter/LetterPage";
//init firebase
import "./firebase/index.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/letters",
        element: <LetterPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
