import { createRoot } from 'react-dom/client'
import Navbar from "./components/Navbar"
import Hero from "./components/Herosection"
import Footer from "./components/Footer"
createRoot(document.getElementById('root')).render(
  <div>
    <Navbar />
    <Hero />
    <Footer />
  </div>
)
