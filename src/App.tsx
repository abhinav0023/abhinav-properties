import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { WhatsAppFloat } from './components/WhatsAppFloat'

function App() {
  return (
    <div className="relative isolate min-h-svh bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
