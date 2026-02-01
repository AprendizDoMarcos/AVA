import "./shared/tailwind.css"
import NavBar from "./Componentes/NavBar/NavBar"
import Dashboard from "./pages/Dashboard"
import Exercicios from "./pages/Exercicios"
import Footer from "./Componentes/Footer/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className="relative">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Exercicios" element={<Exercicios />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
