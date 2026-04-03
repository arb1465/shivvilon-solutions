import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Nalles from "./Nalles/Nalles";
import Under from "./About/Under/Under";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/homies" element={<Nalles/>}/>
          <Route path="/about" element={<About/>}>
            <Route path=":id" element={<Under/>}/>
          </Route>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
