import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // or your existing main page
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
