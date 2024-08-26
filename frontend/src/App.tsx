import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header></Header>
      <div
        style={{
          height: "100%",
          background: "linear-gradient(rgb(246,237,189), rgba(246,237,189, 0))",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Outlet />

        <Footer></Footer>
      </div>
      <div id="modal"></div>
    </>
  );
}

export default App;
