import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import ScrollToTop from './ScrollToTop'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Faculty from './pages/Faculty'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Footer from './components/Footer'
import Admission from './pages/Admission'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admission" element={<Admission />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App