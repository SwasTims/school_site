import './App.css'
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Faculty from "./assets/components/StatsBar";
import Footer from "./assets/components/Footer";
import StatsBar from './assets/components/StatsBar';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <StatsBar/>
      <Footer />
    </div>
  );
}

export default App;