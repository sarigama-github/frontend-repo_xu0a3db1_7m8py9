import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Units from './components/Units'
import Hierarchy from './components/Hierarchy'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Units />
        <Hierarchy />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-600">
          © {new Date().getFullYear()} Las Vegas Fire & Rescue • For public information purposes
        </div>
      </footer>
    </div>
  )
}

export default App
