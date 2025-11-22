import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-600 text-white font-bold shadow-sm">LV</span>
            <div className="leading-tight">
              <div className="font-semibold text-slate-900">Las Vegas Fire & Rescue</div>
              <div className="text-xs text-slate-500">Public Information</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <button onClick={() => scrollTo('units')} className="hover:text-red-600 transition-colors">Units</button>
            <button onClick={() => scrollTo('hierarchy')} className="hover:text-red-600 transition-colors">Hierarchy</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-red-600 transition-colors">Contact</button>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-300 text-slate-700">
            <span className="sr-only">Toggle Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M3.75 6.75a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/90">
          <div className="px-4 py-3 flex flex-col gap-2 text-slate-700">
            <button onClick={() => scrollTo('units')} className="text-left py-2">Units</button>
            <button onClick={() => scrollTo('hierarchy')} className="text-left py-2">Hierarchy</button>
            <button onClick={() => scrollTo('contact')} className="text-left py-2">Contact</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
