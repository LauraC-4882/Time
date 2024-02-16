import { NextUIProvider } from "@nextui-org/react";
import Main from "./Main";

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
      </div>
      {/* footer */}
    </NextUIProvider>
  );
}

export default App;
