import About from "./pages/About";
import Home from "./pages/Home";
import Styler from "./style/Styler";
import { Routes, Route } from "react-router-dom";

function App() {
  Styler();
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
