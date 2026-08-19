import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Metrics from './components/Metrics.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Certifications from './components/Certifications.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
