import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import Nav from "./components/menu";

const root = ReactDOM.createRoot(
  
);

//MUI Usage: Responsive meta tag
const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "initial-scale=1, width=device-width";

document.getElementsByTagName("head")[0].appendChild(meta);

root.render(
  <React.StrictMode>
    <Nav></Nav>
  </React.StrictMode>
);



