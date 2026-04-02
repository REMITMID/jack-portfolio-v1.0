import Navbar from './components/Navbar'
import AboutMe from './components/Hero'
import Skills from './components/Skills'
import Organization from './components/Organization'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div className="bg-[#151022]">
      <Navbar />
      
      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="organization">
        <Organization />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="contact">
        <Contact />
      </section>
      </div>
    </>
  )
}

export default App
