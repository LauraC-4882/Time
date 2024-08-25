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

import "./firebase/index.ts";
import Profile from "./pages/profile/Profile";
import ProfileSetting from "./pages/setting/Setting.jsx";

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
      {
        path: "/profile",
        element: <Profile />,
      },
      {path: "/profile/settings", element: <ProfileSetting />},
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
