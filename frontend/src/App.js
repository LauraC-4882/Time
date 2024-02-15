import { NextUIProvider } from "@nextui-org/react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <NextUIProvider>
      <Profile></Profile>
    </NextUIProvider>
  );
}

export default App;
