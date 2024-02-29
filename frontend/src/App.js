import {NextUIProvider} from "@nextui-org/react";
import Footer from "./components/Footer";
import Main from "./pages/home/Main";

function App() {
  return (
    <NextUIProvider>
      {/* Header */}
      <div
        style={{
          height: "100%",
          background: "linear-gradient(rgb(246,237,189), rgba(246,237,189, 0))",
        }}
      >
        <Main />
        <Footer></Footer>
      </div>
      <div id="modal"></div>

      {/* footer */}
    </NextUIProvider>
  );
}

export default App;
