import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-stone-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-600">© {new Date().getFullYear()} Holzwerk Müller. Alle Rechte vorbehalten.</p>
          <div className="text-sm text-stone-600">Impressum · Datenschutz</div>
        </div>
      </footer>
    </div>
  )
}

export default App
