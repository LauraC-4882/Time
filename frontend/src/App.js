import { NextUIProvider } from "@nextui-org/react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import About from "./pages/about/About";

function App() {
  return (
    <NextUIProvider>
      <About></About>

    </NextUIProvider>
  );
}

export default App;