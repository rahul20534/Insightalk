import { BrowserRouter, Route, Routes } from "react-router-dom"

//pages
import Home from "./Page/Home"
import About from "./Page/About"

//components
import Navbar from "./components/Navbar"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
