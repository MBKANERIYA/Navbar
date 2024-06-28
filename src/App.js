import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/header/Navbar"
import Home from "./Navbar/pages/Home";
import About from "./Navbar/pages/About";
import Contact from "./Navbar/pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>

  );
}

export default App;
