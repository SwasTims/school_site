import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Faculty from './pages/Faculty'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App