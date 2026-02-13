import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import SectionDivider from './components/SectionDivider'
import Packs from './components/Packs'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <SectionDivider />
      <Packs />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default App
