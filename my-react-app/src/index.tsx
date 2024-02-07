import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

//MUI Usage: Responsive meta tag
const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "initial-scale=1, width=device-width";

document.getElementsByTagName("head")[0].appendChild(meta);

root.render(
  <React.StrictMode>
  </React.StrictMode>
);

