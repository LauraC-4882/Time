import { NextUIProvider } from "@nextui-org/react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AIbutton from "./components/AIhover";
import Slogan from "./components/Slogan";
function App() {
  return (
    <NextUIProvider>
      <Header></Header>
      <Slogan></Slogan>
      <div
        style={{
          height: "100%",
          background: "linear-gradient(rgb(246,237,189), rgba(246,237,189, 0))",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Outlet />
        <AIbutton></AIbutton>
        <Footer></Footer>
      </div>
      <div id="modal"></div>

    </NextUIProvider>
  );
}

export default App;
