import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./pages/home/Home.tsx";
import LetterPage from "./pages/letter/LetterPage.tsx";
//init firebase
import "./firebase/index.ts";
import Profile from "./pages/profile/Profile.tsx";
import ProfileSetting from "./pages/setting/Setting.tsx";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { Button, NextUIProvider } from "@nextui-org/react";

import "./main.css";

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
      { path: "/profile/settings", element: <ProfileSetting /> },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
